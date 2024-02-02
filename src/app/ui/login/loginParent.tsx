"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

export default function LoginParent() {
  const [registerOpen, setRegisOpen] = useState(false);
  const router = useRouter();
  //   const session = useSession();

  //   // console.log(session);

  //   useEffect(() => {
  //     if (session?.status === "authenticated") {
  //       //@ts-ignore
  //       router.push(`/dashboard/${session.data.user.userId}`);
  //     }
  //   });

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
