import Image from "next/image";
import Cadastro from "./cadastro/page";
import FundoFormularios from "../components/FundoFormularios";

export default function Home() {
  return (
    <FundoFormularios>
      <Cadastro></Cadastro>
    </FundoFormularios>
  );
}
