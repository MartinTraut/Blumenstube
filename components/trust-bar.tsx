"use client";

import { ScrollReveal } from "./scroll-reveal";
import { Award, Clock, Truck, Shield } from "lucide-react";

const trustItems = [
  {
    icon: Clock,
    label: "Seit 1995",
    sub: "Über 29 Jahre Erfahrung",
  },
  {
    icon: Truck,
    label: "Fleuropservice",
    sub: "Weltweit Blumen versenden",
  },
  {
    icon: Award,
    label: "Meisterfloristik",
    sub: "Handwerk & Qualität",
  },
  {
    icon: Shield,
    label: "Schnell verfügbar",
    sub: "Kurzfristige Aufträge möglich",
  },
];

export function TrustBar() {
  return (
    <section className="py-16 md:py-20 relative -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/8 border border-border/50 p-8 md:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {trustItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-brand-green/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-brand-green/20 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-base">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
