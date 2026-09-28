import React from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}
export const OliveBranch = ({
  color = 'currentColor',
  className,
  ...props
}: IconProps) => <svg viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <path d="M50 90 C 50 90, 45 60, 20 40 M50 90 C 50 90, 55 60, 80 30" stroke={color} strokeWidth="2" strokeLinecap="round" />

    {/* Leaves Left */}
    <path d="M35 65 Q 20 60, 25 45 Q 40 50, 35 65" fill={color} opacity="0.8" />
    <path d="M28 50 Q 10 40, 15 25 Q 30 35, 28 50" fill={color} opacity="0.8" />
    {/* Leaves Right */}
    <path d="M65 65 Q 80 60, 75 45 Q 60 50, 65 65" fill={color} opacity="0.8" />
    <path d="M72 50 Q 90 40, 85 25 Q 70 35, 72 50" fill={color} opacity="0.8" />
    {/* Olives */}
    <ellipse cx="30" cy="55" rx="4" ry="6" fill="#5C4033" />
    <ellipse cx="70" cy="55" rx="4" ry="6" fill="#5C4033" />
    <ellipse cx="50" cy="30" rx="4" ry="6" fill="#5C4033" />
  </svg>;
export const SunMotif = ({
  color = '#A0522D',
  className,
  ...props
}: IconProps) => <svg viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <circle cx="50" cy="50" r="20" stroke={color} strokeWidth="2" fill="none" />
    <path d="M50 20 L50 10 M50 90 L50 80 M20 50 L10 50 M90 50 L80 50" stroke={color} strokeWidth="2" strokeLinecap="round" />

    <path d="M29 29 L22 22 M71 71 L78 78 M29 71 L22 78 M71 29 L78 22" stroke={color} strokeWidth="2" strokeLinecap="round" />

    {/* Inner wavy rays */}
    <path d="M50 25 Q 55 25, 50 25" stroke={color} strokeWidth="1" />
  </svg>;
export const DecorativeBorder = ({
  color = '#B2AC88',
  className,
  ...props
}: IconProps) => <svg viewBox="0 0 400 20" fill="none" className={className} preserveAspectRatio="none" {...props}>

    <path d="M0 10 Q 20 5, 40 10 T 80 10 T 120 10 T 160 10 T 200 10 T 240 10 T 280 10 T 320 10 T 360 10 T 400 10" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />

  </svg>;
export const PostcardStamp = ({
  className,
  ...props
}: IconProps) => <svg viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect x="10" y="10" width="80" height="80" rx="2" stroke="#A0522D" strokeWidth="2" strokeDasharray="4 4" fill="none" />

    <circle cx="50" cy="50" r="30" stroke="#A0522D" strokeWidth="1" opacity="0.6" />

    <text x="50" y="55" textAnchor="middle" fill="#A0522D" fontSize="14" fontFamily="serif" opacity="0.8" style={{
    fontStyle: 'italic'
  }}>

      PUGLIA
    </text>
    <path d="M20 20 L80 80 M80 20 L20 80" stroke="#A0522D" strokeWidth="1" opacity="0.3" />

  </svg>;
export const OliveTreeLogo = ({
  className,
  ...props
}: IconProps) => <svg viewBox="0 0 200 200" fill="none" className={className} {...props}>
    {/* Trunk */}
    <path d="M100 180 C 100 180, 80 150, 90 120 C 80 110, 60 100, 50 80 M90 120 C 100 100, 110 110, 120 90 C 130 80, 150 90, 160 70" stroke="#5C4033" strokeWidth="4" strokeLinecap="round" fill="none" />

    {/* Canopy - stylized clusters */}
    <path d="M40 80 Q 20 60, 50 40 Q 80 20, 100 40" fill="#B2AC88" opacity="0.8" />

    <path d="M90 50 Q 110 10, 150 30 Q 180 50, 150 80" fill="#B2AC88" opacity="0.9" />

    <path d="M30 70 Q 10 90, 40 110 Q 70 100, 60 80" fill="#B2AC88" opacity="0.7" />

    <path d="M130 80 Q 170 90, 180 60" fill="#B2AC88" opacity="0.7" />

    {/* Olives */}
    <circle cx="60" cy="60" r="3" fill="#5C4033" />
    <circle cx="120" cy="50" r="3" fill="#5C4033" />
    <circle cx="140" cy="70" r="3" fill="#5C4033" />
    <circle cx="40" cy="90" r="3" fill="#5C4033" />
  </svg>;