import BotaoEnviarInt from "@/components/BotaoEnviarInt";
import Interface from "../../components/Interface";
import Titulo from "../../components/Titulo";
import SelecionarHorario from "../../components/SelecionarHorario";

function expHorarios() {
  for (let i = 0; i < 0; i++) {
    <h1>Opa</h1>;
  }
}

function Quadro() {
  return (
    <Interface>
      <h1 className="text-center font-bold text-4xl pb-5">
        Quadro de horários
      </h1>
      <div className="flex flex-row h-5/6 space-x-10">
        <div className="flex flex-col items-center justify-start bg-yellow-300 w-2/6 rounded-md">
          <h1 className="text-center font-bold text-2xl mb-5 mt-20">
            Selecionar data
          </h1>
          <input type="date"></input>
          <BotaoEnviarInt></BotaoEnviarInt>
          <button
            type="submit"
            className="bg-green-500 p-2 rounded hover:text-gray-800 mt-24"
          >
            Confirmar selecionados
          </button>
        </div>
        <div className="flex flex-col bg-yellow-300 w-4/6 rounded-md overflow-hidden">
          <h1 className="text-center font-bold text-2xl mb-5 mt-5 ">
            Selecionar horário
            <div className="grid grid-rows-8 items-center justify-center grid-cols-3 gap-8 w-1/1 h-full mr-5 ml-5 mt-4">
              <SelecionarHorario>8:00</SelecionarHorario>
              <SelecionarHorario>13:00</SelecionarHorario>
              <SelecionarHorario>18:00</SelecionarHorario>
              <SelecionarHorario>9:00</SelecionarHorario>
              <SelecionarHorario>14:00</SelecionarHorario>
              <SelecionarHorario>19:00</SelecionarHorario>
              <SelecionarHorario>10:00</SelecionarHorario>
              <SelecionarHorario>15:00</SelecionarHorario>
              <SelecionarHorario>20:00</SelecionarHorario>
              <SelecionarHorario>11:00</SelecionarHorario>
              <SelecionarHorario>16:00</SelecionarHorario>
              <SelecionarHorario>21:00</SelecionarHorario>
              <SelecionarHorario>12:00</SelecionarHorario>
              <SelecionarHorario>17:00</SelecionarHorario>
              <SelecionarHorario>22:00</SelecionarHorario>
            </div>
          </h1>
        </div>
      </div>
    </Interface>
  );
}

export default Quadro;
