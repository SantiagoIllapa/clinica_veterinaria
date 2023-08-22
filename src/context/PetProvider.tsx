import { ReactNode, useEffect, useState } from "react";
import { PetContext } from "./PetContext";
import { Pet, RegisterPet } from "../types";
import { toast } from "react-toastify";
import { axiosClient } from "../services/api";
import swal from "sweetalert";

interface Props {
  children: ReactNode;
}

export const PetProvider = ({ children }: Props) => {
  const [listPet, setListPet] = useState<RegisterPet[]>([]);
  const [editDate, setEditDate] = useState<RegisterPet>({} as RegisterPet);
  const [searchPet, setSearchPet] = useState<RegisterPet>({} as RegisterPet);

  const getPets = async (): Promise<void> => {
    const { data } = await axiosClient.get<RegisterPet[]>("/data");
    setListPet(data);
  };

  useEffect(() => {
    getPets();
  }, []);
  const registerPet = async (newPet: Pet): Promise<void> => {
    const pet = {
      id: newPet.id,
      namePet: newPet.namePet,
      agePet: newPet.agePet,
      breedPet: newPet.breedPet,
      nameOwner: newPet.nameOwner,
      email: newPet.email,
      symptoms: newPet.symptoms,
      datePet: [
        {
          dateEntry: newPet?.dateEntry,
          dateLeaving: newPet?.dateLeaving,
          observations: newPet?.observations,
        },
      ],
      uniqueCode: newPet.uniqueCode,
      error: newPet.error,
    };
    try {
      await axiosClient.post("/data", pet);
      setListPet([...listPet, pet]);
      swal(
        "Mascota registrada!",
        `Tu código es: ${newPet.uniqueCode}`,
        "success"
      );
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
      setListPet(newDatePet as RegisterPet[]);
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

  const searchResultPet = (code: string): void => {
    const resultSearchPet = listPet.find((item) => item.uniqueCode === code);
    setSearchPet(resultSearchPet as RegisterPet);
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
        searchResultPet,
        searchPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
