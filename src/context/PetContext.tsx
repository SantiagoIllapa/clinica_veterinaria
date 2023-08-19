import { createContext } from "react";
import { Pet } from "../types";

interface PetContextProps {
  listPet: Pet[];
  registerPet: (pet: Pet) => void;
  editDate: Pet;
  editDatePet: (pet: Pet) => void;
  setEditDate: (pet: Pet) => void;
  deleteDatePet: (id:string) => void
  searchResultPet: (code:string) => void
  searchPet: Pet
}

export const PetContext = createContext({} as PetContextProps);
