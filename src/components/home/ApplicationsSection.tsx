import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { applicationsData } from '../../data/applications';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="applications" className="py-24 border-b border-white/10 bg-[#060606] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              06 // OPERATIONAL SCOPE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Application Domains
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl font-normal">
              Targeted deployments across high-consequence physical environments where data integrity and spatial determinism are non-negotiable.
            </p>
          </div>

          <button
            onClick={() => navigate('/applications')}
            className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>VIEW ALL DOMAINS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {applicationsData.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate('/applications')}
              className="p-6 sm:p-8 bg-[#090909] border border-white/10 rounded-xs flex flex-col justify-between hover:border-white/30 transition-colors group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
                  <span>{app.number}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-mono-tech">
                    {app.title}
                  </h3>
                  <div className="text-[11px] font-mono-tech text-neutral-400 uppercase mt-1">
                    {app.focus}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {app.description}
                </p>

                {/* Subdomains list */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {app.subdomains.map((sub, idx) => (
                    <div key={idx} className="text-[11px] font-mono-tech text-neutral-300">
                      • {sub.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <div className="text-[10px] font-mono-tech text-neutral-500 uppercase">
                  OPERATIONAL OUTCOME:
                </div>
                <div className="text-xs font-mono-tech text-neutral-300 mt-1">
                  {app.operationalImpact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
