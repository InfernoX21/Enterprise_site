import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { applicationsData } from '../data/applications';
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';

export const ApplicationsPage: React.FC = () => {
  const { navigate, setSelectedDemoInterest } = useNavigation();

  return (
    <div className="min-h-screen bg-transparent text-neutral-300 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            OPERATIONAL DOMAINS & CIVIL INFRASTRUCTURE
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans max-w-4xl leading-tight">
            Application Domains
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 max-w-3xl leading-relaxed font-normal">
            ARKA does not build generic tools for unspecified consumers. We engineer dedicated computational systems for five high-consequence physical environments.
          </p>
        </div>

        {/* 5 Domains Deep Dives */}
        <div className="space-y-16">
          {applicationsData.map((app) => (
            <div
              key={app.id}
              id={`domain-${app.id}`}
              className="p-6 sm:p-10 bg-[#090909] border border-white/10 rounded-xs space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs font-mono-tech text-neutral-500">
                    <span>DOMAIN {app.number}</span>
                    <span>/</span>
                    <span className="text-neutral-400 uppercase">{app.focus}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                    {app.title}
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setSelectedDemoInterest(app.title);
                    navigate('/demo');
                  }}
                  className="px-4 py-2 border border-white/20 hover:border-white text-white text-xs font-mono-tech uppercase tracking-wider rounded-xs transition-colors cursor-pointer self-start md:self-auto"
                >
                  SCHEDULE DOMAIN BRIEF
                </button>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-4xl font-normal">
                {app.description}
              </p>

              {/* Subdomains Grid */}
              <div className="space-y-3">
                <div className="text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400">
                  SPECIALIZED SUBDOMAINS & CAPABILITIES
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {app.subdomains.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-black/60 border border-white/5 rounded-xs space-y-1"
                    >
                      <div className="text-xs font-bold text-white font-mono-tech">
                        {sub.name}
                      </div>
                      <div className="text-xs text-neutral-400 leading-normal font-sans">
                        {sub.description || sub.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Impact Banner */}
              <div className="p-4 bg-white/3 border border-white/10 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-tech text-xs">
                <div>
                  <span className="text-neutral-500 uppercase">MEASURABLE IMPACT: </span>
                  <span className="text-white font-medium">{app.operationalImpact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">RELATED PLATFORMS:</span>
                  <div className="flex gap-1.5">
                    {(app.relatedProducts || ['ARKA', 'IRA', 'VYOM']).map(rp => (
                      <button
                        key={rp}
                        onClick={() => navigate(`/products/${rp.toLowerCase().replace(/[^a-z0-9]/g, '-')}`)}
                        className="px-2 py-0.5 bg-white/10 hover:bg-white/20 text-white rounded-xs transition-colors cursor-pointer"
                      >
                        {rp}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation CTA */}
        <div className="p-8 sm:p-12 bg-black border border-white/20 rounded-xs text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-sans">
            Need custom physical modeling for your agency or enterprise?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto font-mono-tech">
            We adapt ARKA computational layers to unique spatial geometries, proprietary sensor buses, and air-gapped security boundaries.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/demo')}
              className="px-8 py-3 bg-white text-black text-xs font-mono-tech uppercase tracking-[0.2em] font-bold rounded-xs hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              REQUEST DOMAIN DEMONSTRATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
