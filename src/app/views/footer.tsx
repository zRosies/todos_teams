import LogoWhite from "../ui/icons/logoWhite";

const Footer = () => {
  return (
    <>
      <footer className="bg-grayzy flex items-center mt-20 p-5 justify-center">
        {/* <LogoWhite /> */}
        <div className="text-white gap-2 flex">
          <p className="text-[0.8rem]"> Gustavo Bispo |</p>
          <p className="text-[0.8rem]"> All rights reserved &copy; 2024 |</p>
          <p className="text-[0.8rem]">Todo </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
