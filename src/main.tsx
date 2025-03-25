import { createRoot } from "react-dom/client";
import "./index.css";
import ProviderConfg from "./tools/provider";
import { RouterProvider } from "react-router-dom";
import { root } from "./roots";

createRoot(document.getElementById("root")!).render(
  <ProviderConfg>
    <RouterProvider router={root} />
  </ProviderConfg>
);
