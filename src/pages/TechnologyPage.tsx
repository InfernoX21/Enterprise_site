import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { technologyStages } from '../data/technology';
import { SystemArchitectureInteractive } from '../components/visuals/SystemArchitectureInteractive';
import { ArrowRight, CheckCircle2, ChevronRight, Terminal, Cpu } from 'lucide-react';

export const TechnologyPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            TECHNICAL ARCHITECTURE & PIPELINE SPECIFICATION
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans max-w-4xl leading-tight">
            The Technology Pipeline
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 max-w-3xl leading-relaxed font-normal">
            A deterministic, 8-stage computational stack that translates raw electro-optical, radar, and sensor telemetry into provable physical actuation.
          </p>
        </div>

        {/* Interactive Viewer */}
        <div className="space-y-4">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            INTERACTIVE SYSTEM EXPLORER
          </div>
          <SystemArchitectureInteractive />
        </div>

        {/* Deep Dive on Every Stage */}
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              Detailed Stage Specifications
            </h2>
            <p className="text-xs font-mono-tech text-neutral-400 mt-1">
              INPUTS, OUTPUTS, PROTOCOLS, AND CONSTRAINTS FOR EACH OPERATIONAL BOUNDARY
            </p>
          </div>

          <div className="space-y-12">
            {technologyStages.map((stage) => (
              <div
                key={stage.id}
                id={`stage-${stage.id}`}
                className="p-6 sm:p-8 bg-[#090909] border border-white/10 rounded-xs space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono-tech text-neutral-500">
                      STAGE {stage.step} // {stage.tagline}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-mono-tech">
                      {stage.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {stage.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-black border border-white/10 text-neutral-300 text-xs font-mono-tech rounded-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {stage.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-4 bg-black/60 border border-white/5 rounded-xs space-y-1">
                    <div className="text-[10px] font-mono-tech text-neutral-500 uppercase">
                      INPUT CONTRACT:
                    </div>
                    <div className="text-xs font-mono-tech text-neutral-200">
                      {stage.inputs}
                    </div>
                  </div>

                  <div className="p-4 bg-black/60 border border-white/5 rounded-xs space-y-1">
                    <div className="text-[10px] font-mono-tech text-neutral-500 uppercase">
                      OUTPUT CONTRACT:
                    </div>
                    <div className="text-xs font-mono-tech text-neutral-200">
                      {stage.outputs}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-mono-tech text-neutral-400 uppercase tracking-wider mb-2">
                    GOVERNING STANDARDS:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stage.standards.map((std) => (
                      <span
                        key={std}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono-tech rounded-xs"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 bg-[#090909] border border-white/20 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white font-sans">
              Need technical integration specifications?
            </h3>
            <p className="text-xs text-neutral-400 font-mono-tech">
              We provide formal API schema definitions, gRPC contracts, and test datasets.
            </p>
          </div>
          <button
            onClick={() => navigate('/demo')}
            className="px-6 py-3 bg-white text-black text-xs font-mono-tech uppercase tracking-[0.2em] font-bold rounded-xs hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
          >
            REQUEST SPECS
          </button>
        </div>
      </div>
    </div>
  );
};
