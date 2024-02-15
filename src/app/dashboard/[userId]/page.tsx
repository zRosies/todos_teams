"use server";

import { ServerComponent } from "@/app/api/auth/[...nextauth]/options";
import { getTodosById } from "@/app/api/controllers/controllers";
import TodoList from "@/app/ui/dashboard/todoList";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { PiMedalFill } from "react-icons/pi";

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
  const { params } = context;
  const userId = params.userId;
  const todos: TodoObject = await getTodosById(userId);
  const session: any = await ServerComponent();

  if (session === null) {
    redirect("/");
  }

  return (
    <>
      <section className="max-w-[800px] mx-auto px-5 ">
        <TodoList
          type="Inbox"
          userId={userId}
          // data={todos && todos[0] ? todos[0].todos : []}
          data={todos && todos[0] ? todos[0].todos : []}
        />
      </section>
    </>
  );
};

export default Dashboard;
