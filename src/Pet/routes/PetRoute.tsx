import { Route, Routes } from "react-router-dom";
import { PetListPage } from "../pages/PetListPage";
import { PetForm } from "../pages/PetForm";
import { Layout } from "../container/Layout";
import { PetProvider } from "../context/PetProvider";
import { HomePage } from "../pages/HomePage";

export const PetRoute = () => {
  return (
    <PetProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pet-list" element={<PetListPage />} />
          <Route path="/register-pets" element={<PetForm />} />
        </Routes>
      </Layout>
    </PetProvider>
  );
};
