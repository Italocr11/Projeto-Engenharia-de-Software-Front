"use client";

import FundoFormularios from "../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Email from "../../components/Email";
import Senha from "../../components/Senha";
import Titulo from "../../components/Titulo";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const router = useRouter();

  var textAnt = "Cadastrar";
  var navAnt = "/";
  var textProx = "Login";
  var navProx = "/interfacePrincipal";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha.trim() === "") {
      setMsg("Insira uma senha!");
      return;
    }

    if (email.trim() === "") {
      setMsg("Insira um email!");
      return;
    }

    const usuario = { email, senha };

    try {
      const resposta = await axios.post(
        "http://localhost:3000/usuarios/login",
        usuario
      );
      const { email } = resposta.data.usuario;
      localStorage.setItem("userEmail", email);

      const { nome } = resposta.data.usuario;
      localStorage.setItem("userNome", nome);

      const { telefone } = resposta.data.usuario;
      localStorage.setItem("userTel", telefone);

      router.push("/interfacePrincipal");
    } catch (erro) {
      setMsg(
        erro.response?.data?.message ||
          "Erro ao realizar login. Tente novamente."
      );
    }
  };

  return (
    <FundoFormularios>
      <div className="flex flex-col items-center justify-center text-black mt-10">
        <button
          onClick={() => {
            router.push("/");
          }}
          className=" bg-blue-400 p-2 rounded hover:text-gray-800"
        >
          Ir para Cadastro
        </button>
        <Titulo>Login</Titulo>
        <form onSubmit={handleSubmit}>
          <Email setEmail={setEmail} email={email}></Email>
          <Senha setSenha={setSenha} senha={senha}></Senha>
          <div className=" text-black space-x-10 flex justify-center items-center mb-10 mt-10 ">
            <button
              type="submit"
              className="bg-blue-600 p-2 rounded hover:text-gray-800"
            >
              {textProx}
            </button>
          </div>
        </form>
        {msg && <div className="text-red-800 mb-5">{msg}</div>}
        <div className="text-red-700 flex items-center mb-10">
          <ArrowRight />
          <button
            onClick={() => {
              router.push("/recuperarSenha");
            }}
            className="m-1"
          >
            Recuperar senha
          </button>
        </div>
      </div>
    </FundoFormularios>
  );
}

export default Login;
