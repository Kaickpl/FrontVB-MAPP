import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './Home.css';
import { cadastrarAluno } from "../Service/ApiAluno";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [matricula, setMatricula] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [periodo,setPeriodo] = useState("");
  const navigate = useNavigate();

 const handleCadastro = async (e) => {
  e.preventDefault();

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  const aluno = {
    nome: nome,
    email: email,
    matricula: matricula,
    telefone: "",
    senha: senha,
    periodo: parseInt(periodo) 
  };

    try {
    await cadastrarAluno(aluno);
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
    
  } catch (error) {
    console.error("Erro:", error);
    alert("Falha ao cadastrar. Verifique os dados e tente novamente.");
  }
  

 
  
};


  return (
    
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
     
      <header className="cabecalho-principal">
        <h4 className="titulo-cabecalho">
          Tela inicial
        </h4>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/suporte" className="botao-suporte">
              Suporte
          </Link>
        </div>
      </header>

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
                {/* Campo Confirmar Senha */}
                <Form.Group className="mb-4" controlId="formBasicPeriodo">
                  <Form.Label>periodo</Form.Label>
                  <Form.Control
                    type="Text"
                    placeholder="Digite em qual Periodo voc~e se encontra"
                    value={periodo}
                    onChange={(e) => setPeriodo(e.target.value)}
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