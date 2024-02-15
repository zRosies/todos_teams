import { ServerComponent } from "../api/auth/[...nextauth]/options";
import { MainTeams } from "../ui/teams/mainTeams";

export default async function Teams() {
  const user = await ServerComponent();
  console.log(user);

  return (
    <>
      <section className="max-w-[800px] mx-auto px-5 ">
        <MainTeams user={user} />
      </section>
    </>
  );
}
