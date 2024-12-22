// Provider
// import { ReservationProvider } from "./context/ReservationContext";
// Metadata
import type { Metadata } from "next";
// Fonts
import { Poppins, Orbitron } from "next/font/google";
// Styles
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Mansión Aventura",
  description:
    "El lugar para festejar en grande tu Cumpleaños. Salon de fiestas infantiles único en Mendoza.",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Mansión Aventura" }],
  openGraph: {
    title: "Mansión Aventura",
    description:
      "El lugar para festejar en grande tu Cumpleaños. Salon de fiestas infantiles único en Mendoza.",
    url: "https://mansionaventura.com/",
    siteName: "Mansión Aventura",
    images: [
      {
        url: "https://mansionaventura.com/icon.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${orbitron.variable} font-poppins antialiased`}
      >
        {/* <ReservationProvider> */}
        {children}
        {/* </ReservationProvider> */}
      </body>
    </html>
  );
}
