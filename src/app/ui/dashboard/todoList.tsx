"use client";

import Todos from "./todos";
import { FaPlus } from "react-icons/fa6";
import HandleTodoCard from "./handleCard";
import { Suspense, useEffect, useState } from "react";
import { PiMedalFill } from "react-icons/pi";
import { BiTask } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

export interface Todos {
  todoId: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  completed: boolean;
}

export function TodoList({
  userId,
  data,
  type,
}: {
  userId: string;
  data: any;
  type: string;
}) {
  const [cardOpen, setCardOpen] = useState(false);
  const [todos, setTodos] = useState<Todos[]>(data);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const router = useRouter();

  // console.log(userId);

  useEffect(() => {
    const postTodos = async (todos: any) => {
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
    if (todos.length > 0) {
      postTodos(todos);
    }
    // console.log("triggered");
  }, [todos, userId]);

  // console.log(todos.length);

  const SearchTodo = (e: any) => {
    e.preventDefault();

    const query = e.target.elements.search.value;

    // console.log(query);

    router.push(`/dashboard/category/1?category=${query}&id=${userId}`);
  };

  return (
    <>
      <div className="  my-5  flex flex-row justify-between w-full">
        <h1 className="text-[2rem]">{type}</h1>

        <div className="flex items-center ">
          <span>
            {<>{todos.filter((todo) => todo.completed).length}</>}/
            {todos.length}
          </span>
          <span>
            <PiMedalFill className="h-10 w-6 text-primary" />
          </span>
        </div>
      </div>
      <Suspense fallback={<p>Loading....</p>}>
        <Todos
          type="add"
          data={todos.filter((todo) => !todo.completed)}
          setTodos={setTodos}
        ></Todos>
      </Suspense>

      <div className="relative w-full mt-12">
        <form
          action=""
          onSubmit={SearchTodo}
          className="w-full flex flex-row gap-2"
        >
          <button
            type="submit"
            className="flex gap-5 items-center w-full bg-hover text-white max-w-[2.5rem] justify-center  h-[2.5rem] rounded-[6px]"
          >
            <CiSearch className="w-5 h-5" />
          </button>
          <label htmlFor="search">
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="w-full max-w-[800px] border-2 h-[2.5rem] rounded-[8px] pl-2"
            />
          </label>
        </form>

        <button
          className="flex items-center gap-2 my-8 relative"
          onClick={() => setCardOpen((prevState) => !prevState)}
        >
          <div className=" w-[2.3rem] h-[2.3rem] rounded-[50%] bg-hover hover:bg-primary  duration-200 p-3 flex justify-center items-center">
            <FaPlus className="text-white w-7 h-7" />
          </div>
          <span className="">Add Task</span>
        </button>
        {cardOpen && (
          <HandleTodoCard
            userId={userId}
            todos={todos}
            setCardOpen={setCardOpen}
            setTodos={setTodos}
          />
        )}
        {/*----------------------------------- Add tasks here ---------------------------- */}
      </div>
      <h2 className=" border-b-2 border-gray-100 mb-2">Completed</h2>

      {todos.filter((todo) => todo.completed).length > 0 ? (
        <>
          <Todos
            type="complete"
            data={todos.filter((todo) => todo.completed)}
            setTodos={setTodos}
          ></Todos>
          <div className="mb-[300px]"></div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center flex-col mt-8 mb-[15rem]">
            <h1 className="text-[1rem]  text-gray-800">
              Add your tasks and start completing them.
            </h1>
            <BiTask className="h-10 w-10 text-green-500" />
          </div>
        </>
      )}
    </>
  );
}

export default TodoList;
