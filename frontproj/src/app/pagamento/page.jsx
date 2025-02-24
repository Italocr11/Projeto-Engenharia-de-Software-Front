"use client";

import { useRouter } from "next/navigation";
import Interface from "../../components/Interface";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Titulo from "../../components/Titulo";
import { useState, useEffect } from "react";
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

  const [reservaInfo, setReservaInfo] = useState({
    esporte: null,
    valor: null,
    horario: null,
    data: null,
    bola: null,
    rede: null,
    coletes: null,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setReservaInfo({
      esporte: urlParams.get("esporte"),
      valor: urlParams.get("valor"),
      horario: urlParams.get("horario"),
      data: urlParams.get("data"),
      bola: urlParams.get("bola") === "true",
      rede: urlParams.get("rede") === "true",
      coletes: urlParams.get("coletes") === "true",
    });
  }, []);

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
      await axios.post("http://localhost:3000/reserva", { ...reservaInfo });
      setQrCode(resultado.data.qrCode);
      setMsg("");
      router.push("/pagamento/realizado");
    } catch (error) {
      setMsg(
        error.response?.data?.message ||
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

    try {
      await axios.post("http://localhost:3000/pagamentocartao", {
        nomeCartao,
        numeroCartao,
        dataCartao,
        codigoCartao,
      });
      await axios.post("http://localhost:3000/reserva", { ...reservaInfo });
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
          <div className="flex flex-col items-center justify-center my-5">
            <Titulo>Escolher opção de pagamento:</Titulo>
            <div className="flex flex-row space-x-10 mt-5">
              <button onClick={() => settipoPagamento("pix")}>
                <img src="/img/pix-img.jpg" alt="pix" width={105} height={50} />
              </button>
              <button onClick={() => settipoPagamento("cartão")}>
                <img
                  src="/img/cartao-img.jpg"
                  alt="cartão"
                  width={70}
                  height={30}
                />
              </button>
            </div>
          </div>
        )}

        {tipoPagamento === "pix" && (
          <form
            onSubmit={confirmarpix}
            className="space-y-5 flex flex-col items-center justify-center my-5"
          >
            <Titulo>Pagamento por Pix</Titulo>
            <input
              value={chavePix}
              onChange={(e) => setchavePix(e.target.value)}
              maxLength={30}
              placeholder="Chave Pix"
              className="border rounded px-3 py-2"
            />
            <button className="py-2 px-4 rounded-md bg-green-500" type="submit">
              Confirmar
            </button>
            {msg && <div className="text-red-800 mt-5">{msg}</div>}
          </form>
        )}

        {tipoPagamento === "cartão" && (
          <form
            onSubmit={confirmarcartao}
            className="space-y-5 flex flex-col items-center justify-center my-5"
          >
            <Titulo>Pagamento por Cartão</Titulo>
            <input
              value={nomeCartao}
              onChange={(e) => setnomeCartao(e.target.value)}
              maxLength={30}
              placeholder="Nome do Titular"
              className="border rounded px-3 py-2"
            />
            <input
              value={numeroCartao}
              onChange={(e) => setnumeroCartao(e.target.value)}
              maxLength={16}
              placeholder="Número do Cartão"
              className="border rounded px-3 py-2"
            />
            <input
              value={dataCartao}
              onChange={(e) => setdataCartao(e.target.value)}
              type="date"
              className="border rounded px-3 py-2"
            />
            <input
              value={codigoCartao}
              onChange={(e) => setcodigoCartao(e.target.value)}
              maxLength={3}
              placeholder="Código de Segurança"
              className="border rounded px-3 py-2"
            />
            <button className="py-2 px-4 rounded-md bg-green-500" type="submit">
              Confirmar
            </button>
            {msg && <div className="text-red-800 mt-5">{msg}</div>}
          </form>
        )}
      </FundoFormulariosInt>
    </Interface>
  );
}
