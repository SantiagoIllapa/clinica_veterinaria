export interface Pet {
  id: string;
  namePet: string;
  agePet: string;
  breedPet: string;
  nameOwner: string;
  email: string;
  symptoms: string;
  dateEntry: string;
  dateLeaving: string;
  observations: string;
  uniqueCode: string;
  error: boolean;
}

export interface Register {
  username:  string;
  email:     string;
  password:  string;
  direction: string;
  specialty: string;
  phone:     string;
}

export interface AuthResponse {
	jwt: string;
	user: User;
}

export interface User {
	id: number;
	username: string;
	email: string;
	nivel: string;
	provider: string;
	confirmed: boolean;
	blocked: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserLogin {
  identifier: string;
  password: string;
}