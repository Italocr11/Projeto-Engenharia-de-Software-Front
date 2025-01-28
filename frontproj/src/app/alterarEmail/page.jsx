"use client";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Interface from "../../components/Interface";
import Email from "../../components/Email";
import Titulo from "../../components/Titulo";
import Senha from "../../components/Senha";

function AlterarEmail() {
  var str = "Novo";
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Alterar E-mail</Titulo>
        <Senha></Senha>
        <Email str={str}></Email>
        <button
          type="submit"
          className="bg-blue-600 p-2 rounded hover:text-gray-800 mt-10"
        >
          Confirmar
        </button>
      </FundoFormulariosInt>
    </Interface>
  );
}

export default AlterarEmail;
