import React from 'react';
import { DecorativeBorder, OliveBranch } from './DecorativeElements';
export function DolceVita() {
  return <section className="py-24 px-4 bg-paper-texture-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 transform -rotate-45">
          <OliveBranch className="w-64 h-64 text-[var(--brown)]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl md:text-7xl text-[var(--sienna)] mb-6">
            Tra Ulivi e Luce
          </h2>
          <DecorativeBorder className="w-48 mx-auto text-[var(--brown)] opacity-50" />
        </div>

        <div className="prose prose-lg mx-auto text-center font-serif text-[var(--brown)]">
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            Here in Puglia, time moves differently. It flows like our olive
            oil—golden, rich, and unhurried.
          </p>

          <p className="mb-8">
            WACA is more than a villa; it's an invitation to pause. Surrounded
            by ancient olive groves and the distinctive conical roofs of Trulli
            houses, you'll find a peace that only the Italian countryside can
            offer.
          </p>

          <p className="mb-12">
            Spend your days exploring the white-washed towns of the Itria
            Valley, dipping into the crystal waters of the Adriatic, or simply
            reading a book under the shade of a centuries-old tree.
          </p>

          <div className="bg-[var(--paper)] p-8 md:p-12 rounded-sm shadow-sm border border-[var(--cream)] transform rotate-1 max-w-2xl mx-auto">
            <p className="font-script text-3xl text-[var(--sienna)] mb-4">
              You don’t just visit Puglia. For a while, you live it.
            </p>
            <p className="text-sm uppercase tracking-widest opacity-60">
              Live slowly, breathe deeply, feel at home.
            </p>
          </div>
        </div>
      </div>
    </section>;
}