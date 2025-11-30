import React from "react";
import { Link } from "react-router-dom";
import { Container, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Tutorial() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <header className="cabecalho-principal">
              <h4 className="titulo-cabecalho">Tutorial</h4>
              <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/suporte" className="botao-suporte">
                      Suportes
                  </Link>
                  <Link to="/home" className="botao-suporte">
                    Home
                  </Link>
              </div>
            </header>

      <Container className="container-tutorial">
          
            <h1 className="titulo-principal text-center">
              VB-MAPP
            </h1>
            <p className="lead mt-3 text-center">
              Guia rápido para aplicação do teste em crianças até 18 meses.
            </p>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", textAlign: "center"}}>
              Tutorial — Crianças até 18 meses
            </h2>
            <Card className="objetivo-geral">
              <h4 className="mb-3 text-center fw-bold">Objetivo Geral</h4>
              
              <p>
                O VB-MAPP avalia habilidades iniciais de comunicação, imitação,
                atenção conjunta e comportamento social.  
                A faixa de <b>0 a 18 meses</b> corresponde ao início do Marco do
                Desenvolvimento.
              </p>
            </Card>
              <div className="item-tutorial passo-1">
                <h4 className="mt-4">1. Preparação do Ambiente</h4>
                <ul className="lista">
                  <li>Ambiente calmo e sem distrações.</li>
                  <li>Brinquedos simples: chocalho, blocos, bola pequena.</li>
                  <li>A criança deve estar confortável e acompanhada do
                  responsável.</li>
                </ul>
              </div>

              <div className="item-tutorial passo-2">
                <h4 className="mt-4">2. Habilidades Avaliadas</h4>
                <p>Os principais itens para essa idade são:</p>
                <ul className="lista">
                  <li>Contato visual espontâneo.</li>
                  <li>Respostas a sons e estímulos simples.</li>
                  <li>Imitação motora básica.</li>
                  <li>Alcance por objetos.</li>
                  <li>Balbucio espontâneo.</li>
                </ul>
              </div>
              
              <div className="item-tutorial passo-3">
                <h4 className="mt-4">3. Como Aplicar</h4>
                <ol className="lista">
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
              </div>
              
              <div className="item-tutorial passo-4">
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
              </div>
              
              <div className="item-tutorial passo-5">
                <h4 className="mt-4">5. Observações Importantes</h4>
                <ul className="lista">
                  <li>O teste não é diagnóstico.</li>
                  <li>Evite pressionar a criança ou repetir excessivamente.</li>
                  <li>Sempre mantenha o ambiente seguro e confortável.</li>
                </ul>
              </div>
              <div className="container-botoes">
                <Link to="/login" className="botao-voltar">
                  Voltar ao Login
                </Link>
              </div>
              

              
            
      </Container>
    </div>
  );
}
