import React, { useMemo, useState } from 'react'
import { DecorativeBorder } from './DecorativeElements'
import { MapPin, Compass, Sun } from 'lucide-react'

type LocationPhoto = {
  name: string
  minutes: string
  url: string
}

function optimize(url: string, width: number) {
  if (!url.includes('res.cloudinary.com') || !url.includes('/image/upload/')) return url
  const afterUpload = url.split('/image/upload/')[1] || ''
  const firstSeg = afterUpload.split('/')[0] || ''
  const looksLikeTransform =
    firstSeg.includes('_') ||
    firstSeg.startsWith('c_') ||
    firstSeg.startsWith('e_') ||
    firstSeg.startsWith('f_') ||
    firstSeg.startsWith('q_') ||
    firstSeg.startsWith('w_')
  if (looksLikeTransform) return url
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`)
}

export function Location() {

  const photos: LocationPhoto[] = [
    { name: 'Monopoli', minutes: '10 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637894/Monopoli-2_sf8xiz.jpg' },
    { name: 'Capitolo', minutes: '5 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637897/Capitolo_lpgnz6.jpg' },
    { name: 'Alberobello', minutes: '20 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637897/alberobello_uhle1w.webp' },
    { name: 'Castellana Grotte', minutes: '20 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637897/Castellanagrotte_frxiif.avif' },
    { name: 'Polignano', minutes: '15 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637896/polignano_kephny.jpg' },
    { name: 'Cisternino', minutes: '18 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637894/masseria-cisternino_vgf5rf.jpg' },
    { name: 'Savelletri', minutes: '8 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637894/Savelletri_Fasano_xcdg9d.jpg' },
    { name: 'Ostuni', minutes: '25 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637896/ostuni-mura_ja0wuu.jpg' },
    { name: 'Bari', minutes: '35 min', url: 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1772637895/bari_v7vhei.jpg' }
  ]

  const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'] as const
  const [photoIdx, setPhotoIdx] = useState(0)

  const current = useMemo(() => {
    const safeIdx = (photoIdx % photos.length + photos.length) % photos.length
    return photos[safeIdx]
  }, [photoIdx])

  const currentRotation = useMemo(() => rotations[photoIdx % rotations.length], [photoIdx])

  const onClick = () => setPhotoIdx((i) => (i + 1) % photos.length)

  return (
    <section className="py-20 px-4 bg-paper-texture overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[var(--brown)] mb-4">
            Dove Siamo
          </h2>
          <p className="font-script text-2xl text-[var(--sienna)]">
            Where We Are
          </p>
          <DecorativeBorder className="w-48 mx-auto mt-6 text-[var(--sage)]" />
        </div>

        <div className="relative bg-[#FDFBF7] p-8 md:p-12 border border-[#E8E1D5] shadow-lg max-w-4xl mx-auto transform rotate-1">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Testo sinistra */}
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-[var(--sienna)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl text-[var(--brown)] mb-2">
                    Monopoli, Puglia
                  </h3>
                  <p className="text-[var(--brown)] opacity-80 leading-relaxed">
                    Located in the countryside among centuries-old olive trees, WaCa Apulian
                    Villa is just a few minutes from the crystal-clear waters of the Adriatic
                    Sea and the historic center of Monopoli.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Compass className="w-8 h-8 text-[var(--sienna)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl text-[var(--brown)] mb-2">
                    Nei Dintorni
                  </h3>
                  <ul className="space-y-2 text-[var(--brown)] opacity-80">
                    <li>• Polignano a Mare (15 min)</li>
                    <li>• Alberobello Trulli (20 min)</li>
                    <li>• Ostuni "Città Bianca" (25 min)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Sun className="w-8 h-8 text-[var(--sienna)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl text-[var(--brown)] mb-2">
                    Il Territorio
                  </h3>
                  <p className="text-[var(--brown)] opacity-80 text-[16px]">
                    Discover the Itria Valley, savor the local cuisine, and experience authentic
                    Apulian hospitality among the sea, historic villages, and golden sunsets.
                  </p>
                </div>
              </div>

            </div>

            {/* Foto rotante */}
            <div className={`relative transform transition-all duration-500 hover:scale-105 ${currentRotation}`}>

              <button
                type="button"
                onClick={onClick}
                className="aspect-square overflow-hidden relative w-full text-left group rounded-sm shadow-md"
                aria-label={`Cambia foto location: ${current.name}`}
              >

                <img
                  src={optimize(current.url, 1400)}
                  alt={current.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-[#704214] mix-blend-color opacity-10 pointer-events-none" />

                <div className="absolute bottom-4 right-4 pointer-events-none">
                  <div className="h-10 w-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md border border-black/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <span className="text-2xl leading-none text-[var(--brown)]">›</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-[var(--paper)] px-4 py-2 shadow-sm rotate-2 pointer-events-none">
                  <span className="font-script text-xl text-[var(--brown)] italic">
                    {current.name} {current.minutes}
                  </span>
                </div>

              </button>

            </div>

          </div>

          {/* MAPPA */}
          <div className="mt-10">
            <div className="relative w-full rounded-sm overflow-hidden border-2 border-[var(--cream)] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.2908956382284!2d17.319634575506402!3d40.865489928205655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13464b026914d4ed%3A0x3ff4af9b3f47ba2f!2sWaCa%20-%20Apulian%20Villa!5e0!3m2!1sit!2sit!4v1772031290686!5m2!1sit!2sit"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WaCa - Apulian Villa su Google Maps"
              />
            </div>

            <p className="mt-4 text-sm text-[var(--brown)] opacity-70">
              Indirizzo: Contrada Vagone, 329/F, 70043 Monopoli (BA)
            </p>
          </div>

          <div className="absolute top-4 right-4 w-24 h-24 border border-[var(--sienna)] opacity-20 rounded-full flex items-center justify-center transform rotate-12">
            <span className="text-xs uppercase tracking-widest text-[var(--sienna)]">
              Puglia
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
