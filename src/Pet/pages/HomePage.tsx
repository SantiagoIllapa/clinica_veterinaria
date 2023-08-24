import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
export const HomePage = () => {
  const { nombre } = useContext(AuthContext);
  return (
    <div className="mx-auto flex justify-center items-center w-full mt-16">
      <h1 className="text-4xl">Bienvenido {nombre}</h1>
    </div>
  );
};
