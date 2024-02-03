"use server";

import { useRouter } from "next/navigation";

const DashboardBody = (props: any) => {
  const router = useRouter();

  // const [todos, setTodos] = useState([]);

  router.push("/");

  return (
    <>
      <section className="max-w-[800px] mx-auto px-5 ">
        {/* ------------------------------------- Todos here ---------------------------------- */}

        {/*-----------------------------------Button Add tasks here ---------------------------- */}
      </section>
      <div className="mb-[200px]"></div>
      {/*  */}
    </>
  );
};

export default DashboardBody;
