"use client";

import { useRouter } from "next/navigation";
import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";

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
      </FundoFormulariosInt>
    </Interface>
  );
}
