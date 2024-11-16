import { createRootRoute } from "@tanstack/react-router";
import MainLayout from "../components/layouts/MainLayout";

export const Route = createRootRoute({
  component: MainLayout,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
    </>
  );
}
