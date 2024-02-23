"use client";

import { useState } from "react";
import { LiaEdit } from "react-icons/lia";
import HandleUpdateTodo from "./handleUpdateTodo";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import CircleItem from "../icons/circleIcon";
import CompletedIcon from "../icons/completdIcon";
import { BiTaskX } from "react-icons/bi";
import { BiTask } from "react-icons/bi";

import { CiEdit } from "react-icons/ci";

export function CategoryTodo({
  data,
  setTodos,
  type,
}: {
  data: any;
  setTodos: Function;
  type: string;
}) {
  const [todoOpen, setTodoOpen] = useState([]);

  //This function returns a new array without the todo selected, in other words it's deleted.
  function deleteTodo(todoId: string) {
    setTodos((currentTodos: any[]) => {
      const data = currentTodos.filter((todo) => {
        return todo.todoId != todoId;
      });
      return data;
    });
  }
  function updateTodo(todoId: string, updatedTodo: any) {
    setTodos((currentTodos: any[]) => {
      const data = currentTodos.map((todo) => {
        if (todo.todoId === todoId) {
          return {
            ...todo,
            ...updatedTodo,
          };
        }
        return todo;
      });
      return data;
    });
  }

  //This function opens the todo according to its id
  const openTodoCard = (todoId: string) => {
    setTodoOpen(data.filter((todo: any) => todo.todoId === todoId));
  };

  //This function sets the todo completed based on its Id by returing the field completed different from its previous value.

  function todoCompleted(todoId: string) {
    setTodos((currentTodos: any[]) => {
      const array = currentTodos.map((todo) => {
        if (todo.todoId === todoId) {
          // console.log(todo.completed);
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
      return array;
    });
  }

  return (
    <>
      <section className="flex flex-col w-full relative ">
        {data && data.length > 0 ? (
          data.map((todo: any) => (
            <form
              key={todo.todoId}
              className="flex bg-[#E9ECEF] my-1 p-2 justify-between items-center rounded-[8px]"
            >
              <div className="flex gap-2  items-center">
                {/* <input
                  type="checkbox"
                  className="rounded-[50%] bg-black cursor-pointer"
                /> */}
                <button
                  type="button"
                  onClick={() => todoCompleted(todo.todoId)}
                >
                  <p className="sr-only">add todo</p>
                  {!todo.completed ? (
                    <CircleItem
                      background={"#E9ECEF"}
                      circleColor={`${
                        todo.priority === "p1" ? "#ffffff" : "#ffffff"
                      } `}
                      // className={`w-5 h-5 text-primary stroke-white`}
                    />
                  ) : (
                    <CompletedIcon
                      background="#E9ECEF"
                      circleColor="#09de57"
                      // className={`w-5 h-5 text-green-600 stroke-white`}
                    />
                  )}
                </button>

                <h1 className={`${todo.completed && "line-through"}`}>
                  {todo.title}
                </h1>
              </div>
              <button type="button">
                <CiEdit
                  className="w-6 h-6"
                  onClick={() => openTodoCard(todo.todoId)}
                />
                <p className="sr-only">Edit Todo</p>
              </button>
            </form>
          ))
        ) : (
          <div className="flex justify-center items-center flex-col mt-8">
            <h1 className="text-[1rem]  text-gray-800">
              Start {type === "add" ? <>adding</> : <>completing</>} new tasks.
            </h1>
            <BiTask className="h-10 w-10 text-green-500" />
          </div>
        )}
      </section>
      {todoOpen.length > 0 && (
        <HandleUpdateTodo
          todo={todoOpen[0]}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          openTodoCard={openTodoCard}
        />
      )}
    </>
  );
}

export default CategoryTodo;
