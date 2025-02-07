import { Check, X } from "lucide-react";
import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Notf() {
  /* const { data: notificacao, error } = useSWR("/exitapi/notificacao", fetcher);

  if (error) {
    return <div>Erro ao carregar as notificações!</div>;
  }

  if (!notificacao) {
    return <div>Carregando notificações...</div>;
  } */

  return (
    <div className="rounded-sm w-full mb-2 space-y-3">
      {/*notificacoes && Array.isArray(notificacao) && notificacao.map((notificacao) => (
        <div key={notificacao.id}>
          {notificacao.icone ? (
            <div className="flex flex-row space-x-1 bg-blue-300 p-2">
              <Check />
              <p>
                Reserva solicitada: {notificacao.horario} {notificacao.data}
              </p>
            </div>
          ) : (
            <div className="flex flex-row space-x-1 bg-blue-300 p-2">
              <X />
              <p>
                Reserva cancelada: {notificacao.horario} {notificacao.data}
              </p>
            </div>
          )}
        </div>
      ))*/}
    </div>
  );
}
