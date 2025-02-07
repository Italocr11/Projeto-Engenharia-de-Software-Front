"use client";

import { Bell, Album, Calendar, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GuiaNotf from "./GuiaNotf";

export default function Interface({ children }) {
  const router = useRouter();
  const [notf, setNotf] = useState(false);

  function toggleNotf() {
    if (notf === true) {
      setNotf(!notf);
    }
  }

  return (
    <div className="bg-white overflow-hidden h-screen" onClick={toggleNotf}>
      <header className="bg-yellow-400 h-1/6 flex flex-row flex-1 text-black items-center justify-between">
        <button
          onClick={() => {
            router.push("/interfacePrincipal");
          }}
          className="ml-10 hover:text-gray-700"
        >
          <h1 className="text-lg">Horário para quadras</h1>
        </button>

        <button
          className="hover:text-gray-700"
          onClick={() => {
            setNotf(!notf);
          }}
        >
          <Bell />
        </button>

        <button
          onClick={() => {
            router.push("/perfil");
          }}
          className="mr-10 hover:text-gray-700"
        >
          <User className="mb-1 ml-1" />
          <span>Perfil</span>
        </button>
      </header>
      <div className="flex flex-row flex-1 h-[calc(100vh-6rem)] text-black">
        <nav className="bg-blue-400 w-1/6 flex flex-col space-y-20 items-center justify-start overflow-y-auto pt-10 ">
          <button
            className="flex items-center hover:text-gray-700 pt-2"
            onClick={() => {
              router.push("./quadro");
            }}
          >
            <Calendar className="mr-3" /> Quadro de horários
          </button>
          <button
            className="flex items-center hover:text-gray-700"
            onClick={() => {
              router.push("/historico");
            }}
          >
            <Album className="mr-3" /> Histórico de horários
          </button>
          <button
            className="flex items-center hover:text-gray-700 bg-blue-500 w-full h-12 justify-center"
            onClick={() => {
              router.push("/login");
            }}
          >
            Sair
          </button>
        </nav>
        <main className="bg-gray-100 flex-1 p-10 overflow-y-auto">
          {children}
        </main>
      </div>
      {notf && <GuiaNotf></GuiaNotf>}
    </div>
  );
}
