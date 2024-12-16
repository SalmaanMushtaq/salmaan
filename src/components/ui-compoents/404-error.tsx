"use client";
import { WavyBackground } from "../ui/wavy-background";

export default function Error404() {
  return (
    <WavyBackground
      backgroundFill="transparent"
      className="max-w-4xl mx-auto pb-40"
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        404 Not Found
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Whoops! That page doesn’t exist.
      </p>
    </WavyBackground>
  );
}
