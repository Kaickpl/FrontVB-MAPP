const API_URL = "http://localhost:8080/api/aluno";

export async function cadastrarAluno(aluno) {
  const response = await fetch(`${API_URL}/cadastrar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aluno),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar aluno");
  }

  return await response.json();
}
