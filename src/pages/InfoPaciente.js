import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

import { 
  cadastrarPaciente, 
  listarPacientes, 
  deletarPaciente 
} from "../Service/ApiPaciente";

export default function InfoPaciente() {

  const [abaAtiva, setAbaAtiva] = useState("cadastrar");

  // FORMULÁRIO DE CADASTRO
  const [form, setForm] = useState({
    nome: "",
    responsavel: "",
    numeroResponsavel: "",
    dataNascimento: "",
    genero: "",
    observacoes: "",
    endereco: {
      cidade: "",
      estado: "",
      cep: "",
      rua: "",
      complemento: "",
      numero: "",
      bairro: "",
    },
  });

  // Estados adicionais
  const [lista, setLista] = useState([]);
  const [busca, setBusca] = useState("");
  const [idDeletar, setIdDeletar] = useState("");

  // Atualiza campos gerais
  const atualizar = (campo, valor) => {
    setForm({ ...form, [campo]: valor });
  };

  // Atualiza campos do endereço
  const atualizarEndereco = (campo, valor) => {
    setForm({
      ...form,
      endereco: { ...form.endereco, [campo]: valor },
    });
  };

  // ========================= SALVAR PACIENTE ===============================

  const salvarPaciente = async () => {
    try {
      const resposta = await cadastrarPaciente(form);
      alert("Paciente cadastrado com sucesso!");
      console.log(resposta);
    } catch (error) {
      alert("Erro ao salvar paciente!");
      console.error(error);
    }
  };

  // ========================= LISTAR PACIENTES ===============================

  const buscarPacientes = async () => {
    try {
      const dados = await listarPacientes(busca);
      setLista(dados);
    } catch (error) {
      alert("Erro ao buscar pacientes!");
    }
  };

  // ========================= DELETAR PACIENTE ===============================

  const removerPaciente = async () => {
    try {
      await deletarPaciente(idDeletar);
      alert("Paciente deletado!");
    } catch (error) {
      alert("Erro ao deletar paciente!");
    }
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* MENU LATERAL */}
        <Col md={3}>
          <Card className="p-3 shadow">
            <h5>Menu</h5>

            <Button
              className="mt-2 w-100"
              variant={abaAtiva === "cadastrar" ? "primary" : "outline-primary"}
              onClick={() => setAbaAtiva("cadastrar")}
            >
              ➕ Cadastrar Paciente
            </Button>

            <Button
              className="mt-2 w-100"
              variant={abaAtiva === "listar" ? "primary" : "outline-primary"}
              onClick={() => setAbaAtiva("listar")}
            >
              📄 Listar Pacientes
            </Button>

            <Button
              className="mt-2 w-100"
              variant={abaAtiva === "deletar" ? "danger" : "outline-danger"}
              onClick={() => setAbaAtiva("deletar")}
            >
              🗑 Deletar Paciente
            </Button>
          </Card>
        </Col>

        {/* ÁREA PRINCIPAL */}
        <Col md={9}>

          {/* ==================== CADASTRAR PACIENTE ==================== */}
          {abaAtiva === "cadastrar" && (
            <Card className="p-4 shadow">
              <h3 className="mb-3">Cadastrar Paciente</h3>

              <Form>

                {/* DADOS PRINCIPAIS */}
                <h5 className="mt-3 mb-3">Dados do Paciente</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nome*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.nome}
                        onChange={(e) => atualizar("nome", e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Responsável*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.responsavel}
                        onChange={(e) => atualizar("responsavel", e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Número do Responsável*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.numeroResponsavel}
                        onChange={(e) =>
                          atualizar("numeroResponsavel", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Data de Nascimento*</Form.Label>
                      <Form.Control
                        type="date"
                        value={form.dataNascimento}
                        onChange={(e) =>
                          atualizar("dataNascimento", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Gênero*</Form.Label>
                      <Form.Select
                        value={form.genero}
                        onChange={(e) => atualizar("genero", e.target.value)}
                      >
                        <option value="">Selecione...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Observações</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.observacoes}
                        onChange={(e) =>
                          atualizar("observacoes", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* ENDEREÇO */}
                <h5 className="mt-4 mb-3">Endereço</h5>

                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Cidade*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.endereco.cidade}
                        onChange={(e) => atualizarEndereco("cidade", e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Estado*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.endereco.estado}
                        onChange={(e) => atualizarEndereco("estado", e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>CEP*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.endereco.cep}
                        onChange={(e) => atualizarEndereco("cep", e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Rua*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.endereco.rua}
                        onChange={(e) => atualizarEndereco("rua", e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={2}>
                    <Form.Group className="mb-3">
                      <Form.Label>Número*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.endereco.numero}
                        onChange={(e) => atualizarEndereco("numero", e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Bairro*</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.endereco.bairro}
                        onChange={(e) => atualizarEndereco("bairro", e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Complemento</Form.Label>
                      <Form.Control
                        type="text"
                        value={form.endereco.complemento}
                        onChange={(e) =>
                          atualizarEndereco("complemento", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* BOTÃO SALVAR */}
                <Button
                  variant="success"
                  className="mt-3 w-100"
                  onClick={salvarPaciente}
                >
                  ✔ Salvar Paciente
                </Button>
              </Form>
            </Card>
          )}

          {/* ==================== LISTAR PACIENTE ==================== */}
          {abaAtiva === "listar" && (
            <Card className="p-4 shadow">
              <h3>Pesquisar Paciente</h3>

              <Row className="mt-3">
                <Col md={10}>
                  <Form.Control
                    placeholder="Digite o nome do paciente..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                  />
                </Col>

                <Col md={2}>
                  <Button className="w-100" onClick={buscarPacientes}>
                    Buscar
                  </Button>
                </Col>
              </Row>

              <div className="mt-4">
                {lista.length === 0 ? (
                  <p className="text-muted text-center">
                    Nenhum paciente encontrado...
                  </p>
                ) : (
                  <ul className="list-group">
                    {lista.map((p) => (
                      <li key={p.id} className="list-group-item">
                        <strong>{p.nome}</strong> — Responsável: {p.responsavel}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          )}

          {/* ==================== DELETAR PACIENTE ==================== */}
          {abaAtiva === "deletar" && (
            <Card className="p-4 shadow">
              <h3>Deletar Paciente</h3>

              <Form.Control
                className="mt-3"
                placeholder="Digite o ID do paciente..."
                value={idDeletar}
                onChange={(e) => setIdDeletar(e.target.value)}
              />

              <Button
                className="mt-3"
                variant="danger"
                onClick={removerPaciente}
              >
                🗑 Deletar
              </Button>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}
