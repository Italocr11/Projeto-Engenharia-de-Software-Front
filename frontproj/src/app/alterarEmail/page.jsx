"use client";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Interface from "../../components/Interface";
import Email from "../../components/Email";
import Titulo from "../../components/Titulo";
import Senha from "../../components/Senha";
import BotaoEnviarInt from "../../components/BotaoEnviarInt";

function AlterarEmail() {
  var str = "Novo";
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Alterar E-mail</Titulo>
        <Senha></Senha>
        <Email str={str}></Email>
        <BotaoEnviarInt></BotaoEnviarInt>
      </FundoFormulariosInt>
    </Interface>
  );
}

export default AlterarEmail;
