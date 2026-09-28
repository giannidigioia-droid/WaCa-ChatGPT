import React from 'react';
import { OliveBranch } from './DecorativeElements';
import { InstagramIcon, PhoneIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-paper-texture py-20 px-4 border-t border-[var(--sage)] border-opacity-30">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl text-[var(--brown)] mb-2">
          Scriveteci
        </h2>
        <p className="font-script text-2xl text-[var(--sage)] mb-12">
          Write & Follow Us
        </p>

        <div className="flex flex-col md:flex-row gap-8 mb-16">

          {/* WhatsApp */}
          <a
            href="https://wa.me/393200921182?text=Buongiorno,%20sono%20interessato%20a%20WaCa%20Estate%20e%20vorrei%20ricevere%20informazioni."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transform hover:-rotate-2 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-[#25D366] opacity-10 rounded-sm transform rotate-2 group-hover:rotate-0 transition-transform"></div>
            <div className="relative bg-[var(--paper)] border-2 border-[#25D366] px-8 py-4 rounded-sm shadow-sm flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-[#25D366]" />
              <span className="font-script text-2xl text-[var(--brown)]">
                WhatsApp
              </span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/waca_monopoli/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transform hover:rotate-2 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-[#E1306C] opacity-10 rounded-sm transform -rotate-2 group-hover:rotate-0 transition-transform"></div>
            <div className="relative bg-[var(--paper)] border-2 border-[#E1306C] px-8 py-4 rounded-sm shadow-sm flex items-center gap-3">
              <InstagramIcon className="w-5 h-5 text-[#E1306C]" />
              <span className="font-script text-2xl text-[var(--brown)]">
                Instagram
              </span>
            </div>
          </a>

          {/* SEO LINK INVISIBILE */}
          <a href="/monopoli-puglia-villa-con-piscina" className="seo-hidden">
            Villa con piscina privata a Monopoli, Puglia
          </a>

        </div>

        <div className="flex items-center justify-center gap-4 opacity-60">
          <div className="h-px w-12 bg-[var(--brown)]"></div>
          <OliveBranch className="w-8 h-8 text-[var(--brown)]" />
          <div className="h-px w-12 bg-[var(--brown)]"></div>
        </div>

        <p className="mt-6 font-script text-xl text-[var(--sienna)]">
          Con amore dalla Puglia
        </p>
        <p className="mt-2 text-xs text-[var(--brown)] opacity-40 font-serif uppercase tracking-widest">
          © {new Date().getFullYear()} WACA Apulian Villa
        </p>
      </div>
    </footer>
  );
}
