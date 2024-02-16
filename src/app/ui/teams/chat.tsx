import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";

const Chat = () => {
  return (
    <div className="flex justify-center w-full max-w-[500px] flex-col ">
      <h1 className="text-center flex justify-center gap-2 p-2">
        Chat{" "}
        <span>
          <IoChatbubbleEllipsesSharp className="text-hover h-5 w-5" />
        </span>
      </h1>
      <form className="flex flex-col justify-end">
        Conversation
        <label htmlFor="message">
          <input
            type="text"
            id="message"
            name="message"
            required
            className="outline-none w-[90%] bg-neutral-200 rounded-md"
            placeholder="Message"
          />
          <button type="submit" className="bg-primary p-2 rounded-md">
            <IoMdSend className="text-white" />
          </button>
        </label>
      </form>
    </div>
  );
};

export default Chat;
