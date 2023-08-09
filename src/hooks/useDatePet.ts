import { useState } from "react";
import { Pet } from "../types";

export const useDatePet = () => {
  const [listPet, setListPet] = useState<Pet[]>([]);
  const [editDate, setEditDate] = useState<Pet>({} as Pet);

  const registerPet = (newPet: Pet): void => {
    setListPet([...listPet, newPet]);
  };
  const editDatePet = (pet: Pet) => {
    //TODO
    
  };

  const deleteDatePet = (id: string) => {
    //TODO
    
  };

  return {
    registerPet,
    listPet,
    editDate,
    setEditDate,
    editDatePet,
    deleteDatePet
  };
};
