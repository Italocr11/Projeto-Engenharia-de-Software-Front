"use client";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Interface from "../../components/Interface";
import Titulo from "../../components/Titulo";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

function AlterarTelefone() {
  const [msg, setMsg] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState(null);
  const [erroTel, setErroTel] = useState("");

  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      setMsg("Você precisa estar logado!");

      return;
    }

    setEmail(storedEmail);
  }, []);

  const validarTelefone = (telefone) => {
    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return regex.test(telefone);
  };

  const handleChangeTelefone = (e) => {
    const telefone = e.target.value;
    setTel(telefone);

    if (telefone && !validarTelefone(telefone)) {
      setErroTel(
        "O telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX."
      );
    } else {
      setErroTel("");
    }
  };

  const confirmar = async (e) => {
    e.preventDefault();

    if (!tel) {
      setMsg("Preencha seu número de telefone!");
      return;
    }

    if (!validarTelefone(tel)) {
      setMsg("Por favor, insira um número de telefone válido!");
      return;
    }

    const usuario = { email, telefone: tel };

    try {
      const resposta = await axios.patch(
        "http://localhost:3000/usuarios/alttel",
        usuario
      );

      const { telefone: novoTel } = resposta.data.usuario;
      localStorage.setItem("userTel", novoTel);
      router.push("/perfil");
    } catch (erro) {
      setMsg(erro.response?.data?.message || "Informações inválidas!.");
    }
  };

  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Alterar Telefone</Titulo>
        <div className="flex flex-col">
          <p className=" pt-5">Telefone:</p>
          <input
            type="tel"
            placeholder="(XX) XXXXX-XXXX"
            maxLength="15"
            className={`border rounded px-3 py-2 w-full mt-1 ${
              erroTel ? "border-red-500" : "border-gray-300"
            }`}
            value={tel}
            onChange={handleChangeTelefone}
            pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
          ></input>
          {erroTel && (
            <div className="text-red-500 text-sm mt-2">{erroTel}</div>
          )}
          <form onSubmit={confirmar}>
            <button
              type="submit"
              className="bg-blue-600 py-2 px-4 rounded hover:text-gray-800 mt-10"
              disabled={tel === "" || erroTel !== ""}
            >
              Confirmar
            </button>
          </form>
          {msg && <div className="text-red-800 mt-5 pb-10">{msg}</div>}
        </div>
      </FundoFormulariosInt>
    </Interface>
  );
}

export default AlterarTelefone;
