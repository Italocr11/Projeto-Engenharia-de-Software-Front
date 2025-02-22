"use client";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Interface from "../../components/Interface";
import Email from "../../components/Email";
import Titulo from "../../components/Titulo";
import Senha from "../../components/Senha";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function AlterarEmail() {
  const [senha, setSenha] = useState("");
  const [altEmail, setaltEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      setMsg("Você precisa estar logado!");
      return;
    }

    setEmail(storedEmail);
  }, []);

  const confirmar = async (e) => {
    e.preventDefault();

    if (!altEmail || !senha) {
      setMsg("Preencha os campos!");
      return;
    }

    const dados = { email, novoEmail: altEmail, senha };

    try {
      const resposta = await axios.patch(
        "http://localhost:3000/usuarios/altemail",
        dados
      );

      const { email: novoEmail } = resposta.data.usuario;
      localStorage.setItem(
        "userEmail",
        resposta.data.usuario?.email || altEmail
      );
      router.push("/perfil");
    } catch (erro) {
      setMsg(erro.response?.data?.message || "Informações inválidas!.");
    }
  };
  var str = "Novo";
  return (
    <Interface>
      <FundoFormulariosInt>
        <div className="mt-5">
          <Titulo>Alterar E-mail</Titulo>
        </div>
        <div>
          <form onSubmit={confirmar}>
            <Senha senha={senha} setSenha={setSenha}></Senha>
            <Email str={str} email={altEmail} setEmail={setaltEmail}></Email>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-green-400 py-2 px-4 rounded hover:text-gray-800 mt-8 mb-5"
              >
                Confirmar
              </button>
              {msg && <div className="text-red-800 mt-5 mb-5">{msg}</div>}
            </div>
          </form>
        </div>
      </FundoFormulariosInt>
    </Interface>
  );
}

export default AlterarEmail;
