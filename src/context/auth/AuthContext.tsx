import { createContext } from "react";
import { Register, UserLogin } from "../../types";

interface AuthContextProps {
  register: ({
    username,
    email,
    password,
    direction,
    specialty,
    phone,
  }: Register) => Promise<void>
  login: ({ identifier, password }: UserLogin) => Promise<void>;
  tokenApi: string | undefined;
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextProps);
