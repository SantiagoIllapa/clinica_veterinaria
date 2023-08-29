import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(data.email, data.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

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
                Login
              </label>
              <form className="mt-10" onSubmit={handleLogin}>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    style={{ padding: '10px' }}
                  />
                </div>

                <div className="mt-7">
                <label>Contraseña</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    style={{ padding: '10px' }}
                  />
                </div>

                <div className="mt-7 flex">
                  <label
                    htmlFor="remember_me"
                    className="inline-flex items-center w-full cursor-pointer"
                  >
                    <input
                      id="remember_me"
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      name="remember"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Recuerdame
                    </span>
                  </label>

                  <div className="w-full text-right">
                    <a
                      className="underline text-sm text-gray-600 hover:text-gray-900"
                      href="#"
                    >
                      ¿Olvidó su contraseña?
                    </a>
                  </div>
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="bg-blue-500 w-full py-3 px-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Login
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">¿Eres nuevo?</label>
                    <Link
                      to="/auth/register"
                      className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Crea una cuenta
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
