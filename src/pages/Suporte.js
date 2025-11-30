import { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Home.css';

export default function Suporte() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [vezes, setVezes] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  const handleEnviar = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! (Simulação)");
  };

  return (
    <div className="container-principal">
      <header className="cabecalho-principal">
        <h4 className="titulo-cabecalho">
          Suporte Técnico
        </h4>
          <button
          onClick={() => navigate(-1)}
          className="botao-suporte"
        >
          Voltar
        </button>
      </header>

      <Container className="mt-5">
        <Row className="justify-content-center align-items-start">
          <Col
            md={6}
            className="d-none d-md-block"
            style={{ paddingRight: "20px" }}
          >
            <h1 className="mt-5" style={{ fontSize: "4em", fontWeight: "800" }}>
              Ajuda & Suporte
            </h1>
            <p className="lead mt-3">
              Precisa de ajuda? Envie uma mensagem relatando seu problema ou
              dúvida e nossa equipe retornará o mais breve possível.
            </p>
            <p className="mt-4 text-muted">
              Se preferir, você pode acessar o{" "}
              <Link
                to="/tutorial"
                style={{ color: "#007bff", fontWeight: "500" }}
              >
                tutorial do VB-MAPP
              </Link>{" "}
              para entender melhor o funcionamento do sistema.
            </p>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex flex-column align-items-center"
          >
            <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>
              Fale Conosco
            </h2>

            <Card style={{ width: "100%", maxWidth: "500px", padding: "20px" }}>
              <Form onSubmit={handleEnviar}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Assunto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex: Erro ao fazer login"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quantas vezes o problema ocorreu?</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ex: 2"
                    min="1"
                    value={vezes}
                    onChange={(e) => setVezes(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Descreva o problema..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
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
                    Enviar Mensagem
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
