"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Heart, PartyPopper, Flower, Briefcase, Gift } from "lucide-react";

const occasions = [
  {
    icon: Gift,
    title: "Geburtstag",
    text: "Farbenfrohe Sträuße und Gestecke, die Freude schenken.",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Heart,
    title: "Hochzeit",
    text: "Von der Beratung bis zum letzten Blütenblatt – Ihr perfekter Tag.",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Flower,
    title: "Trauer & Gedenken",
    text: "Würdevoller Blumenschmuck als Ausdruck der Verbundenheit.",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Briefcase,
    title: "Business-Event",
    text: "Professionelle Dekoration für Firmenveranstaltungen und Empfänge.",
    color: "from-brand-green/15 to-brand-green/5",
  },
  {
    icon: PartyPopper,
    title: "Einfach so",
    text: "Weil man keinen Anlass braucht, um jemandem eine Freude zu machen.",
    color: "from-brand-green/15 to-brand-green/5",
  },
];

export function OccasionsSection() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary bg-primary/15 px-4 py-1.5 rounded-full mb-4">
              Für jeden Anlass
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-5">
              Blumen sagen mehr
              <br className="hidden sm:block" /> als Worte
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Egal ob großes Fest oder kleine Geste – wir finden die passenden
              Blumen für Ihren Moment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {occasions.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 group hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
