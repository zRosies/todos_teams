"use client";
import { useEffect, useState } from "react";
import { LiaEdit } from "react-icons/lia";
import HandleTodoCard from "./handleCard";
import HandleUpdateTodo from "./handleUpdateTodo";
import { getTodosById } from "@/app/api/controllers/controllers";

export function Todos({ data }: { data: any }) {
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const response = await fetch(`/api/todos/${userId}`, {
  //         method: "GET", // Assuming you want to fetch todos using GET
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       const data = await response.json();
  //       setTodos(data.data[0].todos); // Assuming the response is an array of todos
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchTodos();
  // }, [userId]);

  // const data = response.json();

  // try {
  //   const response = await fetch(`/api/todos/${userId}`, {
  //     method: "GET", // Assuming you want to fetch todos using GET
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const teste = await response.json();
  //   // setTodos(teste.teste[0].todos); // Assuming the response is an array of todos
  //   const data = teste.data[0].todos; // Assuming the response is an array of todos
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }

  // const [openCards, setOpenCards] = useState<{ [key: string]: boolean }>({});
  // const { params } = context;
  // const userId = params.userId;

  // const todos = await getTodosById(userId);

  // console.log(todos);

  // console.log("dataTodos" + data);

  return (
    <>
      <p>teste</p>
      <section className="flex flex-col w-full relative">
        {data &&
          data.length > 0 &&
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
              <button
                type="button"
                // onClick={() =>
                //   setOpenCards(() => ({
                //     [todo.todoId]: true,
                //   }))
                // }
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
                      setTodos={setTodos}
                    />
                  )} */}
              </button>
            </form>
          ))}
      </section>
    </>
  );
}

export default Todos;
