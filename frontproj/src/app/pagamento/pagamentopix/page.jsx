"use client";

import { useRouter } from "next/navigation";
import Interface from "../../../components/Interface";
import FundoFormulariosInt from "../../../components/FundoFormulariosInt";
import Titulo from "../../../components/Titulo";
import BotaoEnviarInt from "../../../components/BotaoEnviarInt";
import EscPagamento from "../../../components/Escpagamento";
import BotoesNav from "../../../components/BotoesNav";

export default function () {
  const router = useRouter();
  var navAnt = "/pagamento/pagamentocartao";
  var textAnt = "Pagar com Cartão";
  var textProx = "Confirmar";
  var navProx = "/pagamento/pagamentopix/realizadopix";
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Pagamento Cartão</Titulo>
        <div className="space-y-5 mt-5">
          <div className="flex flex-row space-x-2">
            <label>Chave pix</label>
            <input maxLength={30}></input>
          </div>
        </div>
        <BotoesNav
          navAnt={navAnt}
          textAnt={textAnt}
          textProx={textProx}
          navProx={navProx}
        ></BotoesNav>
      </FundoFormulariosInt>
    </Interface>
  );
}
