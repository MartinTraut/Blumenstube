import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <div className="pt-28 md:pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
          Datenschutzerklärung
        </h1>
        <div className="prose prose-neutral max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber: Blumenstube Neuenstadt, Neuenstadt am Kocher,
            Telefon: 07139 6708, E-Mail: blumenstube-neuenstadt@t-online.de.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die
            auf dieser Website erfasst werden, werden auf den Servern des
            Hosters gespeichert.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3>OpenStreetMap</h3>
          <p>
            Wir nutzen den Kartendienst von OpenStreetMap (OSM). Beim Laden der
            Karte werden Daten an die Server der OpenStreetMap Foundation
            übertragen. Weitere Informationen finden Sie in der
            Datenschutzerklärung von OpenStreetMap.
          </p>

          <h2>Hinweis</h2>
          <p>
            Diese Datenschutzerklärung ist ein Platzhalter. Bitte lassen Sie
            sich eine rechtssichere Datenschutzerklärung von einem Fachanwalt
            oder einem Datenschutz-Generator erstellen, die alle auf Ihrer
            Website eingesetzten Dienste und Technologien berücksichtigt.
          </p>
        </div>
      </div>
    </div>
  );
}
