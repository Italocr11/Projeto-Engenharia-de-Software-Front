"use client";

import { useState } from "react";
import axios from "axios";
import Email from "../../components/Email";
import Senha from "../../components/Senha";
import BotoesNav from "../../components/BotoesNav";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confsenha, setConfsenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msg, setMsg] = useState("");

  var textAnt = "Login";
  var navAnt = "/login";
  var textProx = "Cadastrar";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usuario = { nome, email, senha, confsenha, telefone };

    try {
      const resposta = await axios.post("https...", usuario);
      setMsg("Cadastro realizado!");
    } catch (erro) {
      setMsg("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-black font-bold text-4xl pb-5 mt-10">
        Cadastrar
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="text-black pb-8">
          <div></div>
          <p className=" pt-5">Nome:</p>
          <input
            type="text"
            placeholder="Inserir nome"
            maxLength="30"
            className="border rounded"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <Email></Email>
          <Senha></Senha>
          <p className=" pt-5">Confirmar Senha:</p>
          <input
            type="password"
            placeholder="********"
            maxLength="20"
            className="border rounded"
            value={confsenha}
            onChange={(e) => setConfsenha(e.target.value)}
          ></input>
          <p className=" pt-5">Telefone:</p>
          <input
            type="tel"
            placeholder="(  ) _____-____"
            maxLength="15"
            className="border rounded"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          ></input>
          <BotoesNav
            navAnt={navAnt}
            textAnt={textAnt}
            textProx={textProx}
          ></BotoesNav>
        </div>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Cadastro;
