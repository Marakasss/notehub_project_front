import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <div className="flex items-center  bg-transparent font-bold text-2xl ">
        <DotLottieReact
          className="w-24 bg-transparent"
          src="/TaskCycle.json"
          loop
          autoplay
        />
        <span className="text-4xl text-gray-600 -ml-6 mr-6 font-marker ">
          NoteHub
        </span>
      </div>
    </div>
  );
};
export default Logo;
