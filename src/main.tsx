import { createRoot } from "react-dom/client";
import App from "./pages/App";
import "./styles/global.css";

const ROOT = createRoot(document.getElementById("root") as HTMLElement); // Create React root

ROOT.render(<App />); // Render the App component
