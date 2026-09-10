import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SystemArchitectureInteractive } from '../components/visuals/SystemArchitectureInteractive';
import { ArrowRight, Layers, Database, Shield, Zap, Globe, Cpu } from 'lucide-react';

export const PlatformPage: React.FC = () => {
  const { navigate } = useNavigation();

  const corePillars = [
    {
      step: '01',
      title: 'ORBITAL & TERRESTRIAL INGESTION',
      description: 'Native drivers for LEO satellite constellations, aerial drone imagery, LiDAR point clouds, LoRaWAN soil telemetry, and municipal CCTV streams.'
    },
    {
      step: '02',
      title: 'DISCRETE GLOBAL GRID SYSTEM (DGGS)',
      description: 'Every physical coordinate is indexed across hierarchical Uber H3 hexagonal partitions and Google S2 spherical geometries, eliminating spatial distortion.'
    },
    {
      step: '03',
      title: 'DETERMINISTIC SPATIAL ENGINE',
      description: 'Distributed Rust/C++ stream processing clusters process physical events in sub-second latency bounds with zero frame drops or memory leaks.'
    },
    {
      step: '04',
      title: 'VERIFIED ACTUATION & DISPATCH',
      description: 'Synthesized kinetic state vectors dispatch directly to traffic signal controllers, emergency vehicles, autonomous mobile robots, or agricultural machinery.'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-neutral-300 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <div className="space-y-6 pb-12 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-white/15 bg-white/5 rounded-xs text-[10px] font-mono-tech uppercase tracking-[0.2em] text-neutral-300">
            <span>PLATFORM ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans max-w-4xl leading-tight">
            The Spatial Operating System for Complex Physical Environments.
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 max-w-3xl leading-relaxed font-normal">
            ARKA unifies satellite observations, terrestrial sensor telemetry, and spatial computing into an interconnected, real-time computational pipeline.
          </p>

          {/* Paradigm Banner */}
          <div className="p-6 bg-[#080808] border border-white/10 rounded-xs space-y-3 font-mono-tech">
            <div className="text-[10px] uppercase tracking-widest text-neutral-500">
              UNIFIED DATAFLOW PARADIGM
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-white tracking-wider">
              <span>SPACE</span>
              <span className="text-neutral-600">→</span>
              <span>EARTH</span>
              <span className="text-neutral-600">→</span>
              <span>DATA</span>
              <span className="text-neutral-600">→</span>
              <span>COMPUTATION</span>
              <span className="text-neutral-600">→</span>
              <span className="text-[#D96B2B]">ACTION</span>
            </div>
            <p className="text-xs text-neutral-400 font-sans font-normal pt-1">
              Data alone does not resolve physical bottlenecks. The ARKA platform closes the loop from spaceborne observation down to physical kinetic action on the ground.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="space-y-8">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            FOUNDATIONAL SUBSTRATE
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map(pillar => (
              <div
                key={pillar.step}
                className="p-6 bg-[#090909] border border-white/10 rounded-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono-tech text-neutral-500">{pillar.step}</div>
                  <h3 className="text-sm font-bold font-mono-tech text-white uppercase tracking-wider">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Systems Pipeline */}
        <div className="space-y-8 pt-6">
          <div className="space-y-2">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              PIPELINE INSPECTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              8-Stage Computational Stack
            </h2>
          </div>
          <SystemArchitectureInteractive />
        </div>

        {/* Security & Reliability */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 bg-[#090909] border border-white/10 rounded-xs font-mono-tech text-xs">
          <div className="space-y-2">
            <div className="text-white font-bold uppercase flex items-center gap-2">
              <Shield className="w-4 h-4 text-neutral-400" />
              <span>AIR-GAPPED COMPATIBLE</span>
            </div>
            <p className="text-neutral-400 leading-relaxed font-sans text-xs">
              Supports on-premise bare metal and private sovereign cloud installations with zero outbound telemetry leaks.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-bold uppercase flex items-center gap-2">
              <Zap className="w-4 h-4 text-neutral-400" />
              <span>SUB-SECOND LATENCY</span>
            </div>
            <p className="text-neutral-400 leading-relaxed font-sans text-xs">
              Microsecond message brokers and zero-copy shared memory queues ensure immediate physical situational awareness.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-bold uppercase flex items-center gap-2">
              <Database className="w-4 h-4 text-neutral-400" />
              <span>OPEN GEOSPATIAL STANDARDS</span>
            </div>
            <p className="text-neutral-400 leading-relaxed font-sans text-xs">
              Native compliance with OGC, STAC, GeoTIFF, WFS, GeoParquet, and CityGML schemas for seamless integration.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-black border border-white/20 rounded-xs">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-lg font-bold text-white font-sans">Deploy ARKA in your environment</div>
            <div className="text-xs text-neutral-400 font-mono-tech">Request an architecture review with our systems engineers.</div>
          </div>
          <button
            onClick={() => navigate('/demo')}
            className="px-6 py-3 bg-white text-black text-xs font-mono-tech uppercase tracking-[0.2em] font-bold rounded-xs hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
          >
            REQUEST DEMO
          </button>
        </div>
      </div>
    </div>
  );
};
