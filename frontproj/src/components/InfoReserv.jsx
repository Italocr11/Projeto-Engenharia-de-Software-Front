import { Check, X } from "lucide-react";

function InfoReserv({ ...reservaInfo }) {
  return (
    <div className="flex flex-row w-2/3 h-1/4 space-x-3">
      <div className="flex flex-col w-1/2 bg-yellow-200 space-y-2 text-violet-900">
        <h3 className="ml-2 mt-2">Data: {reservaInfo.data}</h3>
        <h3 className="ml-2">Horário: {reservaInfo.horario}</h3>
        <h3 className="ml-2">Valor: {reservaInfo.valor},00 R$</h3>
      </div>
      <div className="flex flex-col bg-yellow-200 w-1/2 space-x-2 text-violet-900">
        <h3 className="ml-2 mt-1 mb-5">Equipamentos:</h3>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <div className="flex flex-col items-center ">
            <label className="">Bola</label>
            {reservaInfo.bola ? <Check size={20}></Check> : <X size={20}></X>}
          </div>
          <div className="flex flex-col items-center">
            <p className="">Rede</p>
            {reservaInfo.rede ? <Check size={20}></Check> : <X size={20}></X>}
          </div>
          <div className="flex flex-col items-center">
            <p className="">Coletes</p>
            {reservaInfo.coletes ? (
              <Check size={20}></Check>
            ) : (
              <X size={20}></X>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoReserv;
