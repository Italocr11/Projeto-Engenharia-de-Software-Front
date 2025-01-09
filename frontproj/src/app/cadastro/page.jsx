"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confsenha, setConfsenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msg, setMsg] = useState("");

  const router = useRouter();

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
          <p className=" pt-5">E-mail:</p>
          <input
            type="email"
            placeholder="Inserir e-mail"
            maxLength="50"
            className="border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className=" pt-5">Senha:</p>
          <input
            type="password"
            placeholder="********"
            maxLength="20"
            className="border rounded"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></input>
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
        </div>
        <div className=" text-black space-x-10 flex justify-between mb-10">
          <button
            onClick={() => {
              router.push("/login");
            }}
            className=" bg-blue-400 p-2 rounded"
          >
            Login
          </button>
          <button type="submit" className="bg-blue-600 p-2 rounded">
            Cadastrar
          </button>
        </div>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Cadastro;
