import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart3, Zap, BookOpen } from 'lucide-react'; 
import './Home.css'; // Ou './Login.css' se você renomeou o arquivo de estilos

export default function Login() {
  return (
    <div className='container-principal'>
      
      <header className="cabecalho-principal">
        <h4 className="titulo-cabecalho">
          Login / VB-MAPP
        </h4>
        
        <Link to="/suporte" className="botao-suporte">
          Suporte
        </Link>
      </header>

      <main className='conteudo-pagina'>
        
        {/* SEÇÃO APRESENTAÇÃO */}
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
              O <em>Verbal Behavior Milestones Assessment and Placement Program</em> (VB-MAPP) é uma ferramenta...
            </p>
          </div>

          <Link to='/Protocolo' className='botao-acao'>
            Realize o protocolo! <ArrowRight className='ml-2 w-5 h-5'/>
          </Link>
        </section>

        {/* --- Mantenha o resto do código igual ao Home.js que te passei --- */}
        {/* ... (O restante das seções Contexto e Recursos) ... */}

      </main>
    </div>
  );
}