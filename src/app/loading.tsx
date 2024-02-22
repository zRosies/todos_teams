import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingMain = () => {
  return (
    <>
      <div className="flex justify-center items-center mx-auto my-[18rem]">
        <AiOutlineLoading3Quarters className="w-12 h-12 text-hover rounded-full animate-loading" />
      </div>
    </>
  );
};

export default LoadingMain;
