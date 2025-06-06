import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CultorRegistrationApp from "./pages/CultorRegistrationApp";
import NotFound from "./pages/NotFound";

// Main application entry point that defines routing logic
export default function App() {
  return (
    <BrowserRouter basename="/cultores">
      <Routes>
        {/* Redirects /cultores to /cultores/registro */}
        <Route path="/" element={<Navigate to="/registro" replace />} />

        {/* Main route: renders the CultorRegistrationApp component at /registro */}
        <Route path="/registro" element={<CultorRegistrationApp />} />

        {/* Catch-all route: renders the NotFound page for any unmatched path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
