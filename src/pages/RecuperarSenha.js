import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Home.css';

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  if (novaSenha !== confirmarSenha) {
    alert("As senhas não coincidem");
    return;
  }

  try {

    console.log("ENVIANDO:", {
      email,
      novaSenha,
      confirmaSenha: confirmarSenha
    });

    const response = await fetch("http://localhost:8080/api/aluno/recuperarSenha", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email,
        novaSenha: novaSenha,
        confirmaSenha: confirmarSenha
      })
    });

    if (!response.ok) {
      const texto = await response.text();
      console.log("❌ ERRO BACK:", texto);
      throw new Error(texto);
    }

    const data = await response.json();
    console.log("✅ OK:", data);

    alert("Senha alterada com sucesso!");

  } catch (error) {
    console.error("❌ ERRO FRONT:", error.message);
    alert("Erro ao atualizar senha");
  }
};


  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      
      <header className="cabecalho-principal">
              <h4 className="titulo-cabecalho">Recuperar senha</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/tutorial" className="botao-suporte">
                      Tutorial
                  </Link>
                  <Link to="/suporte" className="botao-suporte">
                      Suporte
                  </Link>
              </div>
            </header>

      {/* Corpo da página */}
      <Container className="mt-5">
        <Row className="justify-content-center align-items-start">

          {/* Lado esquerdo - Tutorial */}
          <Col md={6} className="mb-4">
            <h1 style={{ fontWeight: "900", fontSize: "3em" }}>
              Recuperar Senha
            </h1>

            <p className="mt-3" style={{ fontSize: "1.1em" }}>
              Para sua segurança, sua nova senha deve seguir as regras abaixo:
            </p>

            <ul style={{ fontSize: "1.05em", lineHeight: "1.6" }}>
              <li>✔ Pelo menos <strong>8 caracteres</strong></li>
              <li>✔ Pelo menos <strong>1 letra maiúscula</strong></li>
              <li>✔ Pelo menos <strong>1 letra minúscula</strong></li>
              <li>✔ Pelo menos <strong>1 número</strong></li>
              <li>✔ Pelo menos <strong>1 símbolo</strong> (! . @ # $ % &)</li>
            </ul>

            <p className="mt-3">
              Após preencher o formulário ao lado, sua senha será atualizada
              (simulação até que o backend esteja pronto).
            </p>
          </Col>

          {/* Lado direito - Formulário */}
          <Col md={5}>
            <Card style={{ width: "100%", padding: "20px" }}>
              <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nova Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Crie sua nova senha"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Confirmar Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repita a nova senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: "#000",
                      border: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Atualizar Senha
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
