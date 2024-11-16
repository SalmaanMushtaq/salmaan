import { motion } from "framer-motion";
import MySelf from "../assets/images/myself.webp";
function Introduction() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row lg:flex-row justify-between tracking-wide items-center gap-4">
      <div className="flex flex-col justify-end sm:w-full lg:w-2/3 md:w-full lg:pl-[15rem]">
        <p>
          {/* <svg className="h-12 ms-[-4rem]"> */}
          {/* <text x="50%" y="50%" dy=".35em" textAnchor="middle"> */}
          Welcome <br />
          {/* </text> */}
          {/* </svg> */}
          I&apos;m{" "}
          <span className="rounded-full inline-block font-bold border-b-8 border-basic w-10"></span>
        </p>

        <h1 className="font-bold text-6xl text-basic leading-normal">
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
            {/* <svg className="h-36 ms-[-1rem] sm:ms-[-1rem] md:ms-[-4.5rem]  lg:ms-[-3rem] xl:ms-[-12rem]">
          <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            className="text-[5rem]"
          > */}
            Salmaan
            {/* </text>
        </svg> */}
          </motion.div>
        </h1>
        <h3 className="font-semibold text-3xl leading-tight">Mushtaq</h3>
        <h5 className="text-3xl font-light text-basic mt-4 animate-pulse bg-transparent">
          Front End Developer
        </h5>
      </div>
      <div className=" flex justify-center  items-center sm:w-full lg:w-1/2 md:w-full">
        <img
          src={MySelf}
          alt="Salmaan-Mushtaq"
          loading="eager"
          className="lg:h-[50vh] rounded-[2rem]"
        />
      </div>
    </div>
  );
}

export default Introduction;
