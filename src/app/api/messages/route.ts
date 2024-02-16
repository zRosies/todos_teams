import { NextResponse } from "next/server";
import { postMessage } from "../controllers/controllers";

export async function POST(req: Request) {
  // const { params } = context;
  const body: any = await req.json();

  //   const senderId = params.userId;

  try {
    const data = await postMessage(body);

    console.log(data);

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {}
}
