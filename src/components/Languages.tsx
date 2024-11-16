import { MdOutlineLanguage } from "react-icons/md";
import Language from "./Language";
function Languages() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold leading-relaxed flex gap-4 items-center">
        <span className="bg-basic p-3 rounded-full">
          <MdOutlineLanguage className="bg-basic" />
        </span>
        Languages
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 ms-10 ps-8">
        <Language
          name="Kashmiri"
          proficiency="(Native)"
          progress={[100, 100, 100]} // Progress for Speaking, Writing, Comprehension
        />
        <Language
          name="English"
          proficiency="(Intermediate)"
          progress={[80, 70, 70]} // Progress for Speaking, Writing, Comprehension
        />
        <Language
          name="Urdu"
          proficiency="(Fluent)"
          progress={[100, 100, 100]} // Progress for Speaking, Writing, Comprehension
        />
        <Language
          name="Hindi"
          proficiency="(Basic)"
          progress={[60, 0, 50]} // Progress for Speaking, Writing, Comprehension
        />
      </div>
      {/* <div>
          <h2 className="font-bold text-lg flex gap-3 items-center">
            <span className="border-2 p-1 border-basic rounded-full">
              <TiTickOutline className="rounded-full" />
            </span>
            Kashmiri
          </h2>
          <span className="ms-10 text-basic font-semibold">(Native)</span>{" "}
        </div>
        <div>
          <div className="flex gap-1 flex-col justify-between h-full">
            <div className="bg-background h-full rounded-full">
              <div
                className="bg-basic h-full rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="bg-background h-full rounded-full">
              <div
                className="bg-basic h-full rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="bg-background h-full rounded-full">
              <div
                className="bg-basic h-full rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="gap-1 flex flex-col justify-around">
          <button className="p-1 text-basic bg-background rounded-full">
            Speaking
          </button>
          <button className="p-1 text-basic bg-background rounded-full">
            Writing
          </button>
          <button className="p-1 text-basic bg-background rounded-full">
            Comprehension
          </button>
        </div>
        <div>
          <h2 className="font-bold text-lg flex gap-3 items-center">
            <span className="border-2 p-1 border-basic rounded-full">
              <TiTickOutline className="rounded-full" />
            </span>
            English
          </h2>
          <span className="ms-10 text-basic font-semibold">(Native)</span>{" "}
        </div>
        <div>
          <div className="flex gap-1 flex-col justify-between h-full">
            <div className="bg-background h-full rounded-full">
              <div
                className="bg-basic h-full rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="bg-background h-full rounded-full">
              <div
                className="bg-basic h-full rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="bg-background h-full rounded-full">
              <div
                className="bg-basic h-full rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="gap-1 flex flex-col justify-around">
          <button className="p-1 text-basic bg-background rounded-full">
            Speaking
          </button>
          <button className="p-1 text-basic bg-background rounded-full">
            Writing
          </button>
          <button className="p-1 text-basic bg-background rounded-full">
            Comprehension
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Languages;
