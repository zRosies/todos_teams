"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TodoCard from "@/app/ui/dashboard/todoCard";
import { FaPlus } from "react-icons/fa6";
import { GetServerSideProps } from "next";

const DashboardBody = (props: any) => {
  const session = useSession();
  const router = useRouter();
  const [cardOpen, setCardOpen] = useState(false);
  console.log(session);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  });
  return (
    <>
      {/* <h1>In Box</h1> */}
      <button
        className="flex items-center gap-5"
        onClick={() => setCardOpen(true)}
      >
        <div className=" max-w-[50px] bg-hover p-3 flex">
          <FaPlus className="text-white" />
        </div>
        <span>Add Task</span>
      </button>
      {cardOpen && (
        <TodoCard
          type={"add"}
          /* @ts-ignore */
          userId={session?.data?.user?.userId}
          openCard={setCardOpen}
        />
      )}
      {/*  */}
    </>
  );
};

export default DashboardBody;
