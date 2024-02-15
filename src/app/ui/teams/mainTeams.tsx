"use client";
import { IoPersonAdd } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";

export function MainTeams({ user }: { user: any }) {
  const CopyId = (id: string) => {
    navigator.clipboard.writeText(id);
  };

  const userId: string = user.user.userId;

  return (
    <>
      <div className=" flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p>My ID</p>
          <span className="bg-neutral-200 p-1 rounded-[8px] flex gap-2">
            {user.user.userId}

            <button
              onClick={() => {
                CopyId(userId);
              }}
            >
              <FaCopy className="text-primary" />
            </button>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <p>Invite</p>
          <button type="button" className="p-2 bg-primary rounded-[50%]">
            <IoPersonAdd className="text-white h-5 w-5 " />
          </button>
        </div>
      </div>
    </>
  );
}
