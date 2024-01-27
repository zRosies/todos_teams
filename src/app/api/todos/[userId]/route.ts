import { NextRequest, NextResponse } from "next/server";
import {
  deleteTodoById,
  getTodosById,
  postTodosById,
  updateTodoById,
} from "../../controllers/controllers";

export async function GET(req: Request, context: any) {
  const { params } = context;
  const data: any = await getTodosById(params.userId);

  if (data.length <= 0) {
    return NextResponse.json({ message: "No data found with this Id" });
  }
  return NextResponse.json({ data });
}

export async function PUT(req: Request, context: any) {
  const { params } = context;
  const body = await req.json();

  const response: any = await updateTodoById(params.userId, body);
  if (response.updatedCount <= 0) {
    return NextResponse.json({
      message: "Todo was not updated correctly",
    });
  }

  return NextResponse.json({ message: "Todo updated successfuly" });
}

export async function POST(req: Request, context: any) {
  const { params } = context;
  const body = await req.json();

  const response: any = await postTodosById(params.userId, body);

  if (response.modifiedCount < 0) {
    return response;
  }

  return NextResponse.json({ message: "Todo added successfuly" });
}

export async function DELETE(req: Request, context: any) {
  const { params } = context;

  const response: any = await deleteTodoById(params.userId);
  if (response.deletedCount <= 0) {
    return NextResponse.json({
      message: "Item was not deleted from the database",
    });
  }

  return NextResponse.json({ message: "Item deleted successfuly" });
}
