import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ServicesGrid } from "@/components/services-grid";
import { OccasionsSection } from "@/components/occasions-section";
import { OpeningHours } from "@/components/opening-hours";
import { GalleryTeaser } from "@/components/gallery-teaser";
import { LocationTeaser } from "@/components/location-teaser";
import { CtaBanner } from "@/components/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <OccasionsSection />
      <OpeningHours />
      <GalleryTeaser />
      <LocationTeaser />
      <CtaBanner />
    </>
  );
}
