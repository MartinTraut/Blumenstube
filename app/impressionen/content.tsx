"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1400&q=85",
    alt: "Bunter Frühlingsstrauß",
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&q=85",
    alt: "Elegantes Gesteck in warmen Tönen",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=85",
    alt: "Hochzeitsstrauß mit Rosen",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200&q=85",
    alt: "Blumenarrangement in Rosa und Weiß",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=1200&q=85",
    alt: "Frischer Strauß mit Wildblumen",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1400&q=85",
    alt: "Tischdekoration für eine Feier",
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=1200&q=85",
    alt: "Zarte Pastellblüte",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&q=85",
    alt: "Blumenstrauß mit Eukalyptus",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=85",
    alt: "Sommerwiese mit Wildblumen",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&q=85",
    alt: "Rose in zartem Rosé",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1200&q=85",
    alt: "Pfingstrosen Bouquet",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=1200&q=85",
    alt: "Sommerliche Blumenpracht",
    span: "col-span-1 row-span-1",
  },
];

export function ImpressionenContent() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const next = () =>
    setLightbox((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  const prev = () =>
    setLightbox((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Galerie
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Impressionen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lassen Sie sich von unserer Arbeit inspirieren: Sträuße,
              Gestecke, Hochzeitsfloristik und vieles mehr.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.05}
                className={img.span}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      Vergrößern
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 text-white/60 hover:text-white p-2 z-10"
              aria-label="Schließen"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 z-10"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 z-10"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-[92vw] h-[70vh] sm:h-[80vh] max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src.replace(/w=\d+/, "w=2000").replace(/q=\d+/, "q=90")}
                alt={galleryImages[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
