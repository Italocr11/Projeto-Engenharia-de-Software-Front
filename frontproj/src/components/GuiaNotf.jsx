import { Check, X } from "lucide-react";

function GuiaNotf({ notificacoes }) {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="fixed right-32 top-20 text-black bg-white p-4 shadow-xl rounded-lg w-90 max-h-96 overflow-y-auto">
        <h2 className="font-bold text-lg mb-2 text-center">Notificações</h2>

        {Array.isArray(notificacoes) && notificacoes.length > 0 ? (
          <div className="flex flex-col space-y-2">
            {notificacoes.map((notificacao) => (
              <div
                key={notificacao.id}
                className="flex items-center space-x-2 bg-amber-300 p-2 rounded-md"
              >
                {notificacao.icone ? (
                  <Check className="text-green-800" />
                ) : (
                  <X className="text-red-600" />
                )}
                <p>
                  {notificacao.icone
                    ? "Reserva solicitada"
                    : "Reserva cancelada"}
                  : {notificacao.data} {notificacao.horario}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Nenhuma notificação</p>
        )}
      </div>
    </div>
  );
}

export default GuiaNotf;
