"use client";

import Todos from "./todos";
import { FaPlus } from "react-icons/fa6";
import HandleTodoCard from "./handleCard";
import { Suspense, useEffect, useState } from "react";
import { PiMedalFill } from "react-icons/pi";
import { BiTask } from "react-icons/bi";

export interface Todos {
  todoId: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  completed: boolean;
}

export function CategoryList({
  userId,
  data,
  type,
}: //   category,
{
  userId: string;
  data: any;
  type: string;
  //   category: string;
}) {
  const [cardOpen, setCardOpen] = useState(false);
  const [todos, setTodos] = useState<Todos[]>(data);

  const querySearch = new RegExp(type.toLocaleLowerCase(), "i");
  const normalTypes = /study|development|other/i;

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

  useEffect(() => {
    if (todos.length > 0) {
      postTodos(todos);
    }
    // console.log("triggered");
  }, [todos]);

  console.log(todos.length);

  return (
    <>
      <div className="  my-5  flex flex-row justify-between w-full items-center">
        {normalTypes.test(type) ? (
          <h1 className="text-[2rem]">{`${type.slice(0, 1).toUpperCase()}${type
            .slice(1, type.length)
            .toLowerCase()}`}</h1>
        ) : (
          <h1 className="text-[1.3rem]">
            Results for <span>{type}...</span>
          </h1>
        )}
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
          data={todos.filter(
            (todo) =>
              todo.category === type ||
              querySearch.test(todo.title) ||
              (querySearch.test(todo.description) && !todo.completed)
          )}
          setTodos={setTodos}
        ></Todos>
      </Suspense>
      <div className="relative">
        <button></button>
        <button
          className="flex items-center gap-2 my-8 relative"
          onClick={() => setCardOpen((prevState) => !prevState)}
        >
          <div className=" w-[2.3rem] h-[2.3rem] rounded-[50%] bg-hover hover:bg-primary  duration-200 p-3 flex justify-center items-center">
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

export default CategoryList;
