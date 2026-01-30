import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/90 pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo-new.png"
              alt="Blumenstube Neuenstadt"
              width={200}
              height={133}
              className="h-20 w-auto mb-5 drop-shadow-lg"
            />
            <p className="text-white/75 text-sm leading-relaxed">
              Das etwas andere Blumenfachgeschäft – seit 1995 in Neuenstadt am
              Kocher. Qualität, Handwerk und Leidenschaft für Blumen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Startseite" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/impressionen", label: "Impressionen" },
                { href: "/ihr-weg-zu-uns", label: "Ihr Weg zu uns" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:071396708" className="hover:text-white transition-colors">
                  07139 6708
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:blumenstube-neuenstadt@t-online.de"
                  className="hover:text-white transition-colors break-all"
                >
                  blumenstube-neuenstadt@t-online.de
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Neuenstadt am Kocher</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-5">
              Öffnungszeiten
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>Mo–Fr: 09:00–12:30 &amp; 14:00–18:00</p>
                  <p>Sa: 09:00–14:00</p>
                  <p>So: 10:00–12:00</p>
                  <p className="text-white/60 mt-2 text-xs">
                    Letzter Sonntag im Monat geschlossen
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Blumenstube Neuenstadt. Alle
            Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
