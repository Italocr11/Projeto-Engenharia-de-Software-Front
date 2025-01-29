"use client";

import FundoFormularios from "../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import Email from "../../components/Email";
import BotoesNav from "../../components/BotoesNav";
import Titulo from "../../components/Titulo";

export default function RecuperarSenha() {
  var textProx = "Enviar";
  var textAnt = "Login";
  var navAnt = "/login";
  return (
    <FundoFormularios>
      <div className="flex flex-col items-center text-black justify-center">
        <Titulo>Recuperar senha</Titulo>
        <Email></Email>
        <BotoesNav
          textProx={textProx}
          textAnt={textAnt}
          navAnt={navAnt}
        ></BotoesNav>
      </div>
    </FundoFormularios>
  );
}
