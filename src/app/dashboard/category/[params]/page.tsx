// "use client";
import { getTodosById } from "@/app/api/controllers/controllers";
import CategoryList from "@/app/ui/dashboard/categoryTodos";
import Todos from "@/app/ui/dashboard/todos";

import { useSearchParams } from "next/navigation";

export default async function Category(context: any) {
  //   const params = useSearchParams();

  const id = context.searchParams.id;
  const category = context.searchParams.category;
  //   const id = params.get("id");
  //   const category = params.get("category");

  const todos: any = await getTodosById(id);

  //   console.log(todos);
  // console.log(id, category);

  return (
    <>
      <section className="mx-auto max-w-[800px] px-3">
        <CategoryList
          data={todos && todos[0] ? todos[0].todos : []}
          type={category}
          userId={id}
        />
      </section>
    </>
  );
}
