"use client";
import Image from "next/image";
import LoginForm from "../ui/login/loginForm";
import { Metadata } from "next";
import RegisterForm from "../ui/login/registerForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Login() {
  const [registerOpen, setRegisOpen] = useState(false);
  const router = useRouter();
  const session = useSession();

  // console.log(session);

  useEffect(() => {
    if (session?.status === "authenticated") {
      //@ts-ignore
      router.push(`/dashboard/${session.data.user.userId}`);
    }
  });

  return (
    <>
      {registerOpen ? (
        <RegisterForm setRegOpen={setRegisOpen} />
      ) : (
        <LoginForm router={router} setRegisOpen={setRegisOpen} />
      )}
    </>
  );
}
