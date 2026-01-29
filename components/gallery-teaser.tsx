"use client";

import { ScrollReveal } from "./scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500&q=80",
    alt: "Bunter Blumenstrauß",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&q=80",
    alt: "Elegantes Gesteck",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80",
    alt: "Hochzeitsfloristik",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=500&q=80",
    alt: "Blumenarrangement",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/logo.jpg",
    alt: "Arrangement der Blumenstube",
    className: "col-span-1 row-span-1",
  },
];

export function GalleryTeaser() {
  return (
    <section className="py-24 md:py-32 bg-secondary/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
            <div>
              <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full mb-4">
                Impressionen
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Einblicke in unsere Arbeit
              </h2>
            </div>
            <Link
              href="/impressionen"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              Alle ansehen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className={img.className}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
