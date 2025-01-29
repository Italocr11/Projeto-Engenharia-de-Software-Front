import { useState } from "react";

const Senha = ({ str, str0, senha, setSenha }) => {
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
        className="border rounded px-3 py-2 w-full mt-1"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      ></input>
    </div>
  );
};

export default Senha;
