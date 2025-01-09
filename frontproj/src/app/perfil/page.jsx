"use client";
import Interface from "@/components/Interface";
import InterfacePrincipal from "../interfacePrincipal/page";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

function Perfil() {
  const router = useRouter();

  return (
    <Interface>
      <div className="flex flex-col items-center justify-center">
        <User size={80} className="mt-5 mb-5"></User>
        <button className="mb-10 bg-gray-300 p-1 rounded hover:text-gray-800">
          Alterar foto
        </button>
        <div className="flex flex-row space-x-3 mt-5 mb-10">
          <p>Nome:</p>
          <input></input>
          <button className="bg-yellow-400 p-1 rounded hover:text-gray-800">
            Alterar
          </button>
        </div>
        <div className="flex flex-row space-x-3 mb-10">
          <p>Telefone:</p>
          <input></input>
          <button className="bg-yellow-400 p-1 rounded hover:text-gray-800">
            Alterar
          </button>
        </div>
        <div className="flex flex-row space-x-3">
          <p>Email:</p>
          <input></input>
          <button className="bg-yellow-400 p-1 rounded hover:text-gray-800">
            Solicitar alteração
          </button>
        </div>
        <div className="mt-14 bg-yellow-600 p-2 rounded-md">
          <button
            onClick={() => {
              router.push("/alterarSenha");
            }}
          >
            Solicitar mudança de senha
          </button>
        </div>
      </div>
    </Interface>
  );
}

export default Perfil;
