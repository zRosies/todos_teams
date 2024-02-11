"use server";

import { redirect } from "next/navigation";
import LoginParent from "../ui/login/loginParent";
import { ServerComponent } from "../api/auth/[...nextauth]/options";

export interface Session {
  user: {
    name?: string;
    email: string;
    image?: string;
    userId: string;
  };
}

export default async function Login() {
  const session: Session = await ServerComponent();

  if (session != null) {
    redirect(`/dashboard/${session?.user.userId}`);
  }
  return (
    <>
      <LoginParent session={session} />
    </>
  );
}
