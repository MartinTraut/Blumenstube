/**
 * AKTIONEN & WERBUNG
 *
 * Hier können Sie Ihre aktuellen Aktionen, Angebote und Werbeinhalte pflegen.
 * Diese werden direkt nach dem Hero-Bereich auf der Startseite angezeigt.
 *
 * --- WIE PFLEGEN? ---
 *  - "active": true   →  Aktion wird angezeigt
 *  - "active": false  →  Aktion ist deaktiviert (bleibt als Vorlage erhalten)
 *  - Wenn KEINE Aktion aktiv ist, wird der gesamte Bereich automatisch ausgeblendet.
 *  - Die ERSTE aktive Aktion wird als große Hauptaktion (Featured) dargestellt.
 *  - Weitere aktive Aktionen erscheinen als kompakte Karten daneben.
 *
 * --- BILDER ---
 *  - Beliebige URL möglich (z. B. unsplash.com, eigene Uploads in /public).
 *  - Format: möglichst quer, Mindestbreite 1200px für scharfe Darstellung.
 *
 * --- GÜLTIGKEIT ---
 *  - "validUntil" akzeptiert Datum (YYYY-MM-DD) ODER Freitext (z. B. "solange Vorrat reicht").
 */

export type Promotion = {
  active: boolean;
  badge: string;          // kleines Etikett oben (z. B. "Frühlingsaktion", "Neu", "Limitiert")
  title: string;          // Hauptüberschrift der Aktion
  description: string;    // 1–2 Sätze – konkret und nutzenorientiert
  validUntil?: string;    // optional: "2026-05-15" oder "solange Vorrat reicht"
  image?: string;         // optional: Bild-URL (besonders für die Hauptaktion empfohlen)
  ctaLabel?: string;      // optional: Buttontext (Standard: "Jetzt anrufen")
  ctaHref?: string;       // optional: Ziel (Standard: tel:071396708)
  highlight?: string;     // optional: Hervorhebung wie "-15 %", "Gratis Lieferung"
};

export const promotions: Promotion[] = [
  {
    active: true,
    badge: "Frühlingsaktion",
    title: "Frische Tulpen­sträuße zum Saisonpreis",
    description:
      "Handgebundene Sträuße aus regionalen Tulpen, jeden Tag frisch in der Blumenstube. Kommen Sie vorbei oder rufen Sie kurz an, wir richten alles für Sie her.",
    validUntil: "2026-05-15",
    image:
      "https://images.unsplash.com/photo-1469259943454-aa100abba749?w=1600&q=85",
    highlight: "ab 14,90 €",
    ctaLabel: "Strauß sichern",
    ctaHref: "tel:071396708",
  },
  {
    active: true,
    badge: "Hochzeits­saison",
    title: "Persönliche Hochzeits­beratung",
    description:
      "Brautstrauß, Tischdeko, Autoschmuck. Wir nehmen uns Zeit für Ihren Tag. Vereinbaren Sie ein unverbindliches Beratungsgespräch.",
    validUntil: "ganzjährig",
    ctaLabel: "Termin anfragen",
    ctaHref: "/kontakt",
  },
  {
    active: true,
    badge: "Service",
    title: "Lieferung in Neuenstadt & Umgebung",
    description:
      "Sie schaffen es nicht persönlich vorbei? Wir liefern Ihren Strauß zuverlässig zum Empfänger, auch kurzfristig am selben Tag.",
    ctaLabel: "Lieferung anfragen",
    ctaHref: "tel:071396708",
    highlight: "auf Wunsch am selben Tag",
  },
];
