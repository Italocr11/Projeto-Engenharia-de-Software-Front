"use client";
import { useRouter } from "next/navigation";

function BotaoEnviarInt({ enviar }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(enviar);
      }}
      type="submit"
      className="bg-blue-600 p-2 rounded hover:text-gray-800 mt-10"
    >
      Confirmar
    </button>
  );
}

export default BotaoEnviarInt;
