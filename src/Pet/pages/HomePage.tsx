import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const HomePage = () => {
  const { nombre } = useContext(AuthContext);

  return (
    <div className="mx-auto flex justify-center items-center w-full mt-16">
      {/* Columna de la izquierda (foto) */}
      <div className="flex-shrink-0 p-4">

      </div>

      {/* Columna de la derecha (descripción) */}
      <div className="p-4">
        <h1 className="text-4xl">¡Bienvenido!</h1><br/>
        <p className="mt-2 text-lg">
          En nuestra clínica, estamos comprometidos con la salud y el bienestar de tus adorables compañeros peludos. Sabemos que tus mascotas son más que simples animales; son miembros valiosos de tu familia. Es por eso que nos enorgullece brindar atención veterinaria de alta calidad con un toque personal.
          </p>
          <p className="mt-2 text-lg">
          Nuestro equipo de veterinarios altamente calificados y apasionados está aquí para ofrecerte una gama completa de servicios médicos y cuidados para tus mascotas. Desde consultas regulares hasta tratamientos especializados, estamos listos para cuidar a tus amigos de cuatro patas en todas las etapas de su vida.
          </p>
          <p className="mt-2 text-lg">
          En la Clínica Veterinaria "La Quinta Pata del Gato", entendemos que cada mascota es única y merece atención individualizada. Nos tomamos el tiempo para escuchar tus preocupaciones y responder a todas tus preguntas, asegurando que tengas la información que necesitas para tomar decisiones informadas sobre la salud de tu mascota.        
          </p>
      </div>
    </div>
  );
};
