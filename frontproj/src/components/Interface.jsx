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
      <header className="bg-amber-400 h-20 flex flex-row text-blue-950 font-bold text-lg items-center justify-between">
        <button
          onClick={() => {
            router.push("/interfacePrincipal");
          }}
          className="ml-10 hover:text-black"
        >
          <h1>Horário para quadras</h1>
        </button>

        <button
          className="flex items-center hover:text-black pt-2"
          onClick={() => {
            router.push("./quadro");
          }}
        >
          <Calendar className="mr-2" /> Quadro de horários
        </button>

        <button
          className="flex items-center hover:text-black"
          onClick={() => {
            router.push("/historico");
          }}
        >
          <Album className="mr-2" /> Histórico de horários
        </button>

        <button
          className="hover:text-black"
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
          className="mr-10 hover:text-black"
        >
          <User className="mb-1 ml-3" />
          <span>Perfil</span>
        </button>
      </header>
      <div className="flex flex-row flex-1 h-[calc(100vh-5rem)] text-black">
        <main className=" flex-1 p-10 overflow-y-auto">{children}</main>
      </div>
      {notf && <GuiaNotf></GuiaNotf>}
    </div>
  );
}
