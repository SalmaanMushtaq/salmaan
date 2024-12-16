// import { motion } from "framer-motion";
import MySelf from "../assets/images/myself.webp";
import TypingAnimation from "./ui/typing-animation";
function Introduction() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row lg:flex-row justify-between tracking-wide items-center gap-4">
      <div className="flex flex-col justify-end">
        <p>
          Welcome <br />
          I&apos;m
          <span className="rounded-full inline-block font-bold border-b-8 border-basic w-10"></span>
        </p>
        <TypingAnimation
          className="text-4xl font-bold text-basic pt-6 pb-2"
          text="Salmaan Mushtaq"
        />

        {/* <h1 className="font-bold text-6xl text-basic leading-normal">
          <motion.div
            className="box text-basic"
            animate={{
              scale: [0, 0.5, 1.2, 1],
              rotate: [0, 180, 360, 0],
              borderRadius: ["50%", "50%", "50%", "50%"],
            }}
            transition={{
              duration: 6,
              ease: "anticipate",
              times: [0, 0.2, 0.5, 1],
              repeat: 0,
              repeatDelay: 1,
            }}
          >
            Salmaan
          </motion.div>
        </h1>
        <h3 className="font-semibold text-3xl leading-tight">Mushtaq</h3> */}
        <h5 className="text-3xl font-light text-basic mt-4 animate-pulse bg-transparent">
          Front End Developer
        </h5>
      </div>
      <div className="">
        <img
          src={MySelf}
          alt="Salmaan-Mushtaq"
          loading="eager"
          className="lg:h-[50vh] rounded-[0.5rem]"
        />
      </div>
    </div>
  );
}

export default Introduction;
