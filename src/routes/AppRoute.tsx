import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PetRoute } from "../Pet/routes/PetRoute";
import { useContext } from "react";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { AuthContext } from "../auth/context/AuthContext";
export const AppRoute = () => {
  const { status } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {status === "not-authenticated" ? (
        <Routes>
          <Route path="/auth/*" element={<AuthRoute />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<PetRoute />} />
          <Route path="/auth/*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
