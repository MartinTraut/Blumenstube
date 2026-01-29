"use client";

import { ScrollReveal } from "./scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Sträuße & Gestecke",
    description:
      "Individuell gebundene Sträuße und Gestecke für jeden Anlass – von klassisch elegant bis modern und ausgefallen.",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80",
    href: "/leistungen#straeusse",
  },
  {
    title: "Hochzeitsfloristik",
    description:
      "Brautsträuße, Autoschmuck, Tischdeko und Raumgestaltung – wir machen Ihren großen Tag unvergesslich schön.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    href: "/leistungen#hochzeit",
  },
  {
    title: "Eventdekoration",
    description:
      "Stimmungsvolle Dekorationen für Firmenfeiern, Jubiläen, Taufen und private Feste – professionell und kreativ.",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
    href: "/leistungen#events",
  },
  {
    title: "Trauerfloristik",
    description:
      "Einfühlsam und würdevoll – Sargschmuck, Kränze, Gestecke und Kirchendekoration in respektvollem Gedenken.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80",
    href: "/leistungen#trauer",
  },
  {
    title: "Fleuropservice",
    description:
      "Über das Fleurop-Netzwerk versenden Sie Blumengrüße – deutschlandweit und in über 150 Länder weltweit.",
    image:
      "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=600&q=80",
    href: "/leistungen#fleurop",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-5">
              Floristik mit Herz
              <br className="hidden sm:block" />
              <span className="text-primary"> und Handwerk</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Von der kleinen Aufmerksamkeit bis zur großen Feier – wir
              gestalten Blumenarrangements, die begeistern.
            </p>
          </div>
        </ScrollReveal>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.12}>
              <Link href={service.href} className="group block h-full">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 h-full hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-serif font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Second row: 2 cards wider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(3).map((service, i) => (
            <ScrollReveal key={service.title} delay={(i + 3) * 0.12}>
              <Link href={service.href} className="group block h-full">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 h-full hover:-translate-y-1 md:flex">
                  <div className="relative h-56 md:h-auto md:w-2/5 overflow-hidden shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
