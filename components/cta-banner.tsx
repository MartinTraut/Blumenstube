"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Phone, Send } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-brand-green/15 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Lassen Sie uns gemeinsam
            <br className="hidden sm:block" />
            etwas Schönes gestalten
          </h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Ob spontaner Strauß oder große Feier – rufen Sie uns an oder
            schreiben Sie uns. Wir freuen uns auf Ihre Ideen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:071396708"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-4.5 rounded-full text-base font-bold hover:bg-white/95 transition-all shadow-2xl shadow-black/20 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              07139 6708
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white/50 px-10 py-4.5 rounded-full text-base font-bold hover:bg-white/10 hover:border-white/50 transition-all hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              Anfrage senden
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
