"use client";

import Todos from "./todos";
import { FaPlus } from "react-icons/fa6";
import HandleTodoCard from "./handleCard";
import { Suspense, useEffect, useState } from "react";

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
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // todosFromDb();
    postTodos();
  }, []);

  return (
    <>
      <Suspense fallback={<p>Loading....</p>}>
        <Todos data={todos} setTodos={setTodos}></Todos>
      </Suspense>
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
