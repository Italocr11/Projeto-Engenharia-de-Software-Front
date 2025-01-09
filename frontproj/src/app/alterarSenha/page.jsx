"use client";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Interface from "../../components/Interface";
import Email from "../../components/Email";
import Titulo from "../../components/Titulo";
import Senha from "../../components/Senha";
import BotaoEnviarInt from "../../components/BotaoEnviarInt";

function AlterarSenha() {
  var str0 = "Atual";
  var str = "Nova";

  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Alterar senha</Titulo>
        <Senha str0={str0}></Senha>
        <Senha str={str}></Senha>
        <BotaoEnviarInt></BotaoEnviarInt>
      </FundoFormulariosInt>
    </Interface>
  );
}

export default AlterarSenha;
