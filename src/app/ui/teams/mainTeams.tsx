"use client";
import { IoPersonAdd } from "react-icons/io5";
import { FaCopy, FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

export interface UserInfo {
  name: string;
  email: string;
  image?: string;
  userId: string;
}

export function MainTeams({ user }: { user: any }) {
  const CopyId = (id: string) => {
    navigator.clipboard.writeText(id);
  };
  const [userFound, setUserFound] = useState<any>([]);

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

  console.log(userFound, length);
  console.log(userFound.length);

  const userId: string = user.user.userId;

  return (
    <>
      <div className=" flex   md:flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <p>My email</p>
          <span className="bg-neutral-200 p-1 rounded-[8px] flex gap-2 text-[.7rem]">
            {user.user.email}

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
          <button type="button" className="p-2 bg-primary rounded-[50%]">
            <FaBell className="text-white h-4 w-4 " />
          </button>
        </div>
      </div>

      <section className="flex border-2 gap-2 mt-5">
        <section className="flex flex-col border-2 gap-2">
          <div className="flex items-center">
            <form action="" className="flex" onSubmit={findTeamMate}>
              <label htmlFor="search">
                <input
                  type="text"
                  name="search"
                  placeholder="Type your mate email.."
                  className="pl-2 p-2 max-w-[150px] text-[.6rem]"
                />
              </label>
              <button type="submit" className="bg-primary p-1 rounded-[50%]">
                <IoSearchOutline className="text-white h-5 w-5" />
              </button>
            </form>
          </div>
          {userFound._id && (
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
          )}
        </section>

        <div className="flex justify-center w-full">
          <h1 className="text-center">Chat</h1>
        </div>
      </section>
      {/* <Invite /> */}
    </>
  );
}
