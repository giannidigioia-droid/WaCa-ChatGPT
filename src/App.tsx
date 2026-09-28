import React, { useEffect } from 'react';
import { SEO } from "./components/SEO";

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { EntireVilla } from './components/EntireVilla';
import { Apartments } from './components/Apartments';
import { Gallery } from './components/Gallery';
import { Amenities } from './components/Amenities';
import { DolceVita } from './components/DolceVita';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';

export function App() {
  
  // === SCRIPT PER GESTIRE LO SCROLL DA URL DIRETTO ===
  useEffect(() => {
    // Controlla se c'è un "#" nell'URL al caricamento della pagina
    if (window.location.hash) {
      // Estrae l'ID rimuovendo il simbolo "#" (es: "booking")
      const id = window.location.hash.replace('#', '');
      
      // Imposta un timeout per dare tempo a React di renderizzare tutti i componenti
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 500); // 500ms di ritardo per garantire che il DOM sia pronto
    }
  }, []); // L'array vuoto fa eseguire questo hook solo al montaggio del componente

  return (
    <>
      {/* ===== SEO PERMANENTE ===== */}
      <SEO />

      <main className="min-h-screen w-full bg-paper-texture overflow-x-hidden selection:bg-[var(--sage)] selection:text-white">
        <Navigation />

        <div id="home">
          <Hero />
        </div>

        <EntireVilla />

        <div id="apartments">
          <Apartments />
        </div>

        {/* AGGIUNTO L'ID "moments" PER LA GALLERY */}
        <div id="moments">
          <Gallery />
        </div>

        <div id="amenities">
          <Amenities />
        </div>

        <div id="dolcevita">
          <DolceVita />
        </div>

        <Testimonials />

        {/* AGGIUNTO L'ID "location" (opzionale, ma utile se lo aggiungi al menu) */}
        <div id="location">
          <Location />
        </div>

        {/* AGGIUNTO L'ID "booking" PER LA SEZIONE BOOKING */}
        <div id="booking">
          <BookingCTA />
        </div>

        <div id="contact">
          <Footer />
        </div>
      </main>
    </>
  );
}
