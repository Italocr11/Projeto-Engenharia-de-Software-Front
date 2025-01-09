"use client";
import { useRouter } from "next/navigation";

const BotoesNav = ({ navAnt, textAnt, textProx, navProx }) => {
  const router = useRouter();
  return (
    <div className=" text-black space-x-10 flex justify-between mb-10 mt-10 ">
      <button
        onClick={() => {
          router.push(navAnt);
        }}
        className=" bg-blue-400 p-2 rounded hover:text-gray-800"
      >
        {textAnt}
      </button>
      <button
        onClick={() => {
          router.push(navProx);
        }}
        type="submit"
        className="bg-blue-600 p-2 rounded hover:text-gray-800"
      >
        {textProx}
      </button>
    </div>
  );
};

export default BotoesNav;
