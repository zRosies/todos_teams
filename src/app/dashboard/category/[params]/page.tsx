import { ServerComponent } from "@/app/api/auth/[...nextauth]/options";
import { getTodosById } from "@/app/api/controllers/controllers";
import CategoryList from "@/app/ui/dashboard/categoryTodos";
import { redirect } from "next/navigation";

export default async function Category(context: any) {
  const session: any = await ServerComponent();

  if (!session) {
    redirect("/");
  }
  const id = context.searchParams.id;
  const category = context.searchParams.category;
  const todos: any = await getTodosById(id);

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
