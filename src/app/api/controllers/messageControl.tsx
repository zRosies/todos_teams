import { initDb } from "../mongo/connection";

export async function getConversations(participantId: string) {
  const db = await initDb({ collection: "messages" });

  //   console.log(participantId);

  const conversations = await db
    .find({
      $or: [
        { "participants.userId": participantId },
        { "participants.user2Id": participantId },
      ],
    })
    .toArray();

  //   console.log("conversationshere" + conversations);

  return conversations;
}

interface MessageBody {
  participants: {
    userId: string;
    user2Id: string;
    user3Id?: string;
  };
  messages: any[];
}

export async function postMessage(body: MessageBody) {
  const db = await initDb({ collection: "messages" });

  const { userId, user2Id } = body.participants;

  const existingConversation = await db.findOne({
    "participants.userId": { $in: [userId, user2Id] },
    "participants.user2Id": { $in: [userId, user2Id] },
  });

  console.log(existingConversation);

  if (existingConversation) {
    const response = await db.updateOne(
      { _id: existingConversation._id },
      {
        $push: {
          messages: body.messages[0],
        },
      }
    );
    return response;
  }

  const response = await db.insertOne(body);

  return response;
}
