import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Certifique-se de que o CSS do Bootstrap está importado

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [matricula, setMatricula] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    // ### Lógica de Validação Local (Frontend) ###
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!"); // Exemplo simples, use um feedback melhor
      return;
    }

    // Por enquanto, apenas para demonstração de navegação:
    alert("Cadastro simulado realizado com sucesso! Redirecionando para o Login.");
    navigate("/login"); // Redireciona para a tela de login após o cadastro
  };

  return (
    // Opcionalmente, pode remover o `minHeight: "100vh"` daqui se for usar um layout mais complexo,
    // mas mantive para garantir que o fundo branco cubra a tela.
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      {/* Cabeçalho colorido */}
      <div
        style={{
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
        <h4 style={{ color: "#000", fontWeight: "bold", margin: 0 }}>
          Cadastro
        </h4>
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
      </div>

      <Container className="mt-5">
        <Row className="justify-content-center align-items-start"> 
          
          <Col md={6} className="d-none d-md-block" style={{paddingRight: '20px'}}>
            <h1 className="mt-5" style={{ fontSize: '8em', fontWeight: '800' }}>
                VB-MAPP
            </h1>
            <p className="lead mt-3">
                Preencha seus dados para criar sua conta e começar a usar o sistema agora mesmo.
            </p>
            {/* Você pode adicionar uma imagem ou outra informação aqui */}
            
          </Col>

          {/* Coluna da Direita (Contém o seu formulário de Cadastro) */}
          <Col xs={12} md={6} className="d-flex flex-column align-items-center">
            
            {/* O cabeçalho e o Card foram movidos para dentro desta coluna */}
            <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>
              Criar Nova Conta
            </h2>

            <Card style={{ width: "100%", maxWidth: "500px", padding: "20px" }}>
              <Form onSubmit={handleCadastro}>
                {/* Campo Nome */}
                <Form.Group className="mb-3" controlId="formBasicNome">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Campo Email */}
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
                
                {/* Campo Matrícula - Não mudei o tipo "email" se você usa ele para algo específico */}
                <Form.Group className="mb-3" controlId="formBasicMatricula">
                  <Form.Label>Matrícula</Form.Label>
                  <Form.Control
                    type="text" // Alterei de 'email' para 'text' para matrículas, ajuste se for um e-mail.
                    placeholder="Digite seu número de matrícula"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Campo Senha */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Crie uma senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Campo Confirmar Senha */}
                <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                  <Form.Label>Confirmar Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirme sua senha"
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
                    Cadastrar
                  </Button>
                </div>

                <Row className="mt-3">
                  <Col className="text-center">
                    <Link to="/login" style={{ fontSize: "0.9em" }}>
                      Já tem conta? Faça Login
                    </Link>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}