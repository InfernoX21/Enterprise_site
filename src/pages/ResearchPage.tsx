import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { researchData } from '../data/research';
import { FileText, ArrowRight, CheckCircle2, FlaskConical, Search } from 'lucide-react';

export const ResearchPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [filterArea, setFilterArea] = useState<string>('ALL');

  const areas = [
    'ALL',
    'GEOSPATIAL & EARTH OBSERVATION',
    'AUTONOMOUS & SPATIAL SYSTEMS',
    'EDGE & 5G NETWORKS',
    'SECURITY & QUANTUM PROTOCOLS'
  ];

  const filteredResearch = filterArea === 'ALL'
    ? researchData
    : researchData.filter(r => {
        if (filterArea === 'GEOSPATIAL & EARTH OBSERVATION') {
          return r.area.includes('Geospatial') || r.area.includes('Earth Observation') || r.area.includes('Digital Twins');
        }
        if (filterArea === 'AUTONOMOUS & SPATIAL SYSTEMS') {
          return r.area.includes('Autonomous') || r.area.includes('Spatial') || r.area.includes('Computer Vision') || r.area.includes('Simulation');
        }
        if (filterArea === 'EDGE & 5G NETWORKS') {
          return r.area.includes('5G') || r.area.includes('Edge');
        }
        if (filterArea === 'SECURITY & QUANTUM PROTOCOLS') {
          return r.area.includes('IoT') || r.area.includes('Post-Quantum');
        }
        return true;
      });

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            APPLIED ADVANCED LABS
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans max-w-4xl leading-tight">
            Research
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 max-w-3xl leading-relaxed font-normal">
            Exploring systems that are not yet standard infrastructure.
          </p>

          {/* Research Philosophy Banner */}
          <div className="p-6 bg-[#080808] border border-white/10 rounded-xs space-y-2 font-mono-tech text-xs">
            <div className="text-[10px] uppercase tracking-widest text-neutral-500">
              RESEARCH MANDATE
            </div>
            <p className="text-neutral-300 font-sans leading-relaxed text-sm">
              ARKA Research focuses strictly on applied computational challenges that bridge lab formulations with field deployability. We evaluate algorithmic bounds against real physical noise, latency limits, and hardware thermals.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-2 border border-white/10 p-1 bg-black/60 rounded-xs">
            {areas.map(area => (
              <button
                key={area}
                onClick={() => setFilterArea(area)}
                className={`px-3 py-1.5 text-[10px] font-mono-tech uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                  filterArea === area
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Research Programs List */}
        <div className="space-y-8">
          {filteredResearch.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#090909] border border-white/10 rounded-xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3 text-xs font-mono-tech">
                  <span className="text-neutral-500">{item.number}</span>
                  <span className="text-[9px] px-2 py-0.5 border border-white/15 bg-white/5 text-white rounded-xs uppercase tracking-wider">
                    {item.status}
                  </span>
                  <span className="text-neutral-400 uppercase font-medium">
                    {item.area}
                  </span>
                </div>

                <div className="text-[11px] font-mono-tech text-neutral-400">
                  PROGRAM: <span className="text-white font-semibold">{item.relatedProgram}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-mono-tech">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Documentation & Specifications */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 font-mono-tech text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-neutral-500" />
                  <span>DOCUMENTATION: <span className="text-neutral-200">{item.documentationStatus}</span></span>
                </div>

                <button
                  onClick={() => navigate('/demo', { demoInterest: `Research: ${item.title}` })}
                  className="hover:text-white text-neutral-300 flex items-center gap-1.5 cursor-pointer uppercase text-[11px] tracking-wider"
                >
                  <span>REQUEST TECHNICAL BRIEF</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Academic & Government Collaboration */}
        <div className="p-8 sm:p-12 bg-black border border-white/20 rounded-xs space-y-4">
          <h3 className="text-2xl font-bold text-white font-sans">
            Research Partnerships & Defense Labs
          </h3>
          <p className="text-sm text-neutral-400 max-w-2xl font-normal leading-relaxed">
            ARKA collaborates with accredited university aerospace labs, civil defense research initiatives, and national space agencies. Research briefings and testbed access are provided under formal institutional agreements.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/demo', { demoInterest: 'Academic / Institutional Research Partnership' })}
              className="px-6 py-3 bg-white text-black text-xs font-mono-tech uppercase tracking-[0.2em] font-bold rounded-xs hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              INITIATE RESEARCH DIALOGUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
