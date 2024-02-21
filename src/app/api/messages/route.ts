import { NextResponse } from "next/server";
import { initDb } from "../mongo/connection";
import { postMessage } from "../controllers/messageControl";
import { pusherServer } from "../pusher/pusher";

interface Message {
  _id: string;
  conversationId: string;
  participants: {
    userId: string;
    user2Id: string;
  };
  messages: any[];
}
export async function POST(req: Request) {
  const body: Message = await req.json();
  // console.log("ChanelId" + body.conversationId);

  try {
    const teste = await pusherServer.trigger(
      "message",
      "incoming-message",
      body.messages
    );
    // console.log(body);

    const data = await postMessage(body);

    console.log(body);
    if (!body) {
      return NextResponse.json(
        { message: "Message not sent" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", data },
      { status: 201 }
    );
  } catch (error) {}
}
