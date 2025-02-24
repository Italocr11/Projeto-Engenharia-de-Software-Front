"use client";

import Interface from "../../components/Interface";
import InfoReservInterf from "../../components/InfoReservInterf";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InterfacePrincipal() {
  const [reservas, setReservas] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    console.log("Email do usuário:", userEmail);

    if (!userEmail) {
      setMsg("Usuário não encontrado.");
      return;
    }

    axios
      .get(`http://localhost:3000/reservas/interface?userEmail=${userEmail}`)
      .then((response) => {
        console.log("Dados recebidos:", response.data);
        setReservas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar horários ativos:", error);
        setMsg(
          error.response?.data?.message ||
            "Erro ao buscar horários ativos. Tente novamente!"
        );
      });
  }, []);

  return (
    <Interface>
      <div className="h-max w-full flex items-center justify-center">
        <div className="flex flex-col space-y-3 bg-stone-200 w-3/5 pb-6">
          <div className="flex items-center justify-center mt-10">
            <h1 className=" text-3xl mb-5 bold font-bold text-amber-800">
              Horários reservados recentemente
            </h1>
          </div>

          {reservas.length > 0 ? (
            reservas.map((reserva) =>
              reserva.id ? (
                <InfoReservInterf key={reserva.id} reserva={reserva} />
              ) : null
            )
          ) : (
            <div className="text-center text-gray-800 font-bold mt-10">
              {msg || "Você não possui nenhuma reserva alugada!"}
            </div>
          )}
        </div>
      </div>
    </Interface>
  );
}
