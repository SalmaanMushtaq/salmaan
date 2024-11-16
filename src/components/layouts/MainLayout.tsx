import { Outlet } from "@tanstack/react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="container px-4 md:px-8 lg:px-16 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
