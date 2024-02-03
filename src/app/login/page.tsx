"use server";

import { redirect } from "next/navigation";
import { ServerComponent } from "../api/auth/[...nextauth]/route";
import LoginParent from "../ui/login/loginParent";

export default async function Login() {
  const session = await ServerComponent();
  console.log(session);

  if (session != null) {
    redirect(`/dashboard/${session?.user.userId}`);
  }
  return (
    <>
      <LoginParent />
    </>
  );
}
