import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../container/Layout";
import { PetProvider } from "../context/PetProvider";
import { PetListPage } from "../pages/PetListPage";
import { PetForm } from "../pages/PetForm";

export const Index = () => {
  return (
    <BrowserRouter>
    <PetProvider>
    <Layout>
    <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/register-pets" element={<PetForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pet-list" element={<PetListPage />} />
      </Routes>
    </Layout>
    </PetProvider>
    
      
    </BrowserRouter>
  );
};
