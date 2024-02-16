import { BiSearchAlt } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export default function Invite() {
  const findTeamMate = (e: any) => {
    e.preventDefault();
    const id = e.target.elements.search.value;
  };
  return (
    <>
      <div className="absolute left-0 top-0 bg-[rgba(0,0,0,0.4)] w-full h-full z-30"></div>

      <form
        action=""
        className="fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[00px] flex flex-col shadow-lg w-full justify-center bg-white z-50 "
        onSubmit={findTeamMate}
      >
        <section className="bg-white flex w-full flex-col p-4 rounded-[8px]">
          <label htmlFor="search">
            Find your team mates
            <input
              type="text"
              name="search"
              placeholder="Type your mate id..."
              className="w-full p-2"
            />
          </label>
          <button className="flex p-2 bg-primary text-white my-5 items-center gap-2 justify-center rounded-md">
            Search <IoSearchOutline />
          </button>
        </section>
      </form>
    </>
  );
}
