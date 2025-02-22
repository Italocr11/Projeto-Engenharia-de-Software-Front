"use client";

import FundoFormularios from "../../components/fundoFormularios";
import { useRouter } from "next/navigation";
import Email from "../../components/Email";
import Titulo from "../../components/Titulo";
import { useState } from "react";
import axios from "axios";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [campoCodigo, setCampoCodigo] = useState(false);
  const [codigo, setCodigo] = useState("");

  const router = useRouter();

  const enviar = async (e) => {
    e.preventDefault();

    if (!email) {
      setMsg("Insira seu email!");
      return;
    }

    try {
      const resultado = await axios.post(
        "http://localhost:3000/usuarios/recuperarsenha",
        email
      );
      setCampoCodigo(true);
    } catch (error) {
      setMsg(
        error.resposta?.data?.message ||
          "Erro ao comprovar email. tente novamente."
      );
    }
  };

  const confirmar = async (e) => {
    e.preventDefault();

    if (!codigo) {
      setMsg("Insira o código recebido pelo email!");
      return;
    }

    try {
      const verifCod = await axios.post(
        "http://localhost:3000/usuarios/codigorec",
        codigo
      );
      router.push("/recuperarsenha/novasenha");
    } catch (error) {
      setMsg(
        error.verifCod?.data?.message || "Código inválido. Tente novamente"
      );
    }
  };

  return (
    <FundoFormularios>
      <div className="flex flex-col items-center text-black justify-center mt-5 mb-5">
        <Titulo>Recuperar senha</Titulo>
        {campoCodigo === false && (
          <div className="flex flex-col items-center">
            <form onSubmit={enviar}>
              <div className="flex flex-col items-center">
                <Email email={email} setEmail={setEmail}></Email>
                <div className="flex-row space-x-2 mt-3 mb-3">
                  <button
                    onClick={() => {
                      router.push("/login");
                    }}
                    type="button"
                    className=" bg-blue-400 py-2 px-4 rounded hover:text-gray-800 mt-5"
                  >
                    Ir para Login
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 my-5 rounded hover:text-gray-800"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
            {msg && <div className="text-red-800 mb-5">{msg}</div>}
          </div>
        )}

        {campoCodigo === true && (
          <div className="flex flex-col items-center">
            <form onSubmit={confirmar}>
              <p className="pt-5"> Código recebido:</p>
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Inserir código"
                  maxLength="8"
                  className="border rounded px-3 py-2 w-full mt-1"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                ></input>
                <div className="flex flex-row space-x-14">
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-400 my-5 rounded hover:text-gray-800"
                  >
                    Reenviar código
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 my-5 rounded hover:text-gray-800"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
            {msg && <div className="text-red-800 mb-5">{msg}</div>}
          </div>
        )}
      </div>
    </FundoFormularios>
  );
}
