import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Logo = () => {
  return (
    <div className="flex items-center justify-items-start -ml-6 ">
      <div className="flex items-center  bg-transparent font-bold text-2xl ">
        <DotLottieReact
          className=" w-14 sm:w-24 bg-transparent"
          src="/TaskCycle.json"
          loop
          autoplay
        />
        <span className=" text-xl  text-gray-600 -ml-3 sm:-ml-6 sm:mr-6 font-marker sm:text-4xl ">
          NoteHub
        </span>
      </div>
    </div>
  );
};
export default Logo;
