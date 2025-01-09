import { useState } from "react";

const Senha = ({ str, str0 }) => {
  const [senha, setSenha] = useState("");

  return (
    <div>
      <p className=" pt-5">
        {str0}
        {str} Senha:
      </p>
      <input
        type="password"
        placeholder="********"
        maxLength="20"
        className="border rounded"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      ></input>
    </div>
  );
};

export default Senha;
