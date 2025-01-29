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
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-blue-200 w-1/2">
          <User size={80} className="mt-6 mb-5"></User>
          <button className="mb-5 bg-blue-600 p-2 rounded text-gray-800 hover:text-white ">
            Alterar foto
          </button>
          <div className="flex flex-col items-start">
            <div className="flex flex-row space-x-3 mt-5 mb-10 justify-center items-center">
              <p>Nome:</p>
              <p>{nome}</p>
              <button
                className="bg-yellow-400 p-2 rounded text-gray-800 hover:text-white"
                onClick={() => {
                  router.push("/alterarNome");
                }}
              >
                Alterar
              </button>
            </div>
            <div className="flex flex-row space-x-3 mb-10 items-center justify-center">
              <p>Telefone:</p>
              <p>{tel}</p>
              <button
                className="bg-yellow-400 p-2 rounded text-gray-800 hover:text-white"
                onClick={() => {
                  router.push("/alterarTelefone");
                }}
              >
                Alterar
              </button>
            </div>
            <div className="flex flex-row space-x-3 items-center justify-center">
              <p>Email:</p>
              <p>{email}</p>
              <button
                onClick={() => {
                  router.push("/alterarEmail");
                }}
                className="bg-yellow-400 p-2 rounded text-gray-800 hover:text-white"
              >
                Solicitar alteração
              </button>
            </div>
          </div>
          <div className="mt-10 bg-yellow-600 p-2 rounded-md mb-8">
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
