import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { FavoritesProvider } from "./context/FavoritesContext";
import { FilterProvider } from "./context/FilterContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FilterProvider>
      <FavoritesProvider>
        <App />
        <Toaster position="top-right" />
      </FavoritesProvider>
    </FilterProvider>
  </React.StrictMode>
);
