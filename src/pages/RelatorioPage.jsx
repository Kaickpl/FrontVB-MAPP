import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function RelatorioPage() {

  const { state } = useLocation();
  const dados = state; // <-- aqui está o JSON enviado

  return (
    <div className="container-principal">

      <header className="cabecalho-principal">
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Link to="/SelecionaPaciente" style={{ color: "white" }}>
            <ArrowLeft />
          </Link>
          <h4 className="titulo-cabecalho">Relatório da Avaliação</h4>
        </div>
      </header>

      <main className="conteudo-pagina" style={{ padding: "20px" }}>

        <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
          Informações Gerais
        </h2>

        <div className="cartao-contexto" style={{ padding: "20px" }}>
          <p><strong>Aluno:</strong> {dados.nomeAluno}</p>
          <p><strong>Matrícula:</strong> {dados.matricula}</p>
          <p><strong>Telefone:</strong> {dados.telefone}</p>
          <p><strong>Período:</strong> {dados.periodo}</p>
          <hr/>
          <p><strong>Paciente:</strong> {dados.nomePaciente}</p>
          <p><strong>Responsável:</strong> {dados.responsavel}</p>
          <p><strong>Telefone Resp.:</strong> {dados.numeroResponsavel}</p>
          <hr/>
          <p><strong>Data da consulta:</strong> {new Date(dados.dataConsulta).toLocaleString()}</p>
          <p><strong>Pontuação total:</strong> {dados.pontuacaoTotal ?? "—"}</p>
        </div>

        <h2 style={{ fontWeight: "bold", margin: "30px 0 10px 0" }}>
          Atividades realizadas
        </h2>

        {dados.atividades.length === 0 ? (
          <p style={{ color: "#64748b" }}>Nenhuma atividade registrada.</p>
        ) : (
          dados.atividades.map((a, i) => (
            <div key={i} className="cartao-contexto" style={{ padding: "20px", marginBottom: "15px" }}>
              <p><strong>Atividade:</strong> {a.nomeAtividade}</p>
              <p><strong>Pontuação:</strong> {a.pontuacao}</p>
              <p><strong>Descrição:</strong> {a.descricao}</p>
            </div>
          ))
        )}

      </main>

    </div>
  );
}
