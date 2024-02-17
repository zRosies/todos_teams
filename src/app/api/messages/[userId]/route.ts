import { NextResponse } from "next/server";
import { getConversations } from "../../controllers/messageControl";

export async function GET(req: Request, context: any) {
  try {
    const { params } = context;

    const data: any = await getConversations(params.userId);

    if (data.length > 0) {
      return NextResponse.json(data, { status: 200 });
    }

    return NextResponse.json(
      { message: "No data found with this Id" },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
