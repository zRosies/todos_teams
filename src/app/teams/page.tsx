import { ObjectId } from "mongodb";
import { ServerComponent } from "../api/auth/[...nextauth]/options";
import { GetUserById } from "../api/controllers/controllers";
import { MainTeams } from "../ui/teams/mainTeams";

export default async function Teams() {
  const user = await ServerComponent();

  const userInfo = await GetUserById(user.user.email);

  const userId = userInfo?._id.toString() as string;

  console.log(userId);

  // console.log(user);

  return (
    <>
      <section className="max-w-[800px] mx-auto px-2 ">
        <MainTeams user={user} />
      </section>
    </>
  );
}
