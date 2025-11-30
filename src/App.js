import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import Suporte from './pages/Suporte';
import Tutorial from "./pages/Tutorial";
import Protocolo from "./pages/Protocolo"; 
import InfoPaciente from "./pages/InfoPaciente";
import SelecionaPaciente from "./pages/SelecionaPaciente"
import Perfil from "./pages/Perfil";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
      <Route path="/Suporte"  element={<Suporte />}/>
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/Protocolo" element={<Protocolo />} />
      <Route path="/InfoPaciente" element={<InfoPaciente/>}/>
      <Route path="/SelecionaPaciente" element={<SelecionaPaciente/>}/>
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}