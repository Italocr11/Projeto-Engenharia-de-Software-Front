import { Check, X } from "lucide-react";

export default function InfoReserv2({ reserva }) {
  return (
    <div className="flex flex-row w-2/3 h-1/4 space-x-3">
      <div className="flex flex-col w-1/2 bg-yellow-200 space-y-2 text-violet-900 mr-5">
        <h3 className="ml-2 mt-2">Data: {reserva.data}</h3>
        <h3 className="ml-2">Horário: {reserva.horario}</h3>
        <h3 className="ml-2">Valor: {reserva.valor},00 R$</h3>
      </div>
      <div className="flex flex-col bg-yellow-200 w-1/2 space-x-2 text-violet-900">
        <h3 className="ml-2 mt-1 mb-5">Equipamentos:</h3>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <div className="flex flex-col items-center ">
            <label className="">Bola</label>
            {reserva.bola ? (
              <Check className="text-green-800" size={20}></Check>
            ) : (
              <X className="text-red-600" size={20}></X>
            )}
          </div>
          <div className="flex flex-col items-center">
            <p className="">Rede</p>
            {reserva.rede ? (
              <Check className="text-green-800" size={20}></Check>
            ) : (
              <X className="text-red-600" size={20}></X>
            )}
          </div>
          <div className="flex flex-col items-center">
            <p className="">Coletes</p>
            {reserva.coletes ? (
              <Check className="text-green-800" size={20}></Check>
            ) : (
              <X className="text-red-600" size={20}></X>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
