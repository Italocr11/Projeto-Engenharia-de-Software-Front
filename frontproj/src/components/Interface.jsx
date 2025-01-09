import { Bell } from "lucide-react";
import { Album } from "lucide-react";
import { Calendar } from "lucide-react";
import { User } from "lucide-react";

export default function Interface({ children }) {
  return (
    <div className="bg-white h-screen">
      <header className="bg-yellow-400 h-1/6 flex flex-row flex-1 text-black items-center justify-between">
        <a href="#" className="ml-10">
          <h1 className="text-lg">Horário para quadras</h1>
        </a>

        <a href="#">
          <Bell />
        </a>

        <a href="#" className="mr-10">
          <User className="mb-1 ml-1" />
          <span>Perfil</span>
        </a>
      </header>
      <nav className="bg-blue-400 h-5/6 w-1/6 flex flex-col text-black space-y-20 items-center justify-start pt-10">
        <a href="#" className="flex items-center hover:text-gray-700 pt-2">
          <Calendar className="mr-3" /> Quadro de horários
        </a>
        <a href="#" className="flex items-center hover:text-gray-700">
          <Album className="mr-3" /> Histórico de horários
        </a>
      </nav>
    </div>
  );
}
