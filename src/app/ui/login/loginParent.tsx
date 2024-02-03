"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

export default function LoginParent({ session }: any) {
  const [registerOpen, setRegisOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {registerOpen ? (
        <RegisterForm setRegOpen={setRegisOpen} />
      ) : (
        <LoginForm
          router={router}
          setRegisOpen={setRegisOpen}
          session={session}
        />
      )}
    </>
  );
}
