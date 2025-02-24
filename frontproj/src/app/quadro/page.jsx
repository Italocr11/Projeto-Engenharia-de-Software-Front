"use client";

import Interface from "../../components/Interface";
import SelecionarHorario from "../../components/SelecionarHorario";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Quadro() {
  const [bola, setBola] = useState(false);
  const [rede, setRede] = useState(false);
  const [coletes, setColetes] = useState(false);
  const [msg, setMsg] = useState("");
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [data, setData] = useState("");
  const [horariosOcupados, setHorariosOcupados] = useState([]);

  const router = useRouter();
  const dateInputRef = useRef(null);
  const baseValor = 40;

  useEffect(() => {
    if (data) {
      const [year, month, day] = data.split("-");
      const formattedDate = `${day}-${month}-${year}`;

      axios
        .get(`http://localhost:3000/reservas/quadro?data=${formattedDate}`)

        .then((response) => {
          setHorariosOcupados(response.data.map((hora) => hora.horario));
          console.log(horariosOcupados);
        })
        .catch((error) => {
          console.log(error);
          setMsg(
            error.response?.data?.message ||
              "Erro ao buscar horários. Tente novamente!"
          );
        });
    }
  }, [data]);

  const solicitar = (e) => {
    e.preventDefault();

    if (!data) {
      setMsg("Selecione uma data!");
      return;
    }

    if (!selectedHorario) {
      setMsg("Selecione um horário!");
      return;
    }

    const valorFinal =
      baseValor + (bola ? 5 : 0) + (rede ? 5 : 0) + (coletes ? 5 : 0);

    router.push(
      `/solicitarReserva?valor=${valorFinal}&horario=${selectedHorario}&data=${data}&bola=${bola}&rede=${rede}&coletes=${coletes}`
    );
  };

  const handleSelectHorario = (horario) => {
    if (!horariosOcupados.includes(horario)) {
      setSelectedHorario((prev) => (prev === horario ? null : horario));
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    if (dateInputRef.current) {
      dateInputRef.current.min = today;
    }
  }, []);

  return (
    <Interface>
      <h1 className="text-center font-bold text-4xl mb-10">
        Quadro de horários
      </h1>

      <div className="flex flex-row h-5/6 space-x-10 justify-center">
        <div className="flex flex-col items-center border-2 border-black shadow-xl w-2/6 rounded-md">
          <div className="bg-black w-full text-white">
            <h1 className="text-center font-bold text-2xl mb-6 mt-8">
              Selecionar data
            </h1>
          </div>
          <input
            ref={dateInputRef}
            className="border rounded px-3 py-2 mt-5"
            type="date"
            onChange={(e) => setData(e.target.value)}
          />

          <div className="text-black mt-10 space-y-1">
            <h3 className="font-bold mb-2">Equipamentos necessários:</h3>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={bola}
                onChange={() => setBola(!bola)}
              />
              <label>Bola 🏀</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={rede}
                onChange={() => setRede(!rede)}
              />
              <label>Rede 🥅</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={coletes}
                onChange={() => setColetes(!coletes)}
              />
              <label>Coletes 🎽</label>
            </div>
          </div>

          <form onSubmit={solicitar}>
            <button
              type="submit"
              className="bg-green-500 py-2 px-4 rounded text-white mt-8 hover:text-gray-800"
            >
              Solicitar
            </button>
          </form>
          {msg && <div className="text-red-800 mt-8 pb-10">{msg}</div>}
        </div>

        <div className="flex flex-col items-center border-2 border-black shadow-xl w-2/6 rounded-md overflow-hidden">
          <div className="bg-black w-full text-white">
            <h1 className="text-center font-bold text-2xl mb-6 mt-8">
              Selecionar horário
            </h1>
          </div>
          <div className="grid grid-rows-8 grid-cols-3 gap-8 h-full mx-5 mt-10">
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
                disabled={horariosOcupados.includes(hora)}
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
