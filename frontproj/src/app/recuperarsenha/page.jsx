"use client";

import FundoFormularios from "../components/FundoFormularios";
import { useRouter } from "next/navigation";
import Email from "../../components/Email";
import Titulo from "../../components/Titulo";
import { useState } from "react";
import axios from "axios";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [campoCodigo, setCampoCodigo] = useState(false);
  const [codigo, setCodigo] = useState("");

  const router = useRouter();

  // Função para enviar e-mail de recuperação
  const enviar = async (e) => {
    e.preventDefault();

    if (!email) {
      setMsg("Insira seu email!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/recuperar/senha", { email });
      setCampoCodigo(true);
      setMsg("Código enviado para seu e-mail.");
    } catch (error) {
      setMsg(
        error.response?.data?.message ||
          "Erro ao enviar e-mail. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  // Função para verificar código
  const confirmar = async (e) => {
    e.preventDefault();

    if (!codigo) {
      setMsg("Insira o código recebido pelo email!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/recuperar/codigo", {
        email,
        code: codigo,
      });
      router.push("/recuperarsenha/novasenha");
    } catch (error) {
      setMsg(
        error.response?.data?.message || "Código inválido. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  // Função para reenviar o código
  const reenviarCodigo = async () => {
    setMsg("");
    await enviar(new Event("submit"));
  };

  return (
    <FundoFormularios>
      <div className="flex flex-col items-center text-black justify-center mt-5 mb-5">
        <Titulo>Recuperar senha</Titulo>

        {/* Etapa 1: Inserir email */}
        {!campoCodigo && (
          <div className="flex flex-col items-center">
            <form onSubmit={enviar}>
              <div className="flex flex-col items-center">
                <Email email={email} setEmail={setEmail} />
                <div className="flex-row space-x-2 mt-3 mb-3">
                  <button
                    onClick={() => router.push("/login")}
                    type="button"
                    className="bg-blue-400 py-2 px-4 rounded hover:text-gray-800 mt-5"
                  >
                    Ir para Login
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 my-5 rounded hover:text-gray-800"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </div>
            </form>
            {msg && <div className="text-red-800 mb-5">{msg}</div>}
          </div>
        )}

        {/* Etapa 2: Inserir código */}
        {campoCodigo && (
          <div className="flex flex-col items-center">
            <form onSubmit={confirmar}>
              <p className="pt-5">Código recebido:</p>
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Inserir código"
                  maxLength={6}
                  className="border rounded px-3 py-2 w-full mt-1"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
                <div className="flex flex-row space-x-14">
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-400 my-5 rounded hover:text-gray-800"
                    onClick={reenviarCodigo}
                    disabled={loading}
                  >
                    {loading ? "Reenviando..." : "Reenviar código"}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 my-5 rounded hover:text-gray-800"
                    disabled={loading}
                  >
                    {loading ? "Verificando..." : "Confirmar"}
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
