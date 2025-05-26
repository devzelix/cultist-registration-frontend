import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App";

const ROOT = createRoot(document.getElementById("root") as HTMLElement); // Create React root

ROOT.render(<App />); // Render the App component
