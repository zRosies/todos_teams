"use client";

import { getAllTodos } from "@/app/api/controllers/controllers";
import Todos from "./todos";
import { FaPlus } from "react-icons/fa6";
import HandleTodoCard from "./handleCard";
import { Suspense, useEffect, useState } from "react";
import { TodoObject } from "@/app/dashboard/[userId]/page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import axios from "axios";
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
  const [todos, setTodos] = useState<Todos[]>([]);
  const session = useSession();
  const router = useRouter();
  // const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTodos(data);
    if (session.status != "authenticated") {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const postTodos = async () => {
      // const todosFromMongo = todosFromDb();
      try {
        const response = await fetch(`/api/todos/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todos),
        });
        const data = await response.json();
        // setTodos(data); // Assuming the response is an array of todos
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // todosFromDb();
    postTodos();
  }, [todos, userId]);

  console.log(todos);
  // console.log(userId);

  // console.log(data);

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

// export async function getData({ userId }: any) {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/todos/${userId}`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
