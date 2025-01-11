"use client";

import { useRouter } from "next/navigation";
import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";
import BotaoEnviarInt from "../../components/BotaoEnviarInt";
import { Check, X } from "lucide-react";
import InfoReserv from "../../components/InfoReserv";

export default function () {
  const router = useRouter();
  var enviar = "/pagamento";
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Solicitar cancelamento</Titulo>
        <h2 className="text-center font-bold mt-5 mb-2">Informações</h2>
        <InfoReserv></InfoReserv>
        <BotaoEnviarInt enviar={enviar}></BotaoEnviarInt>
      </FundoFormulariosInt>
    </Interface>
  );
}
