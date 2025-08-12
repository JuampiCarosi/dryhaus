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
      <div className="mx-5 my-10 grid grid-cols-[5fr_4fr] rounded-xl border-gray-200 bg-gray-100 px-5 py-7 shadow-md shadow-gray-400/80">
        <div className="space-y-10 pr-18">
          <h2 className="text-4xl font-semibold">
            Solucionamos tus problemas de humedad
          </h2>
          <h3 className="text-3xl font-medium">
            DryHaus ofrece una solucion definitiva, <br /> sin romper paredes ni
            generar escombros.
          </h3>
          <p className="text-[28px] font-light">
            La humedad ascendente es un problema estructural que afecta a miles
            de edificaciones. <br />
            Sus efectos van mas alla de las manchas en las paredes: <br />
            deteriora los materiales, debilita los cimientos y afecta la calidad
            del aire interior.
          </p>
        </div>
        <Image src="/assets/kid.png" alt="niño" width={3092} height={2052} />
      </div>
    </main>
  );
}
