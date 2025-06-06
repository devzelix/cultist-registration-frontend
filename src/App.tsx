import { BrowserRouter, Routes, Route } from "react-router-dom";
import CultorRegistrationApp from "./pages/CultorRegistrationApp";
import NotFound from "./pages/NotFound";

// Main application entry point that defines routing logic
export default function App() {
  return (
    <BrowserRouter basename="/cultores">
      <Routes>
        {/* Main route: renders the CultorRegistrationApp component at /registro */}
        <Route path="/registro" element={<CultorRegistrationApp />} />

        {/* Catch-all route: renders the NotFound page for any unmatched path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
