"use client";

import { useRouter } from "next/navigation";
import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";
import { useState } from "react";
import axios from "axios";

export default function Pagamento() {
  const [tipoPagamento, settipoPagamento] = useState("");
  const [msg, setMsg] = useState("");

  const [nomeCartao, setnomeCartao] = useState("");
  const [numeroCartao, setnumeroCartao] = useState("");
  const [dataCartao, setdataCartao] = useState("");
  const [codigoCartao, setcodigoCartao] = useState("");

  const [chavePix, setchavePix] = useState("");
  const [qrCode, setQrCode] = useState("");

  const router = useRouter();

  const confirmarpix = async (e) => {
    e.preventDefault();

    if (!chavePix) {
      setMsg("Informe uma chave pix!");
      return;
    }

    try {
      const resultado = await axios.post("http://localhost:3000/pagamentopix", {
        chavePix,
      });
      setQrCode(resultado.data.qrCode);
      setMsg("");
      router.push("/pagamento/realizado");
    } catch (erro) {
      setMsg(
        erro.response?.data?.message ||
          "Erro ao realizar pagamento. Tente novamente."
      );
    }
  };

  const confirmarcartao = async (e) => {
    e.preventDefault();

    if (!nomeCartao || !numeroCartao || !dataCartao || !codigoCartao) {
      setMsg("Preencha todos os campos!");
      return;
    }

    const dados = { nomeCartao, numeroCartao, dataCartao, codigoCartao };

    try {
      const resposta = await axios.post(
        "http://localhost:3000/pagamentocartao",
        dados
      );
      setMsg("");
      router.push("/pagamento/realizado");
    } catch (erro) {
      setMsg(
        erro.response?.data?.message ||
          "Erro ao realizar pagamento. Tente novamente."
      );
    }
  };

  return (
    <Interface>
      <FundoFormulariosInt>
        {tipoPagamento === "" && (
          <div className="flex flex-col items-center justify-center">
            <Titulo>Escolher opção de pagamento:</Titulo>
            <div className="flex flex-row space-x-10 mt-5 ">
              <button
                onClick={() => {
                  settipoPagamento("pix");
                }}
              >
                <img
                  src="/img/pix-img.jpg"
                  alt="pix"
                  width={105}
                  height={50}
                ></img>
              </button>
              <button
                onClick={() => {
                  settipoPagamento("cartão");
                }}
              >
                <img
                  src="/img/cartao-img.jpg"
                  alt="cartão"
                  width={70}
                  height={30}
                ></img>
              </button>
            </div>
          </div>
        )}
        {tipoPagamento === "pix" && (
          <form onSubmit={confirmarpix}>
            <div className="space-y-5 flex flex-col items-center justify-center">
              <h1 className="mt-3 text-blue-400 text-2xl font-bold space-y-3 mb-2">
                Pagamento por Pix
              </h1>
              <div className="flex flex-row space-x-2 items-center justify-center">
                <label>Chave pix:</label>
                <input
                  value={chavePix}
                  onChange={(e) => {
                    setchavePix(e.target.value);
                  }}
                  maxLength={30}
                  className="border rounded px-3 py-2"
                ></input>
              </div>
              <div className="flex flex-row space-x-2 items-center justify-center">
                <label>QR code:</label>
                <button
                  className="py-2 px-4 rounded-md bg-blue-400"
                  type="submit"
                >
                  Gerar QR Code
                </button>

                {qrCode && (
                  <div className="mt-5">
                    <img src={qrCode} alt="QR Code Pix" />
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center space-x-12">
                <button
                  type="button"
                  className="py-2 px-4 rounded-md bg-red-500"
                  onClick={() => {
                    settipoPagamento("cartão");
                    setMsg("");
                  }}
                >
                  Cartão
                </button>
                <button
                  className="py-2 px-4 rounded-md bg-green-500"
                  type="submit"
                >
                  Confirmar
                </button>
              </div>
              {msg && <div className="text-red-800 mt-5">{msg}</div>}
            </div>
          </form>
        )}
        {tipoPagamento === "cartão" && (
          <form onSubmit={confirmarcartao}>
            <div className="space-y-5 flex flex-col items-center justify-center">
              <h1 className="mt-3 text-violet-500 text-2xl font-bold space-y-3">
                Pagamento por Cartão
              </h1>
              <div className="flex flex-row space-x-2 items-center justify-center">
                <label>Nome do titular do cartão:</label>
                <input
                  value={nomeCartao}
                  onChange={(e) => {
                    setnomeCartao(e.target.value);
                  }}
                  maxLength={30}
                  className="border rounded px-3 py-2"
                ></input>
              </div>
              <div className="flex flex-row space-x-2 items-center justify-center">
                <label>Número do cartão:</label>
                <input
                  value={numeroCartao}
                  onChange={(e) => {
                    setnumeroCartao(e.target.value);
                  }}
                  size={16}
                  maxLength={16}
                  className="border rounded px-3 py-2"
                ></input>
              </div>
              <div className="flex flex-row space-x-2 items-center justify-center">
                <label>Data de validade do cartão:</label>
                <input
                  value={dataCartao}
                  onChange={(e) => {
                    setdataCartao(e.target.value);
                  }}
                  type="date"
                  className="border rounded px-3 py-2"
                ></input>
              </div>
              <div className="flex flex-row space-x-2 items-center justify-center">
                <label>Código de segurança (CCV):</label>
                <input
                  value={codigoCartao}
                  onChange={(e) => {
                    setcodigoCartao(e.target.value);
                  }}
                  size={1}
                  maxLength={3}
                  className="border rounded px-3 py-2"
                ></input>
              </div>
              <div className="flex flex-row items-center space-x-12">
                <button
                  type="button"
                  className="rounded-md bg-red-500 px-4 py-2"
                  onClick={() => {
                    settipoPagamento("pix");
                    setMsg("");
                  }}
                >
                  Pix
                </button>
                <button
                  className="rounded-md bg-green-500 px-4 py-2"
                  type="submit"
                >
                  Confirmar
                </button>
              </div>
              {msg && <div className="text-red-800 mt-5">{msg}</div>}
            </div>
          </form>
        )}
      </FundoFormulariosInt>
    </Interface>
  );
}
