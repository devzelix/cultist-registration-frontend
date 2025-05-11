import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import "./styles/global.css";

const ROOT = createRoot(document.getElementById("root") as HTMLElement);
ROOT.render(
  <StrictMode>
    <App />
  </StrictMode>
);
