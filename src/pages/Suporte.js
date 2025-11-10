import React from "react";
import { Container, Form, Button, Card, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Suporte() {
  return (
    <>
      {/* 🔹 Cabeçalho fixo no topo */}
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="shadow-sm"
        style={{ padding: "10px 40px" }}
      >
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", color: "#00796b" }}>
          Suporte Técnico
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: "#00796b" }}>
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/suporte" style={{ color: "#00796b", fontWeight: "bold" }}>
              Suporte
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* 🔹 Conteúdo da página de suporte */}
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
          padding: "30px",
          paddingTop: "100px", // espaço pro cabeçalho fixo
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "550px",
            padding: "25px 30px",
            borderRadius: "20px",
            boxShadow: "0 8px 18px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffffcc",
            backdropFilter: "blur(6px)",
          }}
        >
        
          <p className="text-center text-muted mb-4">
            Preencha o formulário abaixo para relatar um problema ou enviar uma dúvida.
          </p>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="exemplo@email.com" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Assunto</Form.Label>
              <Form.Control type="text" placeholder="Ex: Erro ao fazer login" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantas vezes o problema ocorreu?</Form.Label>
              <Form.Control type="number" placeholder="Ex: 2" min="1" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Descreva o problema..."
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <Button
                variant="success"
                type="submit"
                style={{
                  padding: "8px 25px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  backgroundColor: "#00796b",
                  border: "none",
                }}
              >
                Enviar
              </Button>

              <Link
                to="/tutorial"
                style={{
                  textDecoration: "none",
                  color: "#004d40",
                  fontWeight: "600",
                }}
              >
                Ver tutorial VB-MAPP →
              </Link>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default Suporte;
