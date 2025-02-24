"use client";

import InfoReserv from "./InfoReserv";
import { useRouter } from "next/navigation";

export default function InfoReservHist({ reserva }) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full space-y-5">
      <div className="flex flex-row space-x-5 h-max w-4/5 items-center justify-evenly border-1 bg-white border-2 border-black  pt-3 pb-3">
        <div className="flex flex-col">
          <h2 className="py-2 font-bold text-2xl ">{reserva.esporte} </h2>
        </div>

        <InfoReserv {...reserva}></InfoReserv>
      </div>
    </div>
  );
}
