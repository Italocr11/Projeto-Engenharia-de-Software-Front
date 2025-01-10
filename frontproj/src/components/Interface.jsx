"use client";

import { Bell } from "lucide-react";
import { Album } from "lucide-react";
import { Calendar } from "lucide-react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Interface({ children }) {
  const router = useRouter();

  return (
    <div className="bg-white overflow-hidden h-screen">
      <header className="bg-yellow-400 h-1/6 flex flex-row flex-1 text-black items-center justify-between">
        <button
          onClick={() => {
            router.push("/interfacePrincipal ");
          }}
          className="ml-10 hover:text-gray-700"
        >
          <h1 className="text-lg">Horário para quadras</h1>
        </button>

        <button className="hover:text-gray-700">
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
            href="#"
            className="flex items-center hover:text-gray-700 pt-2"
            onClick={() => {
              router.push("./quadro");
            }}
          >
            <Calendar className="mr-3" /> Quadro de horários
          </button>
          <button href="#" className="flex items-center hover:text-gray-700">
            <Album className="mr-3" /> Histórico de horários
          </button>
        </nav>
        <main className="bg-gray-100 flex-1 p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
