import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { CategoryProvider } from "./CategoryContext"; // ✅ Add this line
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CategoryProvider>
  </React.StrictMode>
);
