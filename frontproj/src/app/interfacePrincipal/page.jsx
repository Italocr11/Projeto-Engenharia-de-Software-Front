"use client";

import Interface from "../../components/Interface";
import InfoReservInterf from "../../components/InfoReservInterf";
import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function InterfacePrincipal() {
  /*const { data: reservas, error } = useSWRexitapi/reservas", fetcher);

  if (error) {
    return <div>Erro ao carregar as reservas!</div>;
  }

  if (!reservas) {
    return <div>Carregando reservas...</div>;
  }*/

  return (
    <Interface>
      <div className="h-max w-full flex items-center justify-center">
        <div className="flex flex-col space-y-3 bg-gray-200 w-full pb-6">
          <div className="flex items-center justify-center mt-10">
            <h1 className=" text-3xl mb-5 bold text-yellow-800">
              Horários reservados recentemente
            </h1>
          </div>
          {/*reservas.map((reserva) => (
            <InfoReservInterf
              key={reserva.esporte}
              reserva={reserva}
            ></InfoReservInterf>
          ))*/}
        </div>
      </div>
    </Interface>
  );
}
