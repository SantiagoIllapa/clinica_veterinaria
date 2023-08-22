import { createContext } from "react";
import { Pet, RegisterPet } from "../types";

interface PetContextProps {
  listPet: RegisterPet[];
  registerPet: (pet: Pet) => void;
  editDate: RegisterPet;
  editDatePet: (pet: Pet) => void;
  setEditDate: (pet: RegisterPet) => void;
  deleteDatePet: (id:string) => void
  searchResultPet: (code:string) => void
  searchPet: RegisterPet
}

export const PetContext = createContext({} as PetContextProps);
