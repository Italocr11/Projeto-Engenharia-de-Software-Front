import InfoReserv from "../../components/InfoReserv";
import InfoReservHist from "../../components/InfoReservHist";
import Interface from "../../components/Interface";

export default function Historico() {
  return (
    <Interface>
      <h1 className="text-center font-bold text-4xl pb-10">
        Histórico de horários
      </h1>
      <div className="flex flex-row space-x-10 items-center justify-center mb-10">
        <div>
          <h2 className="font-bold text-2xl text-yellow-700">Filtros:</h2>
        </div>
        <div>
          <label className="text-blue-600 pr-2">Tipo de esporte:</label>

          <input maxLength={20}></input>
        </div>
        <div>
          <label className="text-blue-600 pr-2">Data:</label>

          <input type="date"></input>
        </div>
        <div>
          <label className="text-blue-600 pr-2">Horário:</label>
          <input
            type="number"
            id="hora"
            name="hora"
            min="8"
            max="22"
            step="1"
            required
          ></input>
        </div>
      </div>
      <InfoReservHist></InfoReservHist>
    </Interface>
  );
}
