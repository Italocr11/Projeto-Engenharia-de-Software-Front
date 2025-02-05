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
    data: null,
    horario: null,
    valor: null,
    bola: null,
    rede: null,
    coletes: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);

      setReservaInfo({
        data: urlParams.get("data") || "",
        horario: urlParams.get("horario") || "",
        valor: urlParams.get("valor") || "",
        bola: urlParams.get("bola") === "true",
        rede: urlParams.get("rede") === "true",
        coletes: urlParams.get("coletes") === "true",
      });
    }
  }, []);

  async function cancelarRes() {
    try {
      const resultado = await axios.delete(
        "http://localhost:3000/usuarios/cancelar",
        { data: reservaInfo }
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
        <InfoReserv {...reservaInfo}></InfoReserv>
        <button
          type="button"
          className="py-2 px-4 rounded-md bg-red-400 mt-6"
          disabled={!reservaInfo.data}
          onClick={cancelarRes}
        >
          Cancelar
        </button>
      </FundoFormulariosInt>
    </Interface>
  );
}
