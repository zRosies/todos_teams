import { NextResponse } from "next/server";
import { getAllTodos } from "../controllers/controllers";

export async function GET() {
  const response: any = await getAllTodos();

  if (response.length <= 0) {
    return NextResponse.json({ message: "No items found in the database" });
  }
  return NextResponse.json({ response });
}
