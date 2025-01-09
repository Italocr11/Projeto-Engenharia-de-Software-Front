"use client";

import FundoFormularios from "../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Email from "../../components/Email";
import Senha from "../../components/Senha";
import BotoesNav from "@/components/BotoesNav";
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
        <BotoesNav
          textAnt={textAnt}
          navAnt={navAnt}
          textProx={textProx}
          navProx={navProx}
        ></BotoesNav>
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
