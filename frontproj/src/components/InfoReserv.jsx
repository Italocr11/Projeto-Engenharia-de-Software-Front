import { Check, X } from "lucide-react";

function InfoReserv() {
  return (
    <div className="flex flex-row w-2/3 h-1/4 space-x-3">
      <div className="flex flex-col w-1/2 bg-yellow-200 space-y-2">
        <h3 className="ml-2 mt-2">Data:</h3>
        <h3 className="ml-2">Horário:</h3>
        <h3 className="ml-2">Valor:</h3>
      </div>
      <div className="flex flex-col bg-yellow-200 w-1/2 space-x-2">
        <h3 className="ml-2 mt-1 mb-5">Equipamentos:</h3>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <div className="flex flex-col items-center">
            <label className="">Bola</label>
            <Check></Check>
          </div>
          <div className="flex flex-col items-center">
            <p className="">Rede</p>
            <Check></Check>
          </div>
          <div className="flex flex-col items-center">
            <p className="">Coletes</p>
            <Check></Check>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoReserv;
