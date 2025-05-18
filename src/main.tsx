/* Importing the ReactDOM client to render the app to the DOM */
import { createRoot } from "react-dom/client";
/* Importing the main App component for the application */
import App from "./pages/App";
/* Importing global styles for the application */
import "./styles/global.css";

/* Creating the root element for React rendering, ensuring it exists in the DOM */
const ROOT = createRoot(document.getElementById("root") as HTMLElement);

/* Rendering the App component inside StrictMode to enable additional checks during development */
ROOT.render(<App />);
