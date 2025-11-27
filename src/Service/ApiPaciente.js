const API_URL = "http://localhost:8080/api/paciente";

async function tratarResposta(response) {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Erro no servidor");
  }

  // se não houver conteúdo (204), retorna null
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function cadastrarPaciente(paciente) {
  const response = await fetch(`${API_URL}/cadastrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paciente),
  });
  return await tratarResposta(response);
}

export async function listarPacientes(nome = "") {
  const url = nome
    ? `${API_URL}?nome=${encodeURIComponent(nome)}`
    : `${API_URL}`;

  const response = await fetch(url);
  return await tratarResposta(response);
}
export async function deletarPaciente(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await tratarResposta(response); // pode retornar null (204)
}

export async function atualizarPaciente(id, pacienteAtualizado) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pacienteAtualizado),
  });
  return await tratarResposta(response);
}
