"use client";

import Interface from "@/components/Interface";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Perfil() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    nome: "",
    tel: "",
    email: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("userEmail");
      if (!email) {
        router.replace("/login"); // Redireciona se o usuário não estiver logado
      } else {
        setUserData({
          nome: localStorage.getItem("userNome") || "",
          tel: localStorage.getItem("userTel") || "",
          email,
        });
      }
    }
  }, []);

  return (
    <Interface>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center border-4 border-gray-800 w-1/2 rounded-md shadow-2xl">
          <div className="flex flex-col items-center w-full bg-amber-300">
            <img
              className="my-6"
              src="/img/fotoperfil.png"
              alt="perfil"
              width={90}
              height={50}
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-row space-x-3 mt-5 mb-10 justify-center items-center">
              <p>Nome:</p>
              <p className="text-purple-900">{userData.nome}</p>
              <button
                className="bg-amber-300 py-2 px-2 rounded-md text-gray-800 hover:text-white"
                onClick={() => router.push("/alterarNome")}
              >
                Alterar
              </button>
            </div>
            <div className="flex flex-row space-x-3 mb-10 items-center justify-center">
              <p>Telefone:</p>
              <p className="text-purple-900">{userData.tel}</p>
              <button
                className="bg-amber-300 py-2 px-2 rounded-md text-gray-800 hover:text-white"
                onClick={() => router.push("/alterarTelefone")}
              >
                Alterar
              </button>
            </div>
            <div className="flex flex-row space-x-3 items-center justify-center">
              <p>Email:</p>
              <p className="text-purple-900">{userData.email}</p>
              <button
                onClick={() => router.push("/alterarEmail")}
                className="bg-amber-300 py-2 px-2 rounded-md text-gray-800 hover:text-white"
              >
                Solicitar alteração
              </button>
            </div>
          </div>
          <div className="flex flex-row my-10 space-x-5">
            <button
              className="bg-green-500 py-2 px-2 rounded-md hover:text-white"
              onClick={() => router.push("/alterarSenha")}
            >
              Solicitar mudança de senha
            </button>
            <button
              className="bg-red-500 py-2 px-2 rounded-md hover:text-white"
              onClick={() => {
                localStorage.removeItem("userEmail");
                localStorage.removeItem("userNome");
                localStorage.removeItem("userTel");

                router.replace("/login");
              }}
            >
              Encerrar Sessão
            </button>
          </div>
        </div>
      </div>
    </Interface>
  );
}

export default Perfil;
