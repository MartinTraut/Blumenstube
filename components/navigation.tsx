"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/impressionen", label: "Impressionen" },
  { href: "/ihr-weg-zu-uns", label: "Ihr Weg zu uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <Link href="/" className="relative shrink-0">
            {/* Color logo when scrolled (white bg), white logo on hero (transparent bg) */}
            <Image
              src="/logo-transparent.png"
              alt="Blumenstube Neuenstadt – Kranz- und Girlandenbinderei"
              width={180}
              height={89}
              className={`h-12 md:h-16 w-auto object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0 absolute"
              }`}
              priority
            />
            <Image
              src="/logo-white.png"
              alt="Blumenstube Neuenstadt – Kranz- und Girlandenbinderei"
              width={180}
              height={89}
              className={`h-12 md:h-16 w-auto object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-0 absolute" : "opacity-100"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:071396708"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              07139 6708
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Menü öffnen"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-base font-medium text-foreground hover:bg-secondary hover:text-primary rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:071396708"
                className="mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/25"
              >
                <Phone className="w-4 h-4" />
                Jetzt anrufen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
