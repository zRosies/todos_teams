"use client";
import { IoPersonAdd } from "react-icons/io5";
import { FaCopy, FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Chat, { Conversation } from "./chat";
import { pusherClient } from "../../api/pusher/pusher";

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
  const [chatConversation, setChatConversation] = useState<Conversation>({
    _id: "",
    participants: { userId: "", userId2: "" },
    messages: [],
  });

  // const pusherClient = new pusherClient(process.env.KEY!, {
  //   cluster: "us2",
  // });

  const findTeamMate = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: e.target.elements.search.value }),
    });

    const data = await response.json();

    setUserFound(data);
  };
  const CopyId = (id: string) => {
    navigator.clipboard.writeText(id);
  };
  // ...prevConversation,
  // messages: [...prevConversation.messages, message],

  useEffect(() => {
    pusherClient.subscribe("messages");
    pusherClient.bind("incoming-message", (message: any) => {
      setChatConversation((prevConversation: any) =>
        // console.log(chatConversation),
        // console.log(message[0]),
        // console.log("message" + JSON.stringify(message[0])),
        ({
          ...prevConversation,
          messages: [...prevConversation.messages, message[0]],
        })
      );
    });
    return () => {
      pusherClient.unsubscribe("messages");
    };
  }, []);

  // console.log(chatConversation);

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
          <div className="flex items-center gap-2 mx-2 border-2">
            <form action="" className="flex" onSubmit={findTeamMate}>
              <label htmlFor="search">
                <input
                  type="text"
                  name="search"
                  placeholder="Type your mate email.."
                  className="pl-2 p-2 max-w-[150px] text-[.6rem] outline-none"
                />
              </label>
              <button type="submit" className="bg-primary p-1 rounded-[50%]">
                <IoSearchOutline className="text-white h-3 w-5" />
              </button>
            </form>
          </div>
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
          {userFound._id && (
            <>
              <p>User found</p>
              <button className="flex items-center gap-2 mx-2">
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
              </button>
            </>
          )}

          {conversations.length > 0 ? (
            <div>
              {conversations.map((conversation: any, index: any) => (
                <>
                  <button
                    type="button"
                    className="bg-orange-400 text-white text-[.5rem] rounded-[50%] p-4 w-10 h-10 flex justify-center items-center my-2"
                    onClick={() => setChatConversation(conversation)}
                  >
                    Chat <span>{index + 1}</span>
                  </button>
                </>
              ))}
            </div>
          ) : (
            <h1>Start Adding your friends</h1>
          )}
        </section>

        <Chat
          conversation={chatConversation}
          myId={userId}
          setChatConversation={setChatConversation}
        />
      </section>

      {/* <Invite /> */}
    </>
  );
}
