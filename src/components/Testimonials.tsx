import React, { useEffect, useRef, useState } from 'react';
import { Quote, ExternalLink } from 'lucide-react';

type Review = {
  source: 'Airbnb' | 'Booking';
  country: string;
  period: string;
  nights: string;
  group: string;
  yearsOnPlatform?: string;
  text: string;
  author: string;
  rating: number;
};

export function Testimonials() {
  const bookingReviewsUrl =
    'https://www.booking.com/hotel/it/masseria-della-pace-nadir-amp-zenit-apartments.it.html?aid=2311236&label=it-it-booking-desktop-VRZD0IC5lt9Ulq%2AajTZ_bgS652829000338%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp1008463%3Ali%3Adec%3Adm&sid=8059266fdbb662c4b4890577f7bb1c20&all_sr_blocks=1254666602_397981772_2_0_0&checkin=2025-08-01&checkout=2025-08-17&dest_id=-122100&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1254666602_397981772_2_0_0&hpos=1&matching_block_id=1254666602_397981772_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1254666602_397981772_2_0_0__799689&srepoch=1742209379&srpvid=2a544dac788700dd&type=total&ucfs=1#tab-reviews';

  const airbnbReviewsUrl = 'https://www.airbnb.it/rooms/1604403343972959495';
  const googleReviewsUrl = 'https://www.google.com/search?q=WaCa%20-%20Apulian%20Villa%20Reviews';

  const reviews: Review[] = [
    {
      source: 'Airbnb',
      country: 'Poland',
      period: 'luglio 2025',
      nights: '7 notti',
      group: 'Famiglia',
      yearsOnPlatform: '4 anni su Airbnb',
      text:
        'Un posto bellissimo in un uliveto, che permette di rilassarsi completamente lontano dalla folla e dal turismo di massa. È stato meraviglioso rilassarsi in campagna, accompagnati da cicale, il fruscio delle foglie e la natura mediterranea.',
      author: 'Piotr',
      rating: 5,
    },
    {
      source: 'Airbnb',
      country: 'Italy',
      period: 'agosto 2024',
      nights: '7 notti',
      group: 'Famiglia',
      yearsOnPlatform: '2 anni su Airbnb',
      text:
        'Abbiamo alloggiato per una settimana in questa struttura e non c’era mai capitato di trovare una cosa così accurata e confortevole. La location ci ha consentito il puro relax continuo. Abbiamo anche avuto la possibilità di conoscere i proprietari, una famiglia davvero molto gentile.',
      author: 'Francesca',
      rating: 4,
    },
    {
      source: 'Airbnb',
      country: 'Korea',
      period: '3 settimane fa',
      nights: '2 notti',
      group: 'Coppia',
      yearsOnPlatform: '4 anni su Airbnb',
      text: 'Ottimo alloggio in un ambiente tranquillo!',
      author: 'Dong-Min',
      rating: 5,
    },
    {
      source: 'Airbnb',
      country: 'Italy',
      period: 'agosto 2025',
      nights: '5 notti',
      group: 'Famiglia',
      yearsOnPlatform: '10 anni su Airbnb',
      text:
        'Abbiamo trascorso un ottimo soggiorno nella casa. L’host è stato estremamente accogliente, molto attento e sempre disponibile a rispondere alle nostre domande o a consigliarci.',
      author: 'Dilan',
      rating: 5,
    },
    {
      source: 'Airbnb',
      country: 'Italy',
      period: 'agosto 2025',
      nights: '3 notti',
      group: 'Coppia',
      text:
        'Casa così come nelle foto, fornita di tutti i servizi elencati, posizione strategica per poter raggiungere varie località della Puglia, giardino e piscina in ottime condizioni, proprietari di casa super accoglienti.',
      author: 'Pasquale',
      rating: 5,
    },
    {
      source: 'Airbnb',
      country: 'Finland',
      period: 'giugno 2025',
      nights: '7 notti',
      group: 'Famiglia',
      yearsOnPlatform: '10 anni su Airbnb',
      text:
        'Ottimo alloggio come base per visitare la Puglia, la nostra famiglia ha apprezzato la piscina e l’uliveto. Le camere sono pulite, moderne e ben attrezzate, e l’alloggio si trova in una posizione comoda per iniziare un viaggio in Puglia.',
      author: 'Riina',
      rating: 5,
    },
    {
      source: 'Booking',
      country: 'Netherlands',
      period: '28 settembre 2024',
      nights: '5 notti',
      group: 'Famiglia',
      text:
        'We had an amazing stay at this beautiful apartment set in the midst of olive groves. The location is incredibly peaceful and quiet, perfect for relaxation. The terrace overlooks their lovely pool, and everything is very well-maintained.',
      author: 'Maja',
      rating: 10,
    },
    {
      source: 'Booking',
      country: 'Belgium',
      period: '15 settembre 2025',
      nights: '9 notti',
      group: 'Coppia',
      text:
        'Nous avons passé un super moment. Nous reviendrons certainement dans ce logement la prochaine fois ! La tranquillità, la propreté, la situazione. Tout était parfait.',
      author: 'Christelle',
      rating: 10,
    },
    {
      source: 'Booking',
      country: 'Italy',
      period: 'giugno 2025',
      nights: '3 notti',
      group: 'Famiglia',
      text:
        'La pace dei sensi. L’estrema pace, la connessione con la natura, la cordialità eccessiva dei proprietari.',
      author: 'Colamonico',
      rating: 5,
    },
    {
      source: 'Booking',
      country: 'Italy',
      period: 'settembre 2024',
      nights: '3 notti',
      group: 'Coppia',
      text:
        'Cura dei dettagli, sia interno casa che esterno. Gentilezza e professionalità dei proprietari. L’atmosfera è rilassata e autentica.',
      author: 'Nerina',
      rating: 4,
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [paused, setPaused] = useState(false);

  const dragRef = useRef({
    isDown: false,
    startX: 0,
    startTranslate: 0,
    translate: 0,
    width: 0,
  });

  const sourceLabel = (source: Review['source']) => {
    if (source === 'Airbnb') return 'Airbnb';
    return 'Booking';
  };

  const stars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < rating ? 'text-[var(--sienna)] text-sm md:text-base' : 'text-gray-300 text-sm md:text-base'}
      >
        ★
      </span>
    ));
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const setWidth = () => {
      dragRef.current.width = el.scrollWidth / 2;
    };

    setWidth();
    window.addEventListener('resize', setWidth);

    let raf = 0;
    let last = performance.now();
    const speed = 0.03;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      if (!paused && !dragRef.current.isDown) {
        const w = dragRef.current.width;
        if (w > 0) {
          dragRef.current.translate -= dt * speed;
          if (dragRef.current.translate <= -w) dragRef.current.translate += w;
          if (dragRef.current.translate > 0) dragRef.current.translate -= w;
          el.style.transform = `translateX(${dragRef.current.translate}px)`;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', setWidth);
    };
  }, [paused]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current.isDown = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startTranslate = dragRef.current.translate;
    setIsDragging(true);
    setPaused(true);
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.isDown || !trackRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.translate = dragRef.current.startTranslate + dx;
    const w = dragRef.current.width;
    if (w > 0) {
      while (dragRef.current.translate <= -w) dragRef.current.translate += w;
      while (dragRef.current.translate > 0) dragRef.current.translate -= w;
    }
    trackRef.current.style.transform = `translateX(${dragRef.current.translate}px)`;
  };

  const endDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current.isDown = false;
    setIsDragging(false);
    setPaused(false);
    if (e && (e.currentTarget as HTMLDivElement).hasPointerCapture(e.pointerId)) {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section className="py-24 px-4 bg-paper-texture-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[var(--brown)] mb-2">
            Parole degli Ospiti
          </h2>
          <p className="font-script text-2xl text-[var(--sienna)]">
            Words from our Guests
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <a
              href={bookingReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--paper)] border border-[var(--cream)] px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-serif text-sm md:text-base text-[var(--brown)]">
                Recensioni su <strong>Booking.com</strong>
              </span>
              <ExternalLink className="w-4 h-4 text-[var(--sienna)]" />
            </a>

            <a
              href={airbnbReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--paper)] border border-[var(--cream)] px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-serif text-sm md:text-base text-[var(--brown)]">
                Recensioni su <strong>Airbnb</strong>
              </span>
              <ExternalLink className="w-4 h-4 text-[var(--sienna)]" />
            </a>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--paper)] border border-[var(--cream)] px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-serif text-sm md:text-base text-[var(--brown)]">
                Recensioni su <strong>Google</strong>
              </span>
              <ExternalLink className="w-4 h-4 text-[var(--sienna)]" />
            </a>
          </div>

          <p className="mt-4 text-xs text-[var(--brown)] opacity-60 uppercase tracking-widest font-serif">
            Verified reviews • Opens in a new tab
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className={`flex gap-6 w-max cursor-grab select-none ${isDragging ? 'cursor-grabbing' : ''}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
            style={{ willChange: 'transform', touchAction: 'none' }}
          >
            {duplicatedReviews.map((review, idx) => (
              <div
                key={`${review.author}-${idx}`}
                className="w-[320px] md:w-[340px] bg-[var(--paper)] p-5 shadow-sm border border-[var(--cream)] relative shrink-0"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--brown)] opacity-70">
                    <span className="w-2 h-2 rounded-full bg-[var(--sienna)]"></span>
                    {sourceLabel(review.source)}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--brown)] opacity-55">
                    {review.yearsOnPlatform || ''}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--sage)] text-white flex items-center justify-center font-bold text-base shrink-0">
                      {review.author[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-[var(--sienna)] font-script text-lg leading-none">
                        {review.author}
                      </p>
                      <p className="text-[11px] text-[var(--brown)] opacity-60 uppercase tracking-widest mt-1 truncate">
                        {review.country}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    <div className="flex gap-0.5 mt-1">{stars(review.rating)}</div>
                    <p className="text-[11px] text-[var(--brown)] opacity-80 uppercase tracking-widest">
                      Periodo: {review.period}
                    </p>
                    <p className="text-[11px] text-[var(--brown)] opacity-80 uppercase tracking-widest">
                      {review.nights} • {review.group}
                    </p>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-[var(--sage)] opacity-35 mb-3" />

                <p className="font-serif text-[15px] text-[var(--brown)] italic leading-relaxed">
                  "{review.text}"
                </p>

                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--sage)] opacity-30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--sage)] opacity-30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
