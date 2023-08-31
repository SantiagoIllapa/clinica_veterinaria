import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { PetProvider } from "../context/PetProvider";
import { PetListPage } from "../pages/PetListPage";
import { PetForm } from "../pages/PetForm";
import { AuthProvider } from "../context/auth/AuthProvider";

export const Index = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PetProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register-pets" element={<PetForm />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/pet-list" element={<PetListPage />} />
          </Routes>
        </PetProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
