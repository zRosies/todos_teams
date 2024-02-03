"use server";

import { ServerComponent } from "@/app/api/auth/[...nextauth]/route";
import { getTodosById } from "@/app/api/controllers/controllers";
import TodoList from "@/app/ui/dashboard/todoList";
import { redirect } from "next/navigation";
import { Router } from "next/router";
import { Suspense } from "react";

// import todoCard from "@/app/ui/dashboard/todoCard";

export type TodoObject =
  | {
      _id: string | null;
      userId: string | null;
      todos: any[];
      error?: string;
    }
  | any;
const Dashboard = async (context: any) => {
  // console.log(todos);
  const { params } = context;
  const userId = params.userId;
  const todos: any = await getTodosById(userId);
  const session: any = await ServerComponent();

  console.log();

  if (session === null) {
    redirect("/");
  }

  return (
    <>
      <section className="max-w-[800px] mx-auto px-5 ">
        <h1 className=" text-[2rem] my-5 font-extrabold">Inbox</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <TodoList userId={userId} data={todos[0] && todos[0].todos} />
        </Suspense>

        <h2 className="font-bold ">Completed</h2>
        <p>No task completed yet...</p>
        <div className="mb-[300px]"></div>
      </section>
    </>
  );
};

export default Dashboard;
