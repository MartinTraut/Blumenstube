"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "straeusse",
    title: "Sträuße & Gestecke",
    subtitle: "Für jeden Anlass das Richtige",
    description:
      "Ob Geburtstag, Jubiläum, Taufe oder einfach so – wir binden individuelle Sträuße und Gestecke mit saisonalen Blumen und viel Liebe zum Detail. Klassisch, modern oder ausgefallen – ganz nach Ihrem Geschmack.",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    steps: [
      { title: "Anlass mitteilen", text: "Sagen Sie uns, wofür die Blumen sind." },
      { title: "Wir gestalten", text: "Frisch und saisonal – nach Ihren Wünschen gebunden." },
      { title: "Abholen oder liefern", text: "Pünktlich und perfekt für Ihren Moment." },
    ],
  },
  {
    id: "hochzeit",
    title: "Hochzeitsfloristik",
    subtitle: "Klassisch, modern oder retro",
    description:
      "Ihr großer Tag verdient besondere Blumen. Von Brautstrauß und Anstecker über Autoschmuck und Tischdekorationen bis zur Raumgestaltung mit Leihpalmen – wir begleiten Sie von der ersten Idee bis zum letzten Blütenblatt.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    steps: [
      { title: "Beratungsgespräch", text: "Persönlich und unverbindlich – wir lernen Ihre Wünsche kennen." },
      { title: "Konzept & Planung", text: "Farben, Stil und Blumenauswahl – abgestimmt auf Ihre Feier." },
      { title: "Umsetzung am Tag", text: "Wir liefern, dekorieren und sorgen für perfekte Blumenmomente." },
    ],
  },
  {
    id: "events",
    title: "Eventdekoration",
    subtitle: "Privat & geschäftlich",
    description:
      "Taufen, Kommunionen, Konfirmationen, Firmenfeiern oder Jubiläen – wir gestalten Tischdekorationen und Raumarrangements, die Ihre Veranstaltung in Szene setzen. Professionell, kreativ und zuverlässig.",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
    steps: [
      { title: "Anlass beschreiben", text: "Art der Veranstaltung, Größe und Ihre Vorstellungen." },
      { title: "Dekorationskonzept", text: "Wir erstellen ein stimmiges Konzept für Ihren Event." },
      { title: "Aufbau & Dekoration", text: "Pünktlicher Aufbau vor Ort – Sie genießen Ihre Feier." },
    ],
  },
  {
    id: "trauer",
    title: "Trauerfloristik",
    subtitle: "Einfühlsam & würdevoll",
    description:
      "In schweren Zeiten gestalten wir einfühlsam und mit Respekt: Sargschmuck, Kränze, Trauergestecke und Kirchendekoration. Wir beraten Sie persönlich und sorgen für eine würdevolle Umsetzung – auch kurzfristig.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80",
    steps: [
      { title: "Persönliche Beratung", text: "Einfühlsam und diskret – wir nehmen uns Zeit für Sie." },
      { title: "Individuelle Gestaltung", text: "Kränze, Gestecke und Schmuck nach Ihren Wünschen." },
      { title: "Zuverlässige Lieferung", text: "Pünktlich und respektvoll – direkt zur Trauerhalle oder Kirche." },
    ],
  },
  {
    id: "fleurop",
    title: "Fleuropservice",
    subtitle: "Blumengrüße weltweit",
    description:
      "Über das Fleurop-Partnernetzwerk können Sie Blumengrüße in ganz Deutschland und in über 150 Länder versenden. Bestellen Sie bei uns – und ein Florist vor Ort bindet den Strauß frisch und liefert ihn persönlich.",
    image:
      "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800&q=80",
    steps: [
      { title: "Strauß auswählen", text: "Persönlich bei uns oder telefonisch bestellen." },
      { title: "Empfänger angeben", text: "Adresse – egal ob um die Ecke oder am anderen Ende der Welt." },
      { title: "Frisch geliefert", text: "Ein Fleurop-Partner vor Ort bindet und liefert den Strauß." },
    ],
  },
];

export function LeistungenContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Unsere Leistungen
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Was wir für Sie tun
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seit 1995 sind wir Ihr Ansprechpartner für individuelle Floristik
              in Neuenstadt am Kocher. Entdecken Sie unser Leistungsspektrum.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-28 ${
            index % 2 === 1 ? "bg-secondary/30" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <ScrollReveal
                direction={index % 2 === 0 ? "left" : "right"}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal
                direction={index % 2 === 0 ? "right" : "left"}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-primary mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                      So läuft&apos;s ab
                    </h3>
                    <div className="space-y-4">
                      {service.steps.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-sm font-bold text-primary">
                              {i + 1}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {step.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {step.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="tel:071396708"
                    className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Jetzt beraten lassen
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Sie haben eine Idee? Wir setzen sie um.
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Rufen Sie uns an oder schicken Sie uns eine Anfrage – wir beraten
              Sie persönlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:071396708"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                07139 6708
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                Anfrage senden
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
