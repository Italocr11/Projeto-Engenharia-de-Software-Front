import { Check, X } from "lucide-react";

function GuiaNotf() {
  return (
    <div className="h-screen w-screen flex  justify-center">
      <div className="absolute ml-32 top-20 text-black bg-white p-4 shadow-lg rounded-lg h-1/4 w-1/5">
        {/* Conteúdo da caixa de notificações pode ser adicionado aqui */}
        <button className="bg-blue-200 rounded-sm p-1 w-full mb-2">
          <div className="flex flex-row space-x-3">
            <Check></Check>
            <p>Reserva solicitada: 18:00 26/10</p>
          </div>
        </button>
        <button className="bg-blue-200 rounded-sm p-1 w-full mb-2">
          <div className="flex flex-row space-x-3">
            <X></X>
            <p>Reserva cancelada: 18:00 26/10</p>
          </div>
        </button>
        <button className="bg-blue-200 rounded-sm p-1 w-full mb-2">
          <div className="flex flex-row space-x-3">
            <Check></Check>
            <p>Reserva solicitada: 18:00 26/10</p>
          </div>
        </button>
        <button className="bg-blue-200 rounded-sm p-1 w-full mb-2">
          <div className="flex flex-row space-x-3">
            <X></X>
            <p>Reserva cancelada: 18:00 26/10</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default GuiaNotf;
