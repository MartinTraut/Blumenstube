"use client";

import { ScrollReveal } from "./scroll-reveal";
import { promotions, type Promotion } from "@/lib/promotions";
import { ArrowRight, Calendar, Sparkles, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatValidity(value?: string) {
  if (!value) return null;
  const isIsoDate = /^\d{4}-\d{2}-\d{2}$/.test(value);
  if (!isIsoDate) return value;
  const date = new Date(value);
  return new Intl.DateTimeFormat("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function isInternalHref(href?: string) {
  if (!href) return false;
  return href.startsWith("/") && !href.startsWith("//");
}

function CtaLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "ghost";
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      : "inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover/promo:gap-3 transition-all";

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className}>
        {label}
        <ArrowRight className="w-4 h-4" />
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

function FeaturedPromo({ promo }: { promo: Promotion }) {
  const validity = formatValidity(promo.validUntil);
  const ctaHref = promo.ctaHref ?? "tel:071396708";
  const ctaLabel = promo.ctaLabel ?? "Jetzt anrufen";

  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-border/50 group/promo">
      <div className="grid lg:grid-cols-5">
        {/* Image */}
        <div className="relative h-64 sm:h-80 lg:h-auto lg:col-span-3 overflow-hidden">
          {promo.image ? (
            <Image
              src={promo.image}
              alt={promo.title}
              fill
              className="object-cover group-hover/promo:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-brand-green/10" />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/5 to-transparent lg:from-transparent lg:via-transparent lg:to-transparent" />

          {/* Badge floating top-left */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
            <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              {promo.badge}
            </span>
          </div>

          {/* Highlight floating bottom-left on image */}
          {promo.highlight && (
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 lg:hidden">
              <span className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl">
                <Tag className="w-4 h-4" />
                {promo.highlight}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-7 sm:p-10 lg:p-12 lg:col-span-2 flex flex-col justify-center">
          {promo.highlight && (
            <span className="hidden lg:inline-flex items-center gap-1.5 self-start bg-primary/10 text-primary text-sm font-bold px-3.5 py-1.5 rounded-full mb-5">
              <Tag className="w-4 h-4" />
              {promo.highlight}
            </span>
          )}

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight mb-4">
            {promo.title}
          </h3>

          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            {promo.description}
          </p>

          {validity && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-7">
              <Calendar className="w-4 h-4 text-primary" />
              <span>
                Gültig{" "}
                {/^\d{4}-\d{2}-\d{2}$/.test(promo.validUntil ?? "")
                  ? `bis ${validity}`
                  : validity}
              </span>
            </div>
          )}

          <div>
            <CtaLink href={ctaHref} label={ctaLabel} variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryPromo({ promo, index }: { promo: Promotion; index: number }) {
  const validity = formatValidity(promo.validUntil);
  const ctaHref = promo.ctaHref ?? "tel:071396708";
  const ctaLabel = promo.ctaLabel ?? "Mehr erfahren";

  return (
    <ScrollReveal delay={0.15 + index * 0.1}>
      <div className="group/promo relative bg-white rounded-2xl p-7 h-full border border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full">
            <Sparkles className="w-3 h-3" />
            {promo.badge}
          </span>
          {promo.highlight && (
            <span className="text-xs font-bold text-brand-green whitespace-nowrap pt-1">
              {promo.highlight}
            </span>
          )}
        </div>

        <h3 className="text-xl font-serif font-bold text-foreground leading-snug mb-3">
          {promo.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {promo.description}
        </p>

        {validity && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 pt-4 border-t border-border/60">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>
              Gültig{" "}
              {/^\d{4}-\d{2}-\d{2}$/.test(promo.validUntil ?? "")
                ? `bis ${validity}`
                : validity}
            </span>
          </div>
        )}

        <CtaLink href={ctaHref} label={ctaLabel} variant="ghost" />
      </div>
    </ScrollReveal>
  );
}

export function PromotionsSection() {
  const active = promotions.filter((p) => p.active);
  if (active.length === 0) return null;

  const [featured, ...rest] = active;

  return (
    <section
      id="aktionen"
      className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/40 via-white to-white overflow-hidden"
    >
      {/* Decorative blooms */}
      <div className="absolute top-20 -left-32 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Aktuelle Aktionen
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Was bei uns gerade
              <br className="hidden sm:block" />
              <span className="text-primary"> blüht und passiert</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <FeaturedPromo promo={featured} />
        </ScrollReveal>

        {rest.length > 0 && (
          <div
            className={`mt-6 grid gap-6 ${
              rest.length === 1
                ? "md:grid-cols-1 max-w-2xl mx-auto"
                : "md:grid-cols-2"
            }`}
          >
            {rest.map((promo, i) => (
              <SecondaryPromo
                key={`${promo.title}-${i}`}
                promo={promo}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
