"use client";

import Interface from "../../../../components/Interface";
import FundoFormulariosInt from "../../../../components/FundoFormulariosInt";
import Titulo from "../../../../components/Titulo";
import BotaoEnviarInt from "../../../../components/BotaoEnviarInt";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Pagamento realizado com sucesso!</Titulo>
        <button
          onClick={() => {
            router.push("/interfacePrincipal");
          }}
          type="submit"
          className="bg-blue-600 p-2 rounded hover:text-gray-800 mt-10"
        >
          Voltar para interface
        </button>
      </FundoFormulariosInt>
    </Interface>
  );
}
