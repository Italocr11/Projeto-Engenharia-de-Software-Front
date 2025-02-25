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

  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [dataCartao, setDataCartao] = useState("");
  const [codigoCartao, setCodigoCartao] = useState("");

  const [chavePix, setChavePix] = useState("");
  const [qrCode, setQrCode] = useState("");

  const router = useRouter();

  const [reservaInfo, setReservaInfo] = useState({
    userEmail: "",
    esporte: "",
    valor: "",
    horario: "",
    data: "",
    bola: false,
    rede: false,
    coletes: false,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    // Formata a data para DD-MM-YYYY
    const dataISO = urlParams.get("data") || "";
    const dataFormatada = dataISO ? dataISO.split("-").reverse().join("-") : "";

    setReservaInfo({
      userEmail: localStorage.getItem("userEmail") || "",
      esporte: urlParams.get("esporte") || "",
      valor: urlParams.get("valor") || "",
      horario: urlParams.get("horario") || "",
      data: dataFormatada,
      bola: urlParams.get("bola") === "true",
      rede: urlParams.get("rede") === "true",
      coletes: urlParams.get("coletes") === "true",
    });
  }, []);

  const confirmarPagamentoPix = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/reservas", { ...reservaInfo });

      setMsg("");
      router.push("/pagamento/realizado");
    } catch (error) {
      setMsg(
        error.response?.data?.message ||
          "Erro ao realizar pagamento. Tente novamente."
      );
    }
  };

  const confirmarPagamentoCartao = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/reservas", { ...reservaInfo });

      setMsg("");
      router.push("/pagamento/realizado");
    } catch (error) {
      setMsg(
        error.response?.data?.message ||
          "Erro ao realizar pagamento. Tente novamente."
      );
    }
  };

  /*const confirmarPagamentoCartao = async (e) => {
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

      await axios.post("http://localhost:3000/reservas", { ...reservaInfo });

      setMsg("");
      router.push("/pagamento/realizado");
    } catch (erro) {
      setMsg(
        erro.response?.data?.message ||
          "Erro ao realizar pagamento. Tente novamente."
      );
    }
  };*/

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
            onSubmit={confirmarPagamentoPix}
            className="space-y-5 flex flex-col items-center justify-center my-5"
          >
            <Titulo>Pagamento por Pix</Titulo>
            <input
              value={chavePix}
              onChange={(e) => setChavePix(e.target.value)}
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
            onSubmit={confirmarPagamentoCartao}
            className="space-y-5 flex flex-col items-center justify-center my-5"
          >
            <Titulo>Pagamento por Cartão</Titulo>
            <input
              value={nomeCartao}
              onChange={(e) => setNomeCartao(e.target.value)}
              maxLength={30}
              placeholder="Nome do Titular"
              className="border rounded px-3 py-2"
            />
            <input
              value={numeroCartao}
              onChange={(e) => setNumeroCartao(e.target.value)}
              maxLength={16}
              placeholder="Número do Cartão"
              className="border rounded px-3 py-2"
            />
            <input
              value={dataCartao}
              onChange={(e) => setDataCartao(e.target.value)}
              type="date"
              className="border rounded px-3 py-2"
            />
            <input
              value={codigoCartao}
              onChange={(e) => setCodigoCartao(e.target.value)}
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
