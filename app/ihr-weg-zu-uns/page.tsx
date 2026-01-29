import type { Metadata } from "next";
import { WegContent } from "./content";

export const metadata: Metadata = {
  title: "Ihr Weg zu uns",
  description:
    "So finden Sie die Blumenstube Neuenstadt – Anfahrt und Standort in Neuenstadt am Kocher.",
};

export default function WegZuUnsPage() {
  return <WegContent />;
}
