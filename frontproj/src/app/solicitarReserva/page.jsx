"use client";

import { useRouter } from "next/navigation";
import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";
import InfoReserv from "../../components/InfoReserv";

export default function () {
  const router = useRouter();

  const confirmar = async (e) => {};
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Solicitar reserva</Titulo>
        <label className="flex space-x-2 items-center">
          <span>Selecionar esporte:</span>
          <select id="Esporte" className="rounded-sm">
            <option value="1">Futsal</option>
            <option value="2">Basquete</option>
            <option value="3">Vôlei</option>
            <option value="3">Handebal</option>
            <option value="3">Outro</option>
          </select>
        </label>
        <h2 className="text-center font-bold mt-5 mb-2">Informações</h2>
        <InfoReserv></InfoReserv>
        <form onSubmit={confirmar}>
          <button
            type="submit"
            className="bg-blue-600 p-2 text-white rounded hover:text-gray-300 mt-5"
            onClick={() => {
              router.push("/pagamento");
            }}
          >
            Confirmar
          </button>
        </form>
      </FundoFormulariosInt>
    </Interface>
  );
}
