import "@/styles/globals.css";

import { type Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "DryHaus - Solución Definitiva para Humedad de Cimientos",
  description:
    "Tecnología alemana de electroósmosis inalámbrica para eliminar la humedad de cimientos de forma permanente, sin obras ni roturas. Resultados garantizados.",
  keywords: [
    "humedad de cimientos",
    "electroósmosis",
    "tecnología alemana",
    "secado de paredes",
    "humedad ascendente",
    "solución definitiva humedad",
    "sin obras",
    "DryHaus",
    "Argentina",
    "Buenos Aires",
    "inyeccion de polimeros",
    "inyeccion a las paredes",
    "paredes",
    "piso",
    "cimientos",
    "humedad",
    "secado",
    "permanente",
    "efectivo",
    "definitivo",
  ],
  authors: [{ name: "DryHaus" }],
  creator: "DryHaus",
  publisher: "DryHaus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dryhaus.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DryHaus - Solución Definitiva para Humedad de Cimientos",
    description:
      "Tecnología alemana de electroósmosis inalámbrica para eliminar la humedad de cimientos de forma permanente, sin obras ni roturas.",
    url: "https://dryhaus.com.ar",
    siteName: "DryHaus",
    images: [
      {
        url: "/assets/optimized/main.webp",
        width: 1200,
        height: 630,
        alt: "DryHaus - Solución para humedad de cimientos",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DryHaus - Solución Definitiva para Humedad de Cimientos",
    description:
      "Tecnología alemana de electroósmosis inalámbrica para eliminar la humedad de cimientos de forma permanente.",
    images: ["/assets/optimized/main.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DryHaus",
              description:
                "Solución definitiva para humedad de cimientos con tecnología alemana de electroósmosis inalámbrica",
              url: "https://dryhaus.com.ar",
              logo: "https://dryhaus.com.ar/assets/optimized/logo.webp",
              image: "https://dryhaus.com.ar/assets/optimized/main.webp",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
                addressRegion: "Buenos Aires",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              sameAs: [],
              offers: {
                "@type": "Offer",
                description:
                  "Solución para humedad de cimientos sin obras ni roturas",
                category: "Servicios de construcción y mantenimiento",
              },
              serviceType: "Tratamiento de humedad de cimientos",
              areaServed: "Argentina",
            }),
          }}
        />


        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17534087405"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17534087405');
          `,
          }}
        />
      </head>
      <body>
        <Toaster />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  var KEY = "rc_utm_source";

  function trim(s) {
    return String(s || "").replace(/^\\s+|\\s+$/g, "");
  }

  function normalize(v) {
    var s = trim(v);
    if (!s) return "";
    var low = s.toLowerCase();

    if (low.indexOf("adwords") !== -1 || low.indexOf("google") !== -1) return "Adwords";
    if (low.indexOf("facebook") !== -1 || low.indexOf("meta") !== -1 || low.indexOf("instagram") !== -1) return "Meta";

    // si viene Email u otro, lo respeta
    return s;
  }

  function getParam(qs, key) {
    // qs sin "?"
    if (!qs) return "";
    var parts = qs.split("&");
    for (var i = 0; i < parts.length; i++) {
      var kv = parts[i].split("=");
      var k = decodeURIComponent(kv[0] || "");
      if (k === key) return decodeURIComponent(kv.slice(1).join("=") || "");
    }
    return "";
  }

  function getFromUrl() {
    try {
      var qs = window.location.search || "";
      if (qs.charAt(0) === "?") qs = qs.substring(1);
      var val = getParam(qs, "utm_source");
      return normalize(val);
    } catch (e) {
      return "";
    }
  }

  function getStoredRaw() {
    try { return window.localStorage.getItem(KEY) || ""; } catch (e) { return ""; }
  }

  function setStored(value) {
    try { window.localStorage.setItem(KEY, value); } catch (e) {}
  }

  function sameHost(ref) {
    try {
      if (!ref) return false;
      var a = document.createElement("a");
      a.href = ref;
      return a.hostname === window.location.hostname;
    } catch (e) {
      return false;
    }
  }

  function isNewEntry() {
    // “nueva entrada” = sin referrer o referrer externo
    var ref = document.referrer || "";
    if (!ref) return true;
    return !sameHost(ref);
  }

  function ensureValue() {
    var fromUrl = getFromUrl();

    // 1) si hay utm_source, SIEMPRE pisa (last-touch)
    if (fromUrl) {
      setStored(fromUrl);
      return fromUrl;
    }

    // 2) si NO hay utm_source:
    // - si es nueva entrada => pisa a Directo
    // - si es navegación interna => conserva lo que ya había
    if (isNewEntry()) {
      setStored("Directo");
      return "Directo";
    }

    var stored = normalize(getStoredRaw());
    return stored || "Directo";
  }

  function fillHidden(source) {
    var inputs = document.querySelectorAll('input[name="utm_source"]');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = source;
    }
  }

  function run() {
    var source = ensureValue();
    fillHidden(source);
  }

  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", run);
    document.addEventListener("wpcf7init", run);
    document.addEventListener("wpcf7beforesubmit", run);
    document.addEventListener("wpcf7submit", run);
  }

  setTimeout(run, 500);
  setTimeout(run, 1500);
})();
`,
          }}
        />
      </body>
    </html>
  );
}
