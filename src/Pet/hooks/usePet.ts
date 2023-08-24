import { useContext } from "react";
import { PetContext } from "../context/PetContext";

export const usePet = () => useContext(PetContext);
