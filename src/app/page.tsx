import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import ContactForm from "./contact-form";
import { env } from "@/env";

async function sendToCliengo({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  "use server";

  try {
    const response = await fetch(
      `https://api.cliengo.com/1.0/contacts?api_key=${env.CLIENGO_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          websiteId: env.CLIENGO_WEBSITE_ID,
          name,
          email,
          phone,
          message,
          entryMethod: "API",
          utmSource: "dryhaus.com.ar",
          assignedTo: "62d16a261a5aa5002a3075e1",
        }),
      },
    );

    if (!response.ok) {
      console.log(response);
      console.log(await response.json());
      return {
        success: false,
        message: "Error al enviar el formulario",
      };
    }

    return {
      success: true,
      message: "Formulario enviado correctamente",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error al enviar el formulario",
    };
  }
}

export default async function Home() {
  return (
    <main className="">
      <div className="n flex flex-col gap-10 bg-[url(/assets/main-mobile.png)] bg-cover bg-no-repeat p-5 sm:h-[calc(100vh-50px)] sm:justify-between sm:bg-[url(/assets/main.png)] sm:bg-center sm:p-12 sm:pb-52">
        <Image
          src="/assets/optimized/logo.webp"
          className="w-32 sm:w-36"
          alt="DryHaus logo"
          width={144}
          height={144}
          priority
          sizes="(max-width: 640px) 128px, 144px"
        />
        <div className="w-[60%] space-y-2 sm:w-auto sm:space-y-4">
          <h3 className="text-2xl font-semibold sm:text-5xl sm:leading-[1.2]">
            Asegurá el secado de la <br /> humedad de cimientos
          </h3>
          <span className="text-lg font-light sm:text-3xl">
            Con tecnología alemana de ultima generacion
          </span>
          <a
            href="#contact"
            className="mt-12 flex max-w-fit items-center gap-3 rounded-lg bg-[#58585A] px-5 py-3 font-mono text-lg tracking-normal text-white shadow-lg transition-colors duration-200 hover:bg-[#58585A]/90 sm:px-10 sm:py-5 sm:text-2xl"
          >
            Contactanos
            <MoveRightIcon className="-mb-1 h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="mx-5 my-10 grid grid-cols-1 rounded-xl border-gray-200 bg-[#F9F9F9] py-7 shadow-md shadow-gray-400/80 sm:grid-cols-[5fr_4fr]">
        <div className="space-y-6 px-7 sm:space-y-10 sm:px-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Solucionamos tus problemas de humedad
          </h2>
          <h3 className="text-2xl font-medium sm:text-3xl">
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
        <Image
          className="hidden sm:block"
          src="/assets/optimized/kid.webp"
          alt="Child affected by humidity problems"
          width={3092}
          height={2052}
          loading="lazy"
          sizes="(max-width: 640px) 0px, (max-width: 1024px) 50vw, 40vw"
        />
      </div>
      <div className="bg-[url(/assets/casa-mobile.png)] bg-cover bg-center bg-no-repeat px-7 py-12 sm:bg-[url(/assets/casa.png)] sm:px-12">
        <div className="">
          <div className="max-w-[330px] space-y-8 sm:max-w-[800px]">
            <h3 className="text-4xl font-semibold">
              Tecnología de Alemania probada en el mundo
            </h3>
            <p className="text-2xl font-light">
              La electroósmosis inalámbrica es un sistema desarrollado en
              Alemania.
            </p>
            <p className="text-2xl font-light">
              Nuestra tecnologia detiene el ascenso de la humedad de cimientos,
              logrando un secado completo y permanente de la estructura.
              <br /> Un método eficiente, no invasivo y de resultados
              comprobados.
            </p>
          </div>
          <div className="pt-10 text-xl sm:max-w-[1000px] sm:pt-26">
            Esta teconlogia{" "}
            <span className="font-semibold">
              ya protege construcciones icónicas
            </span>{" "}
            en distintos paises, garantizando la conservacion de edificaciones
            patrimoniales y viviendas ¡Y ahora también a tu alcance!
          </div>
          <div className="flex w-full justify-center">
            <Image
              src="/assets/optimized/lugares.webp"
              alt="Locations where DryHaus technology is used worldwide"
              width={7608}
              height={1508}
              className="hidden w-[1500px] sm:block"
              loading="lazy"
              sizes="(max-width: 640px) 0px, 100vw"
            />
            <Image
              src="/assets/optimized/lugares-mobile.webp"
              alt="Locations where DryHaus technology is used worldwide"
              width={400}
              height={792}
              className="max-w-none pt-2 sm:hidden"
              loading="lazy"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
      <div className="bg-white px-7 pt-20 sm:px-12">
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

      <div className="mx-5 my-32 flex flex-col overflow-hidden rounded-xl border-gray-200 bg-[#F9F9F9] px-7 py-10 shadow-md shadow-gray-400/80 sm:flex-row">
        <div className="space-y-10 sm:w-[60%]">
          <h2 className="sm:overflow-show text-3xl font-semibold sm:text-4xl sm:whitespace-nowrap">
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
          src="/assets/optimized/electro-osmosis.webp"
          alt="Electro-osmosis technology diagram showing how it works"
          width={3460}
          height={2688}
          className="pt-4 sm:w-[40%] sm:max-w-[600px] sm:pt-0"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>
      <div className="max-w-[750px] space-y-10 bg-white px-7 py-10 sm:px-12">
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
      <div className="space-y-10 px-7 py-20 sm:px-12">
        <div id="contact" className="space-y-6">
          <h2 className="sm:overflow-show text-4xl font-semibold sm:whitespace-nowrap">
            ¿Querés solucionar el problema de humedad de tu hogar?
          </h2>
          <span className="text-2xl font-light">
            Dejanos tus datos y en menos de 24 horas un especialista se pondrá
            en contacto con vos.
          </span>
        </div>
      </div>
      <div className="px-5 pb-10">
        <ContactForm sendToCliengo={sendToCliengo} />
      </div>
    </main>
  );
}
