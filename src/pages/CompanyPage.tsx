import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArkaLogo } from '../components/common/ArkaLogo';
import { ArrowRight, ShieldCheck, Terminal, Compass, Layers, Check } from 'lucide-react';

export const CompanyPage: React.FC = () => {
  const { navigate } = useNavigation();

  const principles = [
    {
      title: 'BUILD FOR REAL SYSTEMS.',
      detail: 'Software abstractions that work in synthetic benchmarks fail against the physics of optical reflection, radio interference, and physical latency. We design directly for real physical constraints.'
    },
    {
      title: 'MAKE COMPLEXITY VISIBLE.',
      detail: 'We do not conceal operational nuance behind simplistic black-box metrics. We give dispatchers and operators unvarnished, calibrated spatial data with verifiable provenance.'
    },
    {
      title: 'ENGINEER BEFORE YOU MARKET.',
      detail: 'Technology must be verified on testbenches and field trials prior to external claims. Every specification published by ARKA reflects real mathematical limits and verified system performance.'
    },
    {
      title: 'RESEARCH SHOULD BECOME PRODUCT.',
      detail: 'Laboratory exploration in orbital physics, earth observation, and post-quantum cryptographic systems exists to build commercial and civil infrastructure, not theoretical papers alone.'
    },
    {
      title: 'KEEP THE SIGNAL. REMOVE THE NOISE.',
      detail: 'Terabytes of raw imagery and sensor telemetry paralyze decision-makers. Our processing pipelines compress massive physical streams down to mathematically defensible, actionable state vectors.'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-neutral-300 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            ORGANIZATIONAL ETHOS & PURPOSE
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans max-w-4xl leading-tight">
            We build technology for environments that cannot be simplified.
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 max-w-3xl leading-relaxed font-normal">
            ARKA is an engineering company focused on computational systems at the intersection of spaceborne remote sensing, physical infrastructure, and deterministic kinetic action.
          </p>
        </div>

        {/* Core Logo & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 bg-[#080808] border border-white/10 rounded-xs">
          <div className="lg:col-span-5 flex justify-center">
            <ArkaLogo variant="full" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-[10px] font-mono-tech uppercase tracking-widest text-neutral-500">
                COMPANY MISSION
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                Turn the physical world into an observable, computable, and predictable operating system.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Most enterprise software treats the physical world as a distant database entry. ARKA models cities, orbital constellations, agricultural topsoils, and transport corridors with rigorous geometric precision and physical realism.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-mono-tech">
              <div>
                <div className="text-neutral-500">FOUNDED ON:</div>
                <div className="text-white font-semibold mt-0.5">Physical Systems First</div>
              </div>
              <div>
                <div className="text-neutral-500">GOVERNANCE:</div>
                <div className="text-white font-semibold mt-0.5">Sovereign & Civil Trust</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Editorial Principles */}
        <div className="space-y-8">
          <div className="border-b border-white/10 pb-4">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              ENGINEERING CANON
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans mt-1">
              Core Principles
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {principles.map((p, idx) => (
              <div key={idx} className="py-8 sm:py-10 space-y-2">
                <div className="text-[10px] font-mono-tech text-neutral-500 uppercase">
                  CANON // 0{idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-mono-tech text-white">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl font-normal">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Work & Research Culture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#090909] border border-white/10 rounded-xs space-y-4">
            <div className="text-xs font-mono-tech uppercase text-neutral-400 tracking-wider">
              HOW WE WORK
            </div>
            <h3 className="text-xl font-bold text-white font-sans">
              High-Precision Applied Engineering
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              We work alongside municipal operations chiefs, aerospace mission controllers, and defense operators directly in the field. Our engineers write code that runs in microcontrollers on tractors, FPGA boards inside satellite buses, and multi-node GPU clusters processing city-wide camera networks.
            </p>
          </div>

          <div className="p-8 bg-[#090909] border border-white/10 rounded-xs space-y-4">
            <div className="text-xs font-mono-tech uppercase text-neutral-400 tracking-wider">
              RESEARCH CULTURE
            </div>
            <h3 className="text-xl font-bold text-white font-sans">
              First-Principles Scientific Rigor
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              We reject hype cycles. When we research orbital tasking algorithms or post-quantum key encapsulation, we test with electromagnetic interference chambers, spectrum analyzers, and packet loss simulators to guarantee failure boundaries before release.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 bg-black border border-white/20 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white font-sans">
              Engage with ARKA leadership and engineering
            </h3>
            <p className="text-xs text-neutral-400 font-mono-tech">
              Discuss sovereign deployments, enterprise pilots, or joint technological development.
            </p>
          </div>
          <button
            onClick={() => navigate('/demo')}
            className="px-6 py-3 bg-white text-black text-xs font-mono-tech uppercase tracking-[0.2em] font-bold rounded-xs hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
          >
            CONNECT WITH US
          </button>
        </div>
      </div>
    </div>
  );
};
