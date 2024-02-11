"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import DashboardNav from "@/app/ui/dashboard/dashboardNav";
import { PiMedalFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const session = useSession();
  const [menuOpen, setMenuOpen] = useState("animate-navClosed");

  const handleMenuOpen = () => {
    setMenuOpen("animate-navOpen");
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
          <span onClick={handleMenuOpen}>
            <HiMenuAlt3 className="w-8 h-8 text-primary cursor-pointer" />
          </span>
        )}
        {/* {session.status === "authenticated" && (
          
        )} */}

        <DashboardNav
          animationType={menuOpen}
          setNavigationOpen={setMenuOpen}
        />
      </nav>
    </>
  );
};

export default Navigation;
