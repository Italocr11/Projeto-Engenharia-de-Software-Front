"use client";

import FundoFormularios from "../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Email from "../../components/Email";
import Senha from "../../components/Senha";
import BotoesNav from "@/components/BotoesNav";

function Login() {
  const router = useRouter();

  var textAnt = "Cadastrar";
  var navAnt = "/";
  var textProx = "Login";

  return (
    <FundoFormularios>
      <div className="flex flex-col items-center justify-center text-black">
        <h1 className="text-center font-bold text-4xl pb-5 mt-10">Login</h1>
        <Email></Email>
        <Senha></Senha>
        <BotoesNav
          textAnt={textAnt}
          navAnt={navAnt}
          textProx={textProx}
        ></BotoesNav>
        <div className="text-red-700 flex items-center mb-10">
          <ArrowRight />
          <button
            onClick={() => {
              router.push("/recuperarsenha");
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
