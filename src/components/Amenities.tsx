import React from 'react';
import { SunMotif } from './DecorativeElements';
// Custom hand-drawn style icons
const PoolIcon = () => <svg viewBox="0 0 50 50" fill="none" className="w-12 h-12 text-[var(--sienna)]">

    <path d="M5 25 Q 15 20, 25 25 T 45 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    <path d="M5 32 Q 15 27, 25 32 T 45 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    <path d="M5 39 Q 15 34, 25 39 T 45 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    <circle cx="40" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
  </svg>;
const GardenIcon = () => <svg viewBox="0 0 50 50" fill="none" className="w-12 h-12 text-[var(--sienna)]">

    <path d="M25 45 L25 25 M25 35 L15 25 M25 30 L35 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    <circle cx="25" cy="15" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />

    <path d="M10 45 Q 25 40, 40 45" stroke="currentColor" strokeWidth="2" />
  </svg>;
const KitchenIcon = () => <svg viewBox="0 0 50 50" fill="none" className="w-12 h-12 text-[var(--sienna)]">

    <path d="M10 20 L10 40 Q 10 45, 25 45 Q 40 45, 40 40 L40 20" stroke="currentColor" strokeWidth="2" />

    <path d="M10 20 Q 25 25, 40 20 Q 25 15, 10 20" stroke="currentColor" strokeWidth="2" />

    <path d="M15 15 L15 5 M25 15 L25 8 M35 15 L35 5" stroke="currentColor" strokeWidth="2" opacity="0.5" />

  </svg>;
const WifiIcon = () => <svg viewBox="0 0 50 50" fill="none" className="w-12 h-12 text-[var(--sienna)]">

    <path d="M10 15 Q 25 5, 40 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    <path d="M15 25 Q 25 18, 35 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    <path d="M20 35 Q 25 30, 30 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    <circle cx="25" cy="42" r="2" fill="currentColor" />
  </svg>;
const ParkingIcon = () => <svg viewBox="0 0 50 50" fill="none" className="w-12 h-12 text-[var(--sienna)]">

    <path d="M5 35 L10 20 L40 20 L45 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

    <path d="M5 35 L45 35" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="38" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
  </svg>;
const ACIcon = () => <svg viewBox="0 0 50 50" fill="none" className="w-12 h-12 text-[var(--sienna)]">

    <path d="M5 25 L15 25 M20 25 L30 25 M35 25 L45 25" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />

    <path d="M10 15 Q 15 10, 20 15 T 30 15" stroke="currentColor" strokeWidth="2" />

    <path d="M20 35 Q 25 30, 30 35 T 40 35" stroke="currentColor" strokeWidth="2" />

    <rect x="5" y="10" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />

  </svg>;
export function Amenities() {
  const amenities = [{
    icon: PoolIcon,
    label: 'Saltwater Pool'
  }, {
    icon: GardenIcon,
    label: 'Olive Garden'
  }, {
    icon: KitchenIcon,
    label: 'Rustic Kitchen'
  }, {
    icon: WifiIcon,
    label: 'Free WiFi'
  }, {
    icon: ParkingIcon,
    label: 'Private Parking'
  }, {
    icon: ACIcon,
    label: 'Air Cooling'
  }];
  return <section className="py-20 px-4 bg-paper-texture">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16 relative inline-block">
          <SunMotif className="absolute -top-12 -right-12 w-24 h-24 text-[var(--cream)] opacity-50 rotate-12" />
          <h2 className="text-4xl md:text-5xl text-[var(--brown)] relative z-10">
            Comfort
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {amenities.map((item, idx) => <div key={idx} className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-[var(--sage)] border-dashed flex items-center justify-center mb-4 bg-[var(--paper)] transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--sienna)]">
                <item.icon />
              </div>
              <span className="font-script text-2xl text-[var(--brown)]">
                {item.label}
              </span>
            </div>)}
        </div>
      </div>
    </section>;
}