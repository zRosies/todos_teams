"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
// import { useEffect } from "react";
import { FaInbox } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { DiStackoverflow } from "react-icons/di";
import { useState } from "react";

const DashboardNav = ({ animationType, setNavigationOpen }: any) => {
  const session = useSession();
  const [categoryOpen, setCardOpen] = useState<String>("inbox");
  // const router = useRouter();

  return (
    <>
      <section
        onClick={() => {
          setNavigationOpen("animate-navClosed");
        }}
        className={`w-[100%] bg-[rgba(0,0,0,0.2)] h-[2000px] fixed left-0 top-0 backdrop-blur-[1.8px] z-10  ${
          animationType === "animate-navClosed" && "hidden"
        }`}
      ></section>
      <section
        className={`max-w-[330px] lg:max-w-[500px] w-full bg-white h-full fixed left-0 top-0 shadow-sm p-6 lg:w-[100%] ${
          animationType === "animate-navClosed" ? "hidden" : "animate-navOpen"
        } z-30`}
      >
        <section className="flex gap-5 flex-col ">
          <section className="mb-16">
            {session.data?.user?.image ? (
              <div className="flex gap-4 items-center ">
                <Image
                  src={session.data.user.image}
                  width={50}
                  height={50}
                  alt="user"
                  className="rounded-[8px] shadow-sm"
                />
                <p className="font-medium">{session.data.user.name}</p>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <p className="w-[50px] h-[50px] rounded-[8px] bg-primary flex items-center justify-center text-white font-[1.1rem]">
                  {session?.data?.user?.email
                    ?.substring(0, 2)
                    .toLocaleUpperCase()}
                </p>
                <p className="font-medium">{session?.data?.user?.email}</p>
                {/* <p className="font-medium">
                {session?.data?.user?.name && session.data.user.name}
              </p> */}
              </div>
            )}
          </section>

          {/* <div className="flex items-center gap-5">
            <span className="p-2 flex rounded-[50%] bg-primary w-8">
              <FaPlus className="text-white" />
            </span>
            Add Category
          </div> */}
          <div className="flex gap-5 items-center">
            <CiSearch className="w-8 h-8" />
            <p>Search</p>
          </div>

          <div className="flex items-center gap-5 ">
            <span className="p-2 flex rounded-[50%] bg-primary w-8">
              <FaPlus className="text-white" />
            </span>
            <p>Add Task</p>
          </div>
        </section>

        <section className="my-8 flex flex-col gap-4">
          <h1 className="text-[1.5rem] font-bold font-poppins ">Categories</h1>
          <button
            onClick={() => setCardOpen("inbox")}
            type="button"
            className={`flex items-center justify-between  px-8 py-2 duration-200
            ${
              categoryOpen === "inbox"
                ? "bg-primary text-white"
                : "bg-tabs text-black"
            }`}
          >
            Inbox <FaInbox className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setCardOpen("study")}
            className={`flex items-center justify-between  px-8 py-2 
            duration-200
            ${
              categoryOpen === "study"
                ? "bg-primary text-white"
                : "bg-tabs text-black"
            }`}
          >
            Study
            <IoBookOutline className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCardOpen("personal-development")}
            type="button"
            className={`flex items-center justify-between  px-8 py-2 duration-200
            
            ${
              categoryOpen === "personal-development"
                ? "bg-primary text-white"
                : "bg-tabs text-black"
            }`}
          >
            Personal Development
            <DiStackoverflow className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCardOpen("other")}
            type="button"
            className={`flex items-center justify-between  px-8 py-2 duration-200
            ${
              categoryOpen === "other"
                ? "bg-primary text-white"
                : "bg-tabs text-black"
            }`}
          >
            Other
          </button>
        </section>

        <span
          className="flex items-center mx-2 hover:underline cursor-pointer text-primary"
          onClick={() => {
            signOut();
          }}
        >
          Log out <RiLogoutBoxRFill className="w-6 h-10" />
        </span>
      </section>
    </>
  );
};

export default DashboardNav;
