"use client";

import Todos from "./todos";
import { FaPlus } from "react-icons/fa6";
import HandleTodoCard from "./handleCard";
import { Suspense, useEffect, useState } from "react";
import { PiMedalFill } from "react-icons/pi";

export interface Todos {
  todoId: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  completed: boolean;
}

export function TodoList({ userId, data }: { userId: string; data: any }) {
  const [cardOpen, setCardOpen] = useState(false);
  const [todos, setTodos] = useState<Todos[]>(data);

  const postTodos = async () => {
    try {
      const response = await fetch(`/api/todos/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todos),
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (todos.length > 0) {
      postTodos();
    }
  }, [todos]);

  return (
    <>
      <div className="  my-5  flex flex-row justify-between w-full">
        <h1 className="text-[2rem]">Inbox</h1>
        <div className="mr-10 flex items-center justify-end">
          <span>1/2</span>
          <PiMedalFill className="h-10 w-6 text-primary" />
        </div>
      </div>
      <Suspense fallback={<p>Loading....</p>}>
        <Todos data={todos} setTodos={setTodos}></Todos>
      </Suspense>
      <div className="relative">
        <button
          className="flex items-center gap-2 my-5 relative"
          onClick={() => setCardOpen(true)}
        >
          <div className=" w-[2.3rem] h-[2.3rem] rounded-[50%] bg-hover hover:bg-primary duration-200 p-3 flex justify-center items-center">
            <FaPlus className="text-white w-7 h-7" />
          </div>
          <span className="">Add Task</span>
        </button>
        {/*----------------------------------- Add tasks here ---------------------------- */}
        {cardOpen && (
          <HandleTodoCard
            userId={userId}
            todos={todos}
            setCardOpen={setCardOpen}
            setTodos={setTodos}
          />
        )}
      </div>
    </>
  );
}

export default TodoList;
