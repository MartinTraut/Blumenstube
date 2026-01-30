"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Clock, AlertCircle, Phone, Mail } from "lucide-react";
import Image from "next/image";

const hours = [
  { day: "Montag – Freitag", time: "09:00 – 12:30 & 14:00 – 18:00" },
  { day: "Samstag", time: "09:00 – 14:00" },
  { day: "Sonntag", time: "10:00 – 12:00" },
];

export function OpeningHours() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Left: Image + Logo */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/logo.jpg"
                  alt="Blumenarrangement der Blumenstube Neuenstadt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-white rounded-2xl p-3 sm:p-5 shadow-xl shadow-primary/30">
                <p className="text-2xl sm:text-3xl font-serif font-bold">seit</p>
                <p className="text-3xl sm:text-4xl font-serif font-bold">1995</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full mb-4">
                Besuchen Sie uns
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Unsere Öffnungszeiten
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Wir freuen uns auf Ihren Besuch in Neuenstadt am Kocher.
                Kommen Sie vorbei – auch ohne Termin.
              </p>

              <div className="space-y-0 mb-8 bg-secondary rounded-2xl overflow-hidden">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center p-4 ${
                      i < hours.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <span className="font-semibold text-foreground">{h.day}</span>
                    <span className="text-muted-foreground text-sm font-medium">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Bitte beachten:</strong> Am letzten Sonntag im Monat
                  bleibt unser Geschäft geschlossen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:071396708"
                  className="inline-flex items-center justify-center gap-3 bg-primary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  07139 6708
                </a>
                <a
                  href="mailto:blumenstube-neuenstadt@t-online.de"
                  className="inline-flex items-center justify-center gap-3 border-2 border-foreground/15 text-foreground px-6 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  <Mail className="w-5 h-5" />
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
