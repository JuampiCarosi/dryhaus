import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/app/_components/icons";
import ConversionTracker from "./conversion-tracker";

export const metadata: Metadata = {
  title: "¡Gracias por contactarnos! | DryHaus",
  description:
    "Hemos recibido tu consulta. En menos de 24 horas un especialista de DryHaus se pondrá en contacto con vos.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#F9F9F9]">
      <ConversionTracker />

      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3.5 sm:px-10">
        <Link href="/" className="inline-block">
          <Image
            src="/assets/optimized/logo.webp"
            alt="DryHaus logo"
            width={100}
            height={100}
            className="w-20 sm:w-24"
            priority
          />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-xs font-medium text-[#58585A] transition-colors hover:text-black sm:text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span>Volver al inicio</span>
        </Link>
      </header>

      {/* Main content */}
      <div className="flex flex-1 items-center justify-center px-4 py-4 sm:py-6">
        <div className="w-full max-w-lg space-y-4 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md shadow-gray-300/40 sm:space-y-5 sm:p-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-7 w-7" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-[#58585A] sm:text-3xl">
              ¡Muchas gracias por contactarnos!
            </h1>
            <p className="text-sm leading-relaxed font-light text-gray-600 sm:text-base">
              Hemos recibido tu consulta correctamente. En menos de{" "}
              <strong className="font-semibold text-gray-900">24 horas</strong>{" "}
              un especialista se pondrá en contacto con vos para asesorarte de
              forma personalizada.
            </p>
          </div>

          <div className="space-y-2.5 rounded-xl border border-gray-100 bg-[#F9F9F9] p-3.5 text-left text-xs sm:text-sm">
            <p className="font-medium text-gray-700">
              ¿Tenés una urgencia o preferís comunicarte directamente?
            </p>
            <div className="space-y-1.5 text-gray-600">
              <Link
                href="https://wa.me/5491126232600"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#58585A] hover:underline"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 fill-[#58585A]" />
                <span>
                  <span className="font-medium">WhatsApp:</span>{" "}
                  <span className="underline">11 2623 2600</span>
                </span>
              </Link>
              <Link
                href="https://maps.app.goo.gl/f61ncAKHrWq9t7jL7?g_st=aw"
                target="_blank"
                className="flex items-start gap-2 text-[#58585A] hover:underline"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#58585A]" />
                <span>Almafuerte 1480, Of. 5, Acassuso, Buenos Aires.</span>
              </Link>
            </div>
          </div>

          <div className="pt-1">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#58585A] px-6 py-2.5 font-mono text-sm tracking-normal text-white shadow-md transition-colors hover:bg-[#58585A]/90 sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-2.5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} DryHaus. Solución definitiva para humedad
        de cimientos.
      </footer>
    </main>
  );
}
