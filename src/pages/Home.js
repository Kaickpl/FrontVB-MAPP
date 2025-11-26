import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { ArrowRight, CheckCircle, BarChart3, Zap, BookOpen, Divide } from 'lucide-react';
import './Home.css';

export default function Home() {
  const [mostrarPacientes, setMostrarPacientes] = useState(false);

  return (
    <div className='container-principal'>
      
      <header className="cabecalho-principal">
        <h4 className="titulo-cabecalho">
          Tela inicial
        </h4>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/tutorial" className="botao-suporte">
              Tutorial
          </Link>
          <Link to="/suporte" className="botao-suporte">
              Suporte
          </Link>
        </div>
      </header>

      <main className='conteudo-pagina'>
        
        <section className='secao-apresentacao'>
          <span className='etiqueta-destaque'>
            Avaliação e Intervenção
          </span>
          <h1 className='titulo-principal'>
            Protocolo VB-MAPP
          </h1>
          
          <div className='cartao-informacao'>
            <h3 className='titulo-cartao'>
              <BookOpen className='text-blue-500' size={20}/> O que é?
            </h3>
            <p className="texto-cartao">
              O <em>Verbal Behavior Milestones Assessment and Placement Program</em> (VB-MAPP) é uma ferramenta de avaliação utilizada com indivíduos diagnosticados com transtorno do espectro autista e outros atrasos de linguagem (Sundberg 2008). Os resultados determinam o nível de habilidade atual e identificam metas instrucionais.
            </p>
          </div>
          <div className='container-botoes'>
            <Link to='/Protocolo' className='botao-acao'>
            Realize o protocolo! <ArrowRight className='ml-2 w-5 h-5'/>
            </Link>
            
            <Link to='/Infopaciente' className='botao-acao'>
              Veja seus pacientes! <ArrowRight className='ml-2 w-5 h-5'/>
            </Link>
          </div>
          

        </section>

        <section className='grid-duplo'>
          <div className='cartao-contexto'>
            <h3 className="titulo-contexto">
              Contextualizando: TEA
            </h3>
            <p className="texto-cartao">
              Transtorno do Espectro Autista (TEA) define-se por prejuízos persistentes na comunicação e interação social, bem como nos comportamentos que podem incluir os interesses e os padrões de atividades. Sintomas presentes desde a infância que limitam o funcionamento diário.
            </p>
          </div>
          
          <div className="cartao-contexto">
            <h3 className="titulo-contexto">
              Como o protocolo ajuda?
            </h3>
            <p className="texto-cartao">
              Pesquisas mostram um aumento imediato no desempenho após o Treinamento de Habilidades Comportamentais (BST) baseado nos dados do protocolo, fornecendo um norte claro para a intervenção.
            </p>
          </div>
        </section>

        <section className="secao-recursos">
          <div className="efeito-fundo efeito-azul"></div>
          <div className="efeito-fundo efeito-roxo"></div>

          <div className="conteudo-recursos">
            <div className="cabecalho-recursos">
              <h3 className="titulo-recursos">Use o site para o teste!</h3>
              <p className="subtitulo-recursos">Nossa plataforma simplifica todo o processo clínico.</p>
            </div>

            <div className="grid-triplo">
              
              <div className="item-recurso">
                <div className="container-icone icone-azul">
                  <CheckCircle size={24} />
                </div>
                <h5 className="titulo-item">Preenchimento fácil</h5>
                <p className="texto-item">
                  Nosso site ajuda você a preencher os campos do protocolo de forma intuitiva, rápida e organizada.
                </p>
              </div>

              <div className="item-recurso">
                <div className="container-icone icone-amarelo">
                  <Zap size={24} />
                </div>
                <h5 className="titulo-item">Automatização</h5>
                <p className="texto-item">
                  De acordo com os campos preenchidos, o sistema registra os resultados e ajuda a realizar análises automáticas.
                </p>
              </div>

              <div className="item-recurso">
                <div className="container-icone icone-verde">
                  <BarChart3 size={24} />
                </div>
                <h5 className="titulo-item">Visualização Gráfica</h5>
                <p className="texto-item">
                  Elaboramos gráficos automáticos para melhorar o entendimento visual da evolução do paciente para os responsáveis.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}