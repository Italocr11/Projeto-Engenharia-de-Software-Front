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

    if (
      nome.trim() === "" ||
      telefone.trim() === "" ||
      telefone.trim() === "" ||
      senha.trim() === "" ||
      email.trim() === ""
    ) {
      return setMsg("Preencha todos os campos!");
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
      router.push("/interfacePrincipal");
    } catch (erro) {
      setMsg(
        erro.response?.data?.message || "Erro ao cadastrar. Tente novamente."
      );
    }
  };

  return (
    <div className="flex flex-col text-black items-center justify-center mt-10">
      <Titulo>Cadastrar</Titulo>
      <form onSubmit={handleSubmit}>
        <div className="pb-8">
          <div></div>
          <p className=" pt-5">Nome:</p>
          <input
            type="text"
            placeholder="Inserir nome"
            maxLength="30"
            className="border border-gray-800 rounded px-3 py-2 w-full mt-1"
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
            className="border border-gray-800 rounded px-3 py-2 w-full mt-1"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
          ></input>
          <div className="flex items-center justify-center mt-10 space-x-10">
            <button
              onClick={() => {
                router.push("/login");
              }}
              className=" bg-blue-400 py-2 px-4 rounded hover:text-gray-800"
            >
              Ir para login
            </button>
            <button
              type="submit"
              className="bg-green-500 py-2 px-4 rounded hover:text-gray-800"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
      {msg && <div className="text-red-800 mb-5">{msg}</div>}
    </div>
  );
}

export default Cadastro;
