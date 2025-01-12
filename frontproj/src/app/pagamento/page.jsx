"use client";

import { useRouter } from "next/navigation";
import Interface from "../../components/Interface";
import EscPagamento from "../../components/Escpagamento";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";
import BotaoEnviarInt from "../../components/BotaoEnviarInt";
import BotoesNav from "../../components/BotoesNav";

export default function () {
  const router = useRouter();
  var navAnt = "/pagamento/pagamentopix";
  var textAnt = "Pix";
  var textProx = "Cartão";
  var navProx = "/pagamento/pagamentocartao";

  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Pagamento</Titulo>
        <h2>Escolher opção de pagamento:</h2>
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
