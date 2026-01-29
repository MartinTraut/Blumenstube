import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <div className="pt-28 md:pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
          Impressum
        </h1>
        <div className="prose prose-neutral max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Blumenstube Neuenstadt
            <br />
            Neuenstadt am Kocher
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 07139 6708
            <br />
            E-Mail: blumenstube-neuenstadt@t-online.de
          </p>

          <h2>Hinweis</h2>
          <p>
            Diese Seite ist ein Platzhalter. Bitte ergänzen Sie hier die
            vollständigen Impressumsangaben gemäß § 5 TMG (Name des
            Inhabers/der Inhaberin, vollständige Anschrift, ggf.
            Umsatzsteuer-ID, zuständige Aufsichtsbehörde etc.).
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </div>
  );
}
