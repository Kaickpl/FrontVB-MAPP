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


export async function logarUsuario(email, senha) {
  const response = await fetch(`http://localhost:8080/api/usuario/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (!response.ok) {
    throw new Error("Email ou senha inválidos");
  }

  return await response.json(); 
}

