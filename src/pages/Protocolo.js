import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckSquare, ChevronRight, X, Save 
} from 'lucide-react';
import './Home.css';

export default function Protocolo() {
  const navigate = useNavigate();
  const [pacienteNome, setPacienteNome] = useState("Carregando...");
  const [pacienteId, setPacienteId] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [areaSelecionada, setAreaSelecionada] = useState(null);
  const [areasConcluidas, setAreasConcluidas] = useState({});
  
  const [respostas, setRespostas] = useState({});

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("pacienteSelecionadoNome");
    const idSalvo = localStorage.getItem("pacienteSelecionadoId");

    if (nomeSalvo) {
      setPacienteNome(nomeSalvo);
      setPacienteId(idSalvo);
    } else {
      alert("Nenhum paciente selecionado. Voltando para a lista...");
      navigate("/selecionar-paciente"); 
    }
  }, [navigate]);

  const areasNivel1 = [
    { id: 'mando', nome: 'Mando', descricao: 'Pede itens ou atividades desejadas' },
    { id: 'tato', nome: 'Tato', descricao: 'Nomeia itens, ações ou propriedades' },
    { id: 'ouvinte', nome: 'Ouvinte', descricao: 'Segue instruções e responde ao nome' },
    { id: 'vpmts', nome: 'VP/MTS', descricao: 'Emparelhamento visual e quebra-cabeças' },
    { id: 'brincar', nome: 'Brincar', descricao: 'Brinca de forma independente' },
    { id: 'social', nome: 'Social', descricao: 'Interage com outras pessoas' },
    { id: 'imitacao', nome: 'Imitação', descricao: 'Copia movimentos motores' },
    { id: 'ecoico', nome: 'Ecóico', descricao: 'Repete sons, palavras ou frases' },
    { id: 'vocal', nome: 'Vocal', descricao: 'Emite sons espontaneamente' }
  ];

  const bancoDePerguntas = {
    mando: [
      { id: 'mando_1', pergunta: "Emite 2 palavras, sinais ou figuras para pedir reforçadores?" },
      { id: 'mando_2', pergunta: "Emite 4 mandos diferentes sem ajuda ecóica?" },
      { id: 'mando_3', pergunta: "Generaliza 6 mandos com 2 pessoas diferentes?" },
      { id: 'mando_4', pergunta: "Emite 5 mandos espontâneos (sem ninguém perguntar 'o que você quer')?" },
      { id: 'mando_5', pergunta: "Emite 10 mandos diferentes (pode ser itens, ações, etc)?" }
    ],
    tato: [
      { id: 'tato_1', pergunta: "Emite tatos para 2 itens reforçadores (pessoas, animais, personagens)?" },
      { id: 'tato_2', pergunta: "Emite tatos para 4 itens diferentes?" },
      { id: 'tato_3', pergunta: "Emite tatos para 6 itens não reforçadores?" },
      { id: 'tato_4', pergunta: "Tateia espontaneamente 2 itens diferentes?" },
      { id: 'tato_5', pergunta: "Tateia 10 itens comuns?" }
    ],
    ouvinte: [
      { id: 'ouvinte_1', pergunta: "Atenta à voz de quem fala fazendo contato visual?" },
      { id: 'ouvinte_2', pergunta: "Responde ao ouvir o próprio nome (olha para quem chamou)?" },
      { id: 'ouvinte_3', pergunta: "Olha para, toca ou aponta para o item reforçador quando nomeado?" },
      { id: 'ouvinte_4', pergunta: "Executa 4 comandos motores simples (ex: 'bate palma', 'senta')?" },
      { id: 'ouvinte_5', pergunta: "Seleciona o item correto em um grupo de 2 itens?" }
    ],
    vpmts: [
      { id: 'vpmts_1', pergunta: "Acompanha visualmente estímulos em movimento por 2 segundos?" },
      { id: 'vpmts_2', pergunta: "Pega objetos pequenos com movimento de pinça?" },
      { id: 'vpmts_3', pergunta: "Olha para um brinquedo por 30 segundos?" },
      { id: 'vpmts_4', pergunta: "Coloca 3 itens em um recipiente ou empilha 3 blocos?" },
      { id: 'vpmts_5', pergunta: "Emparelha 10 itens idênticos (ex: colher com colher)?" }
    ],
    brincar: [
      { id: 'brincar_1', pergunta: "Manipula e explora objetos por 1 minuto?" },
      { id: 'brincar_2', pergunta: "Brinca de forma independente com 3 itens diferentes?" },
      { id: 'brincar_3', pergunta: "Demonstra generalização brincando com movimentos variados?" },
      { id: 'brincar_4', pergunta: "Engaja-se em brincadeiras de movimento (ex: correr, pular)?" },
      { id: 'brincar_5', pergunta: "Brinca com causa e efeito (ex: apertar botão que faz som)?" }
    ],
    social: [
      { id: 'social_1', pergunta: "Faz contato visual com rostos de familiares?" },
      { id: 'social_2', pergunta: "Indica que quer ser segurado ou brincar fisicamente?" },
      { id: 'social_3', pergunta: "Sorri espontaneamente ou em resposta a outras pessoas?" },
      { id: 'social_4', pergunta: "Observa outras crianças brincando?" },
      { id: 'social_5', pergunta: "Responde espontaneamente ao contato de outras crianças?" }
    ],
    imitacao: [
      { id: 'imitacao_1', pergunta: "Imita 2 movimentos motores grossos (ex: bater palmas)?" },
      { id: 'imitacao_2', pergunta: "Imita 4 movimentos motores grossos?" },
      { id: 'imitacao_3', pergunta: "Imita 8 movimentos motores, sendo 2 com objetos?" },
      { id: 'imitacao_4', pergunta: "Imita espontaneamente movimentos de outros?" },
      { id: 'imitacao_5', pergunta: "Imita 20 movimentos motores de qualquer tipo?" }
    ],
    ecoico: [
      { id: 'ecoico_1', pergunta: "Pontuação específica do teste Ecóico (Consultar sub-teste)." },
      { id: 'ecoico_2', pergunta: "Pontuação específica do teste Ecóico (Consultar sub-teste)." },
      { id: 'ecoico_3', pergunta: "Pontuação específica do teste Ecóico (Consultar sub-teste)." },
      { id: 'ecoico_4', pergunta: "Pontuação específica do teste Ecóico (Consultar sub-teste)." },
      { id: 'ecoico_5', pergunta: "Pontuação específica do teste Ecóico (Consultar sub-teste)." }
    ],
    vocal: [
      { id: 'vocal_1', pergunta: "Emite sons de balbucio e entonações variadas?" },
      { id: 'vocal_2', pergunta: "Emite 5 sons de vogais ou consoantes diferentes?" },
      { id: 'vocal_3', pergunta: "Emite total de 10 sons diferentes?" },
      { id: 'vocal_4', pergunta: "Emite sons com entonação de adulto?" },
      { id: 'vocal_5', pergunta: "Vocaliza 15 sons reconhecíveis de fala?" }
    ]
  };

  const abrirAvaliacao = (area) => {
    setAreaSelecionada(area);
    setModalAberto(true);
  };

  const pontuar = (marcoId, nota) => {
    setRespostas(prev => ({
      ...prev,
      [marcoId]: nota 
    }));
  };

  const salvarAvaliacao = () => {
    console.log(`Salvando dados para o paciente ID: ${pacienteId}`);
    console.log("Respostas:", respostas);
    
    alert(`Dados salvos para o paciente ${pacienteNome}!`);

    setAreasConcluidas(prev => ({
      ...prev,
      [areaSelecionada.id]: true
    }));

    setModalAberto(false);
};

  const perguntasAtuais = areaSelecionada ? bancoDePerguntas[areaSelecionada.id] : [];

  return (
    <div className='container-principal'>
      
      <header className="cabecalho-principal">
        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          <Link to="/home" style={{color: 'white', display: 'flex', alignItems: 'center'}}>
            <ArrowLeft />
          </Link>
          <h4 className="titulo-cabecalho">Nível 1 - Avaliação</h4>
        </div>
        <div className="etiqueta-destaque" style={{marginBottom: 0, backgroundColor: 'rgba(255,255,255,0.2)', color: 'white'}}>
          Paciente: {pacienteNome}
        </div>
      </header>

      <main className='conteudo-pagina'>
        
        <div className="secao-apresentacao" style={{textAlign: 'left', marginBottom: '30px'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px'}}>
            Marcos do Desenvolvimento (0-18 meses)
          </h2>
          <p style={{color: '#64748b'}}>
            Selecione uma habilidade abaixo para registrar a pontuação.
          </p>
        </div>

        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '20px'
        }}>
          {areasNivel1.map((area) => (
            <div 
              key={area.id} 
              className="cartao-contexto" 
              onClick={() => abrirAvaliacao(area)}
              style={{
                padding: '25px', cursor: 'pointer', 
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                borderLeft: '4px solid #3b82f6'
              }}
            >
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                   <h3 style={{fontSize: '1.4rem', fontWeight: 'bold', color: '#1e293b', margin: 0}}>{area.nome}</h3>
                   <CheckSquare className="text-blue-500" size={24}/>
                </div>
                <p style={{color: '#64748b', fontSize: '0.95rem'}}>{area.descricao}</p>
              </div>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span 
                  className='etiqueta-pontuacao'
                  style={{
                    backgroundColor: areasConcluidas[area.id] ? '#105e55ff' : '', 
                    color: areasConcluidas[area.id] ? 'white' : ''
                  }}
                >
                  {areasConcluidas[area.id] ? "Concluído" : "Pontuar"}
                </span>
                <span style={{color: '#3b82f6', fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '0.9rem'}}>
                  Avaliar <ChevronRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </main>

      {modalAberto && areaSelecionada && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 50,
          display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white', borderRadius: '16px', 
            width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            
            <div style={{
              padding: '20px', borderBottom: '1px solid #e2e8f0', 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 10
            }}>
              <div>
                <h3 style={{margin: 0, fontSize: '1.5rem', fontWeight: 'bold'}}>Avaliação: {areaSelecionada.nome}</h3>
                <span style={{fontSize: '0.9rem', color: '#64748b'}}>Nível 1 (Marcos 1-5)</span>
              </div>
              <button onClick={() => setModalAberto(false)} style={{background: 'none', border: 'none', cursor: 'pointer', color: '#64748b'}}>
                <X size={28} />
              </button>
            </div>

            <div style={{padding: '20px'}}>
              {perguntasAtuais.map((marco, index) => {
                const numeroMarco = index + 1;
                const notaAtual = respostas[marco.id];

                return (
                  <div key={marco.id} style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9'}}>
                    <div style={{display: 'flex', gap: '15px'}}>
                      <div style={{
                        minWidth: '30px', height: '30px', borderRadius: '50%', 
                        backgroundColor: '#3b82f6', color: 'white', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                      }}>
                        {numeroMarco}
                      </div>
                      <div style={{flex: 1}}>
                        <p style={{fontWeight: '600', color: '#1e293b', marginBottom: '10px', marginTop: '5px'}}>
                          {marco.pergunta}
                        </p>
                        
                        <div style={{display: 'flex', gap: '10px'}}>
                          {[0, 0.5, 1].map(pontos => (
                            <button 
                              key={pontos} 
                              onClick={() => pontuar(marco.id, pontos)}
                              className={`botao-nota ${notaAtual === pontos ? 'selecionado' : ''}`}
                            >
                              {pontos}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{padding: '20px', borderTop: '1px solid #e2e8f0', textAlign: 'right', backgroundColor: '#f8fafc', borderRadius: '0 0 16px 16px'}}>
              <button 
                onClick={salvarAvaliacao}
                className="botao-acao" 
                style={{display: 'inline-flex', gap: '8px', padding: '10px 25px', cursor: 'pointer'}}
              >
                <Save size={18} /> Salvar Avaliação
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}