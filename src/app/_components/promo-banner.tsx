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
          className="block px-4 py-2 text-center text-[12px] leading-snug text-white sm:py-2.5 sm:text-[13px]"
        >
          <span className="block font-semibold tracking-[0.16em]">
            PROMO PRIMAVERA
          </span>
          <span className="mt-0.5 block font-medium">
            DryHaus DH-x100 hasta 100 m2
          </span>
          <span className="mt-0.5 block">
            Anticipo: <span className="font-semibold">$ 1.590.000</span> al
            contado{" "}
            <br className="sm:hidden" />
            <span className="font-bold">+</span>{" "}
            <span className="font-semibold">12 x $ 189.000</span> con
            Visa/Mastercard
          </span>
        </a>
      </div>
    </div>
  );
}
