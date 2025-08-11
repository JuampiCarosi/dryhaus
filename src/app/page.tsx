import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="">
      <div className="relative">
        <Image
          src="/assets/main.png"
          alt="logo"
          width={3692}
          height={7916}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 p-7">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="absolute top-7/12 -translate-y-1/2 space-y-12 p-7">
          <div className="space-y-4">
            <h3 className="text-4xl leading-[1.4] font-semibold">
              Asegurá el secado de la <br /> humedad de cimientos
            </h3>
            <span className="text-2xl font-light">
              Con tecnología alemana de ultima generacion
            </span>
          </div>
          <button className="flex items-center gap-3 rounded-lg bg-[#58585A] px-10 py-5 font-mono text-2xl tracking-normal text-white shadow-lg transition-colors duration-200 hover:bg-[#58585A]/90">
            Contactanos
            <MoveRightIcon className="-mb-1 h-6 w-6" />
          </button>
        </div>
      </div>
    </main>
  );
}
