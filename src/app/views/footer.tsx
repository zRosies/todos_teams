import LogoWhite from "../components/icons/logoWhite";

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex items-center mt-20 p-5 justify-between">
        <LogoWhite />
        <div className="text-white gap-2 flex">
          <p className="text-[0.8rem]">2024 &copy; |</p>
          <p className="text-[0.8rem]"> All rights reserved |</p>
          <p className="text-[0.8rem]">Handcrafted Haven</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
