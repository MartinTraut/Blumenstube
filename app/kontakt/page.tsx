import type { Metadata } from "next";
import { KontaktContent } from "./content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie die Blumenstube Neuenstadt – Telefon: 07139 6708, E-Mail oder Kontaktformular. Wir beraten Sie gerne.",
};

export default function KontaktPage() {
  return <KontaktContent />;
}
