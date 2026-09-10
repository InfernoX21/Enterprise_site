import React, { useState } from 'react';
import { technologyStages } from '../../data/technology';
import { TechPipelineStage } from '../../types';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Terminal } from 'lucide-react';

export const SystemArchitectureInteractive: React.FC<{ initialStageId?: string }> = ({
  initialStageId = 'data'
}) => {
  const [activeStageId, setActiveStageId] = useState<string>(initialStageId);

  const activeStage = technologyStages.find(s => s.id === activeStageId) || technologyStages[0];

  return (
    <div className="w-full bg-[#080808] border border-white/10 rounded-xs overflow-hidden font-sans">
      {/* Top Header Bar */}
      <div className="px-5 py-3 border-b border-white/10 bg-black/60 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono-tech text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
          <span className="text-white font-medium uppercase tracking-wider">
            END-TO-END COMPUTATIONAL PIPELINE
          </span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <span>FLOW: SPACE → EARTH → DATA → ACTION</span>
          <span className="text-neutral-500">LATENCY BUDGET: DETERMINISTIC</span>
        </div>
      </div>

      {/* Horizontal Pipeline Steps Bar */}
      <div className="overflow-x-auto border-b border-white/10 bg-[#060606] no-scrollbar">
        <div className="flex min-w-[760px] p-2 gap-1.5">
          {technologyStages.map((stage, idx) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`flex-1 min-w-[90px] py-2.5 px-2 rounded-xs text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-white text-black border-white shadow-xs'
                    : 'bg-white/3 text-neutral-400 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-[9px] font-mono-tech mb-1 opacity-70">
                  <span>{stage.step}</span>
                  {idx < technologyStages.length - 1 && (
                    <ChevronRight className={`w-3 h-3 ${isActive ? 'text-black' : 'text-neutral-600'}`} />
                  )}
                </div>
                <div className="text-[11px] font-mono-tech font-bold uppercase tracking-wider truncate">
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Pane for Active Stage */}
      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Stage Specs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-neutral-400 uppercase tracking-widest mb-1">
              <span>STAGE {activeStage.step} OF 08</span>
              <span>/</span>
              <span className="text-white">{activeStage.tagline}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white font-mono-tech">
              {activeStage.name}
            </h3>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              {activeStage.description}
            </p>
          </div>

          {/* I/O Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 bg-black/50 border border-white/10 rounded-xs">
              <div className="text-[10px] font-mono-tech uppercase tracking-widest text-neutral-400 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>INPUT PAYLOADS</span>
              </div>
              <p className="text-xs font-mono-tech text-neutral-200">
                {activeStage.inputs}
              </p>
            </div>

            <div className="p-3.5 bg-black/50 border border-white/10 rounded-xs">
              <div className="text-[10px] font-mono-tech uppercase tracking-widest text-neutral-400 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>OUTPUT ARTIFACTS</span>
              </div>
              <p className="text-xs font-mono-tech text-neutral-200">
                {activeStage.outputs}
              </p>
            </div>
          </div>

          {/* Technologies & Frameworks */}
          <div>
            <div className="text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400 mb-2">
              TECHNOLOGIES & ENGINES DEPLOYED
            </div>
            <div className="flex flex-wrap gap-2">
              {activeStage.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono-tech rounded-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Standards & Live Packet Telemetry */}
        <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-[11px] font-mono-tech uppercase tracking-wider text-neutral-400">
              GOVERNING STANDARDS & PROTOCOLS
            </div>
            <div className="space-y-2">
              {activeStage.standards.map(std => (
                <div
                  key={std}
                  className="flex items-center gap-2.5 p-2.5 bg-black/40 border border-white/5 rounded-xs text-xs font-mono-tech text-neutral-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Console Output Mock */}
          <div className="p-4 bg-black border border-white/10 rounded-xs font-mono-tech text-[11px] space-y-1 text-neutral-400">
            <div className="flex items-center justify-between text-[10px] text-neutral-500 border-b border-white/10 pb-1 mb-2">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3" />
                <span>PIPE_MONITOR::{activeStage.name.toLowerCase()}</span>
              </div>
              <span className="text-white">THREAD_OK</span>
            </div>
            <div className="text-neutral-500">[00:00:00.012] REGISTERED INGEST BUFFER: 16384 MB</div>
            <div className="text-neutral-300">[00:00:00.048] SPATIAL INDEX SYNC: 100% WGS84</div>
            <div className="text-neutral-400">[00:00:00.114] TELEMETRY VALIDATION: PASS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
