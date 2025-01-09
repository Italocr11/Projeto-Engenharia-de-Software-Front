"use client";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Interface from "../../components/Interface";
import Email from "../../components/Email";
import Titulo from "../../components/Titulo";
import BotaoEnviarInt from "../../components/BotaoEnviarInt";

function AlterarSenha() {
  var enviar = "/alterarsenha2";
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Alterar senha</Titulo>
        <Email></Email>
        <BotaoEnviarInt enviar={enviar}></BotaoEnviarInt>
      </FundoFormulariosInt>
    </Interface>
  );
}

export default AlterarSenha;
