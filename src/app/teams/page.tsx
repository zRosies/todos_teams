import { ObjectId } from "mongodb";
import { ServerComponent } from "../api/auth/[...nextauth]/options";
import { GetUserById } from "../api/controllers/controllers";
import { MainTeams } from "../ui/teams/mainTeams";
import { getConversations } from "../api/controllers/messageControl";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo | Teams",
  description: "Todo website, start working with your teams.",
};

export default async function Teams() {
  const user = await ServerComponent();
  if (!user) {
    redirect("/");
  }
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
