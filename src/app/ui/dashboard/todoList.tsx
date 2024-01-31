"use client";

import { getAllTodos } from "@/app/api/controllers/controllers";
import Todos from "./todos";
import { FaPlus } from "react-icons/fa6";
import HandleTodoCard from "./handleCard";
import { useEffect, useState } from "react";
import { TodoObject } from "@/app/dashboard/[userId]/page";
// import axios from "axios";

export function TodoList({ userId }: { userId: string }) {
  const [cardOpen, setCardOpen] = useState(false);
  const [data, setData] = useState<TodoObject>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function getTodosById(userId: string) {
      try {
        const response = await getTodosById(userId);
        // if (!response.ok) {
        //   throw new Error("Failed to fetch data");
        // }

        // setData(data.data[0].todos);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    }

    getTodosById(userId);
  }, []);

  console.log(submitted);

  // console.log(data);

  return (
    <>
      {/* <Todos data={data} userId={userId} setSubmitted={setSubmitted}></Todos> */}
      <div className="relative">
        {/*----------------------------------- Add tasks here ---------------------------- */}
        <button
          className="flex items-center gap-2 my-5 relative"
          onClick={() => setCardOpen(true)}
        >
          <div className=" max-w-[50px] bg-hover hover:bg-primary duration-200 p-3 flex">
            <FaPlus className="text-white w-5 h-5" />
          </div>
          <span className=" font-extrabold">Add Task</span>
        </button>

        {cardOpen && (
          <HandleTodoCard
            userId={userId}
            setCardOpen={setCardOpen}
            setSubmitted={setSubmitted}
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
