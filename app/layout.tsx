import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MobileBar } from "@/components/mobile-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Blumenstube Neuenstadt – Ihr Blumenfachgeschäft seit 1995",
    template: "%s | Blumenstube Neuenstadt",
  },
  description:
    "Blumenstube Neuenstadt – Ihr Blumenfachgeschäft seit 1995. Sträuße, Hochzeitsfloristik, Trauerfloristik, Eventdekoration und Fleuropservice in Neuenstadt am Kocher.",
  keywords: [
    "Blumenstube Neuenstadt",
    "Blumenladen Neuenstadt",
    "Floristik Neuenstadt am Kocher",
    "Hochzeitsfloristik",
    "Trauerfloristik",
    "Blumenstrauß",
    "Fleurop",
    "Eventdekoration",
  ],
  openGraph: {
    title: "Blumenstube Neuenstadt – Ihr Blumenfachgeschäft seit 1995",
    description:
      "Sträuße, Hochzeitsfloristik, Trauerfloristik und mehr. Besuchen Sie uns in Neuenstadt am Kocher.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
