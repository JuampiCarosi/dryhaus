import "@/styles/globals.css";

import { type Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "DryHaus - Solución Definitiva para Humedad de Cimientos",
  description:
    "Tecnología alemana de electroósmosis inalámbrica para eliminar la humedad de cimientos de forma permanente, sin obras ni roturas.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth antialiased`}>
      <head>
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/assets/optimized/main-mobile.webp"
          media="(max-width: 640px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/optimized/main.webp"
          media="(min-width: 641px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/optimized/casa-mobile.webp"
          media="(max-width: 640px)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/optimized/casa.webp"
          media="(min-width: 641px)"
        />
        <link rel="preload" as="image" href="/assets/optimized/logo.webp" />

        {/* Cliengo */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function () { var ldk = document.createElement('script'); ldk.type = 'text/javascript'; ldk.async = true; ldk.src = 'https://s.cliengo.com/weboptimizer/619277fe055afc002ab9eccb/68a48ba5aaa1261baa29ee89.js?platform=onboarding_modular'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s); })()`,
          }}
        />
      </head>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
