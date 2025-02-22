"use client";
import Interface from "@/components/Interface";
import InterfacePrincipal from "../interfacePrincipal/page";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

function Perfil() {
  const router = useRouter();

  var email = localStorage.getItem("userEmail");
  var tel = localStorage.getItem("userTel");
  var nome = localStorage.getItem("userNome");

  return (
    <Interface>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center border-2 border-black w-1/2 rounded-md shadow-2xl">
          <User size={80} className="my-8"></User>

          <div className="flex flex-col items-start">
            <div className="flex flex-row space-x-3 mt-5 mb-10 justify-center items-center">
              <p>Nome:</p>
              <p className="text-purple-900">{nome}</p>
              <button
                className="bg-amber-300 py-2 px-2 rounded-md text-gray-800 hover:text-white"
                onClick={() => {
                  router.push("/alterarNome");
                }}
              >
                Alterar
              </button>
            </div>
            <div className="flex flex-row space-x-3 mb-10 items-center justify-center">
              <p>Telefone:</p>
              <p className="text-purple-900">{tel}</p>
              <button
                className="bg-amber-300 py-2 px-2 rounded-md text-gray-800 hover:text-white"
                onClick={() => {
                  router.push("/alterarTelefone");
                }}
              >
                Alterar
              </button>
            </div>
            <div className="flex flex-row space-x-3 items-center justify-center">
              <p>Email:</p>
              <p className="text-purple-900">{email}</p>
              <button
                onClick={() => {
                  router.push("/alterarEmail");
                }}
                className="bg-amber-300 py-2 px-2 rounded-md text-gray-800 hover:text-white"
              >
                Solicitar alteração
              </button>
            </div>
          </div>
          <div className="mt-10 bg-green-500 py-2 px-2 rounded-md mb-8 hover:text-white">
            <button
              onClick={() => {
                router.push("/alterarSenha");
              }}
            >
              Solicitar mudança de senha
            </button>
          </div>
        </div>
      </div>
    </Interface>
  );
}

export default Perfil;
