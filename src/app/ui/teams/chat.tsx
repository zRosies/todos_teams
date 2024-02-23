import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { pusherClient } from "@/app/api/pusher/pusher";

export interface Conversation {
  _id: string;
  conversationId: string;
  participants: Participants;
  messages: Message[];
}

export interface Message {
  senderId: string;
  receiverId: string;
  message: string;
  time: string;
}

export interface Participants {
  userId: string;
  user2Id: string;
  user3Id?: string;
}

const Chat = ({
  setChatConversation,
  setUpdatedConversations,
  conversation,
  myId,
}: {
  setChatConversation: Function;
  conversation: Conversation;
  setUpdatedConversations: Function;
  myId: string;
}) => {
  const [message, setMessage] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the container when conversation.messages change
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [conversation.messages]);

  const sendMessage = async (e: any) => {
    e.preventDefault();

    const time = new Date(); // Get the current date and time
    const formattedTime = time.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "2-digit",
    });

    // console.log(formattedTime);

    const message = e.target.message.value;

    const receiverId = Object.values(conversation.participants).find(
      (participantId) => participantId != myId
    );
    const newConversation = {
      participants: {
        userId: conversation.participants.userId,
        user2Id: conversation.participants.user2Id,
      },
      conversationId: conversation.conversationId,
      messages: [
        {
          receiverId: receiverId,
          senderId: myId,
          message: message,
          time: formattedTime,
        },
      ],
    };

    e.currentTarget.reset();

    // setChatConversation((prevConversation: any) => ({
    //   ...prevConversation,
    //   messages: [...prevConversation.messages],
    // }));

    console.log(newConversation);

    setMessage("");

    const response = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newConversation),
    });

    if (response.status == 201) {
      const messagesUpdate = await fetch(`/api/messages/${myId}`);
      const data = await messagesUpdate.json();

      setUpdatedConversations(data);
    }

    let messageDuplicated: any;

    // pusherClient.subscribe(conversation.conversationId);
    // pusherClient.bind("incoming-message", (message: any) => {
    //   if (messageDuplicated !== message[0]) {
    //     setChatConversation((prevConversation: any) => ({
    //       _id: prevConversation._id,
    //       participants: prevConversation.participants,
    //       conversationId: prevConversation.conversationId,

    //       messages: [...prevConversation.messages, message[0]],
    //     }));
    //     messageDuplicated = message[0];
    //   }
    // });
    // return () => {
    //   pusherClient.unsubscribe(conversation.conversationId);
    // };
  };

  // console.log(conversation.conversationId);

  // console.log(conversation);

  return (
    <div className="flex justify-between w-full  flex-col ">
      <h1 className="text-center flex justify-center gap-2 p-2 border-b-2">
        <p className="sr-only">search button</p>
        Chat{" "}
        <span>
          <IoChatbubbleEllipsesSharp className="text-hover h-5 w-5" />
        </span>
      </h1>

      <div
        ref={containerRef}
        className="flex flex-col my-2 p-2 max-h-[300px] overflow-y-scroll "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#615ECC #fff",
        }}
      >
        {conversation.messages.map((message: Message, index) => (
          <p
            key={`${message}${index}`}
            className={`${
              myId === message.senderId
                ? " self-end p-2 bg-hover text-white rounded-tl-[18px] rounded-tr-[20px] rounded-bl-[20px]"
                : "self-start p-2 rounded-tl-[18px] rounded-tr-[20px] rounded-br-[20px] bg-[#f8f5f5]"
            } text-[.7rem] flex my-1 `}
          >
            {message.message}
            <span className="text-[.5rem] ml-2 flex items-end">
              {message.time}
            </span>
          </p>
        ))}
      </div>

      <div>
        <form className="flex flex-col justify-end" onSubmit={sendMessage}>
          <label htmlFor="message">
            <p className="sr-only">message input</p>
            <input
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="outline-none w-[85%] bg-neutral-200 rounded-md text-[1rem] pl-2 py-1 my-2"
              placeholder="Type message..."
            />
            <button type="submit" className="bg-primary p-2 rounded-md mx-2">
              <p className="sr-only">send message</p>
              <IoMdSend className="text-white" />
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Chat;
