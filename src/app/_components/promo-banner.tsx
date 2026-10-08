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
          className="block px-4 py-2 text-center text-[12px] leading-snug font-medium text-white sm:px-8 sm:py-2.5 sm:text-[13px]"
        >
          <span className="font-semibold tracking-[0.12em]">
            PROMO PRIMAVERA
          </span>
          <span aria-hidden className="mx-1.5 font-normal">
            ·
          </span>
          DryHaus DH-x100 hasta 100 m2
          <br className="sm:hidden" />
          <span aria-hidden className="mx-1.5 hidden font-normal sm:inline">
            ·
          </span>
          Anticipo: <span className="font-semibold">$ 1.590.000</span> al
          contado <span className="font-bold">+</span>{" "}
          <span className="font-semibold">12 x $ 189.000</span>{" "}
          <span className="whitespace-nowrap">con Visa/Mastercard</span>
        </a>
      </div>
    </div>
  );
}
