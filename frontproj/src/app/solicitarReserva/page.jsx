import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";
import BotaoEnviarInt from "../../components/BotaoEnviarInt";
import { Check, X } from "lucide-react";

export default function () {
  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Solicitar reserva</Titulo>
        <label className="flex space-x-2 items-center">
          <span>Selecionar esporte:</span>
          <select id="Esporte" className="rounded-sm">
            <option value="1">Futsal</option>
            <option value="2">Basquete</option>
            <option value="3">Vôlei</option>
            <option value="3">Handebal</option>
            <option value="3">Outro</option>
          </select>
        </label>

        <h2 className="text-center font-bold mt-5 mb-2">Informações</h2>
        <div className="flex flex-row w-2/3 h-1/4 space-x-3">
          <div className="flex flex-col w-1/2 bg-yellow-200 space-y-2">
            <h3 className="ml-2 mt-2">Data:</h3>
            <h3 className="ml-2">Horário:</h3>
            <h3 className="ml-2">Valor:</h3>
          </div>
          <div className="flex flex-col bg-yellow-200 w-1/2 space-x-2">
            <h3 className="ml-2 mt-1 mb-5">Equipamentos:</h3>
            <div className="flex flex-row space-x-4 items-center justify-center">
              <div className="flex flex-col items-center">
                <label className="">Bola</label>
                <Check></Check>
              </div>
              <div className="flex flex-col items-center">
                <p className="">Rede</p>
                <Check></Check>
              </div>
              <div className="flex flex-col items-center">
                <p className="">Coletes</p>
                <Check></Check>
              </div>
            </div>
          </div>
        </div>
        <BotaoEnviarInt></BotaoEnviarInt>
      </FundoFormulariosInt>
    </Interface>
  );
}
