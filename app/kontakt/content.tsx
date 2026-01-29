"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Phone,
  Mail,
  Clock,
  AlertCircle,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState, type FormEvent } from "react";

const occasions = [
  "Bitte wählen",
  "Strauß / Gesteck",
  "Hochzeit",
  "Trauer",
  "Eventdekoration",
  "Fleuropservice",
  "Sonstiges",
];

export function KontaktContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = form.querySelector<HTMLInputElement>(
      'input[name="website"]'
    );
    if (honeypot && honeypot.value) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Kontakt
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Sprechen Sie uns an
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ob telefonisch, per E-Mail oder über unser Kontaktformular – wir
              sind für Sie da und beraten Sie gerne persönlich.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ScrollReveal>
              <a
                href="tel:071396708"
                className="flex items-center gap-4 bg-primary text-white p-6 rounded-2xl hover:bg-primary/90 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Jetzt anrufen</p>
                  <p className="text-sm text-white/80">07139 6708</p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <a
                href="mailto:blumenstube-neuenstadt@t-online.de"
                className="flex items-center gap-4 bg-white border border-border p-6 rounded-2xl hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">E-Mail senden</p>
                  <p className="text-sm text-muted-foreground break-all">
                    blumenstube-neuenstadt@t-online.de
                  </p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="https://wa.me/4971396708"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-border p-6 rounded-2xl hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    Nachricht schreiben
                  </p>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Anfrage senden
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Beschreiben Sie uns Ihren Wunsch – wir melden uns
                    schnellstmöglich bei Ihnen.
                  </p>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                        Vielen Dank für Ihre Anfrage!
                      </h3>
                      <p className="text-muted-foreground">
                        Wir melden uns so schnell wie möglich bei Ihnen.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot */}
                      <div className="absolute -left-[9999px]" aria-hidden="true">
                        <input
                          type="text"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Ihr Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                            placeholder="Max Mustermann"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                            placeholder="ihre@email.de"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="anlass"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Anlass
                          </label>
                          <select
                            id="anlass"
                            name="anlass"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          >
                            {occasions.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Wunschtermin{" "}
                            <span className="text-muted-foreground font-normal">
                              (optional)
                            </span>
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Ihre Nachricht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                          placeholder="Beschreiben Sie uns Ihren Wunsch..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors w-full md:w-auto justify-center"
                      >
                        <Send className="w-5 h-5" />
                        Anfrage absenden
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-6">
                    <Clock className="w-5 h-5 inline mr-2 text-primary" />
                    Öffnungszeiten
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Mo–Fr</span>
                      <span className="text-muted-foreground">
                        09:00–12:30 &amp; 14:00–18:00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Sa</span>
                      <span className="text-muted-foreground">09:00–14:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">So</span>
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

              <ScrollReveal delay={0.2}>
                <div className="bg-primary/5 rounded-2xl p-8">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                    Schnelle Antwort gewünscht?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Rufen Sie uns direkt an – wir beraten Sie sofort und
                    persönlich.
                  </p>
                  <a
                    href="tel:071396708"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors w-full justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    07139 6708
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
