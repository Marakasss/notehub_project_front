"use client";

import LightRays from "../../components/ReactBitsAnimations/LightRays";

export default function LightRaysClientWrapper() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-0 w-full h-full  ">
      {" "}
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1}
        lightSpread={1}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.6}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  );
}
