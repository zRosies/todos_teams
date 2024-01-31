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

  // const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <section className="max-w-[800px] mx-auto px-5 ">
        {/* ------------------------------------- Todos here ---------------------------------- */}

        {/*-----------------------------------Button Add tasks here ---------------------------- */}
      </section>
      <div className="mb-[200px]"></div>
      {/*  */}
    </>
  );
};

export default DashboardBody;
