"use client";

import { useState } from "react";
import { LiaEdit } from "react-icons/lia";
import HandleUpdateTodo from "./handleUpdateTodo";

export function Todos({ data, setTodos }: { data: any; setTodos: Function }) {
  const [todoOpen, setTodoOpen] = useState([]);

  function deleteTodo(todoId: string) {
    console.log("todoId" + todoId);

    setTodos((currentTodos: any[]) => {
      const data = currentTodos.filter((todo) => {
        return todo.todoId != todoId;
      });
      return data;

      // return data;
    });
  }

  const openTodoCard = (todoId: string) => {
    setTodoOpen(data.filter((todo: any) => todo.todoId === todoId));
  };
  return (
    <>
      {/* <p>teste</p> */}

      <section className="flex flex-col w-full relative">
        {data && data.length > 0 ? (
          data.map((todo: any) => (
            <form
              key={todo.todoId}
              className="flex bg-[#E9ECEF] my-1 p-2 justify-between"
            >
              <div className="flex gap-2 ">
                <input
                  type="checkbox"
                  className="rounded-[50%] bg-black cursor-pointer"
                />
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
                <p>{todo.priority}</p>
                <p>{todo.category}</p>
                <p>{todo.todoId}</p>
              </div>
              <button type="button">
                <LiaEdit
                  className="w-6 h-6"
                  onClick={() => openTodoCard(todo.todoId)}
                />
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
          openTodoCard={openTodoCard}
        />
      )}
    </>
  );
}

export default Todos;
