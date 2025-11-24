const API_URL = "http://localhost:8080/api/paciente";

export async function cadastrarPaciente(paciente) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paciente),
  });
  return response.json();
}

export async function listarPacientes(nome) {
  const response = await fetch(`${API_URL}?nome=${nome || ""}`);
  return response.json();
}

export async function deletarPaciente(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function atualizarPaciente(id, pacienteAtualizado) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pacienteAtualizado),
  });
  return response.json();
}
