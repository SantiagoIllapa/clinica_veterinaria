import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "react-toastify/dist/ReactToastify.css";
import { Index } from "./routes/Index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Index />
  </React.StrictMode>
);
