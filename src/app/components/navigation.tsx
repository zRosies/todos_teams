"use client";
import Link from "next/link";
import LinkButton from "./linkButton";
import { signIn, signOut, useSession } from "next-auth/react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { getServerSession } from "next-auth";
import { CiMenuFries } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Navigation = () => {
  const session = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  // console.log(session.data?.user?.email);
  // console.log(session);
  const handleMenuOpen = () => {
    setMenuOpen((prevState: any) => setMenuOpen(!prevState));
  };

  return (
    <>
      <nav className="flex items-center mr-4">
        <ul>
          {session.status !== "authenticated" && (
            <Link
              href="/login"
              className="flex text-white gap-4 items-center p-2 bg-primary hover:bg-hover duration-200 bg rounded-[15px] w-[100px] text-center self-center justify-center "
            >
              Sign in
            </Link>
          )}
        </ul>
        {session.status === "authenticated" && (
          // <span
          //   className="flex items-center mx-2 hover:underline cursor-pointer text-primary"
          //   onClick={() => {
          //     signOut();
          //   }}
          // >
          //   Log out <RiLogoutBoxRFill className="w-6 h-10" />
          // </span

          <span onClick={handleMenuOpen}>
            <HiMenuAlt3 className="w-8 h-8 text-primary " />
          </span>
        )}
      </nav>
    </>
  );
};

export default Navigation;
