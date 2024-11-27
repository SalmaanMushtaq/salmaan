import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import CV from "../assets/cv/Salmaan_Mushtaq.pdf";
function DownloadCV() {
  return (
    <div className="mt-20 mb-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl">Interested in my work?</h1>
      <div className="flex gap-3 justify-center items-center flex-col sm:flex-row md:flex-row lg:flex-row">
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="btnHover p-1 px-6 bg-basic rounded-full flex justify-between gap-3 items-center font-semibold dark:text-black"
        >
          View CV <FaRegEye className="text-xl dark:text-black" />
        </a>
        <a
          href={CV}
          download="Salmaan_Mushtaq"
          className="btnHover p-1 px-6 bg-basic rounded-full flex justify-between gap-3 items-center font-semibold dark:text-black"
        >
          Download CV{" "}
          <IoCloudDownloadOutline className="text-xl dark:text-black" />
        </a>
      </div>
    </div>
  );
}

export default DownloadCV;
