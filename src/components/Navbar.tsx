import { useState } from "react";
import { FcHome, FcBusinessman, FcContacts } from "react-icons/fc";
import { Link } from "@tanstack/react-router";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import SideCannonButton from "./ui-compoents/side-cannon-button";

function Navbar() {
  const [dark, setDark] = useState(true);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="container mx-auto">
      {/* Desktop Navbar */}
      <nav className="container px-16 hidden  sm:flex sm:justify-end sm:items-center gap-4 pt-8 pb-3 fixed top-0 w-full z-10 bg-[#181313] dark:bg-[#f5f5f5]">
        <ul className="flex gap-4 flex-wrap justify-center items-center">
          <li>
            <Link
              to="/"
              className="dark:text-white border-2 border-navLinkBorder customShadow p-1 px-6 bg-background rounded-full transition-all duration-200
              hover:border-white hover:border-2"
            >
              <SideCannonButton text="Profile" />
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="dark:text-white border-2 border-navLinkBorder customShadow p-1 px-6 bg-background rounded-full transition-all duration-200
               hover:border-white hover:border-2"
            >
              <SideCannonButton text="Portfolio" />
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className=" dark:text-white border-2 border-navLinkBorder customShadow p-1 px-6 bg-background rounded-full transition-all duration-200
              hover:border-white hover:border-2"
            >
              <SideCannonButton text="Contact" />
            </Link>
          </li>
          <li>
            <button
              onClick={() => darkModeHandler()}
              className="border-2 border-navLinkBorder customShadow p-1 px-6 bg-background rounded-full transition-all duration-200
              hover:border-white hover:border-2"
            >
              {!dark && <IoSunny className="dark:text-white" size={16} />}
              {dark && <FaMoon className="dark:text-white" size={16} />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex sm:hidden justify-center items-center py-4 w-full fixed top-0  z-10 bg-[#181313] dark:bg-[#f5f5f5]">
        <ul className="flex items-center gap-16">
          <li>
            <Link to="/">
              <FcHome className="text-4xl transition-transform duration-200 hover:scale-110" />
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <FcBusinessman className="text-4xl transition-transform duration-200 hover:scale-110" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FcContacts className="text-4xl transition-transform duration-200 hover:scale-110" />
            </Link>
          </li>
          <li>
            <button
              onClick={() => darkModeHandler()}
              className="text-4xl py-2 transition-transform duration-200 hover:scale-110"
            >
              {!dark && <IoSunny className="text-basic" />}
              {dark && <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
