export interface Pet {
  id: string;
  namePet: string;
  agePet: string;
  breedPet: string;
  nameOwner: string;
  email: string;
  symptoms: string;
  datePet: string;
  dateEntry: string;
  dateLeaving: string;
  observations: string;
  uniqueCode: string;
  error: boolean;
}

export interface RegisterPet {
  id: string;
  namePet: string;
  agePet: string;
  breedPet: string;
  nameOwner: string;
  email: string;
  symptoms: string;
  datePet: DatePet[];
  uniqueCode: string;
  error: boolean;
}

export interface DatePet {
  dateEntry: string;
  dateLeaving: string;
  observations: string;
}
