import type { Metadata } from "next";
import { LeistungenContent } from "./content";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Leistungen: Sträuße, Hochzeitsfloristik, Trauerfloristik, Eventdekoration und Fleuropservice. Blumenstube Neuenstadt – seit 1995.",
};

export default function LeistungenPage() {
  return <LeistungenContent />;
}
