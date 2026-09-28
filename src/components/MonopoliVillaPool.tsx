import React from "react";
import { SEO } from "../components/SEO";
import { DecorativeBorder } from "../components/DecorativeElements";
<SEO
  title="Villa con Piscina Privata a Monopoli, Puglia | WaCa Apulian Villa"
  description="Villa con piscina al sale a Monopoli (Puglia). 3 appartamenti indipendenti, vicino mare e centro storico. Ideale per famiglie e gruppi."
  canonical="https://villawaca.it/monopoli-puglia-villa-con-piscina"
/>
export function MonopoliVillaPool() {
  return (
    <main id="monopoli" className="bg-paper-texture text-[var(--brown)]">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl mb-4">
              Villa con Piscina Privata a Monopoli, Puglia
            </h1>
            <p className="font-script text-2xl text-[var(--sienna)]">
              WaCa Apulian Villa
            </p>
            <DecorativeBorder className="w-56 mx-auto mt-6 text-[var(--sage)]" />
          </header>

          <p className="text-lg leading-relaxed opacity-90">
            Cerchi una <strong>villa con piscina privata a Monopoli</strong> per
            una vacanza in Puglia con famiglia o amici? WaCa Apulian Villa è una
            casa vacanze immersa tra ulivi secolari, a pochi minuti dalle spiagge
            dell’Adriatico e dal centro storico di Monopoli. La villa è composta
            da <strong>tre appartamenti indipendenti</strong> (Dream, Oasis,
            Heaven) e dispone di <strong>piscina al sale</strong>, patio esterno
            e spazi ideali per gruppi.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-serif mb-3">
                Perché scegliere una villa con piscina a Monopoli
              </h2>
              <p className="leading-relaxed opacity-90">
                Monopoli è una delle destinazioni più richieste in Puglia: mare
                cristallino, calette, porticciolo, centro storico e una posizione
                perfetta per esplorare la Valle d’Itria. Una villa con piscina
                privata ti permette di alternare giornate al mare a momenti di
                relax in totale privacy, soprattutto nei mesi più caldi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-3">Distanze e dintorni</h2>
              <ul className="list-disc pl-5 space-y-2 opacity-90">
                <li>Centro storico di Monopoli: pochi minuti in auto</li>
                <li>Polignano a Mare: circa 15 minuti</li>
                <li>Alberobello (Trulli): circa 25 minuti</li>
                <li>Ostuni: circa 35 minuti</li>
                <li>Aeroporto di Bari: circa 45 minuti</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-3">
                Piscina al sale e comfort
              </h2>
              <p className="leading-relaxed opacity-90">
                La piscina al sale è più delicata sulla pelle e perfetta per
                bambini e adulti. Gli appartamenti sono pensati per offrire
                privacy e autonomia, ideali per famiglie multiple o gruppi di
                amici che desiderano condividere spazi esterni mantenendo aree
                indipendenti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-3">
                Prenotare WaCa Apulian Villa
              </h2>
              <p className="leading-relaxed opacity-90">
                Se vuoi verificare disponibilità e ricevere un preventivo,
                contattaci direttamente dal sito: rispondiamo rapidamente con le
                migliori opzioni per il tuo soggiorno a Monopoli.
              </p>

              <div className="mt-6 text-center">
                <a
                  href="/#booking"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--sienna)] text-white shadow-md hover:opacity-95 transition"
                >
                  Controlla disponibilità
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
