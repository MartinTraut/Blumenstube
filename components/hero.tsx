"use client";

import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80"
          alt="Wunderschöner Blumenstrauß"
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Content – centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 w-full text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/logo-new.png"
            alt="Blumenstube Neuenstadt"
            width={1536}
            height={1024}
            className="h-36 sm:h-48 md:h-56 lg:h-64 xl:h-72 w-auto drop-shadow-2xl"
            quality={100}
            unoptimized
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6"
        >
          Blumen, die{" "}
          <span className="text-brand">Geschichten</span> erzählen.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Seit 1995 gestalten wir mit Leidenschaft und Handwerk individuelle
          Floristik für jeden Anlass – persönlich, frisch und mit Liebe zum
          Detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:071396708"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            Jetzt anrufen
          </a>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm text-white border border-white/40 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/25 transition-all duration-300 hover:-translate-y-1"
          >
            <Send className="w-5 h-5" />
            Anfrage senden
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/60 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
