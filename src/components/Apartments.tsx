import React, { useEffect, useMemo, useState, useRef } from 'react';
import { OliveBranch } from './DecorativeElements';

interface ApartmentCardProps {
  name: string;
  description: string;
  features: string[];
  rotation?: string;
  className?: string;
}

export function ApartmentCard({
  name,
  description,
  features,
  rotation = '0deg',
  className = ''
}: ApartmentCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // ✅ FINAL: Heaven & Oasis swapped (NO duplicates)
 const images: Record<string, string[]> = useMemo(
  () => ({
    Dream: [
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/f_auto,q_auto,w_1600/v1771582089/b9dd12b5-38cb-4e6c-845d-194d27f96e13.png_2023-09-08_08_42_18_myofms.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582197/soggiorno_b72bp5.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582196/stanzamatrimoniale_tgtcap.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582196/bagno1_rqfoac.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582190/PatioSudTavolo_sbht2t.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582190/PatioSudDivano_wysiyl.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582194/stanzetta1posto_ryqnqg.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582197/stanzetta2posti_gqwhko.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582186/PatioSudtavolopiscina_cendix.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582189/Cucinafinestraaperta_amj5lo.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582200/bagno2_s1vwnu.jpg'
    ],
    Heaven: [
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/f_auto,q_auto,w_1600/v1771581998/701822084_wurbyn.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582091/1cae34a1-6601-47ba-a50f-e5c197502e74_2023-09-08_08_42_13_aifps4.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582079/4542d8a2-3fac-4afe-9a30-8372a3209b02.jpeg_2023-09-08_08_42_27_as0gyq.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582075/6b168170-f02f-424f-a4a4-fb780323cf07.jpeg_2023-09-08_08_42_30_mb495z.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582075/cd009c0e-2434-4f96-9bb6-ababea44e331.jpeg_2023-09-08_08_42_29_ck0ey6.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582074/0bf2b236-c5dc-430e-a4f4-63d38a704dda.jpeg_2023-09-08_08_42_32_ssyded.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582071/2672a5e1-8427-4437-a754-a2be20d2ca25.jpeg_2023-09-08_08_42_34_kwwqnh.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582072/33c54f6f-fe6c-45d6-964e-89f1244786ce.jpeg_2023-09-08_08_42_32_xbdqrg.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582078/cc764327-c8c3-4992-a25d-0f03d6af2cef.jpeg_2023-09-08_08_42_27_vzgg2f.jpg'
    ],
    Oasis: [
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/f_auto,q_auto,w_1600/v1771581999/701822049_mqvxn3.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582056/aac82b47-f39f-4d43-85ca-ef506c73de4a.jpeg_2023-09-08_08_42_46_e1t2x1.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582053/8d19304f-1918-4fb4-b56f-470ac7eef1e0.jpeg_2023-09-08_08_42_49_de4m69.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582051/dfce715d-80f5-4249-b2c2-77820ed75e49.jpeg_2023-09-08_08_42_51_re6ris.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582051/f81328c4-3376-4ec9-8981-a8dee33682cf.jpeg_2023-09-08_08_42_52_binufj.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582049/4f82d3f5-14b8-4ac5-960d-974aa97c0452.jpeg_2023-09-08_08_42_52_g5uy1r.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582049/415f1f61-649e-43c2-aa98-7d5c09b62161.jpeg_2023-09-08_08_42_53_pjzyaf.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582049/e163b46b-6755-4ee3-8a18-35c26bc270c0.jpeg_2023-09-08_08_42_54_yovpky.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582041/479240534_rmnfi9.jpg',
      'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582040/479240574_trattk.jpg'
    ]
  }),
  []
);

  const imageUrl = images[name]?.[currentImageIndex];

  const toggle = () => {
    if (!flipped) {
      setFlipped(true);
    } else if (images[name] && images[name].length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images[name].length);
    } else {
      setFlipped(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setFlipped(false);
        setCurrentImageIndex(0);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setFlipped(false);
        setCurrentImageIndex(0);
      }
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative max-w-sm w-full ${className}`}
      style={{
        transform: `rotate(${rotation})`,
        perspective: '1200px'
      }}
    >
      <div role="button" tabIndex={0} onClick={toggle} className="outline-none cursor-pointer select-none">
        <div
          className="relative w-full h-[520px] transition-transform duration-700"
          style={{
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* ---------- FRONT ---------- */}
          <div
            className="absolute inset-0 bg-[#FDFBF7] p-6 md:p-8 vintage-card border border-[#E8E1D5] flex flex-col"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          >
            <img
              src="https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771674668/IMG_0326_eywbni.png"
              alt="stamp"
              className="absolute top-4 right-4 w-20 h-20 object-contain pointer-events-none select-none"
              draggable={false}
            />

            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-full bg-gray-200 opacity-30 pointer-events-none hidden md:block" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 pr-16">
                <h3 className="font-script text-4xl text-[var(--sienna)] mb-2">{name}</h3>
                <div className="w-12 h-1 bg-[var(--sage)] rounded-full opacity-50" />
              </div>

              <div className="flex-grow space-y-4">
                <p className="font-serif text-lg text-[var(--brown)] leading-relaxed italic">{description}</p>

                <div className="pt-4 border-t border-dashed border-[var(--sage)] border-opacity-30">
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-serif text-[var(--brown)] opacity-80">
                        <span className="w-1.5 h-1.5 bg-[var(--sienna)] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-end">
                <OliveBranch className="w-12 h-12 text-[var(--sage)] opacity-60" />
                <span className="font-script text-sm text-[var(--brown)] opacity-50">Saluti dalla Puglia</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 text-xs font-serif text-[var(--brown)] opacity-40">
              Clicca la cartolina
            </div>
          </div>

          {/* ---------- BACK FOTO ---------- */}
          <div
            className="absolute inset-0 bg-[#FDFBF7] border border-[#E8E1D5] overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(0)'
            }}
          >
            {imageUrl && (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" loading="lazy" draggable={false} />
            )}

            <div className="absolute inset-0 bg-[#704214] mix-blend-color opacity-10 pointer-events-none" />

            <div className="absolute bottom-4 right-4 bg-[var(--paper)] px-4 py-2 rotate-2 shadow-sm">
              <span className="font-script text-xl text-[var(--brown)]">{name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Apartments() {
  const apartments = [
    {
      name: 'Dream',
      description:
        'A serene retreat with a private terrace overlooking the olive groves. Wake up to birdsong and the scent of Mediterranean herbs.',
      features: ['3 Bedrooms · 4+2 Max Occ.', 'Private terrace', 'Full kitchen', 'Air conditioning', 'Two patios (one with pool view)'],
      rotation: '-1deg'
    },
    {
      name: 'Heaven',
      description:
        'Light-filled and spacious, Heaven opens onto the shared patio and pool. Perfect for families seeking comfort and connection.',
      features: ['2 Bedrooms · 4+1 Max Occ.', 'Patio & pool access', 'Full kitchen', 'Air conditioning', 'Garden views'],
      rotation: '0.5deg'
    },
    {
      name: 'Oasis',
      description:
        'The most intimate of the three, Oasis is a cozy hideaway for couples or small families, with its own quiet corner of the garden.',
      features: ['1 Bedrooms · 4 Max Occ.', 'Patio & pool access', 'Full kitchen', 'Air conditioning', 'Garden views'],
      rotation: '1.5deg'
    }
  ];

  return (
    <section className="py-24 px-4 bg-paper-texture-dark scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[var(--brown)] mb-3">Gli Appartamenti</h2>
          <p className="font-script text-2xl text-[var(--sienna)] opacity-80 transform -rotate-1">
            Choose your perfect retreat
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-8">
          {apartments.map((apt) => (
            <ApartmentCard
              key={apt.name}
              name={apt.name}
              description={apt.description}
              features={apt.features}
              rotation={apt.rotation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
