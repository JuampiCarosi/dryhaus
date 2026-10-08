"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function PromoBanner() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  if (pathname !== "/" || !open) return null;

  return (
    <div className="promo-drop">
      <div
        role="region"
        aria-label="Promoción de primavera DryHaus DH-x100"
        className="promo-banner relative text-white"
      >
        <a
          href="#contact"
          className="block px-10 py-2 text-center text-[12px] leading-snug font-medium tracking-wide text-white sm:py-2.5 sm:text-[13px]"
        >
          <span className="font-semibold">Promoción de primavera</span>
          <span aria-hidden className="mx-1.5 font-normal text-white/70">
            ·
          </span>
          <span className="font-semibold">DH-x100</span>
          <br className="sm:hidden" />
          <span
            aria-hidden
            className="mx-1.5 hidden font-normal text-white/70 sm:inline"
          >
            ·
          </span>
          Anticipo <span className="font-semibold">$1.590.000</span> al contado
          <br className="sm:hidden" />
          <span
            aria-hidden
            className="mx-1.5 hidden font-normal text-white/70 sm:inline"
          >
            +
          </span>
          <span className="font-semibold">12 × $189.000</span> con
          Visa/Mastercard
        </a>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar promoción"
          className="absolute top-1/2 right-2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center text-white/90 transition-opacity hover:opacity-60 sm:right-3"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
