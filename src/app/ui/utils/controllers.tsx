import { useSession } from "next-auth/react";

export async function fetchUserTodos(userId: string) {
  //   const session = useSession();

  const response: any = await fetch(`api/todos/${userId}`);

  console.log(response);

  //   const data = await response.data;

  //   console.log(JSON.stringify(response));

  if (response.status != 200) {
    return { message: "Error fetching user" };
  }
  return response.json();
}
