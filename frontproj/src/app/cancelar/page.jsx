"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";
import InfoReserv from "../../components/InfoReserv";
import axios from "axios";

export default function Cancelar() {
  const router = useRouter();

  const [reservaInfo, setReservaInfo] = useState({
    data: "",
    horario: "",
    valor: "",
    bola: false,
    rede: false,
    coletes: false,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setReservaInfo({
      data: urlParams.get("data") || "",
      horario: urlParams.get("horario") || "",
      valor: urlParams.get("valor") || "",
      bola: urlParams.get("bola") === "true",
      rede: urlParams.get("rede") === "true",
      coletes: urlParams.get("coletes") === "true",
    });
  }, [window.location.search]);

  async function cancelarRes() {
    try {
      const queryParams = new URLSearchParams(reservaInfo).toString();
      const resultado = await axios.delete(
        `http://localhost:3000/usuarios/cancelar?${queryParams}`
      );

      if (resultado.status === 200) {
        console.log("Reserva cancelada com sucesso!");
        router.push("/interfacePrincipal");
      } else {
        console.error(
          "Erro ao cancelar reserva: status inesperado",
          resultado.status
        );
      }
    } catch (error) {
      console.error("Erro ao cancelar reserva:", error);
    }
  }

  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Solicitar cancelamento</Titulo>
        <h2 className="text-center font-bold mt-10 mb-4">Informações:</h2>

        <InfoReserv {...reservaInfo} />
        <button
          type="button"
          className="py-2 px-4 rounded-md bg-red-400 my-5"
          disabled={!reservaInfo.data}
          onClick={cancelarRes}
          aria-label="Cancelar reserva"
        >
          Cancelar
        </button>
      </FundoFormulariosInt>
    </Interface>
  );
}
