import InfoReserv from "./InfoReserv";

export default function InfoReservHist() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-row space-x-5 w-2/4 h-max items-center justify-evenly bg-green-400 pt-3 pb-3">
        <h2 className="pt-5 pb-5 font-bold text-2xl ">Reserva 1</h2>

        <InfoReserv></InfoReserv>
      </div>
    </div>
  );
}
