import { Patient } from "../components/Patient";
import { usePet } from "../hooks/usePet";

export const PetListPage = () => {
  const { listPet, setEditDate, deleteDatePet } = usePet();
  return (
    <Patient
      listPet={listPet}
      setEditDate={setEditDate}
      deleteDatePet={deleteDatePet}
    />
  );
};
