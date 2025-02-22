"use client";

import { useRouter } from "next/navigation";
import { InfoReservInterf2 } from "./InfoReservInterf2";

export default function InfoReservInterf({ reserva }) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full space-x-5">
      <div className="flex flex-row space-x-5 w-4/5 h-max items-center justify-evenly border-1 bg-white border-2 border-black pt-3 pb-3">
        <div className="flex flex-col">
          <h2 className="py-2 font-bold text-2xl ">{reserva.esporte}</h2>
          <button
            type="button"
            className="py-2 px-4 rounded-md bg-red-400"
            onClick={() => {
              router.push(
                `/cancelar?data=${reserva.data}&horario=${reserva.horario}$valor=${reserva.valor}&bola=${reserva.bola}&rede=${reserva.rede}$coletes=${reserva.coletes}`
              );
            }}
          >
            Cancelar
          </button>
        </div>
        <InfoReservInterf2 reserva={reserva}></InfoReservInterf2>
      </div>
    </div>
  );
}
