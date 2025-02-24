"use client";

import { Bell, Album, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import GuiaNotf from "./GuiaNotf";

export default function Interface({ children }) {
  const router = useRouter();
  const [notf, setNotf] = useState(false);
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    if (notf) {
      const userEmail = localStorage.getItem("userEmail");

      if (!userEmail) {
        console.error("Usuário não encontrado.");
        return;
      }

      axios
        .get(
          `http://localhost:3000/notificacoes/mostrar?userEmail=${userEmail}`
        )
        .then((response) => {
          console.log("Notificações recebidas:", response.data);
          setNotificacoes(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar notificações:", error);
        });
    }
  }, [notf]);

  return (
    <div
      className="bg-white overflow-hidden h-screen "
      onClick={() => {
        if (notf == true) {
          setNotf(false);
        }
      }}
    >
      <header className="bg-green-400 h-20 flex flex-row text-blue-950 font-bold text-lg items-center justify-between">
        <button
          onClick={() => router.push("/interfacePrincipal")}
          className="ml-5 hover:text-black"
        >
          <img src="/img/Logo.png" alt="Logo" height={70} width={70}></img>
        </button>

        <button
          className="flex items-center hover:text-black"
          onClick={() => router.push("./quadro")}
        >
          <Calendar className="mr-2" /> Quadro de horários
        </button>

        <button
          className="flex items-center hover:text-black"
          onClick={() => router.push("/historico")}
        >
          <Album className="mr-2" /> Histórico de horários
        </button>

        <button
          className="hover:text-black"
          onClick={() => {
            setNotf(true);
          }}
        >
          <Bell />
        </button>

        <button
          onClick={() => router.push("/perfil")}
          className="mr-5 hover:text-black flex items-center"
        >
          <div className="flex flex-col items-center">
            <img
              src="/img/fotoperfil.png"
              alt="perfil"
              width={30}
              height={30}
              className="mr-1"
            ></img>
            <span>Perfil</span>
          </div>
        </button>
      </header>

      <div className="flex flex-row flex-1 h-[calc(100vh-5rem)] text-black">
        <main className="flex-1 p-10 overflow-y-auto">{children}</main>
      </div>

      {notf && <GuiaNotf notificacoes={notificacoes} />}
    </div>
  );
}
