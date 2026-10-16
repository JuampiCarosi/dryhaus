"use client";

import { usePathname } from "next/navigation";

export default function PromoBanner() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className="promo-drop">
      <div
        role="region"
        aria-label="Promo primavera DryHaus DH-x100"
        className="promo-banner text-white"
      >
        <a
          href="#contact"
          className="flex flex-col items-center gap-1 px-4 py-3 text-center text-[15px] leading-snug font-medium text-white sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-1 sm:px-6 sm:py-3 sm:text-[15px]"
        >
          <span className="font-semibold tracking-[0.08em] whitespace-nowrap">
            PROMO PRIMAVERA
          </span>
          <span className="whitespace-nowrap">
            <span aria-hidden className="hidden sm:inline">
              ·{" "}
            </span>
            DryHaus DH-x100 hasta 100 m2
          </span>
          <span className="sm:whitespace-nowrap">
            <span aria-hidden className="hidden sm:inline">
              ·{" "}
            </span>
            Anticipo: <span className="font-semibold">$ 1.590.000</span> al
            contado <span className="font-bold">+</span>{" "}
            <span className="font-semibold">12 x $ 189.000</span> con
            Visa/Mastercard
          </span>
          <span className="sm:whitespace-nowrap">
            <span aria-hidden className="hidden sm:inline">
              ·{" "}
            </span>
            <span className="font-bold">o</span> 6 cuotas sin interés de{" "}
            <span className="font-semibold">$ 643.000</span> con VISA/MASTERCARD
          </span>
        </a>
      </div>
    </div>
  );
}
