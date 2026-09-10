import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArkaLogo } from '../common/ArkaLogo';
import { ArrowRight } from 'lucide-react';

export const CompanySection: React.FC = () => {
  const { navigate } = useNavigation();

  const principles = [
    {
      title: 'BUILD FOR REAL SYSTEMS.',
      explanation: 'Software abstractions that work in synthetic benchmarks fail against the physics of optical reflection, radio interference, and physical latency. We design directly for physical operational constraints.'
    },
    {
      title: 'MAKE COMPLEXITY VISIBLE.',
      explanation: 'We do not conceal operational nuance behind simplistic black-box metrics. We give dispatchers and operators unvarnished, calibrated spatial data with verifiable provenance.'
    },
    {
      title: 'ENGINEER BEFORE YOU MARKET.',
      explanation: 'Technology must be verified on testbenches and field trials prior to external claims. Every specification published by ARKA reflects real mathematical limits and verified system performance.'
    },
    {
      title: 'RESEARCH SHOULD BECOME PRODUCT.',
      explanation: 'Laboratory exploration in orbital physics, earth observation, and post-quantum cryptography exists to build commercial and civil infrastructure, not theoretical papers alone.'
    },
    {
      title: 'KEEP THE SIGNAL. REMOVE THE NOISE.',
      explanation: 'Terabytes of raw imagery and sensor telemetry paralyze decision-makers. Our processing pipelines compress massive physical streams down to mathematically defensible, actionable state vectors.'
    }
  ];

  return (
    <section id="company" className="py-24 border-b border-white/10 bg-[#060606] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              08 // PRINCIPLES & DIRECTION
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans max-w-3xl leading-tight">
              We build technology for environments that cannot be simplified.
            </h2>
          </div>

          <button
            onClick={() => navigate('/company')}
            className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>ABOUT ARKA</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Editorial Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Column: Brand Emblem & Mission Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 border border-white/10 bg-black/60 rounded-xs flex flex-col items-center text-center">
              <ArkaLogo variant="full" />
              <div className="mt-8 text-xs font-mono-tech text-neutral-400 text-left space-y-3 leading-relaxed border-t border-white/10 pt-6">
                <div>
                  <span className="text-white font-semibold">ORGANIZATION:</span> Deep-tech corporate aerospace and geospatial computational engineering firm.
                </div>
                <div>
                  <span className="text-white font-semibold">FOUNDING FOCUS:</span> Bridging orbital remote sensing with real-time municipal, industrial, and civil action.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Editorial Statements */}
          <div className="lg:col-span-8 divide-y divide-white/10 border-t border-b border-white/10">
            {principles.map((p, idx) => (
              <div key={idx} className="py-6 sm:py-8 space-y-2">
                <div className="text-[10px] font-mono-tech text-neutral-500 uppercase">
                  PRINCIPLE // 0{idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-mono-tech tracking-wide text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl font-normal">
                  {p.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
