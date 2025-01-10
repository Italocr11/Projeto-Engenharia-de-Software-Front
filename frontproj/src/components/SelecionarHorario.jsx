function SelecionarHorario({ children }) {
  return (
    <div className="bg-gray-300 text-black text-center p-1">
      <input className="h-5 w-5 mr-2" type="checkbox"></input>
      <label>{children}</label>
    </div>
  );
}

export default SelecionarHorario;
