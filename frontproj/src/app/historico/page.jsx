"use client";

import InfoReservHist from "../../components/InfoReservHist";
import Interface from "../../components/Interface";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Historico() {
  const [filtroData, setFiltroData] = useState("");
  const [filtroHorario, setFiltroHorario] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    console.log("Email do usuário:", userEmail);

    if (!userEmail) {
      setMsg("Usuário não encontrado.");
      return;
    }

    axios
      .get(`http://localhost:3000/reservas/historico?userEmail=${userEmail}`)
      .then((response) => {
        console.log("Dados recebidos:", response.data);
        setHistorico(response.data);
      })
      .catch((error) => {
        console.log(error);
        setMsg(
          error.response?.data?.message ||
            "Erro ao buscar histórico. Tente novamente!"
        );
      });
  }, []);

  return (
    <Interface>
      <div className="h-max w-full flex items-center justify-center">
        <div className="flex flex-col space-y-3 bg-gray-200 w-3/5 pb-6">
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

          {historico.length > 0 ? (
            historico.map((reserva) => (
              <InfoReservHist key={reserva.id} reserva={reserva} />
            ))
          ) : (
            <div className="text-center text-gray-800 font-bold mt-10">
              {msg || "Você não alugou nenhuma reserva até o momento!"}
            </div>
          )}
        </div>
      </div>
    </Interface>
  );
}
