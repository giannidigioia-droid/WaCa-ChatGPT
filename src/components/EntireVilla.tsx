import React, { lazy } from 'react';
import { DecorativeBorder, SunMotif } from './DecorativeElements';
import { Users, BedDouble, Bath, ChefHat, Ruler, Sun } from 'lucide-react';
export function EntireVilla() {
  const stats = [{
    icon: Users,
    label: '12 + 3 Guests',
    sub: 'Ospiti'
  }, {
    icon: BedDouble,
    label: '6 Bedrooms',
    sub: 'Camere'
  }, {
    icon: Bath,
    label: '5 Bathrooms',
    sub: 'Bagni'
  }, {
    icon: Ruler,
    label: '230m² Interior',
    sub: 'Interni'
  }, {
    icon: Sun,
    label: '100m² Patio',
    sub: 'Esterni'
  }, {
    icon: ChefHat,
    label: '3 Kitchens',
    sub: 'Cucine'
  }];
  return <section id="villa" className="py-20 px-4 bg-paper-texture relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block relative mb-6">
              <SunMotif className="absolute -top-8 -left-8 w-16 h-16 text-[var(--sienna)] opacity-20 animate-spin-slow" />

              <h2 className="text-4xl md:text-6xl text-[var(--brown)] relative z-10">
                La Villa
              </h2>
            </div>

            <p className="font-script text-3xl text-[var(--sienna)] mb-6 transform -rotate-1">
              The Entire Villa
            </p>

            <DecorativeBorder className="w-full max-w-xs mb-8 text-[var(--sage)] opacity-60 md:mx-0 mx-auto" />

            <p className="font-serif text-xl text-[var(--brown)] leading-relaxed mb-8">
              For large families, retreats, or groups of friends, WaCa can be
              yours exclusively. Combine Dream, Heaven, and Oasis to enjoy
              complete privacy in the heart of the Apulian countryside.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--cream)] flex items-center justify-center text-[var(--sienna)] group-hover:scale-110 transition-transform">
                    <stat.icon size={20} />
                  </div>

                  <div className="text-left">
                    <span className="block font-bold text-[var(--brown)]">
                      {stat.label}
                    </span>
                    <span className="block text-sm font-script text-[var(--sage)]">
                      {stat.sub}
                    </span>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Visual Card */}
          <div className="flex-1 w-full">
            <div className="vintage-card bg-[#FDFBF7] p-4 rotate-2 max-w-md mx-auto relative">

              <div className="aspect-[4/3] bg-[var(--sage)] bg-opacity-20 w-full mb-4 relative overflow-hidden group">
                <img src="https://res.cloudinary.com/dfu9nzn8r/image/upload/f_auto,q_auto,w_1600/v1771572465/0a994447-8767-4c38-ab2c-baeec79332b6.jpeg_2023-09-08_08_42_43_x18xsl.jpg" alt="Villa WaCa exterior" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />

              </div>

              <div className="text-center">
                <p className="font-script text-2xl text-[var(--sienna)]">
                  Esclusività Totale
                </p>
                <p className="font-serif text-sm text-[var(--brown)] opacity-60 uppercase tracking-widest mt-1">
                  Total Exclusivity
                </p>
              </div>

              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[var(--paper-dark)] opacity-80 rotate-1 shadow-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>;
}