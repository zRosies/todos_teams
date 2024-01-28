"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardNav = ({ animationType, setNavigationOpen }: any) => {
  const session = useSession();
  const router = useRouter();
  // console.log(session);

  return (
    <>
      <section
        onClick={() => {
          setNavigationOpen("animate-navClosed");
        }}
        className={`w-[100%] bg-transparent h-full absolute left-0 top-0 backdrop-blur-[1.8px] z-10 ${
          animationType === "animate-navClosed" && "hidden"
        }`}
      ></section>
      <section
        className={`max-w-[500px] w-full bg-white h-full absolute left-0 top-0 shadow-sm p-6 lg:w-[30%] ${
          animationType === "animate-navClosed" ? "hidden" : "animate-navOpen"
        } z-30`}
      >
        <section className="flex gap-5 flex-col">
          {session.data?.user?.image ? (
            <div className="flex gap-4  mt-8 items-center">
              <Image
                src={session.data.user.image}
                width={50}
                height={50}
                alt="user"
                className="rounded-[8px] shadow-sm shadow-primary"
              />
              <p className="font-medium">{session.data.user.name}</p>
            </div>
          ) : (
            <div>
              <div className="w-[50px] h-[50px]">
                {session?.data?.user?.name?.[0]}
              </div>
              <p className="font-medium">
                {session?.data?.user?.name && session.data.user.name}
              </p>
            </div>
          )}

          <div className="flex items-center gap-5">
            <span className="p-2 flex rounded-[50%] bg-primary w-8">
              <FaPlus className="text-white" />
            </span>
            Add Category
          </div>
          <div className="flex gap-5 items-center">
            <CiSearch className="w-8 h-8" />
            <p>Search</p>
          </div>

          <div className="flex items-center gap-5">
            <span className="p-2 flex rounded-[50%] bg-primary w-8">
              <FaPlus className="text-white" />
            </span>
            <p>Add Task</p>
          </div>
        </section>

        <div className="my-8">
          <h1 className="text-[2rem] font-bold font-poppins ">Categories</h1>
        </div>

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
