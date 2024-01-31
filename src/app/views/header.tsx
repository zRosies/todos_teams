"use client";
import Navigation from "@/app/ui/navigation/navigation";
import Logo from "../ui/icons/logo";
import Link from "next/link";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const session = useSession();
  // const router = useRouter();
  // const location = window.location.href;
  // console.log(location);

  return (
    <>
      <header className="shadow-md shadow-neutral-200 flex justify-between">
        <div className="flex gap-2 ml-5 m-2">
          <Link
            href={
              session.status === "authenticated"
                ? //@ts-ignore
                  `/dashboard/${session.data.user.userId}`
                : "/"
            }
          >
            <Image src={"/log.png"} alt="logo" width={50} height={50} />
          </Link>
          <div className="hidden md:block">
            <p>To</p>
            <p>Do</p>
          </div>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
