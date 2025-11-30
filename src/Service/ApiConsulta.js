import axios from 'axios';

const API_BASE = "http://localhost:8080/api/consultas"; // ajuste conforme seu back

export const listarConsultas = async (pacienteId) => {
  try {
    const response = await axios.get(`${API_BASE}?pacienteId=${pacienteId}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const criarConsulta = async (pacienteId, dto) => {
  try {
    const response = await axios.post(`${API_BASE}/${pacienteId}`, dto);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
