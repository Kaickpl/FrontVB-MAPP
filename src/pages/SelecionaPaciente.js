import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Calendar, ArrowRight, Users } from "lucide-react";
import api from "../Service/Api";


import "./Home.css";
import { listarPacientest } from "../Service/ApiPaciente";

export default function SelecionaPaciente() {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  
  const carregarPacientes = useCallback(async () => {
    try {
      setLoading(true);
      const dados = await listarPacientest();
      setLista(dados || []);
    } catch (error) {
      alert("Erro ao carregar pacientes");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);



  useEffect(() => {
    carregarPacientes();
  }, [carregarPacientes]);


  const selecionarPaciente = (paciente) => {
    localStorage.setItem("pacienteSelecionadoId", paciente.idPaciente);
    localStorage.setItem("pacienteSelecionadoNome", paciente.nomePaciente);

    console.log("Paciente Selecionado:", paciente.nomePaciente);

    navigate("/Protocolo");
  };

  const definirAvatar = (genero) => {
    if (!genero) return "👤";

    const g = genero.toLowerCase();

    if (g === "masculino") return "👦🏽";
    if (g === "feminino") return "👧🏽";
  };

  async function gerarRelatorio(paciente) {
    try {
      console.log(paciente);

      const response = await api.get(`/consultas/relatorio/${paciente.idPaciente}`);

      const dados = response.data;

      navigate(`/relatorio/${paciente.idPaciente}`, {
        state: dados
      });

    } catch (error) {
      console.error("Erro ao gerar relatório:", error);
    }
  }

  return (
    <div className="container-principal">
      <header className="cabecalho-principal">
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Users color="white" size={28} />
          <h4 className="titulo-cabecalho">Pacientes</h4>
        </div>

        <div
          className="etiqueta-destaque"
          style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
        >
          Lista Geral
        </div>
      </header>

      <main className="conteudo-pagina">
        <div className="secao-apresentacao" style={{ marginBottom: "30px" }}>
          <h2
            style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#1e293b" }}
          >
            Quem vamos avaliar hoje?
          </h2>
          <p style={{ color: "#64748b" }}>
            Selecione um paciente abaixo para iniciar ou continuar o protocolo
            VB-MAPP.
          </p>
        </div>

        {loading ? (
          <p style={{ textAlign: "center", color: "#64748b" }}>
            Carregando pacientes...
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {lista.map((p) => (
              <div
                key={p.idPaciente}
                className="cartao-contexto"
                style={{
                  padding: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderLeft: "5px solid #3b82f6",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#e0f2fe",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                      }}
                    >
                      {definirAvatar(p.genero)}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                          color: "#1e293b",
                          margin: 0,
                        }}
                      >
                        {p.nomePaciente}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "#64748b",
                        }}
                      >
                        ID: {p.idPaciente}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      color: "#475569",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <User size={16} color="#3b82f6" />
                      <span style={{ fontSize: "0.9rem" }}>
                        Responsável:{" "}
                        <strong>{p.responsavel || "Não informado"}</strong>
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Calendar size={16} color="#3b82f6" />
                      <span style={{ fontSize: "0.9rem" }}>
                        Nascimento: {p.dataNascimento || "Não informado"}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => selecionarPaciente(p)}
                  className="botao-acao"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  Iniciar Protocolo <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => gerarRelatorio(p)}
                  className="botao-acao"
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  Gerar Relatório <ArrowRight size={18} />
                </button>
              </div>
            ))}

            <Link to="/Infopaciente" className="botao-acao">
              + Adicionar paciente <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
