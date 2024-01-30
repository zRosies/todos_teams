"use server";

import { getTodosById } from "@/app/api/controllers/controllers";
import Todos from "@/app/ui/dashboard/todos";

// import todoCard from "@/app/ui/dashboard/todoCard";

export type TodoObject =
  | {
      _id: string | null;
      userId: string | null;
      todos: any[];
      error?: string;
    }
  | any;
const Dashboard = async (context: any) => {
  // console.log(todos);
  const { params } = context;

  const data: TodoObject = await getTodosById(params.userId);

  console.log(JSON.stringify(data));

  return (
    <>
      <section className="max-w-[800px] mx-auto px-5 ">
        <Todos data={data[0].todos} />
      </section>
    </>
  );
};

export default Dashboard;
