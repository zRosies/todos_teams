"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import BrandCarousel from "./ui/brandCarousel";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "authenticated") {
      //@ts-ignore
      router.push(`/dashboard/${session.data.user.userId}`);
    }
  });
  // console.log(session);

  return (
    <>
      <section className="flex flex-col lg:flex-row lg:justify-center px-5">
        <div className="lg:flex lg:items-center lg:flex-col self-center px-5">
          <h1 className="font-bold text-[2rem] text-center max-w-[600px]">
            Masterize your time by organizing your work and your life.
          </h1>
          <p className="my-4">
            Finally achieve success, organization and peace of mind with To do.{" "}
          </p>
          <Link
            href={"/login"}
            className="flex bg-primary hover:bg-hover duration-200 justify-center rounded-[4px] my-5 p-2 mx-auto text-white w-[180px]"
          >
            Start now
          </Link>
        </div>
        <div className="flex justify-center mt-5">
          <Image
            src="https://res.cloudinary.com/dygktir99/image/upload/f_auto,q_auto/bbfptwh3edxlwuhipkih"
            alt="todo"
            width={700}
            height={700}
          />
        </div>
      </section>

      <p className="my-12 p-5">+100 Companies use our services.</p>
      <BrandCarousel />
    </>
  );
}
