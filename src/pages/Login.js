import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/home");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <div style={{
          width: "100%",
          height: "60px",
          background:
            "linear-gradient(90deg, rgba(255,79,79,1) 0%, rgba(97,171,255,1) 50%, rgba(140,255,122,1) 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
        }}
      >
        <h4 style={{ color: "#000", fontWeight: "bold", margin: 0 }}>Login</h4>
        <Link
          to="/suporte"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "0.9em",
            fontWeight: "500",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#222")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
        >
          Suporte
        </Link>
        <Link
          to="/tutorial"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "0.9em",
            fontWeight: "500",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#222")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
        >
          Tutorial
        </Link>
      </div>

      <Container className="d-flex flex-column align-items-center mt-5">

        <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>
          Protocolo VB-MAPP
        </h2>

        <Card style={{ width: "100%", maxWidth: "400px", padding: "20px" }}>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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
                Logar
              </Button>
            </div>

            <Row className="mt-3">
              <Col className="text-start">
                <Link to="/RecuperarSenha" style={{ fontSize: "0.9em" }}>
                  Esqueceu a senha?
                </Link>
              </Col>
              <Col className="text-end">
                <Link to="/Cadastro" style={{ fontSize: "0.9em" }}>
                  Não tem conta?
                </Link>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
