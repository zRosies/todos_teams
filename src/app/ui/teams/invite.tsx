import { BiSearchAlt } from "react-icons/bi";

export default function Invite() {
  <section className="relative">
    <div className="absolute left-0 top-0 bg-[rgba(0,0,0,0.4)] w-full h-full z-10"></div>
    <form action="">
      <label htmlFor="search">
        Find your friends
        <input type="text" name="search" placeholder="Type your friend id..." />
        <BiSearchAlt />
      </label>
    </form>
  </section>;
}
