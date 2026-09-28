import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { HelmetProvider } from "react-helmet-async";
import { inject } from '@vercel/analytics';

inject();
// forza sempre lingua inglese (evita interpretazioni browser)
document.documentElement.lang = "it";

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}
