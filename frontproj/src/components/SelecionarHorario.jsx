import { useState } from "react";

function SelecionarHorario({ children, selectedHorario, onSelect }) {
  const isSelected = selectedHorario === children;

  return (
    <button
      className={`text-black text-center p-1 ${
        isSelected ? "bg-green-300" : "bg-white"
      }`}
      onClick={() => {
        onSelect(children);
      }}
    >
      {children}
    </button>
  );
}

export default SelecionarHorario;
