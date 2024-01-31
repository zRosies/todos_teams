"use client";
import { useState } from "react";
import { LiaEdit } from "react-icons/lia";
import HandleTodoCard from "./handleCard";
import HandleUpdateTodo from "./handleUpdateTodo";

export function Todos({
  data,
  userId,
  setSubmitted,
}: {
  data: any;
  userId: string;
  setSubmitted: Function;
}) {
  const [openCards, setOpenCards] = useState<{ [key: string]: boolean }>({});
  console.log(data);

  return (
    <>
      <section className="flex flex-col w-full relative">
        {data.length > 0 &&
          data.map((todo: any) => (
            <>
              <form
                key={todo.id}
                className="flex bg-[#E9ECEF] my-1 p-2 justify-between"
              >
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="rounded-[50%] bg-black cursor-pointer"
                  />
                  <h1>{todo.title}</h1>
                  <p>{todo.description}</p>
                  <p>{todo.priority}</p>
                  <p>{todo.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setOpenCards(() => ({
                      [todo.todoId]: true, // Toggle the value
                    }))
                  }
                >
                  {/* <LiaEdit className="w-6 h-6" />
                  {openCards[todo.todoId] && (
                    <HandleUpdateTodo
                      todoId={todo.todoId}
                      title={todo.title}
                      description={todo.description}
                      priority={todo.priority}
                      category={todo.category}
                      userId={userId}
                      setOpenCards={setOpenCards}
                      setSubmitted={setSubmitted}
                    />
                  )} */}
                </button>
              </form>
            </>
          ))}
      </section>
    </>
  );
}

export default Todos;
