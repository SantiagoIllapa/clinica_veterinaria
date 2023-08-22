import { Link } from "react-router-dom";
import { Pet, RegisterPet } from "../types";

interface Props {
  date: RegisterPet;
  setEditDate: (pet: Pet) => void;
  deleteDatePet: (id: string) => void;
}

export const PetList = ({ date, setEditDate, deleteDatePet }: Props) => {
  return (
    <>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 ">
          Nombre:{" "}
          <span className="font-normal normal-case"> {date.namePet}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Propietario:{" "}
          <span className="font-normal normal-case"> {date.nameOwner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Email: <span className="font-normal normal-case"> {date.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Raza:{" "}
          <span className="font-normal normal-case"> {date.breedPet}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Fecha alta:{" "}
          <span className="font-normal normal-case"> {String(date.datePet[0].dateLeaving)}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 ">
          Síntomas:{" "}
          <span className="font-normal normal-case"> {date.symptoms}</span>
        </p>
        <div className="flex flex-col sm:justify-between sm:flex-row mt-10">
          <Link
            to="/register-pets"
            className="py-2 px-10 mr-2 bg-gray-600 hover:bg-gray-500 text-white font-bold uppercase rounded-lg"
            onClick={() => setEditDate(date)}
          >
            Editar
          </Link>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 mr-2 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={() => deleteDatePet(date.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
