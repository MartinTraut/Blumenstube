import type { Metadata } from "next";
import { ImpressionenContent } from "./content";

export const metadata: Metadata = {
  title: "Impressionen",
  description:
    "Einblicke in unsere Arbeit – Sträuße, Gestecke, Hochzeitsfloristik und mehr. Blumenstube Neuenstadt.",
};

export default function ImpressionenPage() {
  return <ImpressionenContent />;
}
