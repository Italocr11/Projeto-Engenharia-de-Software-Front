"use client";

import { useRouter } from "next/navigation";
import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";
import InfoReserv from "../../components/InfoReserv";
import { useState, useEffect } from "react";

export default function solicitarReserva() {
  const router = useRouter();
  const [reservaInfo, setReservaInfo] = useState({
    esporte: null,
    valor: null,
    horario: null,
    data: null,
    bola: null,
    rede: null,
    coletes: null,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setReservaInfo({
      esporte: urlParams.get("esporte"),
      valor: urlParams.get("valor"),
      horario: urlParams.get("horario"),
      data: urlParams.get("data"),
      bola: urlParams.get("bola") === "true",
      rede: urlParams.get("rede") === "true",
      coletes: urlParams.get("coletes") === "true",
    });
  }, []);

  const [esporte, setEsporte] = useState("Futsal");

  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Solicitar reserva</Titulo>
        <div className="flex flex-row space-x-2 items-center justify-center m-6">
          <h3>Selecionar esporte:</h3>
          <select
            className="appearance-none bg-gray-100 border-2 border-gray-300 rounded-lg p-1 text-base max-w-xs focus:border-blue-500
             focus:bg-blue-50 transition-colors duration-300 text-center"
            onChange={(e) => {
              setEsporte(e.target.value);
            }}
          >
            <option value="Futsal">Futsal</option>
            <option value="Basquete">Basquete</option>
            <option value="Vôlei">Vôlei</option>
            <option value="Handebol">Handebol</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <h2 className="text-center font-bold mt-5 mb-2">Informações:</h2>
        <InfoReserv {...reservaInfo}></InfoReserv>

        <button
          type="button"
          className="bg-green-400 py-2 px-4 text-black rounded hover:text-gray-300 my-5"
          onClick={() => {
            router.push(
              `/pagamento?esporte=${esporte}&valor=${reservaInfo.valor}&horario=${reservaInfo.horario}&data=${reservaInfo.data}&bola=${reservaInfo.bola}&rede=${reservaInfo.rede}&coletes=${reservaInfo.coletes}`
            );
          }}
        >
          Confirmar
        </button>
      </FundoFormulariosInt>
    </Interface>
  );
}
