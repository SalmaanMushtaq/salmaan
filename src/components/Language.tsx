import { TiTickOutline } from "react-icons/ti";
interface LanguageProp {
  name: string;
  proficiency: string;
  progress: Number[];
}
function Language({ name, proficiency, progress }: LanguageProp) {
  return (
    <>
      <div id="languages">
        <h2 className="font-bold text-lg flex gap-3 items-center">
          <span className="border-2 p-1 border-basic rounded-full">
            <TiTickOutline className="rounded-full" />
          </span>
          {name}
        </h2>
        <span className="ms-10 text-basic font-semibold">{proficiency}</span>
      </div>
      <div className="gap-2 flex flex-col justify-between">
        {progress.map((value, index) => (
          <div key={index} className="bg-background h-6 rounded-full">
            <div
              className="bg-basic h-6 rounded-full"
              style={{ width: `${value}%` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="gap-2 flex flex-col justify-around">
        <button className="h-6 text-white bg-background rounded-full">
          Speaking
        </button>
        <button className="h-6 text-white bg-background rounded-full">
          Writing
        </button>
        <button className="h-6 text-white bg-background rounded-full">
          Comprehension
        </button>
      </div>
    </>
  );
}

export default Language;
