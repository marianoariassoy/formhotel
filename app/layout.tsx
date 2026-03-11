import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./hamburger.css";
import "./animations.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Form Hotel - Ciudad de Zarate",
  description:
    "28 habitaciones prolijamente decoradas. Flexibles y adaptables para transformarlas en habitaciones single, dobles o triples. 60 plazas disponibles aproximadamente Categoria 3 estrellas asignada por el Ministerio de Turismo de la Provincia de Buenos Aires",
  icons: {
    icon: "",
    shortcut: "",
    apple: "",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "",
    title: "Form Hotel - Ciudad de Zarate",
    description:
      "28 habitaciones prolijamente decoradas. Flexibles y adaptables para transformarlas en habitaciones single, dobles o triples. 60 plazas disponibles aproximadamente Categoria 3 estrellas asignada por el Ministerio de Turismo de la Provincia de Buenos Aires",
    images: [
      {
        url: "",
        width: 500,
        height: 500,
        alt: "Form Hotel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#164283" />
      </head>
      <body style={{ fontFamily: montserrat.style.fontFamily }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
