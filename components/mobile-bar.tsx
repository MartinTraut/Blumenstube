"use client";

import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-border shadow-[0_-4px_30px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-4">
        <a
          href="tel:071396708"
          className="flex flex-col items-center justify-center py-3 gap-1 text-primary hover:bg-primary/5 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Anrufen</span>
        </a>
        <a
          href="https://wa.me/4971396708"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-brand-green hover:bg-brand-green/5 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
        <a
          href="mailto:blumenstube-neuenstadt@t-online.de"
          className="flex flex-col items-center justify-center py-3 gap-1 text-primary hover:bg-primary/5 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="text-[10px] font-semibold">E-Mail</span>
        </a>
        <a
          href="/ihr-weg-zu-uns"
          className="flex flex-col items-center justify-center py-3 gap-1 text-brand-green hover:bg-brand-green/5 transition-colors"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Route</span>
        </a>
      </div>
    </div>
  );
}
