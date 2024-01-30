"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import todoCard from "@/app/ui/dashboard/todoCard";
import { FaPlus } from "react-icons/fa6";
import { GetServerSideProps } from "next";
import { fetchUserTodos } from "../ui/utils/controllers";
import { getTodosById } from "../api/controllers/controllers";
import TodoList from "../ui/dashboard/todoList";
import HandleTodoCard from "../ui/dashboard/handleCard";
import Todos from "../ui/dashboard/todos";
import { getData } from "../utils/utils";

const DashboardBody = (props: any) => {
  const session = useSession();
  const router = useRouter();
  const [cardOpen, setCardOpen] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      let userId;

      while (session?.status === "loading") {
        await new Promise((resolve) => setTimeout(resolve, 200)); // wait for 100ms before checking again
      }

      //@ts-ignore
      userId = session?.data?.user.userId;
      const { data } = await getData({ userId });
      setTodos(data[0].todos);
    };

    fetchTodos();
  }, [session]);

  // console.log(todos);

  console.log(todos);

  return (
    <>
      <section className="max-w-[800px] mx-auto px-5 ">
        <h1 className=" text-[2rem] my-5 font-extrabold">Inbox</h1>
        {/* ------------------------------------- Todos here ---------------------------------- */}
        <Todos data={todos} />

        {/* <Todos /> */}

        {/*-----------------------------------Button Add tasks here ---------------------------- */}
        <div className="relative">
          <button
            className="flex items-center gap-2 my-5 relative"
            onClick={() => setCardOpen(true)}
          >
            <div className=" max-w-[50px] bg-hover hover:bg-primary duration-200 p-3 flex">
              <FaPlus className="text-white w-5 h-5" />
            </div>
            <span className=" font-extrabold">Add Task</span>
          </button>
          {/*----------------------------------- Add tasks here ---------------------------- */}
          {cardOpen && (
            <HandleTodoCard
              buttonType={"add"}
              /* @ts-ignore */
              userId={session?.data?.user?.userId}
              setCardOpen={setCardOpen}
            />
          )}
        </div>

        <h2 className="font-bold ">Completed</h2>
        <p>No task completed yet...</p>
      </section>
      <div className="mb-[200px]"></div>
      {/*  */}
    </>
  );
};

export default DashboardBody;
