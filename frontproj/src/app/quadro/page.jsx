"use client";
import Interface from "../../components/Interface";
import Titulo from "../../components/Titulo";
import SelecionarHorario from "../../components/SelecionarHorario";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function Quadro() {
  const [bola, setBola] = useState(false);
  const [rede, setRede] = useState(false);
  const [coletes, setColetes] = useState(false);
  const [msg, setMsg] = useState("");
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [data, setData] = useState("");

  const router = useRouter();

  var valor = 40;

  const solicitar = async (e) => {
    e.preventDefault();

    if (data === "") {
      setMsg("Selecione uma data!");
      return;
    }

    if (selectedHorario === null) {
      setMsg("Selecione um horário!");
      return;
    }

    if (bola) valor += 5;
    if (rede) valor += 5;
    if (coletes) valor += 5;

    var dataurl = data;
    var horario = selectedHorario;

    router.push(
      `/solicitarReserva?valor=${valor}&horario=${horario}&data=${data}&bola=${bola}&rede=${rede}&coletes=${coletes}`
    );
  };

  const handleSelectHorario = (horario) => {
    setSelectedHorario(horario);
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Formata a data no formato YYYY-MM-DD
    document.getElementById("dateInput").setAttribute("min", formattedDate);
  }, []);

  return (
    <Interface>
      <h1 className="text-center font-bold text-4xl pb-5">Quadro de horário</h1>
      <div className="flex flex-row h-5/6 space-x-10">
        <div className="flex flex-col items-center justify-start bg-yellow-300 w-2/6 rounded-md">
          <h1 className="text-center font-bold text-2xl mb-5 mt-8">
            Selecionar data
          </h1>
          <input
            type="date"
            id="dateInput"
            onChange={(e) => {
              setData(e.target.value);
            }}
          ></input>

          <div className="items-center justify-center space-y-2">
            <h3 className="text-center font-bold mt-10">
              Equipamentos necessários:
            </h3>

            <div className="space-x-2 flex flex-row items-center">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={bola}
                onChange={() => {
                  setBola(!bola);
                }}
              ></input>
              <label>Bola </label>
            </div>
            <div className="space-x-2 flex flex-row items-center">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={rede}
                onChange={() => setRede(!rede)}
              ></input>
              <label>Rede </label>
            </div>
            <div className="space-x-2 flex flex-row items-center">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={coletes}
                onChange={() => setColetes(!coletes)}
              ></input>
              <label>Coletes </label>
            </div>
          </div>
          <form onSubmit={solicitar}>
            <button
              type="submit"
              className="bg-green-500 p-2 rounded hover:text-gray-800 text-white mt-8"
            >
              Solicitar
            </button>
          </form>
          {msg && <div className="text-red-800 mt-8 pb-10">{msg}</div>}
        </div>
        <div className="flex flex-col bg-yellow-300 w-4/6 rounded-md overflow-hidden">
          <h1 className="text-center font-bold text-2xl mb-6 mt-8 ">
            Selecionar horários
          </h1>
          <div className="grid grid-rows-8 items-center justify-center grid-cols-3 gap-8 w-1/1 h-full mr-5 ml-5 mt-5">
            {[
              "8:00",
              "9:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00",
              "20:00",
              "21:00",
              "22:00",
            ].map((hora) => (
              <SelecionarHorario
                key={hora}
                selectedHorario={selectedHorario}
                onSelect={handleSelectHorario}
              >
                {hora}
              </SelecionarHorario>
            ))}
          </div>
        </div>
      </div>
    </Interface>
  );
}

export default Quadro;
