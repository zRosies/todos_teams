"use client";

import TodoList from "@/app/ui/dashboard/todoList";
import { Suspense, useEffect, useState } from "react";

// import todoCard from "@/app/ui/dashboard/todoCard";

export type TodoObject =
  | {
      _id: string | null;
      userId: string | null;
      todos: any[];
      error?: string;
    }
  | any;
const Dashboard = (context: any) => {
  // console.log(todos);
  const { params } = context;
  const userId = params.userId;

  return (
    <>
      <section className="max-w-[800px] mx-auto px-5 ">
        <h1 className=" text-[2rem] my-5 font-extrabold">Inbox</h1>
        <Suspense fallback={<p>Loading....</p>}>
          <TodoList userId={userId} />
        </Suspense>
        <h2 className="font-bold ">Completed</h2>
        <p>No task completed yet...</p>
        <div className="mb-[300px]"></div>
      </section>
    </>
  );
};

export default Dashboard;
