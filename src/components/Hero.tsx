import React from 'react';
import { SunMotif } from './DecorativeElements';
export function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center px-6 py-16 bg-paper-texture text-center overflow-hidden">
      {/* corner ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <SunMotif className="w-full h-full text-[var(--sienna)] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none rotate-180">
        <SunMotif className="w-full h-full text-[var(--sienna)] translate-x-1/3 translate-y-1/3" />
      </div>

      {/* central block */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        {/* TREE — spazio ridotto verso WaCa */}
        <img
          src="https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771674986/IMG_0328_rncicb.png"
          alt="WaCa Apulian Villa"
          className="
            w-72 md:w-80 lg:w-[22rem]
            mb-[-85px] md:mb-[-120px] lg:mb-[-120px]
            opacity-95
            select-none pointer-events-none
          "





          loading="eager"
          draggable="false" />


        {/* WACA */}
        <h1 className="font-serif text-[54px] md:text-[86px] lg:text-[100px] leading-none text-[var(--brown)] tracking-wide">
          WaCa
        </h1>

        {/* APULIAN VILLA */}
        <p className="font-script text-[34px] md:text-[44px] text-[var(--sienna)] -mt-2">
          Apulian Villa
        </p>

        {/* WAVE */}
        <div className="mt-6 mb-8 w-[340px] md:w-[460px] lg:w-[520px]">
          <svg viewBox="0 0 600 44" className="w-full text-[var(--sage)]">
            <path
              d="
                M0 22
                C 70 10, 140 10, 210 22
                S 350 34, 420 22
                S 530 10, 600 22
              "





              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round" />

          </svg>
        </div>

        {/* QUOTE */}
        <p className="italic text-[18px] md:text-[22px] text-[var(--brown)] mb-4">
          "Benvenuti a casa"
        </p>

        {/* DESCRIPTION */}
        <p className="text-[20px] md:text-[26px] leading-relaxed text-[var(--brown)] opacity-90 max-w-xl font-serif">
          Experience the slow rhythm of the Italian countryside.
        </p>

        {/* SCROLL */}
        <div className="mt-12 text-[var(--sienna)] text-2xl opacity-70 animate-bounce">
          ↓
        </div>
      </div>
    </section>);

}