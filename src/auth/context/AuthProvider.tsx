import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { usuarioService } from "../../services/usuario.service";
interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [status, setStatus] = useState<string>("not-authenticated");
  const [email, setEmail] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");

  const login = (correo: string, contrasenia: string) => {
    setStatus("authenticated");
    usuarioService.login(correo, contrasenia).then(res => {
      setEmail(res.usuario.email);
      setNombre(res.usuario.nombre);
    });
    //codigo para loguearse en el sistema
  };

  const logout = () => {
    setStatus("not-authenticated");

    //codigo para desloguearse del sistema
  };

  return (
    <AuthContext.Provider
      value={{
        status,
        email,
        nombre,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
