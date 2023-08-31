import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { axiosAuth } from "../../services/usuario.service";
import { AuthResponse, Register, UserLogin } from "../../types";
import { useNavigate } from "react-router";
import Cookie from "js-cookie";
import axios from "axios";

interface Props {
  children: ReactNode;
}

const token = Cookie.get("token");

export const AuthProvider = ({ children }: Props) => {
  const [tokenApi, setTokenApi] = useState<string | undefined>(
    token ? token : ""
  );

  const navigate = useNavigate();

  const register = async ({
    username,
    email,
    password,
    direction,
    specialty,
    phone,
  }: Register): Promise<void> => {
    try {
      await axiosAuth.post("/auth/local/register", {
        username,
        email,
        password,
        direction,
        specialty,
        phone,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async ({ identifier, password }: UserLogin): Promise<void> => {
    try {
      const { data } = await axiosAuth.post<AuthResponse>("/auth/local", {
        identifier,
        password,
      });

      navigate("/register-pets");
      if (data.jwt) {
        Cookie.set("token", data.jwt, { expires: 5 });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data.error.message);
      }
    } finally {
      const token = Cookie.get("token");
      if (token) {
        setTokenApi(token);
      }
    }
  };
  const logout = () => {
    Cookie.remove("token");
    window.location.reload();
    window.location.href = "/";
  };
  return (
    <AuthContext.Provider value={{ register, login, tokenApi, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
