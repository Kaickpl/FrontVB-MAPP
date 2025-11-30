import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import "./Home.css";

export default function Perfil() {

  const navigate = useNavigate();
  const [aluno, setAluno] = useState(null);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
      navigate("/login");
      return;
    }

    setAluno(JSON.parse(usuarioLogado));
  }, [navigate]);

  if (!aluno) return null;

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const salvarEdicao = async () => {
    try {

      const response = await fetch(
        `http://localhost:8080/api/aluno/atualizarPerfil/${aluno.alunoId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(aluno)
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar perfil");
      }

      const data = await response.json();

      // Atualiza sessão local
      localStorage.setItem("usuarioLogado", JSON.stringify(data));

      setAluno(data);
      setEditando(false);

      alert("✅ Perfil atualizado com sucesso!");

    } catch (error) {
      alert("❌ Erro ao atualizar perfil");
      console.error(error);
    }
  };

  const excluirConta = async () => {
    if (!window.confirm("Tem certeza que deseja excluir sua conta?")) return;

    try {

      const response = await fetch(
        "http://localhost:8080/api/aluno",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(aluno.alunoId)
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao excluir conta");
      }

      localStorage.removeItem("usuarioLogado");

      alert("✅ Conta excluída com sucesso!");
      navigate("/login");

    } catch (error) {
      alert("❌ Erro ao excluir conta");
      console.error(error);
    }
  };

  return (

    <Container className="mt-5" style={{ maxWidth: "700px" }}>

      <Card className="shadow p-4">

        <h2 className="text-center mb-4">Meu Perfil</h2>

        <Form>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  name="nomeAluno"
                  value={aluno.nomeAluno}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  value={aluno.email}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control
                  name="matricula"
                  value={aluno.matricula}
                  disabled
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Período</Form.Label>
                <Form.Control
                  name="periodo"
                  value={aluno.periodo}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  name="telefone"
                  value={aluno.telefone}
                  onChange={handleChange}
                  disabled={!editando}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>ID do Aluno</Form.Label>
                <Form.Control
                  value={aluno.alunoId}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>

        </Form>

        <div className="d-flex justify-content-between mt-4">

          {!editando ? (
            <Button variant="dark" onClick={() => setEditando(true)}>
              ✏️ Editar Perfil
            </Button>
          ) : (
            <Button variant="success" onClick={salvarEdicao}>
              💾 Salvar Alterações
            </Button>
          )}

          <Button variant="outline-danger" onClick={excluirConta}>
            🗑 Excluir Conta
          </Button>

        </div>

      </Card>

    </Container>
  );
}
