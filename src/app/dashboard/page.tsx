"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  console.log(session);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  });
  return (
    <>
      <h1>In Box</h1>
    </>
  );
};

export default Dashboard;
