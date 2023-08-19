import { Pet } from "../types";

export const generateId = (): string => {
    const random = Math.random().toString(36);
    const date = Date.now().toString(36);

    return random + date;
}

export const generateUniqueCode = (pet:Pet) => {
    const random = Math.random().toString(32);
    const code = pet.namePet + random;
    return code;
}