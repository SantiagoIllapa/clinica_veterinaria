import { ReactNode, useEffect, useState } from "react";
import { PetContext } from "./PetContext";
import { Pet } from "../types";
import { toast } from "react-toastify";
import { axiosClient } from "../services/api";

interface Props {
  children: ReactNode;
}

export const PetProvider = ({ children }: Props) => {
  const [listPet, setListPet] = useState<Pet[]>([]);
  const [editDate, setEditDate] = useState<Pet>({} as Pet);

  const getPets =async ():Promise<void> => {
      const { data } = await axiosClient.get<Pet[]>("/data");
      setListPet(data);
  }
  
  useEffect(() => {
    getPets();
  }, [listPet]);
  const registerPet = async (newPet: Pet): Promise<void> => {
    try {
      await axiosClient.post("/data", newPet);
      setListPet([...listPet, newPet]);
      toast.success("Registrado correctamente", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const editDatePet = async (pet: Pet): Promise<void> => {
    try {
      await axiosClient.put(`/data/${editDate.id}`, pet);
      const newDatePet = listPet.map((item) =>
        item.id === editDate.id ? pet : item
      );
      setListPet(newDatePet);
      toast.info("Actualizado correctamente", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteDatePet = async (id: string): Promise<void> => {
    try {
      await axiosClient.delete(`/data/${id}`);
      const deletePet = listPet.filter((item) => item.id !== id);
      setListPet(deletePet);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PetContext.Provider
      value={{
        registerPet,
        listPet,
        editDate,
        setEditDate,
        editDatePet,
        deleteDatePet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
