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
          className="block px-4 py-4 text-center text-xl leading-snug font-medium text-white sm:px-8 sm:py-5 sm:text-[26px]"
        >
          <span className="font-semibold tracking-[0.08em] whitespace-nowrap">
            PROMO PRIMAVERA
          </span>
          <span aria-hidden className="mx-1.5 font-normal">
            ·
          </span>
          DryHaus <span className="whitespace-nowrap">DH-x100</span> hasta{" "}
          <span className="whitespace-nowrap">100 m2</span>
          <br className="sm:hidden" />
          <span aria-hidden className="mx-1.5 hidden font-normal sm:inline">
            ·
          </span>
          Anticipo:{" "}
          <span className="font-semibold whitespace-nowrap">$ 1.590.000</span>{" "}
          al contado <span className="font-bold">+</span>{" "}
          <span className="font-semibold whitespace-nowrap">
            12 x $ 189.000
          </span>{" "}
          <span className="whitespace-nowrap">con Visa/Mastercard</span>{" "}
          <br className="sm:hidden" />
          <span className="font-bold">o</span> 6 cuotas sin interés de{" "}
          <span className="font-semibold whitespace-nowrap">$ 643.000</span>{" "}
          <span className="whitespace-nowrap">con VISA/MASTERCARD</span>
        </a>
      </div>
    </div>
  );
}
