"use client";
import { IoPersonAdd } from "react-icons/io5";
import { FaCopy, FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Chat, { Conversation } from "./chat";
import { pusherClient } from "../../api/pusher/pusher";
import { FaCheck } from "react-icons/fa6";

import { IoMdSend } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";
import { randomUUID } from "crypto";

export interface UserInfo {
  name: string;
  email: string;
  image?: string;
  userId: string;
}

export function MainTeams({
  user,
  userId,
  conversations,
}: {
  user: any;
  userId: string;
  conversations: any;
}) {
  const [userFound, setUserFound] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);

  const [updatedConversations, setUpdatedConversations] =
    useState<Array<Conversation>>(conversations);
  const [chatConversation, setChatConversation] = useState<Conversation>({
    _id: "",
    participants: { userId: "", user2Id: "" },
    messages: [],
    conversationId: "",
  });

  const CopyId = (id: string) => {
    navigator.clipboard.writeText(id);
  };

  // console.log(user);

  // console.log(userFound);

  const findTeamMate = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: e.target.elements.search.value }),
    });

    const data = await response.json();
    setLoading(false);
    setUserFound(data);
  };

  let messageDuplicated: any;
  useEffect(() => {
    pusherClient.subscribe("message");
    pusherClient.bind("incoming-message", (message: any) => {
      if (messageDuplicated !== message[0]) {
        setChatConversation((prevConversation: any) => ({
          _id: prevConversation._id,
          participants: prevConversation.participants,
          conversationId: prevConversation.conversationId,

          messages: [...prevConversation.messages, message[0]],
        }));
        messageDuplicated = message[0];
      }
    });
    return () => {
      pusherClient.unsubscribe("message");
    };
  }, []);

  useEffect(() => {
    const updateChatConversation = async () => {
      const response = await fetch(`/api/messages/${userId}`);

      const data = await response.json();
      setUpdatedConversations(data);

      return response;
    };
    updateChatConversation();
  }, [chatConversation, userFound, userId]);

  const startNewConversation = async () => {
    setLoading2(true);
    const time = new Date(); // Get the current date and time
    const formattedTime = time.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "2-digit",
    });

    const body = {
      participants: {
        userId: userFound._id,
        user2Id: userId,
      },
      conversationId: crypto.randomUUID(),
      messages: [
        {
          receiverId: userFound._id,
          senderId: userId,
          message: "Conversation initialized!",
          time: formattedTime,
        },
      ],
    };
    const data = await fetch(`/api/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // console.log(await data.json());
    setUserFound({ _id: "s3nt", email: "Submission sent!" });

    setChatConversation({
      _id: "",
      participants: { userId: "", user2Id: "" },
      messages: [],
      conversationId: "",
    });

    setLoading2(false);
    // console.log(updatedConversations);
  };

  // console.log(chatConversation.messages);
  // const userId: string = user.user.userId;

  return (
    <>
      <section className=" flex  md:flex-row justify-between items-center ">
        <div className="flex flex-col gap-2">
          <p>My email</p>
          <span className="bg-neutral-200 p-1 rounded-[8px] flex gap-2 text-[.7rem]">
            {user.user.email}

            <button
              onClick={() => {
                CopyId(user.user.email);
              }}
            >
              <FaCopy className="text-primary" />
            </button>
          </span>
          <div className="flex items-center gap-2 border-[1.5px] border-hover  rounded-xl">
            <form
              action=""
              className="flex justify-between p-[0.20rem]"
              onSubmit={findTeamMate}
            >
              <label htmlFor="search">
                <input
                  type="text"
                  name="search"
                  placeholder="Type your mate email.."
                  className="pl-2 p-2 max-w-[150px] text-[.6rem] outline-none"
                />
              </label>
              <button
                type="submit"
                className="bg-primary p-2 rounded-[50%] ml-4"
              >
                {loading ? (
                  <AiOutlineLoading className="text-white animate-loading" />
                ) : (
                  <IoSearchOutline className="text-white h-4 w-4" />
                )}
              </button>
            </form>
          </div>
          {userFound._id && (
            <>
              <p className="text-[.9rem]">User found</p>
              <button
                className="flex items-center gap-2 mx-2"
                onClick={startNewConversation}
              >
                {userFound._id === "s3nt" ? (
                  <p className="text-[.6rem] flex">
                    {userFound.email}{" "}
                    <FaCheck className="text-green-500 ml-2" />
                  </p>
                ) : (
                  <>
                    <div className="bg-primary text-white p-2 rounded-[50%] w-[30px] h-[30px] flex justify-center items-center">
                      {" "}
                      <span className="text-[.7rem]">
                        {userFound.email.slice(0, 1).toLocaleUpperCase()}
                      </span>
                      <span className="text-[.7rem]">
                        {userFound.email.slice(1, 2).toLocaleUpperCase()}
                      </span>
                    </div>
                    <p className="text-[.6rem]">{userFound.email}</p>
                    <span className="p-2 rounded-[50%] bg-hover">
                      {loading2 ? (
                        <AiOutlineLoading className="text-white animate-loading" />
                      ) : (
                        <IoMdPersonAdd className="text-white" />
                      )}
                    </span>
                  </>
                )}
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 bg-primary rounded-[50%] shadow-lg"
          >
            <FaBell className="text-white h-4 w-4 " />
          </button>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row border-1 gap-2 mt-5 shadow-lg shadow-gray-300 rounded-[10px] p-2 ">
        <section className="flex  flex-row md:flex-col gap-2 border-r-[1px] border-gray-200 md:h-[300px] md:w-[200px]">
          {updatedConversations.length > 0 ? (
            <div>
              {updatedConversations.map((conversation: any, index: any) => (
                <button
                  key={`a${index}`}
                  type="button"
                  className="bg-orange-400 text-white text-[.5rem] rounded-[50%] p-4 w-10 h-10 flex justify-center items-center my-2"
                  onClick={() => setChatConversation(conversation)}
                >
                  Chat <span>{index + 1}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-[.7rem]">Start Adding your friends</p>
          )}
        </section>

        <Chat
          conversation={chatConversation}
          myId={userId}
          setChatConversation={setChatConversation}
          setUpdatedConversations={setUpdatedConversations}
        />
      </section>

      {/* <Invite /> */}
    </>
  );
}
