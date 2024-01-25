"use client";
import Link from "next/link";
import LinkButton from "./linkButton";
import { signIn, signOut, useSession } from "next-auth/react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { getServerSession } from "next-auth";

const Navigation = () => {
  const session = useSession();

  // console.log(session.data?.user?.email);
  console.log(session);

  return (
    <>
      <nav className="flex items-center mr-4">
        <ul className="flex justify-between gap-4 items-center">
          <LinkButton
            href="/started"
            text="Get Started"
            style={"font-bold"}
          ></LinkButton>
          {}
          {session.status !== "authenticated" && (
            <LinkButton
              href="/login"
              text="Sign in"
              style={"font-bold"}
            ></LinkButton>
          )}
          <LinkButton
            href="/shop"
            text="Shop"
            style={
              "bg-black text-white px-[24px] py-[7px] rounded-[20px] hover:bg-neutral-800 duration-200  font-bold"
            }
          ></LinkButton>
        </ul>
        {session.status === "authenticated" && (
          <span
            className="flex items-center mx-2 hover:underline cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            Log out <RiLogoutBoxRFill className="w-6 h-10" />
          </span>
        )}
      </nav>
    </>
  );
};

export default Navigation;
