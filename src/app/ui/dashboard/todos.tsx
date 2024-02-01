"use client";

import { useState } from "react";
import { LiaEdit } from "react-icons/lia";
import HandleUpdateTodo from "./handleUpdateTodo";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import CircleItem from "../icons/circleIcon";
import CompletedIcon from "../icons/completdIcon";

export function Todos({ data, setTodos }: { data: any; setTodos: Function }) {
  const [todoOpen, setTodoOpen] = useState([]);

  function deleteTodo(todoId: string) {
    // console.log("todoId" + todoId);

    setTodos((currentTodos: any[]) => {
      const data = currentTodos.filter((todo) => {
        return todo.todoId != todoId;
      });
      return data;

      // return data;
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

  const openTodoCard = (todoId: string) => {
    setTodoOpen(data.filter((todo: any) => todo.todoId === todoId));
  };

  function todoCompleted(todoId: string) {
    setTodos((currentTodos: any[]) => {
      const array = currentTodos.map((todo) => {
        if (todo.todoId === todoId) {
          console.log(todo.completed);

          todo.completed = !todo.completed;
          console.log("it works");

          return { ...todo, completed: todo.completed };
        }
        console.log("failed");

        return todo;
      });
      return array;
    });
  }

  return (
    <>
      {/* <p>teste</p> */}

      <section className="flex flex-col w-full relative ">
        {data && data.length > 0 ? (
          data.map((todo: any) => (
            <form
              key={todo.todoId}
              className="flex bg-[#E9ECEF] my-1 p-2 justify-between items-center"
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
                  {!todo.completed ? (
                    <CircleItem
                      background={"#E9ECEF"}
                      circleColor={`${
                        todo.priority === "p1" ? "#EC4E4E" : "#ffffff"
                      } `}
                      // className={`w-5 h-5 text-primary stroke-white`}
                    />
                  ) : (
                    <CompletedIcon
                      background="#E9ECEF"
                      circleColor="#189E0F"
                      // className={`w-5 h-5 text-green-600 stroke-white`}
                    />
                  )}
                </button>
                {/* <h1>{`${todo.completed}`}</h1> */}
                <h1 className={`${todo.completed && "line-through"}`}>
                  {todo.title}
                </h1>
              </div>
              <button type="button">
                <LiaEdit
                  className="w-6 h-6"
                  onClick={() => openTodoCard(todo.todoId)}
                />
                <p className="sr-only">Edit Todo</p>
              </button>
            </form>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              No tasks added yet.
            </h1>
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

export default Todos;
