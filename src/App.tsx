import { Header } from './components/Header'
import { Patient } from './components/Patient';
import { PetForm } from './components/PetForm';
import { useDatePet } from './hooks/useDatePet'

function App() {

  const { registerPet, listPet, editDate, setEditDate, deleteDatePet, editDatePet } = useDatePet();

  return (
    <div className="container mx-auto">
      <Header />
      <div className=" flex flex-col sm:flex-row">
        <div className="ml-8 mr-3 sm:w-1/2 ">
          <PetForm registerPet={registerPet} editDate={editDate} editDatePet={editDatePet} setEditDate={setEditDate} />
        </div>
        <div className="ml-8 mr-3 sm:w-1/2 ">
          <Patient listPet={listPet} setEditDate={setEditDate} deleteDatePet={deleteDatePet} />
        </div>
      </div>
    </div>
  )
}

export default App
