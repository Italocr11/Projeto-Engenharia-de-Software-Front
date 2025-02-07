"use client";

import InfoReservHist from "../../components/InfoReservHist";
import Interface from "../../components/Interface";
import { useState } from "react";
import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Historico() {
  const [filtroData, setFiltroData] = useState("");
  const [filtroHorario, setFiltroHorario] = useState(null);

  /*const url = `/exitapi/historico?${filtroData ? `data=${filtroData}` : ""}${
    filtroData && filtroHorario ? "&" : ""
  }${filtroHorario ? `horario=${filtroHorario}` : ""}`;

  const { data: historico, error } = useSWR(url, fetcher);

  if (error) {
    return <div>Erro ao carregar histórico!</div>;
  }

  if (!historico) {
    return <div>Carregando histórico...</div>;
  } */

  return (
    <Interface>
      <div className="h-max w-full flex items-center justify-center">
        <div className="flex flex-col space-y-3 bg-gray-200 w-full pb-6">
          <h1 className="text-center font-bold pb-10 text-3xl mt-10 bold text-yellow-800 ">
            Histórico de horários
          </h1>
          <div className="flex flex-row space-x-16 items-center justify-center">
            <div>
              <h2 className="font-bold text-2xl text-yellow-700">Filtros:</h2>
            </div>
            <div>
              <label className="text-blue-600 mr-2">Data:</label>

              <input
                type="date"
                className="border rounded px-3 py-2"
                value={filtroData}
                onChange={(e) => {
                  setFiltroData(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="text-blue-600 mr-2">Horário:</label>
              <select
                className="appearance-none border-2 border-gray-300 rounded-lg p-1 text-base max-w-xs focus:border-blue-500
             focus:bg-blue-50 transition-colors duration-300 text-center"
                onChange={(e) => {
                  setFiltroHorario(e.target.value);
                }}
              >
                <option value={"8:00"}>8:00</option>
                <option value={"9:00"}>9:00</option>
                <option value={"10:00"}>10:00</option>
                <option value={"11:00"}>11:00</option>
                <option value={"12:00"}>12:00</option>
                <option value={"13:00"}>13:00</option>
                <option value={"14:00"}>14:00</option>
                <option value={"15:00"}>15:00</option>
                <option value={"16:00"}>16:00</option>
                <option value={"17:00"}>17:00</option>
                <option value={"18:00"}>18:00</option>
                <option value={"19:00"}>19:00</option>
                <option value={"20:00"}>20:00</option>
                <option value={"21:00"}>21:00</option>
                <option value={"22:00"}>22:00</option>
              </select>
            </div>
          </div>
          {/*historico && Array.isArray(historico) ? (
            historico.map((historicoReservas) => (
              <InfoReservHist
                key={historicoReservas.id}
                reserva={historicoReservas}
              />
            ))
          ) : (
            <div>Nenhum histórico encontrado.</div>
          )*/}
        </div>
      </div>
    </Interface>
  );
}
