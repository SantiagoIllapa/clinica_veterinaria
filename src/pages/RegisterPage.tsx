import { ChangeEvent, FormEvent, useState } from "react";
import { Register } from "../types";
import { useAuth } from "../hooks/useAuth";

export const RegisterPage = () => {
  const [registerUser, setRegisterUser] = useState<Register>({
    username: "",
    email:"",
    password:"",
    direction:"",
    specialty:"",
    phone:""
  });

  const { register } = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({
      ...registerUser,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register(registerUser)
  }
  
  return (
    <>
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor=""
                className="block mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Registrate
              </label>
              <form onSubmit={handleSubmit} className="mt-10">
                <div>
                  <input
                    type="text"
                    placeholder="Nombres"
                    name="username"
                    onChange={handleChange}
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="email"
                    placeholder="Correo electronico"
                    onChange={handleChange}
                    name="email"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    name="password"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="text"
                    name="direction"
                    placeholder="Dirección"
                    onChange={handleChange}
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="text"
                    name="specialty"
                    placeholder="Especialidad"
                    onChange={handleChange}
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>
                <div className="mt-7">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    onChange={handleChange}
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <button type="submit" className="bg-blue-500 w-full py-3 px-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
