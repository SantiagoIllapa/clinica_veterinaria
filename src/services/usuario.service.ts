import { axiosClient } from "./api";

export const usuarioService = {
  async login(correoElectronico: string, contrasenia: string) {
    const { data } = await axiosClient.post("/usuario/login", {
      correoElectronico,
      contrasenia,
    });
    return data;
  },
  async register(email: string, password: string) {
    const { data } = await axiosClient.post("/usuario/register", {
      email,
      password,
    });
    return data;
  },
  async renewSesion() {
    const { data } = await axiosClient.get("/usuario/renew");
    return data;
  },
};
