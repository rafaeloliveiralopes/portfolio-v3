import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./lib/i18n";
import { initGA } from "./lib/analytics";
import { HelmetProvider } from "react-helmet-async";

// Initialize Google Analytics once during app bootstrap
initGA();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
