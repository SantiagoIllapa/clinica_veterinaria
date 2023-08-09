import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Pet } from "../types";
import { generateId } from "../utils";
import { ToastContainer, toast } from "react-toastify";

interface Props {
    registerPet:(pet: Pet) => void
    editDate: Pet
    editDatePet: (pet: Pet) => void,
    setEditDate: (pet: Pet) => void
}

export const PetForm = ({registerPet, editDate, editDatePet, setEditDate}: Props) => {
  const [pet, setPet] = useState<Pet>({
    id: generateId(),
    namePet: "",
    agePet: "",
    breedPet: "",
    nameOwner: "",
    email: "",
    symptoms: "",
    datePet: "",
    error: false,
  });
  const {
    namePet,
    agePet,
    breedPet,
    nameOwner,
    email,
    symptoms,
    datePet,
    error,
  } = pet;

  /*useEffect(() => {
    if (Object.keys(editDate).length > 0) {
      setPet(editDate);
    }
    console.log(editDate);
  }, [editDate])*/

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      [namePet, agePet, breedPet, nameOwner, email, symptoms, datePet].includes(
        ""
      )
    ) {
      setPet({
        ...pet,
        error: true,
      });
      toast.warn("Todos los campos son obligatorios", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setPet({
      ...pet,
      error: false,
    });
    registerPet(pet);
    /*if (editDate.id) {
      editDatePet(pet);
      setEditDate({} as Pet);
    } else {
      
    }*/

    setPet({
      ...pet,
      id: generateId(),
      namePet: "",
      agePet: "",
      breedPet: "",
      nameOwner: "",
      email: "",
      symptoms: "",
      datePet: "",
    });
  };
  return (
    <>
      <h2 className="text-center font-bold">Formulario</h2>
      {error && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
      <form
        className="flex flex-col sm:flex-col w-full"
        onSubmit={handleSubmit}
      >
        <label htmlFor="namePet" className="font-bold">
          Nombre mascota
        </label>
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Nombre de la mascota"
          value={namePet}
          name="namePet"
          onChange={handleChange}
        />
        <label htmlFor="egePet">
          <span className="font-bold text-inherit">Edad mascota</span> (dias,
          semanas, meses o años)
        </label>
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Edad de la mascota"
          name="agePet"
          value={agePet}
          onChange={handleChange}
        />
        <label htmlFor="breedPet" className="font-bold">
          Raza
        </label>
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Raza de la mascota"
          name="breedPet"
          value={breedPet}
          onChange={handleChange}
        />
        <label htmlFor="nameOwner" className="font-bold">
          Nombre dueño
        </label>
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Nombre del dueño"
          name="nameOwner"
          value={nameOwner}
          onChange={handleChange}
        />
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          type="email"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="symptoms" className="font-bold">
          Sintomas
        </label>
        <textarea
          name="symptoms"
          id="symptoms"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Sintomas"
          value={symptoms}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="datePet" className="font-bold">
          Fecha
        </label>
        <input
          type="date"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Fecha"
          name="datePet"
          value={datePet}
          onChange={handleChange}
        />
        <button
          type="submit"
          className=" font-bold uppercase bg-indigo-600 py-2 rounded-lg text-cyan-100 hover:bg-indigo-500 mt-3 mb-3"
        >
          Enviar
        </button>
      </form>
    </>
  );
};
