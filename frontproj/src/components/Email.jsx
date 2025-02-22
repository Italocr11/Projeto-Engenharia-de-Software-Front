import { useState } from "react";

const Email = ({ str, email, setEmail }) => {
  return (
    <div>
      <p className="pt-5"> {str} E-mail:</p>
      <input
        type="email"
        placeholder="Inserir e-mail"
        maxLength="50"
        className="border border-gray-800 rounded px-3 py-2 w-full mt-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
    </div>
  );
};

export default Email;
