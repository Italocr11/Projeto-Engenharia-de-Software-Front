"use client";
import FundoFormulariosInt from "../../components/FundoFormulariosInt";
import Interface from "../../components/Interface";
import Email from "../../components/Email";
import Titulo from "../../components/Titulo";
import Senha from "../../components/Senha";
import { useEffect, useState } from "react";
import axios from "axios";

function AlterarSenha() {
  const [senha, setSenha] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState(null);

  var str0 = "Atual";

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

    if (!email || !senha || !senhaNova) {
      setMsg("Preencha os campos!");
      return;
    }

    const dados = { email, senha, senhaNova };

    try {
      const resp = await axios.patch(
        "http://localhost:3000/usuarios/altsenha",
        dados
      );
      setMsg("Senha alterada com sucesso!");
    } catch (erro) {
      setMsg(erro.response?.data?.message || "Informações inválidas!.");
    }
  };

  return (
    <Interface>
      <FundoFormulariosInt>
        <Titulo>Alterar senha</Titulo>
        <Senha str0={str0} senha={senha} setSenha={setSenha}></Senha>
        <div>
          <p className=" pt-5">Nova senha:</p>
          <input
            type="password"
            placeholder="********"
            maxLength="20"
            className="border rounded px-3 py-2 w-full mt-1"
            value={senhaNova}
            onChange={(e) => setSenhaNova(e.target.value)}
          ></input>
        </div>
        <form onSubmit={confirmar}>
          <button
            type="submit"
            className="bg-blue-600 p-2 text-white rounded hover:text-gray-300 mt-5"
          >
            Confirmar
          </button>
        </form>
        {msg && <div className="text-red-800 mt-5 pb-10">{msg}</div>}
      </FundoFormulariosInt>
    </Interface>
  );
}

export default AlterarSenha;
