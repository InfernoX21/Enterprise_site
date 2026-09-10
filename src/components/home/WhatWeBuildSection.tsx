import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Globe2, Map, Cpu, Navigation, Network, ArrowUpRight } from 'lucide-react';

export const WhatWeBuildSection: React.FC = () => {
  const { navigate } = useNavigation();

  const categories = [
    {
      number: '01',
      title: 'EARTH OBSERVATION',
      description: "Understanding the Earth's surface using satellite and remote-sensing data.",
      specs: 'Optical, SAR, Hyperspectral, Thermal bands',
      link: '/products/ira'
    },
    {
      number: '02',
      title: 'GEOINTELLIGENCE',
      description: 'Combining geographic information, infrastructure data and real-world events into operational context.',
      specs: 'Spatiotemporal graphs, H3 indexing, Cadastre',
      link: '/products/arka'
    },
    {
      number: '03',
      title: 'COMPUTATIONAL SYSTEMS',
      description: 'Building software and models that process large volumes of spatial and temporal information.',
      specs: 'Distributed stream engines, PostGIS, Ray clusters',
      link: '/technology'
    },
    {
      number: '04',
      title: 'ORBITAL & SPACE SYSTEMS',
      description: 'Systems for spacecraft simulation, constellation tasking, and orbital flight dynamics.',
      specs: 'SGP4 / SDP4, CCSDS telemetry, Hill frame vectors',
      link: '/products/vyom'
    },
    {
      number: '05',
      title: 'QUANTUM-SECURE MESH',
      description: 'Lattice-based cryptographic protocols and resilient infrastructure telemetry.',
      specs: 'NIST ML-KEM / ML-DSA, Hybrid PQ-TLS, TPM 2.0',
      link: '/products/asimov'
    }
  ];

  return (
    <section id="what-we-build" className="py-24 border-b border-white/10 bg-[#060606] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              02 // SCOPE OF TECHNOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl leading-tight">
              Systems that turn complex environments into usable information.
            </h2>
          </div>
          <p className="text-xs font-mono-tech text-neutral-400 max-w-sm uppercase tracking-wider">
            PRECISE PHYSICAL DOMAINS ENGINEERED WITHOUT GENERALIZED ABSTRACTIONS.
          </p>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 pt-8">
          {categories.map((cat) => (
            <div
              key={cat.number}
              onClick={() => navigate(cat.link)}
              className="p-6 first:pl-0 last:pr-0 flex flex-col justify-between group cursor-pointer hover:bg-white/2 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
                  <span>{cat.number}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </div>
                <h3 className="text-sm font-bold font-mono-tech uppercase tracking-wider text-white group-hover:text-neutral-200">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {cat.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 mt-6">
                <div className="text-[10px] font-mono-tech text-neutral-500 uppercase tracking-tight">
                  {cat.specs}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
