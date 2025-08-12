import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import ContactForm from "./contact-form";

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
      <div className="mx-5 my-10 grid grid-cols-[5fr_4fr] rounded-xl border-gray-200 bg-[#F9F9F9] px-5 py-7 shadow-md shadow-gray-400/80">
        <div className="space-y-10 pr-18">
          <h2 className="text-4xl font-semibold">
            Solucionamos tus problemas de humedad
          </h2>
          <h3 className="text-3xl font-medium">
            DryHaus ofrece una solucion definitiva, <br /> sin romper paredes ni
            generar escombros.
          </h3>
          <p className="text-2xl font-light">
            La humedad ascendente es un problema estructural que afecta a miles
            de edificaciones. <br />
            Sus efectos van mas alla de las manchas en las paredes: <br />
            deteriora los materiales, debilita los cimientos y afecta la calidad
            del aire interior.
          </p>
        </div>
        <Image src="/assets/kid.png" alt="niño" width={3092} height={2052} />
      </div>
      <div className="relative">
        <div className="">
          <Image
            src="/assets/casa.png"
            alt="casa"
            width={7708}
            height={3356}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-10 left-8 space-y-12 p-7 pb-0">
            <div className="max-w-[800px] space-y-8">
              <h3 className="text-4xl font-semibold">
                Tecnología de alemana probada en el mundo
              </h3>
              <p className="text-2xl font-light">
                La electroósmosis inalámbrica es un sistema desarrollado en
                Alemania.
              </p>
              <p className="text-2xl font-light">
                Nuestra tecnologia detiene el ascenso de la humedad de
                cimientos, logrando un secado completo y permanente de la
                estructura.
                <br /> Un método eficiente, no invasivo y de resultados
                comprobados.
              </p>
            </div>
            <div className="max-w-[1000px] pt-26 text-xl">
              Esta teconlogia{" "}
              <span className="font-semibold">
                ya protege construcciones icónicas
              </span>{" "}
              en distintos paises, garantizando la conservacion de edificaciones
              patrimoniales y viviendas ¡Y ahora también a tu alcance!
            </div>
          </div>
          <Image
            src="/assets/lugares.png"
            alt="logo"
            width={7608}
            height={1508}
            className="-mt-32 bg-gradient-to-b from-[#F6F7F9] to-[#F6F7F9]/0"
          />
        </div>
      </div>
      <div className="bg-white pt-20 pl-12">
        <div className="max-w-4xl space-y-10">
          <h1 className="text-4xl font-bold">
            ¿Qué es la humedad de cimientos?
          </h1>

          <p className="text-2xl font-light">
            Es un fenómeno en el que el agua sube desde los cimientos por
            capilaridad a través de los poros del material, afectando paredes y
            pisos.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-light">Se manifiesta con:</h2>
            <ul className="list-inside list-disc space-y-2 text-xl">
              <li>Manchas y desprendimiento de pintura</li>
              <li>Olor a humedad y moho</li>
              <li>Deterioro de muros y pisos</li>
            </ul>
          </div>

          <p className="text-2xl font-light">
            Si tu casa o edificio presenta estos síntomas,{" "}
            <strong className="font-bold">DryHaus tiene la solución.</strong>
          </p>
        </div>
      </div>

      <div className="relative mx-5 my-32 flex overflow-hidden rounded-xl border-gray-200 bg-[#F9F9F9] px-7 py-10 shadow-md shadow-gray-400/80">
        <div className="w-[60%] space-y-10">
          <h2 className="overflow-show text-4xl font-semibold whitespace-nowrap">
            ¿Cómo funciona la electroósmosis y por qué es efectiva?
          </h2>

          <p className="max-w-[600px] text-2xl leading-8 font-light">
            Nuestro sistema invierte la polaridad de la molécula de agua,
            revirtiendo su ascenso y permitiendo que los muros se sequen de
            forma natural. <br />
            En semanas, notarás los primeros resultados y en meses, tus paredes
            estarán secas.
          </p>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light">Ventajas:</h2>

            <ul>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-xl">Sin obras ni roturas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-xl">Sin mantenimiento</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-xl">Resultados permanentes</span>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/assets/electro-osmosis.png"
          alt="electro-osmosis"
          width={3460}
          height={2688}
          className="w-[40%] max-w-[600px]"
        />
      </div>
      <div className="max-w-[750px] space-y-10 bg-white py-10 pl-12">
        <h1 className="text-4xl font-bold">¿Quienes somos?</h1>

        <p className="text-2xl font-light">
          Somos un equipo de especialistas en solucionar la humedad de
          cimientos.
        </p>
        <p className="text-2xl font-light">
          Utilizamos una tecnología desarrollada en Alemania para combatir la
          humedad ascendente de manera definitiva.
        </p>
        <p className="text-2xl font-light">
          Nuestra misión es ofrecer una solución efectiva, limpia y permanente
          para proteger y mantener el valor de tu hogar.
        </p>
      </div>
      <div className="space-y-10 py-20 pl-12">
        <div className="space-y-6">
          <h2 className="overflow-show text-4xl font-semibold whitespace-nowrap">
            ¿Querés solucionar el problema de humedad de tu hogar?
          </h2>
          <span className="text-2xl font-light">
            Dejanos tus datos y en menos de 24 horas un especialista se pondrá
            en contacto con vos.
          </span>
        </div>
      </div>
      <div className="px-5 pb-10">
        <ContactForm />
      </div>
    </main>
  );
}
