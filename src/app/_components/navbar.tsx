"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Solución de Humedad", href: "#solucion-humedad" },
  { label: "Tecnología Alemana", href: "#tecnologia-alemana" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200/70 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-12 sm:py-3">
        <Link href="/" className="shrink-0" aria-label="DryHaus, inicio">
          <Image
            src="/assets/optimized/logo.webp"
            alt="DryHaus"
            width={64}
            height={64}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-gray-700 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-[#58585A] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#58585A]/90"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-black focus:outline-none lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation dropdown */}
      {isOpen && (
        <div className="border-t border-gray-200/80 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-md lg:hidden">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-black"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#58585A] px-4 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#58585A]/90"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
