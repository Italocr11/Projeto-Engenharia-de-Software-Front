"use client";

import FundoFormularios from "../../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import Senha from "../../../components/Senha";
import Titulo from "../../../components/Titulo";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [alterada, setAlterada] = useState(false);
  const [msgsucesso, setmsgsucesso] = useState("");

  const router = useRouter();

  const confirmar = async (e) => {
    e.preventDefault();

    if (!senha || !confSenha) {
      setMsg("Preencha os campos!");
      return;
    }

    if (senha !== confSenha) {
      setMsg("As senhas são diferentes!");
      return;
    }

    if (alterada) {
      router.push("/login");
    }

    const usuario = { senha, confSenha };

    try {
      const resposta = await axios.patch(
        "http://localhost:3000/usuarios/novasenha",
        usuario
      );
      setMsg("");
      setAlterada(true);
      setmsgsucesso(
        "Senha alterada com sucesso! clique em confirmar para logar..."
      );
    } catch (erro) {
      setMsg(
        erro.resposta?.data?.message ||
          "Erro ao realizar login. Tente novamente."
      );
    }
  };

  return (
    <FundoFormularios>
      <div className="flex flex-col items-center justify-center text-black mt-10">
        <Titulo>Nova senha</Titulo>
        <form onSubmit={confirmar}>
          <Senha setSenha={setSenha} senha={senha}></Senha>
          <div>
            <p className=" pt-5">Nova Senha:</p>
            <input
              type="password"
              placeholder="********"
              maxLength="20"
              className="border rounded px-3 py-2 w-full mt-1"
              value={confSenha}
              onChange={(e) => setConfSenha(e.target.value)}
            ></input>
          </div>
          <div className=" text-black space-x-10 flex justify-center items-center mb-10 mt-10 ">
            <button
              type="button"
              onClick={() => {
                router.push("/login");
              }}
              className=" bg-blue-400 py-2 px-4 rounded hover:text-gray-800"
            >
              Ir para Login
            </button>
            <button
              type="submit"
              className="bg-green-500 py-2 px-4 rounded hover:text-gray-700"
            >
              Confirmar
            </button>
          </div>
        </form>
        {msgsucesso && <div className="text-green-700 mb-5">{msgsucesso}</div>}
        {msg && <div className="text-red-800 mb-5">{msg}</div>}
      </div>
    </FundoFormularios>
  );
}

export default Login;
