import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";


export default function Home() {
  const [mostrarPacientes, setMostrarPacientes] = useState(false);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      
      {/* HERO */}
      <div className="hero"></div>

      {/* CABEÇALHO IGUAL AO LOGIN */}
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
          Página Inicial
        </h4>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link
            to="/suporte"
            style={{
              backgroundColor: "#1E90FF",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9em",
              fontWeight: "500",
            }}
          >
            Suporte
          </Link>

          <Link
            to="/tutorial"
            style={{
              backgroundColor: "#1E90FF",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9em",
              fontWeight: "500",
            }}
          >
            Tutorial
          </Link>
        </div>
      </div>

      {/* CONTEÚDO */}
      <Container className="mt-5">
        <h2 style={{ fontWeight: "bold", marginBottom: "25px" }}>
          Bem-vindo ao VB-MAPP Digital
        </h2>

        <Card
          style={{
            padding: "20px",
            marginBottom: "30px",
            borderLeft: "5px solid #1E90FF",
          }}
        >
          <h4>O que é o VB-MAPP?</h4>
          <p style={{ marginTop: "10px" }}>
            O VB-MAPP é um protocolo de avaliação baseado nos princípios da ABA,
            usado para identificar marcos de desenvolvimento e barreiras de
            aprendizagem.
          </p>
        </Card>

        {/* CARDS */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* REALIZAR ATIVIDADE */}
          <Card
            style={{
              width: "250px",
              padding: "20px",
              textAlign: "center",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h5>Realizar Atividade</h5>
            <p style={{ fontSize: "0.9em" }}>
              Inicie uma nova atividade do protocolo VB-MAPP.
            </p>
            <Link to="/realizar-atividade" target="_blank">
              <Button variant="dark" style={{ width: "100%" }}>
                Abrir em nova guia
              </Button>
            </Link>
          </Card>

          {/* MOSTRAR PACIENTES */}
          <Card
            style={{
              width: "250px",
              padding: "20px",
              textAlign: "center",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h5>Alunos Cadastrados</h5>
            <p style={{ fontSize: "0.9em" }}>
              Clique para ver seus pacientes aqui mesmo.
            </p>

            <Button
              variant="dark"
              style={{ width: "100%" }}
              onClick={() => setMostrarPacientes(!mostrarPacientes)}
            >
              Mostrar Pacientes
            </Button>
          </Card>

          {/* INFORMAÇÕES PACIENTE */}
          <Card
            style={{
              width: "250px",
              padding: "20px",
              textAlign: "center",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h5>Informações dos Pacientes</h5>
            <p style={{ fontSize: "0.9em" }}>
              Consulte informações detalhadas.
            </p>
            <Link to="/info-paciente" target="_blank">
              <Button variant="dark" style={{ width: "100%" }}>
                Abrir em nova guia
              </Button>
            </Link>
          </Card>
        </div>

        {/* LISTA DE PACIENTES */}
        {mostrarPacientes && (
          <Card
            style={{
              marginTop: "30px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Pacientes Cadastrados</h4>

            <ul style={{ marginTop: "15px" }}>
              <li>João Pedro - 5 anos</li>
              <li>Ana Clara - 4 anos</li>
              <li>Lucas Henrique - 6 anos</li>
            </ul>
          </Card>
        )}
      </Container>
    </div>
  );
}
