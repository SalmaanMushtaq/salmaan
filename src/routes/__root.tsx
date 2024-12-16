import { createRootRoute } from "@tanstack/react-router";
import MainLayout from "../components/layouts/MainLayout";
import Error404 from "@/components/ui-compoents/404-error";

export const Route = createRootRoute({
  component: MainLayout,
  notFoundComponent: NotFound,
});

function NotFound() {
  return <Error404 />;
}
