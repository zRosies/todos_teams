import { NextResponse } from "next/server";
import { GetUserById } from "../controllers/controllers";

export async function POST(req: Request, context: any) {
  const body = await req.json();

  const data: any = await GetUserById(body.email);

  return NextResponse.json(data);
}
