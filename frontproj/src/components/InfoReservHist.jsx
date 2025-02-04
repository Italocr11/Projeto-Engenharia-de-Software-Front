"use client";

import InfoReserv from "./InfoReserv";
import { useRouter } from "next/navigation";

export default function InfoReservHist() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-row space-x-5 w-2/4 h-max items-center justify-evenly bg-green-400 pt-3 pb-3">
        <div className="flex flex-col">
          <h2 className="py-2 font-bold text-2xl ">Reserva 1</h2>
        </div>

        <InfoReserv></InfoReserv>
      </div>
    </div>
  );
}
