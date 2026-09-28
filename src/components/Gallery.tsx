import React, { useMemo, useState, lazy } from 'react';
type GalleryItem = {
  id: number;
  name: string;
  photos: string[];
};
// ottimizzazione automatica Cloudinary
function optimize(url: string, width: number) {
  if (!url.includes('res.cloudinary.com') || !url.includes('/image/upload/')) return url;
  const afterUpload = url.split('/image/upload/')[1] || '';
  const firstSeg = afterUpload.split('/')[0] || '';
  const looksLikeTransform = firstSeg.includes('_') || firstSeg.startsWith('c_') || firstSeg.startsWith('e_') || firstSeg.startsWith('f_') || firstSeg.startsWith('q_') || firstSeg.startsWith('w_');
  if (looksLikeTransform) return url;
  return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
}
function GalleryCard({
  item,
  idx



}: {item: GalleryItem;idx: number;}) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const currentPhoto = useMemo(() => {
    const safeIdx = (photoIdx % item.photos.length + item.photos.length) % item.photos.length;
    return item.photos[safeIdx];
  }, [photoIdx, item.photos]);
  const hasMultiple = item.photos.length > 1;
  const onClick = () => {
    if (!hasMultiple) return;
    setPhotoIdx((i) => (i + 1) % item.photos.length);
  };
  return <div className={`vintage-card bg-white p-3 pb-12 relative transform transition-all duration-500 hover:z-10 hover:scale-105 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>

      <button type="button" onClick={onClick} className="aspect-square bg-[var(--paper)] overflow-hidden relative w-full text-left group" aria-label={hasMultiple ? `Apri altre foto: ${item.name}` : `Foto: ${item.name}`}>

        <img src={optimize(currentPhoto, 1400)} alt={item.name} className="w-full h-full object-cover" loading="lazy" />


        {/* effetto vintage leggero */}
        <div className="absolute inset-0 bg-[#704214] mix-blend-color opacity-10 pointer-events-none" />

        {/* freccia in basso a destra */}
        {hasMultiple && <div className="absolute bottom-4 right-4 pointer-events-none">
            <div className="h-12 w-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md border border-black/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <span className="text-2xl leading-none text-[var(--brown)]">
                ›
              </span>
            </div>
          </div>}
      </button>

      <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none">
        <span className="font-script text-xl text-[var(--brown)] opacity-60">
          {item.name}
        </span>
      </div>
    </div>;
}
export function Gallery() {
  const items: GalleryItem[] = [{
    id: 1,
    name: 'Piscina',
    photos: ['https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771578266/PiscinaLuceceleste_uutpui.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582021/VillaWaca_Owner_05_z50jcq.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582017/VillaWaca_Owner_021_tapbd2.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582043/483991802_vbzjsd.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582044/c0451476-8e41-4712-88ef-8f6a208ada47_2023-09-08_08_42_58_oo3iwn.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582031/096463b2-44b4-4f47-ab72-dd6582fd9922.jpeg_2023-09-08_08_42_21_k2zkxt.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582066/49c2301a-dbb5-4b4d-aaa8-0627640117a7.jpeg_2023-09-08_08_42_40_wf3g5w.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582024/VillaWaca_Owner_022_z0adj1.jpg']
  }, {
    id: 2,
    name: 'Patio Relax',
    photos: ['https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771578263/PatioSudDivano_t9j8ql.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582034/Copy_of_17132566715449_knzk7e.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582034/Copy_of_17132566998848_pjft2t.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771578262/PatioSud_uxb3ey.jpg']
  }, {
    id: 3,
    name: 'Altre aree esterne',
    photos: ['https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771581997/701822217_hel08b.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771581998/701822084_wurbyn.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771581998/701822055_vezdpa.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771581999/701822049_mqvxn3.jpg']
  }, {
    id: 4,
    name: 'Camere da letto',
    photos: ['https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771578270/stanzamatrimoniale_xtvftu.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771578385/701821811_udjqav.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771578486/701821930_ihvhgi.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771578388/701821813_jtfc8x.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582197/stanzetta2posti_gqwhko.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582194/stanzetta1posto_ryqnqg.jpg']
  }, {
    id: 5,
    name: 'Zona Giorno',
    photos: ['https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582197/soggiorno_b72bp5.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582196/bagno1_rqfoac.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582200/bagno2_s1vwnu.jpg', 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771582189/Cucinafinestraaperta_amj5lo.jpg']
  }, {
    id: 6,
    name: 'Zona Giardino',
    photos: ['https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771581990/701822261_efsgzv.jpg', "/images/VistaPanoramica.JPG", 'https://res.cloudinary.com/dfu9nzn8r/image/upload/v1771572483/499f99a3-8e52-4e05-97da-18c335691c22.jpeg_2023-09-08_08_42_40_rymnox.jpg']
  }];
  return <section id="moments" className="py-24 px-4 bg-paper-texture-dark scroll-mt-24">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[var(--brown)] mb-3">
            Galleria
          </h2>
          <p className="font-script text-2xl text-[var(--sienna)] opacity-80 transform -rotate-1">
            Discover WaCa Apulian Villa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => <GalleryCard key={item.id} item={item} idx={idx} />)}
        </div>
      </div>
    </section>;
}