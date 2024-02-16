"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import DashboardNav from "@/app/ui/dashboard/dashboardNav";
import { PiMedalFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { RiSparkling2Fill } from "react-icons/ri";

const Navigation = ({ session }: any) => {
  const [menuOpen, setMenuOpen] = useState("animate-navClosed");

  const handleMenuOpen = () => {
    setMenuOpen("animate-navOpen");
  };

  return (
    <>
      <nav className="flex items-center mr-4">
        <ul>
          {session === null && (
            <Link
              href="/login"
              className="flex text-white gap-4 items-center p-2 bg-primary hover:bg-hover duration-200 bg rounded-[15px] w-[100px] text-center self-center justify-center "
            >
              Sign in
            </Link>
          )}
        </ul>
        {session != null && (
          <div className="flex justify-between w-[120px] items-center mr-1">
            <Link
              href={"/teams"}
              className=" text-black px-2 rounded-[8px] relative"
            >
              <p className="absolute -top-3 gap-1 bg-primary px-[0.3rem] left-8 text-[.7rem] rounded-[8px] flex text-white items-center">
                new
                <RiSparkling2Fill className="text-yellow-500" />
              </p>
              Teams
            </Link>

            <span onClick={handleMenuOpen}>
              <HiMenuAlt3 className="w-8 h-8 text-primary cursor-pointer" />
            </span>
          </div>
        )}

        {/* {session.status === "authenticated" && (
          
        )} */}

        <DashboardNav
          user={session}
          animationType={menuOpen}
          setNavigationOpen={setMenuOpen}
        />
      </nav>
    </>
  );
};

export default Navigation;
