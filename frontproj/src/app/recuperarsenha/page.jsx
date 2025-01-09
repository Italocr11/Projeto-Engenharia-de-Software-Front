"use client";

import FundoFormularios from "../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import Email from "../../components/Email";
import BotoesNav from "@/components/BotoesNav";

export default function () {
  var textProx = "Enviar";
  var textAnt = "Login";
  var navAnt = "/login";
  return (
    <FundoFormularios>
      <div className="flex flex-col items-center text-black justify-center">
        <h1 className="text-center font-bold text-4xl pb-5 mt-10">
          Recuperar senha
        </h1>
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
