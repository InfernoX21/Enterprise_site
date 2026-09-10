import React, { useState } from 'react';
import { capabilitiesData } from '../../data/capabilities';
import { ChevronRight, Check } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const [selectedCapId, setSelectedCapId] = useState<string>(capabilitiesData[0].id);

  const activeCap = capabilitiesData.find(c => c.id === selectedCapId) || capabilitiesData[0];

  return (
    <section id="capabilities" className="py-24 border-b border-white/10 bg-[#060606] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-white/10 space-y-2">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            04 // CORE COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Technical Capabilities
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl font-normal">
            Specialized engineering capabilities across orbital telemetry, spatial indexing, physical simulation, and distributed systems.
          </p>
        </div>

        {/* Capabilities Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
          {/* Left Column: List of Categories */}
          <div className="lg:col-span-5 space-y-2">
            {capabilitiesData.map((cap) => {
              const isSelected = cap.id === selectedCapId;
              return (
                <button
                  key={cap.id}
                  onClick={() => setSelectedCapId(cap.id)}
                  className={`w-full text-left p-4 rounded-xs border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-xs'
                      : 'bg-black/40 text-neutral-400 border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono-tech opacity-60">
                      {cap.number}
                    </span>
                    <span className="text-sm font-semibold tracking-wide font-mono-tech uppercase">
                      {cap.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-neutral-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Category Deep Dive */}
          <div className="lg:col-span-7 bg-[#090909] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400 mb-1">
                  CATEGORY {activeCap.number} OF 07
                </div>
                <h3 className="text-2xl font-bold text-white font-mono-tech uppercase">
                  {activeCap.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-normal">
                  {activeCap.summary}
                </p>
              </div>

              {/* Items checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-mono-tech uppercase tracking-widest text-neutral-400">
                  CONFIRMED SYSTEMS CAPABILITIES
                </div>
                <div className="space-y-2.5">
                  {activeCap.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-black/60 border border-white/5 rounded-xs"
                    >
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="text-xs font-mono-tech text-neutral-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex items-center justify-between text-[11px] font-mono-tech text-neutral-400">
              <span>SECURITY LEVEL: AUDITED FOR CRITICAL INFRASTRUCTURE</span>
              <span className="text-neutral-500">SYS_VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
