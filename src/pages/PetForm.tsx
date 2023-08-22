import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Pet, RegisterPet } from "../types";
import { generateId, generateUniqueCode } from "../utils";
import { ToastContainer, toast } from "react-toastify";
import { usePet } from "../hooks/usePet";
import { Header } from "../components/Header";

export const PetForm = () => {
  const [pet, setPet] = useState<Pet>({
    id: generateId(),
    namePet: "",
    agePet: "",
    breedPet: "",
    nameOwner: "",
    email: "",
    symptoms: "",
    datePet: "",
    dateEntry: "",
    dateLeaving: "",
    observations: "",
    uniqueCode: "",
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

  const { registerPet, editDate, editDatePet, setEditDate } = usePet();

  useEffect(() => {
    if (Object.keys(editDate).length > 0) {
      setPet(editDate);
    }
  }, [editDate]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPet({
      ...pet,
      [event.target.name]: event.target.value,
    });
  };

  pet.uniqueCode = generateUniqueCode(pet);
  console.log(pet);

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

    if (editDate.id) {
      editDatePet(pet);
      setEditDate({} as RegisterPet);
    } else {
      console.log(pet.uniqueCode);
      registerPet(pet);
    }

    setPet({
      ...pet,
      id: generateId(),
      namePet: "",
      agePet: "",
      breedPet: "",
      nameOwner: "",
      email: "",
      symptoms: "",
      datePet: [
        {
          dateEntry: "",
          dateLeaving: "",
          observations: "",
        },
      ],
      uniqueCode: "",
      error: false,
    });
  };
  return (
    <div className="flex flex-col">
      <Header />
      <h2 className="text-center font-bold m-3">Formulario</h2>
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
        className="flex flex-col m-auto sm:flex-col w-full sm:w-1/2"
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
          Fecha de entrada
        </label>
        <input
          type="date"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Fecha"
          name={`${datePet[0].dateEntry}`}
          value={datePet[0].dateEntry}
          onChange={handleChange}
        />
        <label htmlFor="datePet" className="font-bold">
          Fecha de salida
        </label>
        <input
          type="date"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Fecha"
          name={`${datePet[0].dateLeaving}`}
          value={datePet[0].dateLeaving}
          onChange={handleChange}
        />
        <label htmlFor="datePet" className="font-bold">
          Obervaciones médicas
        </label>
        <textarea
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Fecha"
          name={`${datePet[0].observations}`}
          value={datePet[0].observations}
          onChange={handleChange}
        />
        <button
          type="submit"
          className=" font-bold uppercase bg-indigo-500 py-2 rounded-lg text-cyan-100 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none mt-3 mb-3"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
