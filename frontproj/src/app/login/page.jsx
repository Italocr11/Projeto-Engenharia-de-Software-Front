"use client";

import FundoFormularios from "../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Email from "../../components/Email";
import Senha from "../../components/Senha";
import Titulo from "../../components/Titulo";

function Login() {
  const router = useRouter();

  var textAnt = "Cadastrar";
  var navAnt = "/";
  var textProx = "Login";
  var navProx = "/interfacePrincipal";

  return (
    <FundoFormularios>
      <div className="flex flex-col items-center justify-center text-black">
        <Titulo>Login</Titulo>
        <Email></Email>
        <Senha></Senha>
        <div className=" text-black space-x-10 flex justify-between mb-10 mt-10 ">
          <button
            onClick={() => {
              router.push("/");
            }}
            className=" bg-blue-400 p-2 rounded hover:text-gray-800"
          >
            {textAnt}
          </button>
          <button
            onClick={() => {
              router.push("/interfacePrincipal");
            }}
            type="submit"
            className="bg-blue-600 p-2 rounded hover:text-gray-800"
          >
            {textProx}
          </button>
        </div>
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
