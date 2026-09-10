import React from 'react';

interface ArkaLogoProps {
  variant?: 'full' | 'compact' | 'mark-only' | 'editorial';
  className?: string;
  theme?: 'dark' | 'light';
}

export const ArkaLogo: React.FC<ArkaLogoProps> = ({
  variant = 'compact',
  className = '',
  theme = 'dark'
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? '#0A0A0A' : '#FFFFFF';
  const subColor = isLight ? '#555555' : '#8A8A8A';
  const lineColor = isLight ? '#CCCCCC' : '#333333';
  const accentDot = isLight ? '#0A0A0A' : '#FFFFFF';

  if (variant === 'mark-only') {
    return (
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className || 'w-8 h-8'}
        aria-label="ARKA Emblem"
      >
        {/* Needle Chevron A Form */}
        <path
          d="M80 15L108 86L97 86L80 44L63 86L52 86L80 15Z"
          fill={textColor}
        />
        {/* Left Lower Wing */}
        <path
          d="M51 88L36 122L46 122L61 88H51Z"
          fill={textColor}
        />
        {/* Right Lower Wing */}
        <path
          d="M109 88L124 122L114 122L99 88H109Z"
          fill={textColor}
        />
        {/* Orbital Sweeping Arc */}
        <path
          d="M15 105C45 74 115 74 145 105"
          stroke={textColor}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Central Orbital Node */}
        <circle cx="80" cy="80" r="4.5" fill={accentDot} stroke={isLight ? '#FFFFFF' : '#050505'} strokeWidth="2.5" />
      </svg>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Emblem */}
        <div className="relative flex items-center justify-center">
          <svg
            viewBox="0 0 160 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <path
              d="M80 18L106 84L96 84L80 44L64 84L54 84L80 18Z"
              fill={textColor}
            />
            <path
              d="M53 87L38 122L48 122L62 87H53Z"
              fill={textColor}
            />
            <path
              d="M107 87L122 122L112 122L98 87H107Z"
              fill={textColor}
            />
            <path
              d="M18 102C45 75 115 75 142 102"
              stroke={textColor}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="80" cy="80" r="4" fill={accentDot} stroke={isLight ? '#FFFFFF' : '#050505'} strokeWidth="2" />
          </svg>
        </div>

        {/* Wordmark & GEO-INT */}
        <div className="flex flex-col tracking-wider">
          <div className="flex items-center gap-1.5">
            <span
              className="text-lg font-bold tracking-[0.25em] leading-none"
              style={{ color: textColor, fontFamily: 'Inter, sans-serif' }}
            >
              ARKA
            </span>
            <span
              className="text-[9px] uppercase tracking-[0.2em] font-mono-tech px-1 py-0.2 border border-white/20 text-neutral-400 rounded-xs"
            >
              GEO-INT
            </span>
          </div>
          <span
            className="text-[8px] uppercase tracking-[0.22em] font-mono-tech mt-0.5"
            style={{ color: subColor }}
          >
            Kinetic Systems
          </span>
        </div>
      </div>
    );
  }

  // Full / Editorial Variant (Hero or Corporate Identity display)
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* Precision Emblem */}
      <div className="relative mb-4">
        <svg
          viewBox="0 0 160 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 md:w-20 md:h-20"
        >
          {/* Main Needle Apex Chevron */}
          <path
            d="M80 14L108 84L97 84L80 42L63 84L52 84L80 14Z"
            fill={textColor}
          />
          {/* Left Wing Extension */}
          <path
            d="M51 87L34 124L45 124L61 87H51Z"
            fill={textColor}
          />
          {/* Right Wing Extension */}
          <path
            d="M109 87L126 124L115 124L99 87H109Z"
            fill={textColor}
          />
          {/* Curving Horizon Orbital Sweep */}
          <path
            d="M12 104C42 70 118 70 148 104"
            stroke={textColor}
            strokeWidth="3.6"
            strokeLinecap="round"
          />
          {/* Central Satellite Beacon */}
          <circle cx="80" cy="78" r="5" fill={accentDot} stroke={isLight ? '#FFFFFF' : '#050505'} strokeWidth="2.5" />
        </svg>
      </div>

      {/* ARKA Main Wordmark */}
      <h1
        className="text-3xl md:text-5xl font-extrabold tracking-[0.32em] uppercase leading-none pl-[0.32em]"
        style={{ color: textColor, fontFamily: 'Inter, sans-serif' }}
      >
        ARKA
      </h1>

      {/* GEO-INT Divider Line */}
      <div className="w-full max-w-[280px] md:max-w-[340px] flex items-center gap-3 my-2.5">
        <div className="flex-1 h-[1px]" style={{ backgroundColor: lineColor }} />
        <span
          className="text-[11px] md:text-xs font-semibold tracking-[0.35em] uppercase font-mono-tech"
          style={{ color: textColor }}
        >
          GEO - INT
        </span>
        <div className="flex-1 h-[1px]" style={{ backgroundColor: lineColor }} />
      </div>

      {/* Full Explanatory Title */}
      <p
        className="text-[9px] md:text-[11px] uppercase tracking-[0.28em] font-mono-tech"
        style={{ color: subColor }}
      >
        Advanced Real-Time Kinetic Analysis
      </p>
    </div>
  );
};
