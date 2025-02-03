"use client";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Interface from "../../components/Interface";
import Titulo from "../../components/Titulo";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

function AlterarNome() {
  const [msg, setMsg] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      setMsg("Você precisa estar logado!");

      return;
    }

    setEmail(storedEmail);
  }, []);

  const confirmar = async (e) => {
    e.preventDefault();

    if (!nome) {
      setMsg("Preencha seu nome!");
      return;
    }

    const usuario = { email, nome };

    try {
      const resposta = await axios.patch(
        "http://localhost:3000/usuarios/altnome",
        usuario
      );

      const { nome: novoNome } = resposta.data.usuario;
      localStorage.setItem("userNome", novoNome);
      router.push("/perfil");
    } catch (erro) {
      setMsg(erro.response?.data?.message || "Informações inválidas!.");
    }
  };

  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Alterar Nome</Titulo>
        <div className="flex flex-col">
          <p className=" pt-10">Nome:</p>
          <input
            type="text"
            placeholder="Inserir nome"
            maxLength="30"
            className="border rounded px-3 py-2 w-full mt-1"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input>
          <form onSubmit={confirmar}>
            <button
              type="submit"
              className="bg-blue-600 py-2 px-4 rounded hover:text-gray-800 mt-10"
              disabled={nome === ""}
            >
              Confirmar
            </button>
          </form>
          {msg && <div className="text-red-800 mt-5 pb-10">{msg}</div>}
        </div>
      </FundoFormulariosInt>
    </Interface>
  );
}

export default AlterarNome;
