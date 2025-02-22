function FundoFormularios({ children }) {
  return (
    <div className="h-screen flex items-center justify-center bg-white ">
      <div className="w-1/3 bg-white   flex items-center justify-center rounded-xl border-black border-2 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export default FundoFormularios;
