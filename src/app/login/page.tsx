"use client";
import Image from "next/image";
import LoginForm from "../components/loginForm";
import { Metadata } from "next";
import RegisterForm from "../components/registerForm";
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
      router.push("/");
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