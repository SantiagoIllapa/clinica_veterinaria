import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "react-toastify/dist/ReactToastify.css";
import { AppRoute } from "./routes/AppRoute.tsx";
import { AuthProvider } from "./auth/context/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  </React.StrictMode>
);
