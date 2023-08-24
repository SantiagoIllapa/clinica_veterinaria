import { axiosClient } from "./api";

export const mascotaService = {
  async getMascotas() {
    const { data } = await axiosClient.get("/mascota");
    return data;
  },
  async getMascota(id: string) {
    const { data } = await axiosClient.get(`/mascota/${id}`);
    return data;
  },
  async createMascota(mascota: any) {
    const { data } = await axiosClient.post("/mascota", mascota);
    return data;
  },
};
