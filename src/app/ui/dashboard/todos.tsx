"use client";
import { LiaEdit } from "react-icons/lia";

export function Todos({ data }: any) {
  console.log(data);

  return (
    <>
      <section className="flex flex-col w-full">
        {data.map((todo: any) => (
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
              <button type="button">
                <LiaEdit className="w-6 h-6" />
              </button>
            </form>
          </>
        ))}
      </section>
    </>
  );
}

export default Todos;
