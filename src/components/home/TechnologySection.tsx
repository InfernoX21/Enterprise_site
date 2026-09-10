import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SystemArchitectureInteractive } from '../visuals/SystemArchitectureInteractive';
import { ArrowRight } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section id="technology" className="py-24 border-b border-white/10 bg-[#050505] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              05 // COMPUTATIONAL PIPELINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Technology Architecture
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl font-normal">
              Structured from first principles: from spaceborne sensor transduction through real-time spatiotemporal indexation to validated kinetic action.
            </p>
          </div>

          <button
            onClick={() => navigate('/technology')}
            className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>FULL ARCHITECTURE DOCS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Interactive Architecture Component */}
        <div className="pt-12">
          <SystemArchitectureInteractive />
        </div>
      </div>
    </section>
  );
};
