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
      valor: urlParams.get("valor"),
      horario: urlParams.get("horario"),
      data: urlParams.get("data"),
      bola: urlParams.get("bola") === "true",
      rede: urlParams.get("rede") === "true",
      coletes: urlParams.get("coletes") === "true",
    });
  }, []);

  const [esporte, setEsporte] = useState("Futsal");

  const confirmar = async (e) => {};
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Solicitar reserva</Titulo>
        <label className="flex space-x-2 items-center mt-10 mb-5">
          <span>Selecionar esporte:</span>
          <select
            id="Esporte"
            className="rounded-sm"
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
        </label>
        <h2 className="text-center font-bold mt-5 mb-2">Informações</h2>
        <InfoReserv {...reservaInfo}></InfoReserv>

        <form onSubmit={confirmar}>
          <button
            type="submit"
            className="bg-blue-600 py-2 px-4 text-white rounded hover:text-gray-300 mt-5"
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
