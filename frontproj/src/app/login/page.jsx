"use client";

import FundoFormularios from "../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

function Login() {
  const router = useRouter();

  return (
    <FundoFormularios>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-black font-bold text-4xl pb-5 mt-10">
          Login
        </h1>
        <div className="text-black pb-8">
          <div></div>
          <p className=" pt-5">Nome:</p>
          <input
            type="text"
            placeholder="Inserir nome"
            className="border rounded"
          ></input>
          <p className=" pt-5">E-mail:</p>
          <input
            type="text"
            placeholder="Inserir e-mail"
            className="border rounded"
          ></input>
        </div>
        <div className=" text-black space-x-10">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="bg-blue-400 p-2 rounded"
          >
            Cadastrar
          </button>
          <button className="bg-blue-600 p-2 rounded">Login</button>
        </div>
        <div className="text-red-700 flex items-center pt-5 mb-10">
          <ArrowRight />
          <button className="m-1">Recuperar senha</button>
        </div>
      </div>
    </FundoFormularios>
  );
}

export default Login;
