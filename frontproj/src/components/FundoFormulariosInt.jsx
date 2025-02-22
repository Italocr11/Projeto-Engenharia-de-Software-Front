function FundoFormulariosInt({ children }) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center md:w-1/2 lg:w-1/3 justify-center bg-white rounded-2xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export default FundoFormulariosInt;
