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
          className="flex flex-col items-center gap-1 px-4 py-3 text-center text-[13px] leading-snug font-normal text-white sm:px-6 sm:py-3 sm:text-[15px]"
        >
          <span className="flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2">
            <span className="font-bold tracking-[0.08em] whitespace-nowrap">
              PROMO PRIMAVERA
            </span>
            <span className="whitespace-nowrap">
              <span aria-hidden className="hidden sm:inline">
                ·{" "}
              </span>
              DH-x100 hasta 100 m2
            </span>
          </span>
          <span className="flex w-full max-w-full flex-col items-center sm:block">
            <span className="max-w-full whitespace-nowrap">
              <span className="font-bold">Anticipo: $ 1.590.000</span> al
              contado <span className="font-bold">+</span>
            </span>
            <span className="max-w-full whitespace-nowrap">
              <span className="font-bold">12</span> cuotas de{" "}
              <span className="font-bold">$ 189.000</span> con Visa/Mastercard
            </span>
          </span>
          <span>
            <span className="text-center font-bold">ó</span> en{" "}
            <span className="font-bold">6</span> cuotas de{" "}
            <span className="font-bold">$ 643.000</span> con Visa/Mastercard
          </span>{" "}
        </a>
      </div>
    </div>
  );
}
