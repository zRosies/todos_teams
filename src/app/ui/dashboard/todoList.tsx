"use server";

import { getAllTodos } from "@/app/api/controllers/controllers";
import Todos from "./todos";

async function TodoList({ data }: any) {
  return <></>;
}

export default TodoList;

// export async function getData({ userId }: any) {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/todos/${userId}`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
