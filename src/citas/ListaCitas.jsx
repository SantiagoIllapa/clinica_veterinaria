import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaCitas() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/citas');
        setCitas(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            {/* Mostrar detalles de cada cita */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCitas;
