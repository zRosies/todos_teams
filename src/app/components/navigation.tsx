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
        <ul>
          {session.status !== "authenticated" && (
            <Link
              href="/login"
              className="flex text-white gap-4 items-center p-2 bg-primary bg rounded-[15px] w-[100px] text-center self-center justify-center "
            >
              Sign in
            </Link>
          )}
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
