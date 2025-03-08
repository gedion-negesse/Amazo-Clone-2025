import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import DataProvider from "./components/DataProvider/DataProvider.jsx";
import { reducer, initialState } from "./Utilities/reducer.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Amazo-Clone-2025">
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
