function FundoFormularios({ children }) {
  return (
    <div className="h-screen flex items-center justify-center bg-white ">
      <div className="w-1/3 bg-yellow-400 flex items-center justify-center rounded-xl">
        {children}
      </div>
    </div>
  );
}

export default FundoFormularios;
