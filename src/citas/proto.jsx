import React, { useState } from 'react';
import axios from 'axios';

function CitaForm() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('/api/citas', {
        fecha, hora, mascota, propietario, motivo
      });
      // Actualizar la lista de citas o realizar alguna otra acción necesaria
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Cita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mascota">Mascota:</label>
          <input
            type="text"
            id="mascota"
            name="mascota"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="propietario">Propietario:</label>
          <input
            type="text"
            id="propietario"
            name="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="motivo">Motivo:</label>
          <textarea
            id="motivo"
            name="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Cita</button>
      </form>
    </div>
  );
}

export default CitaForm;
