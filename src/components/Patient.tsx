import { Pet } from "../types";
import { PetList } from "./PetList";

interface Props {
  listPet: Pet[];
  setEditDate: (pet: Pet) => void;
  deleteDatePet: (id: string) => void;
}

export const Patient = ({ listPet, setEditDate, deleteDatePet }: Props) => {
  return (
    <div className="md:h-screen overflow-y-scroll">
      {listPet.length ? (
        <>
          <h2 className="font-black text-3xl  text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-zinc-600 font-bold "> pacientes y citas</span>
          </p>
          {listPet.map(date => (
            <PetList date={date} key={date.id} setEditDate={setEditDate} deleteDatePet={deleteDatePet} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl  text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            No hay{" "}
            <span className="text-zinc-600 font-bold ">
              {" "}
              pacientes ni citas
            </span>
          </p>
        </>
      )}
    </div>
  );
};
