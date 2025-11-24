import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Tutorial() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <header className="cabecalho-principal">
              <h4 className="titulo-cabecalho">Tutorial</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/suporte" className="botao-suporte">
                      Suporte
                  </Link>
                  <Link to="/home" className="botao-suporte">
                    Home
                  </Link>
              </div>
            </header>

      {/* Conteúdo principal */}
      <Container className="mt-5">
        <Row className="justify-content-center align-items-start">
          {/* Coluna da esquerda */}
          <Col
            md={6}
            className="d-none d-md-block"
            style={{ paddingRight: "20px" }}
          >
            <h1
              className="mt-5"
              style={{ fontSize: "6em", fontWeight: "800", lineHeight: "0.9" }}
            >
              VB-MAPP
            </h1>
            <p className="lead mt-3">
              Guia rápido para aplicação do teste em crianças até 18 meses.
            </p>
          </Col>

          {/* Coluna da direita (conteúdo do tutorial) */}
          <Col xs={12} md={6} className="d-flex flex-column align-items-center">
            <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>
              Tutorial — Crianças até 18 meses
            </h2>

            <Card style={{ width: "100%", maxWidth: "500px", padding: "20px" }}>
              <h4 className="mb-3">Objetivo Geral</h4>
              <p>
                O VB-MAPP avalia habilidades iniciais de comunicação, imitação,
                atenção conjunta e comportamento social.  
                A faixa de **0 a 18 meses** corresponde ao início do Marco do
                Desenvolvimento.
              </p>

              <h4 className="mt-4">1. Preparação do Ambiente</h4>
              <ul>
                <li>Ambiente calmo e sem distrações.</li>
                <li>Brinquedos simples: chocalho, blocos, bola pequena.</li>
                <li>A criança deve estar confortável e acompanhada do
                responsável.</li>
              </ul>

              <h4 className="mt-4">2. Habilidades Avaliadas</h4>
              <p>Os principais itens para essa idade são:</p>
              <ul>
                <li>Contato visual espontâneo.</li>
                <li>Respostas a sons e estímulos simples.</li>
                <li>Imitação motora básica.</li>
                <li>Alcance por objetos.</li>
                <li>Balbucio espontâneo.</li>
              </ul>

              <h4 className="mt-4">3. Como Aplicar</h4>
              <ol>
                <li>
                  Mostre um brinquedo e observe se a criança olha para você.
                </li>
                <li>
                  Balance um chocalho e aguarde qualquer reação direcionada.
                </li>
                <li>
                  Bata palma e observe se ela tenta imitar o movimento.
                </li>
                <li>
                  Ofereça um brinquedo e veja se ela tenta pegar ou tocar.
                </li>
                <li>
                  Fale sons simples (“pa”, “ma”) e observe tentativa de
                  repetição.
                </li>
              </ol>

              <h4 className="mt-4">4. Registro</h4>
              <p>
                Para cada tarefa, marque:
                <br />
                <strong>✔ Realizado</strong> — se a criança fez espontaneamente.
                <br />
                <strong>⚠ Parcial</strong> — se fez com ajuda ou pouca resposta.
                <br />
                <strong>✘ Não realizou</strong> — nenhuma resposta observada.
              </p>

              <h4 className="mt-4">5. Observações Importantes</h4>
              <ul>
                <li>O teste não é diagnóstico.</li>
                <li>Evite pressionar a criança ou repetir excessivamente.</li>
                <li>Sempre mantenha o ambiente seguro e confortável.</li>
              </ul>

              <Link to="/login" className="mt-4 text-center">
                Voltar ao Login
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
