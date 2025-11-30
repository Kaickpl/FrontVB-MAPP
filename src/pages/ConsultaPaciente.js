import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listarConsultas, criarConsulta } from "../Service/ApiConsulta";
import { ArrowLeft, Plus, ArrowRight } from "lucide-react";

export default function ConsultaPaciente() {
  const navigate = useNavigate();
  const [pacienteId, setPacienteId] = useState(null);
  const [pacienteNome, setPacienteNome] = useState("");
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("pacienteSelecionadoId");
    const nome = localStorage.getItem("pacienteSelecionadoNome");

    if (!id) {
      alert("Nenhum paciente selecionado");
      navigate("/selecionar-paciente");
      return;
    }

    setPacienteId(id);
    setPacienteNome(nome);
    carregarConsultas(id);
  }, [navigate]);

  const carregarConsultas = async (id) => {
    try {
      setLoading(true);
      const dados = await listarConsultas(id);
      setConsultas(dados || []);
    } catch (err) {
      console.error(err);
      alert("Erro ao carregar consultas");
    } finally {
      setLoading(false);
    }
  };

  const novaConsulta = async () => {
    try {
      const dto = {
        alunoId: 1, // ID do aluno logado (ou fixe por enquanto)
        data_consulta: new Date()
      };
      await criarConsulta(pacienteId, dto);
      carregarConsultas(pacienteId);
    } catch (err) {
      console.error(err);
      alert("Erro ao criar consulta");
    }
  };

  const selecionarConsulta = (consulta) => {
    localStorage.setItem("consultaSelecionadaId", consulta.consultaId);
    navigate("/protocolo");
  };

  return (
    <div className="container-principal">
      <header className="cabecalho-principal">
        <button onClick={() => navigate(-1)}><ArrowLeft /> Voltar</button>
        <h2>Consultas de {pacienteNome}</h2>
        <button onClick={novaConsulta}><Plus /> Nova Consulta</button>
      </header>

      <main>
        {loading ? (
          <p>Carregando consultas...</p>
        ) : consultas.length === 0 ? (
          <p>Nenhuma consulta encontrada.</p>
        ) : (
          <ul>
            {consultas.map(c => (
              <li key={c.consultaId} onClick={() => selecionarConsulta(c)}>
                Consulta ID: {c.consultaId} - {new Date(c.dataConsulta).toLocaleDateString()}
                <ArrowRight />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
