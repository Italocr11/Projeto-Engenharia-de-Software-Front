import InfoReserv from "./InfoReserv";

export default function InfoReservHist() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-row space-x-5 w-2/4 h-max items-center justify-evenly bg-green-400 pt-3 pb-3">
        <div className="flex flex-col">
          <h2 className="py-2 font-bold text-2xl ">Reserva 1</h2>
          <button type="button" className="py-2 px-4 rounded-md bg-red-400">
            Cancelar
          </button>
        </div>

        <InfoReserv></InfoReserv>
      </div>
    </div>
  );
}
