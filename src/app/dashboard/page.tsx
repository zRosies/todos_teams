"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import todoCard from "@/app/ui/dashboard/todoCard";
import TodoCard from "@/app/ui/dashboard/todoCard";
import { FaPlus } from "react-icons/fa6";
import { GetServerSideProps } from "next";
import { fetchUserTodos } from "../ui/utils/controllers";

const DashboardBody = (props: any) => {
  const session = useSession();
  const router = useRouter();
  const [cardOpen, setCardOpen] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
    // fetchTodos();
  }, []);

  const fetchTodos = async () => {
    //@ts-ignore
    const userId = await session.data?.user.userId;

    const data: any = await fetchUserTodos("122292506");
    console.log(data);

    if (data.data && data.data.length > 0) {
      const todos = data.data[0].todos;
      setTodos(todos);
    } else {
      console.error("Error fetching todos:", data);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(session);

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
