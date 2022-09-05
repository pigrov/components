import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
