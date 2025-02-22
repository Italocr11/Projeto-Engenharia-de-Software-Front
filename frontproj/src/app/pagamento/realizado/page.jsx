"use client";

import Interface from "../../../components/Interface";
import FundoFormulariosInt from "../../../components/FundoFormulariosInt";
import Titulo from "../../../components/Titulo";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  return (
    <Interface>
      <FundoFormulariosInt>
        <div className="my-5 flex flex-col items-center">
          <Titulo>Seu pagamento foi realizado com sucesso!</Titulo>
          <button
            onClick={() => {
              router.push("/interfacePrincipal");
            }}
            type="submit"
            className="bg-blue-400 p-2 rounded hover:text-gray-800 mt-10"
          >
            Voltar para interface
          </button>
        </div>
      </FundoFormulariosInt>
    </Interface>
  );
}
