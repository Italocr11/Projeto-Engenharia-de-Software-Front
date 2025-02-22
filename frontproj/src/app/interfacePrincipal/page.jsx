"use client";

import Interface from "../../components/Interface";
import InfoReservInterf from "../../components/InfoReservInterf";
import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function InterfacePrincipal() {
  /*const { data: reservas, error } = useSWR("/exitapi/reservas", fetcher);

  if (error) {
    return <div>Erro ao carregar as reservas!</div>;
  }

  if (!reservas) {
    return <div>Carregando reservas...</div>;
  }*/

  return (
    <Interface>
      <div className="h-max w-full flex items-center justify-center">
        <div className="flex flex-col space-y-3 bg-stone-200 w-3/5 pb-6">
          <div className="flex items-center justify-center mt-10">
            <h1 className=" text-3xl mb-5 bold font-bold text-amber-800">
              Horários reservados recentemente
            </h1>
          </div>

          {/*reservas && Array.isArray(reservas) && reservas.map((reserva) => (
            <InfoReservInterf
              key={reserva.id}
              reserva={reserva}
            ></InfoReservInterf>
          ))*/}
        </div>
      </div>
    </Interface>
  );
}
