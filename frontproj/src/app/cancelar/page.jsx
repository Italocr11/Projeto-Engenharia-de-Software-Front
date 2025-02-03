"use client";

import { useRouter } from "next/navigation";
import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";

import InfoReserv from "../../components/InfoReserv";

export default function () {
  const router = useRouter();
  var enviar = "/pagamento";
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Solicitar cancelamento</Titulo>
        <h2 className="text-center font-bold mt-10 mb-4">Informações:</h2>
        <InfoReserv></InfoReserv>
        <button type="button" className="py-2 px-4 rounded-md bg-red-400 mt-6">
          Cancelar
        </button>
      </FundoFormulariosInt>
    </Interface>
  );
}
