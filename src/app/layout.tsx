import type { Metadata, Viewport } from "next";
import { configuracion } from "@/lib/configuracion";
import { Cabecera } from "@/components/layout/Cabecera";
import { PieDePagina } from "@/components/layout/PieDePagina";
import { ContactoFlotante } from "@/components/layout/ContactoFlotante";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(configuracion.dominio),
  title: {
    default: "KinderCripto | Elsa Maneiro — Cripto para principiantes",
    template: "%s | KinderCripto",
  },
  description: configuracion.descripcion,
  applicationName: configuracion.nombre,
  authors: [{ name: "Elsa Maneiro" }],
  creator: "Elsa Maneiro",
  keywords: [
    "educación cripto",
    "criptomonedas para principiantes",
    "Elsa Maneiro",
    "KinderCripto",
    "mentoría cripto",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: configuracion.nombre,
    title: "KinderCripto | Aprende cripto con Elsa Maneiro",
    description: configuracion.descripcion,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KinderCripto — Aprende cripto con Elsa Maneiro" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/og-image.png", alt: "KinderCripto — Aprende cripto con Elsa Maneiro" }],
    title: "KinderCripto | Aprende cripto con Elsa Maneiro",
    description: configuracion.descripcion,
  },
  robots: { index: true, follow: true },
  category: "educación",
};
export const viewport: Viewport = {
  themeColor: "#E5007D",
  width: "device-width",
  initialScale: 1,
};
export default function LayoutPrincipal({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-brand-fuchsia selection:text-white">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-white p-3"
        >
          Saltar al contenido
        </a>
        <Cabecera />
        <main id="contenido">{children}</main>
        <PieDePagina />
        <ContactoFlotante />
      </body>
    </html>
  );
}
