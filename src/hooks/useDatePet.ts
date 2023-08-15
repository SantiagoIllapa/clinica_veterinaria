import { useState } from "react";
import { Pet } from "../types";
import { toast } from "react-toastify";

export const useDatePet = () => {
  const [listPet, setListPet] = useState<Pet[]>([]);
  const [editDate, setEditDate] = useState<Pet>({} as Pet);

  const registerPet = (newPet: Pet): void => {
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
  };
  const editDatePet = (pet: Pet) => {
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
  };

  const deleteDatePet = (id: string) => {
    const deletePet = listPet.filter((item) => item.id !== id);
    setListPet(deletePet);
  };

  return {
    registerPet,
    listPet,
    editDate,
    setEditDate,
    editDatePet,
    deleteDatePet,
  };
};
