import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import './Home.css';
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logando com:", email, senha);
    navigate("/home");
  };

  return (
    <div className="container-principal">
      
      <header className="cabecalho-principal">
        <h4 className="titulo-cabecalho">Login</h4>
        <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/tutorial" className="botao-suporte">
                Tutorial
            </Link>
            <Link to="/suporte" className="botao-suporte">
                Suporte
            </Link>
        </div>
      </header>

      <main className="conteudo-pagina container-login">
        
        <div className="card-login">
          <h2 className="titulo-principal" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Protocolo VB-MAPP
          </h2>

          <form onSubmit={handleLogin}>
            <div className="grupo-input">
              <label className="label-input">Email</label>
              <input
                type="email"
                className="campo-input"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grupo-input">
              <label className="label-input">Senha</label>
              <input
                type="password"
                className="campo-input"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="botao-logar">
              Logar
            </button>

            <div className="links-login">
              <Link to="/RecuperarSenha" className="link-texto">
                Esqueceu a senha?
              </Link>
              <Link to="/Cadastro" className="link-texto">
                Não tem conta?
              </Link>
            </div>
          </form>
        </div>

      </main>
    </div>
  );
}