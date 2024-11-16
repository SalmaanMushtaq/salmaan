import { RiComputerLine } from "react-icons/ri";
import { TbBrandHtml5 } from "react-icons/tb";
import { LiaCss3Alt } from "react-icons/lia";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { GrMysql } from "react-icons/gr";

function TechSkills() {
  return (
    <div className="mt-10" id="techskills">
      <h1 className="text-4xl font-bold leading-relaxed flex gap-4 items-center">
        <span className="bg-basic p-3 rounded-full">
          <RiComputerLine className="bg-basic" />
        </span>
        Technical Skills
      </h1>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 ps-8">
        <div className="font-bold flex flex-col gap-3 items-center">
          <span className="border-[15px] p-5 rounded-full border-wrapper">
            {/* <span className="border-[15px] border-basic p-5 rounded-full border-t-background"> */}
            <TbBrandHtml5 className="text-4xl" />
          </span>
          HTML5
        </div>
        <div className="font-bold flex flex-col gap-3 items-center">
          <span className="border-[15px] p-5 rounded-full border-wrapper">
            {/* <span className="border-[15px] border-basic p-5 rounded-full border-r-background"> */}
            <LiaCss3Alt className="text-4xl" />
          </span>
          CSS3
        </div>
        <div className="font-bold flex flex-col gap-3 items-center">
          <span className="border-[15px] p-5 rounded-full border-wrapper">
            {/* <span className="border-[15px] border-basic p-5 rounded-full border-b-background"> */}
            <RiBootstrapLine className="text-4xl" />
          </span>
          Bootstrap
        </div>
        <div className="font-bold flex flex-col gap-3 items-center">
          <span className="border-[15px] p-5 rounded-full border-wrapper">
            {/* <span className="border-[15px] border-basic p-5 rounded-full border-l-background"> */}
            <TbBrandJavascript className="text-4xl" />
          </span>
          JavaScript
        </div>
        <div className="font-bold flex flex-col gap-3 items-center">
          <span className="border-[15px] p-5 rounded-full border-wrapper">
            {/* <span className="border-[15px] border-basic p-5 rounded-full border-l-background"> */}
            <SiJquery className="text-4xl" />
          </span>
          jQuery
        </div>
        <div className="font-bold flex flex-col gap-3 items-center">
          <span className="border-[15px] p-5 rounded-full border-wrapper">
            {/* <span className="border-[15px] border-basic p-5 rounded-full border-t-background"> */}
            <SiTailwindcss className="text-4xl" />
          </span>
          Tailwind CSS
        </div>
        <div className="font-bold flex flex-col gap-3 items-center">
          <span className="border-[15px] p-5 rounded-full border-wrapper">
            {/* <span className="border-[15px] border-basic p-5 rounded-full border-r-background"> */}
            <GrReactjs className="text-4xl" />
          </span>
          React.js
        </div>
        <div className="font-bold flex flex-col gap-3 items-center">
          <span className="border-[15px] p-5 rounded-full border-wrapper">
            {/* <span className="border-[15px] border-basic p-5 rounded-full border-b-background"> */}
            <GrMysql className="text-4xl" />
          </span>
          MySQL
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
