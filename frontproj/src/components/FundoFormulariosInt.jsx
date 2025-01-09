function FundoFormulariosInt({ children }) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center h-4/5 w-3/5 justify-center bg-yellow-400 ">
        {children}
      </div>
    </div>
  );
}

export default FundoFormulariosInt;
