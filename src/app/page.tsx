import Image from "next/image";
import variables from "@/app/styles/variables.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";
import LoginForm from "./components/loginForm";

import type { Metadata } from "next";
import BrandCarousel from "./components/brandCarousel";

export const metadata: Metadata = {
  title: "Home | Todo",
  description: "Organize your tasks, enjoy your life",
};

export default function Home() {
  return (
    <>
      <section className="flex flex-col">
        <div>
          <h1 className="font-bold text-[2rem] text-center">
            Masterize your time by organizing your work and your life.
          </h1>
          <p className="my-4">
            Finally achieve success, organization and peace of mind with To do.{" "}
          </p>
          <button className="flex bg-primary justify-center rounded-[4px] my-5 p-2 mx-auto text-white w-[180px]">
            Start now
          </button>
        </div>
        <div className="flex justify-center mt-5">
          <Image
            src="https://res.cloudinary.com/dygktir99/image/upload/f_auto,q_auto/bbfptwh3edxlwuhipkih"
            alt="todo"
            width={300}
            height={300}
          />
        </div>
      </section>

      <p className="my-12">+100 Companies use our services.</p>
      <BrandCarousel />
    </>
  );
}
