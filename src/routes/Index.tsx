import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/pets" element={<App />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
