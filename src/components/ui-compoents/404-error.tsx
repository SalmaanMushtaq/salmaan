"use client";

import { Link } from "@tanstack/react-router";

export default function Error404() {
  return (
    <section className="flex flex-col items-center justify-center h-full space-y-2">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        404 Not Found
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Whoops! That page doesn’t exist.
      </p>
      <Link
        to="/"
        className="dark:text-white border-2 border-navLinkBorder customShadow p-1 px-6 bg-background rounded-full transition-all duration-200
              hover:border-white hover:border-2"
      >
        Go back home
      </Link>
    </section>
  );
}
