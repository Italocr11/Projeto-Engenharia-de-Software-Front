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
  var navAnt = "/pagamento/pagamentopix";
  var textAnt = "Pagar com pix";
  var textProx = "Confirmar";
  var navProx = "/pagamento/pagamentocartao/realizadocartao";
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Pagamento Cartão</Titulo>
        <div className="space-y-5 mt-5">
          <div className="flex flex-row space-x-2">
            <label>Nome do titular do cartão</label>
            <input maxLength={30}></input>
          </div>
          <div className="flex flex-row space-x-2">
            <label>Número do cartão</label>
            <input size={16} maxLength={16}></input>
          </div>
          <div className="flex flex-row space-x-2">
            <label>Data de validade do cartão</label>
            <input type="date"></input>
          </div>
          <div className="flex flex-row space-x-2">
            <label>Código de segurança (CCV)</label>
            <input size={1} maxLength={3}></input>
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
