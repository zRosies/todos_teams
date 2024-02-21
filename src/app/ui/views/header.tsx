"use server";
import Navigation from "@/app/ui/views/navigation/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ServerComponent } from "@/app/api/auth/[...nextauth]/options";

const Header = async () => {
  const session = await ServerComponent();

  return (
    <>
      <header className="shadow-md shadow-neutral-200 flex justify-between">
        <div className="flex gap-2 ml-5 m-2">
          <Link
            href={
              session != null
                ? //@ts-ignore
                  `/dashboard/${session.user.userId}`
                : "/"
            }
          >
            <Image src={"/home.png"} alt="logo" width={50} height={50} />
          </Link>
          <div className="hidden md:block">
            <p>To</p>
            <p>Do</p>
          </div>
        </div>
        <Navigation session={session} />
      </header>
    </>
  );
};

export default Header;
