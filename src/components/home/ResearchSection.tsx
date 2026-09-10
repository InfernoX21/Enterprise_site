import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { researchData } from '../../data/research';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="research" className="py-24 border-b border-white/10 bg-[#050505] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              07 // APPLIED ADVANCED RESEARCH
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Research
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl font-normal">
              Exploring systems that are not yet standard infrastructure.
            </p>
          </div>

          <button
            onClick={() => navigate('/research')}
            className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>RESEARCH REPOSITORY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Research Entries List */}
        <div className="divide-y divide-white/10 pt-4">
          {researchData.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate('/research')}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group cursor-pointer hover:bg-white/[0.015] transition-colors"
            >
              {/* ID & Status */}
              <div className="lg:col-span-3 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-500">
                  <span>{item.number}</span>
                  <span>/</span>
                  <span className="text-[9px] px-1.5 py-0.5 border border-white/10 text-neutral-300 rounded-xs uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>
                <div className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
                  {item.area}
                </div>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-6 space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-neutral-200 transition-colors font-mono-tech">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Related Program & Documentation */}
              <div className="lg:col-span-3 space-y-2 text-left lg:text-right text-[11px] font-mono-tech text-neutral-500">
                <div>
                  PROGRAM: <span className="text-white">{item.relatedProgram}</span>
                </div>
                <div className="text-[10px] text-neutral-500 truncate">
                  {item.documentationStatus}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
