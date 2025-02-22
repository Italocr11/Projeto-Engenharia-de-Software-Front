import Notf from "./Notf";
import { Check, X } from "lucide-react";

function GuiaNotf() {
  return (
    <div className="h-screen w-screen flex  justify-center">
      <div className="fixed right-32 top-20 text-black bg-white p-4 shadow-xl rounded-lg space-y-1 w-82 h-3/8">
        <div className="flex flex-row items-center justify-center bg-black text-white w-full rounded-md p-1 mb-2">
          <p>------------------ Notificações ------------------</p>
        </div>
        <Notf></Notf>
      </div>
    </div>
  );
}

export default GuiaNotf;
