import { Check, X } from "lucide-react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Notf() {
  const { data: notificacao, error } = useSWR("/exitapi/notificacao", fetcher);

  /*if (error) {
    return <div>Erro ao carregar as notificações!</div>;
  }*/

  if (!notificacao) {
    return <div>Nenhuma notificação até o momento!</div>;
  }

  return (
    <div className="flex flex-col items-centerrounded-sm w-full space-y-2">
      {notificacao &&
        Array.isArray(notificacao) &&
        notificacao.map((notificacao) => (
          <div key={notificacao.id}>
            {notificacao.icone ? (
              <div className="flex flex-row space-x-1 bg-blue-300 p-2">
                <Check />
                <p>
                  Reserva solicitada: {notificacao.data} {notificacao.horario}
                </p>
              </div>
            ) : (
              <div className="flex flex-row space-x-1 bg-blue-300 p-2">
                <X />
                <p>
                  Reserva cancelada: {notificacao.data} {notificacao.horario}
                </p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
