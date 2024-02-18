import { ObjectId } from "mongodb";
import { ServerComponent } from "../api/auth/[...nextauth]/options";
import { GetUserById } from "../api/controllers/controllers";
import { MainTeams } from "../ui/teams/mainTeams";
import { getConversations } from "../api/controllers/messageControl";

export default async function Teams() {
  const user = await ServerComponent();

  const userInfo = await GetUserById(user.user.email);

  const userId = userInfo?._id.toString() as string;

  const conversations = await getConversations(userId);

  // console.log(conversations);

  return (
    <>
      <section className="max-w-[800px] mx-auto px-2 ">
        <MainTeams user={user} userId={userId} conversations={conversations} />
      </section>
    </>
  );
}
