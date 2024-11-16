import { PiGraduationCap } from "react-icons/pi";
import { TiTickOutline } from "react-icons/ti";
function Education() {
  return (
    <div className="mt-10" id="education">
      <h1 className="text-4xl font-bold leading-relaxed flex gap-4 items-center">
        <span className="bg-basic p-3 rounded-full">
          <PiGraduationCap className="bg-basic" />
        </span>
        Education
      </h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-10 ms-10 ps-8">
        <div>
          <h1 className="font-bold flex gap-3 items-center">
            <span className="border-2 p-1 border-basic rounded-full">
              <TiTickOutline className="rounded-full" />
            </span>
            JKBOSE
          </h1>
          <span className="ms-10 text-basic font-semibold">Secondary</span>{" "}
          <span>2010</span>
        </div>
        <div>
          <h1 className="font-bold flex gap-3 items-center">
            <span className="border-2 p-1 border-basic rounded-full">
              <TiTickOutline className="rounded-full" />
            </span>
            JKBOSE
          </h1>
          <span className="ms-10 text-basic font-semibold">S. Secondary</span>{" "}
          <span>2012</span>
        </div>
        <div>
          <h1 className="font-bold flex gap-3 items-center">
            <span className="border-2 p-1 border-basic rounded-full">
              <TiTickOutline className="rounded-full" />
            </span>
            Kashmir University
          </h1>
          <span className="ms-10 text-basic font-semibold">B.Sc</span>{" "}
          <span>2017</span>
        </div>
        <div>
          <h1 className="font-bold flex gap-3 items-center">
            <span className="border-2 p-1 border-basic rounded-full">
              <TiTickOutline className="rounded-full" />
            </span>
            Islamic University
          </h1>
          <span className="ms-10 text-basic font-semibold">MCA</span>{" "}
          <span>2022</span>
        </div>
      </div>
    </div>
  );
}

export default Education;
