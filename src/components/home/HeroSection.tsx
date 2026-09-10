import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { EngineeringGlobe } from '../visuals/EngineeringGlobe';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 border-b border-white/10 bg-transparent overflow-hidden">
      {/* Background fine grid */}
      <div className="absolute inset-0 tech-grid-subtle opacity-60 pointer-events-none" />

      {/* Top Editorial Meta Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-white/10 text-[10px] sm:text-[11px] font-mono-tech text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">SYS.ID: ARKA-CORE-V3</span>
            <span className="text-neutral-600">/</span>
            <span>SPEC: SPACE-TO-GROUND COMPUTATIONAL FUSION</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            <span>COORD: 00°00′00″ N 00°00′00″ E</span>
            <span className="hidden sm:inline">REF: WGS84 ECEF</span>
          </div>
        </div>
      </div>

      {/* Center Layout: Typography + Globe Engineering Visual */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 border border-white/15 bg-white/5 rounded-xs text-[10px] font-mono-tech uppercase tracking-[0.2em] text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D96B2B]" />
                <span>Deep-Tech Space & Geospatial Systems</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-sans">
                Technology for the physical world.
              </h1>
            </div>

            <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed font-sans font-normal">
              ARKA builds computational systems for understanding, modelling and operating complex physical environments — from Earth observation and geospatial intelligence to digital infrastructure and autonomous systems.
            </p>

            {/* Core Brand Idea Vector Statement */}
            <div className="glass-panel p-3.5 text-[11px] font-mono-tech text-neutral-400 max-w-lg">
              <div className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1">
                SYSTEM PIPELINE TOPOLOGY
              </div>
              <div className="text-neutral-200 font-medium tracking-wider flex items-center gap-1.5 flex-wrap">
                <span>SPACE</span>
                <span className="text-neutral-600">→</span>
                <span>EARTH</span>
                <span className="text-neutral-600">→</span>
                <span>DATA</span>
                <span className="text-neutral-600">→</span>
                <span>COMPUTATION</span>
                <span className="text-neutral-600">→</span>
                <span className="text-white">ACTION</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-request-demo-cta"
                onClick={() => navigate('/demo')}
                className="px-6 py-3 bg-white text-black text-xs font-mono-tech uppercase tracking-[0.2em] font-bold rounded-xs hover:bg-neutral-200 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>REQUEST DEMO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-explore-products-cta"
                onClick={() => navigate('/products')}
                className="px-6 py-3 border border-white/20 text-white text-xs font-mono-tech uppercase tracking-[0.2em] rounded-xs hover:border-white/50 hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
              </button>
            </div>
          </div>

          {/* Right Column: Engineering Globe Visualization */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="glass-panel map-frame w-full relative overflow-hidden">
              <EngineeringGlobe />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono-tech text-neutral-500">
          <div className="flex items-center gap-6">
            <span>01 // ORBITAL & SURFACE SENSING</span>
            <span className="hidden sm:inline">02 // SUB-SECOND SPATIAL INDEXING</span>
            <span className="hidden md:inline">03 // PROVABLE KINETIC DISPATCH</span>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('what-we-build');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-3 h-3 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
