"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { MapPin, Phone, Mail, Clock, AlertCircle, Navigation } from "lucide-react";
import { useState } from "react";

export function WegContent() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Standort
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Ihr Weg zu uns
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Besuchen Sie uns in Neuenstadt am Kocher – wir freuen uns auf Sie.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-6">
                    Kontaktdaten
                  </h2>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Standort</p>
                        <p className="text-sm text-muted-foreground">
                          Neuenstadt am Kocher
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Telefon</p>
                        <a
                          href="tel:071396708"
                          className="text-sm text-primary hover:underline"
                        >
                          07139 6708
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">E-Mail</p>
                        <a
                          href="mailto:blumenstube-neuenstadt@t-online.de"
                          className="text-sm text-primary hover:underline break-all"
                        >
                          blumenstube-neuenstadt@t-online.de
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-6">
                    <Clock className="w-5 h-5 inline mr-2 text-primary" />
                    Öffnungszeiten
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">Mo–Fr</span>
                      <span className="text-muted-foreground">
                        09:00–12:30 &amp; 14:00–18:00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">Sa</span>
                      <span className="text-muted-foreground">09:00–14:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">So</span>
                      <span className="text-muted-foreground">10:00–12:00</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800">
                      Letzter Sonntag im Monat geschlossen
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-secondary">
                    {!mapLoaded ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                          <Navigation className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-foreground text-center">
                          Karte laden
                        </h3>
                        <p className="text-sm text-muted-foreground text-center max-w-sm">
                          Klicken Sie auf den Button, um die interaktive Karte zu
                          laden. Dabei werden Daten von OpenStreetMap übertragen.
                        </p>
                        <button
                          onClick={() => setMapLoaded(true)}
                          className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                        >
                          Karte anzeigen
                        </button>
                      </div>
                    ) : (
                      <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=9.31%2C49.21%2C9.35%2C49.24&layer=mapnik&marker=49.2263%2C9.3322"
                        className="absolute inset-0 w-full h-full"
                        title="Karte: Blumenstube Neuenstadt"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">
                        Blumenstube Neuenstadt
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Neuenstadt am Kocher
                      </p>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/Blumenstube+Neuenstadt+am+Kocher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Route planen
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
