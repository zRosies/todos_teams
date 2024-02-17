import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";

const Chat = () => {
  return (
    <div className="flex justify-between w-full  flex-col ">
      <h1 className="text-center flex justify-center gap-2 p-2">
        Chat{" "}
        <span>
          <IoChatbubbleEllipsesSharp className="text-hover h-5 w-5" />
        </span>
      </h1>
      <div>
        <div className="h-[300px]"></div>
        <form className="flex flex-col justify-end">
          <label htmlFor="message">
            <input
              type="text"
              id="message"
              name="message"
              required
              className="outline-none w-[85%] bg-neutral-200 rounded-md text-[1rem] pl-2 py-1 my-2"
              placeholder="Type message..."
            />
            <button type="submit" className="bg-primary p-2 rounded-md mx-2">
              <IoMdSend className="text-white" />
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Chat;
