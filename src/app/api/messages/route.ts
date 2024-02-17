import { NextResponse } from "next/server";
import { initDb } from "../mongo/connection";
import { postMessage } from "../controllers/messageControl";

export async function POST(req: Request) {
  const body: any = await req.json();

  try {
    const data = await postMessage(body);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {}
}
