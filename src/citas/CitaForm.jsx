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
        {/* Campos de formulario */}
        <button type="submit">Crear Cita</button>
      </form>
    </div>
  );
}

export default CitaForm;