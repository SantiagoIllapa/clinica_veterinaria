import { createContext } from "react";

interface AuthContextProps {
  status: string;
  email: string;
  nombre: string;
  login: (correo: string, contrasenia: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);
