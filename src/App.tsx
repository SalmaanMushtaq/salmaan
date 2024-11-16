import { RouterProvider, createRouter } from "@tanstack/react-router";

import "./index.css";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <>
      <img
        src="src/assets/images/rainbow-superthin.webp"
        alt=""
        className="w-full z-12 h-1"
      />
      <RouterProvider router={router} />
      <img
        src="src/assets/images/rainbow-superthin.webp"
        alt=""
        className="w-full z-12 h-1"
      />
    </>
  );
}
