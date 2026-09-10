import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { productsData } from '../data/products';
import { ProductSimulator } from '../components/visuals/ProductSimulator';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Database, 
  Server, 
  Terminal, 
  FileText, 
  ShieldCheck, 
  Radio, 
  Globe 
} from 'lucide-react';

export const ProductDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
  const { navigate, setSelectedDemoInterest } = useNavigation();

  const product = productsData.find(p => p.slug === slug || p.id === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center pt-32 font-mono-tech">
        <div className="text-xs text-neutral-500 mb-2">SYSTEM IDENTIFIER UNRESOLVED</div>
        <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
        <p className="text-xs text-neutral-400 max-w-md mb-8">
          The requested engineering system specification "{slug}" does not exist in the active ARKA registry.
        </p>
        <button
          onClick={() => navigate('/products')}
          className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
        >
          RETURN TO PRODUCTS CATALOG
        </button>
      </div>
    );
  }

  const handleRequestDemo = () => {
    setSelectedDemoInterest(`${product.name} (${product.fullName})`);
    navigate('/demo', { demoInterest: `${product.name} (${product.fullName})` });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb & Navigation Back */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono-tech text-neutral-500">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PRODUCTS</span>
          </button>
          <div className="flex items-center gap-3">
            <span>INDEX: {product.number}</span>
            <span>/</span>
            <span className="text-white uppercase font-medium">{product.tier}</span>
          </div>
        </div>

        {/* 01 — HERO */}
        <section id="01-hero" className="space-y-6 pb-12 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono-tech text-neutral-500">
              {product.number}
            </span>
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] px-2.5 py-0.5 border border-white/20 bg-white/5 text-neutral-200 rounded-xs">
              {product.tier}
            </span>
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] px-2.5 py-0.5 border border-white/10 text-neutral-400 rounded-xs">
              STATUS: {product.status || 'OPERATIONAL PRODUCTION'}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
              {product.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-400 font-mono-tech">
              {product.fullName}
            </h2>
          </div>

          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl leading-relaxed font-normal">
            {product.tagline}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={handleRequestDemo}
              className="px-6 py-3 bg-white text-black text-xs font-mono-tech uppercase tracking-[0.2em] font-bold rounded-xs hover:bg-neutral-200 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>REQUEST TECHNICAL BRIEF / DEMO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('06-architecture');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3 border border-white/20 text-neutral-300 text-xs font-mono-tech uppercase tracking-[0.18em] rounded-xs hover:border-white/50 hover:text-white cursor-pointer"
            >
              VIEW ARCHITECTURE
            </button>
          </div>
        </section>

        {/* 02 — WHAT IT DOES */}
        <section id="02-what-it-does" className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            02 // OPERATIONAL FUNCTIONALITY
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            What It Does
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-4xl font-normal">
            {product.whatItDoes.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 03 — WHO IT IS FOR */}
        <section id="03-who-it-is-for" className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            03 // TARGET USERS & OPERATIONAL STAKEHOLDERS
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            Who It Is For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {(product.targetUsers || [
              { role: 'Operations & Dispatch Commander', organization: 'Municipal & Civil Emergency Services' },
              { role: 'Geospatial Systems Architect', organization: 'Regional Planning & Defense Agencies' },
              { role: 'Edge & Network Engineer', organization: 'Telecommunications & Industrial IoT' },
              { role: 'Data Science & Earth Observation Lead', organization: 'Environmental & Agricultural Ministries' }
            ]).map((user, idx) => (
              <div key={idx} className="p-4 bg-[#090909] border border-white/10 rounded-xs font-mono-tech text-xs space-y-1">
                <div className="text-[10px] text-neutral-500">OPERATOR #{idx + 1}</div>
                <div className="text-white font-semibold">{user.role}</div>
                <div className="text-neutral-400 text-[11px] pt-1 leading-normal font-sans">
                  {user.organization}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 & 05 — DATA INTERFACES (INPUTS & OUTPUTS) */}
        <section id="04-05-data-interfaces" className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12 border-b border-white/10">
          {/* 04 — WHAT DATA IT ACCEPTS */}
          <div className="p-6 bg-[#080808] border border-white/10 rounded-xs space-y-4">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              04 // DATA INGESTION MATRIX (INPUTS)
            </div>
            <h4 className="text-xl font-bold text-white font-mono-tech">
              Accepted Inputs
            </h4>
            <div className="space-y-2.5 pt-2">
              {(product.inputs || [
                'Multispectral satellite granules (Sentinel-2, Landsat-9, Commercial High-Res)',
                'Real-time streaming telemetry via MQTT / WebSockets / gRPC protocols',
                'Point cloud LiDAR data (LAS / LAZ formats, 3D Voxel grids)',
                'Municipal GIS layers (GeoJSON, GeoTIFF, Vector Tiles, Cadastre)'
              ]).map((inp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-mono-tech text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
                  <span>{inp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 05 — WHAT DATA IT PRODUCES */}
          <div className="p-6 bg-[#080808] border border-white/10 rounded-xs space-y-4">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              05 // DISPATCH & TELEMETRY ARTIFACTS (OUTPUTS)
            </div>
            <h4 className="text-xl font-bold text-white font-mono-tech">
              Generated Outputs
            </h4>
            <div className="space-y-2.5 pt-2">
              {(product.outputs || [
                'Deterministic kinetic dispatch alerts with sub-second transmission bounds',
                'Calibrated spatial index vectors across H3 hexagonal coordinates',
                'OGC 3D Tiles and raster GeoTIFF layers for client viewports',
                'Provable audit logs with cryptographic hash integrity verification'
              ]).map((out, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-mono-tech text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 — SYSTEM ARCHITECTURE */}
        <section id="06-architecture" className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            06 // DATAFLOW & COMPUTATIONAL ARCHITECTURE
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            System Architecture
          </h3>

          <div className="p-6 sm:p-8 bg-[#090909] border border-white/10 rounded-xs space-y-6">
            <p className="text-sm text-neutral-300 max-w-3xl leading-relaxed">
              {product.architectureDescription || 'Multi-tier distributed stream processing pipeline built on zero-copy shared memory queues, distributed spatial indices, and hardware-accelerated inference workers.'}
            </p>

            {/* Visual Architecture Flow Diagram */}
            <div className="overflow-x-auto pt-4 no-scrollbar">
              <div className="min-w-[720px] grid grid-cols-6 gap-2">
                {[
                  { step: '01', title: 'INGEST', desc: 'Raw Sensor Streams' },
                  { step: '02', title: 'CALIBRATE', desc: 'Noise Filtration' },
                  { step: '03', title: 'INDEX', desc: 'H3 / WGS84 Spatial' },
                  { step: '04', title: 'COMPUTE', desc: 'Physics / ML Models' },
                  { step: '05', title: 'FUSE', desc: 'Multi-Modal Graph' },
                  { step: '06', title: 'DISPATCH', desc: 'Deterministic Action' }
                ].map((s, i) => (
                  <div key={i} className="p-3 bg-black border border-white/10 rounded-xs text-center font-mono-tech">
                    <div className="text-[9px] text-neutral-500 mb-1">{s.step}</div>
                    <div className="text-xs font-bold text-white uppercase">{s.title}</div>
                    <div className="text-[9px] text-neutral-400 mt-1">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 07 — TECHNICAL SPECIFICATIONS */}
        <section id="07-specs" className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            07 // BENCHMARK SPECIFICATIONS & BOUNDS
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {product.specs.map((spec, idx) => (
              <div key={idx} className="p-4 bg-[#080808] border border-white/10 rounded-xs font-mono-tech">
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  {spec.label}
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-1">
                  {spec.value}
                </div>
                {spec.note && (
                  <div className="text-[10px] text-neutral-400 mt-1 font-sans">
                    {spec.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 08 — FIELD DEPLOYMENT / ENVIRONMENT */}
        <section id="08-deployment" className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            08 // OPERATIONAL SUBSTRATE & CONSTRAINTS
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            Field Deployment & Environments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-[#090909] border border-white/10 rounded-xs space-y-2 font-mono-tech text-xs">
              <div className="text-[10px] text-neutral-500 uppercase">SUBSTRATE CLASS:</div>
              <div className="text-white font-bold text-sm">
                {product.deployment?.environment || 'Air-Gapped Cloud / Hybrid Edge / Field Gateway'}
              </div>
            </div>

            <div className="p-5 bg-[#090909] border border-white/10 rounded-xs space-y-2 font-mono-tech text-xs">
              <div className="text-[10px] text-neutral-500 uppercase">HARDWARE / COMPUTE:</div>
              <div className="text-neutral-200">
                {product.deployment?.hardware || 'x86_64 / ARM64 with NVIDIA TensorRT & FPGA accelerators'}
              </div>
            </div>

            <div className="p-5 bg-[#090909] border border-white/10 rounded-xs space-y-2 font-mono-tech text-xs">
              <div className="text-[10px] text-neutral-500 uppercase">NETWORK TOLERANCE:</div>
              <div className="text-neutral-200">
                {product.deployment?.connectivity || 'Fiber backhaul or tactical 5G / LoRaWAN with store-and-forward'}
              </div>
            </div>
          </div>
        </section>

        {/* 09 — VISUAL / DEMONSTRATION */}
        <section id="09-visual-demonstration" className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            09 // INTERACTIVE TELEMETRY & SYSTEM CONSOLE
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            Operational Telemetry View
          </h3>
          <ProductSimulator product={product} />
        </section>

        {/* 10 — RESEARCH & PATENTS */}
        <section id="10-research-patents" className="space-y-6 pb-12 border-b border-white/10">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            10 // APPLIED RESEARCH FOUNDATIONS & DISCLOSURES
          </div>
          <h3 className="text-2xl font-bold text-white font-sans">
            Research & Patents
          </h3>
          <div className="p-6 bg-[#080808] border border-white/10 rounded-xs space-y-4">
            <div className="space-y-2">
              {(product.researchAndPatents || [
                'Spatial Partitioning & Real-Time Stream Fusion in Discontinuous Coordinate Systems',
                'Patent Pending: Deterministic Spatiotemporal Event Synchronization Architecture',
                'Published: IEEE Transactions on Geospatial Computing and Urban Digital Twins'
              ]).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs font-mono-tech text-neutral-300">
                  <FileText className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11 — REQUEST TECHNICAL BRIEF / DEMO */}
        <section id="11-request-brief" className="p-8 sm:p-12 bg-[#090909] border border-white/20 rounded-xs space-y-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              11 // ENGAGE ARKA SYSTEMS ENGINEERING
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              Evaluate {product.name} in your operational context.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl font-normal">
              Schedule a live technical evaluation with benchmark spatial geometries, real-time sensor streams, or hardware testbenches.
            </p>
          </div>

          <button
            onClick={handleRequestDemo}
            className="px-8 py-3.5 bg-white text-black text-xs font-mono-tech uppercase tracking-[0.2em] font-bold rounded-xs hover:bg-neutral-200 transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>REQUEST TECHNICAL DEMO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      </div>
    </div>
  );
};
