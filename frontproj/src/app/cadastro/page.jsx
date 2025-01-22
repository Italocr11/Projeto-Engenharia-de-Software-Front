"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Email from "../../components/Email";
import Senha from "../../components/Senha";
import Titulo from "../../components/Titulo";

function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nome.trim() === "") {
      return setMsg("O campo nome não está preenchido!");
    }

    if (email.trim() === "") {
      return setMsg("O campo email não está preenchido!");
    }

    if (senha.trim() === "") {
      return setMsg("O campo senha não está preenchido!");
    }

    if (telefone.trim() === "") {
      return setMsg("O campo telefone não está preenchido!");
    }

    if (senha.length < 8) {
      return setMsg("Senha muito curta!");
    }

    const usuario = { nome, email, senha, telefone };

    try {
      const resposta = await axios.post(
        "http://localhost:3000/usuarios",
        usuario
      );
      setMsg("Cadastro realizado!");
      router.push("/interfacePrincipal");
    } catch (erro) {
      setMsg(
        erro.response?.data?.message || "Erro ao cadastrar. Tente novamente."
      );
    }
  };

  return (
    <div className="flex flex-col text-black items-center justify-center mt-10">
      <button
        onClick={() => {
          router.push("/login");
        }}
        className=" bg-blue-400 p-2 rounded hover:text-gray-800"
      >
        Ir para login
      </button>
      <Titulo>Cadastrar</Titulo>
      <form onSubmit={handleSubmit}>
        <div className="pb-8">
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
          <Email setEmail={setEmail} email={email}></Email>
          <Senha setSenha={setSenha} senha={senha}></Senha>

          <p className=" pt-5">Telefone:</p>
          <input
            type="tel"
            placeholder="(  ) _____-____"
            maxLength="15"
            className="border rounded"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
          ></input>
          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="bg-blue-600 p-2 rounded hover:text-gray-800"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Cadastro;
