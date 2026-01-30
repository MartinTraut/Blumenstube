"use client";

import { ScrollReveal } from "./scroll-reveal";
import { MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function LocationTeaser() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-foreground to-foreground/90 rounded-[2rem] overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/15 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-8 md:p-12 lg:p-16">
              <ScrollReveal>
                <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary bg-primary/15 px-4 py-1.5 rounded-full mb-6">
                  Standort
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Besuchen Sie uns
                  <br />
                  in Neuenstadt
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-10">
                  Unser Blumenfachgeschäft liegt zentral in Neuenstadt am
                  Kocher. Wir freuen uns darauf, Sie persönlich zu beraten.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white/80">Neuenstadt am Kocher</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <a href="tel:071396708" className="text-white/80 hover:text-white transition-colors">
                      07139 6708
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/ihr-weg-zu-uns"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:-translate-y-0.5"
                  >
                    <Navigation className="w-5 h-5" />
                    Wegbeschreibung
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all"
                  >
                    Kontakt aufnehmen
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Store image */}
            <div className="relative min-h-[300px] lg:min-h-full">
              <Image
                src="https://i.pinimg.com/736x/d2/e8/17/d2e81712760de144fd0459138cae8e34.jpg"
                alt="Blumenladen der Blumenstube Neuenstadt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/50 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
