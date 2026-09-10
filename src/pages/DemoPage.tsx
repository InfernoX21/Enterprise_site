import React from 'react';
import { RequestDemoSection } from '../components/home/RequestDemoSection';
import { ShieldCheck, Mail, MapPin, Clock } from 'lucide-react';

export const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-neutral-300 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Top Heading */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            TECHNICAL ENGAGEMENT & EVALUATION
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            Request Technical Demonstration
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-normal">
            Evaluate ARKA platforms against your physical operational environment, live sensor telemetry, or spatial data constraints.
          </p>
        </div>

        {/* Demo Section Form */}
        <div className="-mt-8">
          <RequestDemoSection />
        </div>

        {/* Operational Contact & Offices Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10 font-mono-tech text-xs">
          <div className="p-6 bg-[#080808] border border-white/10 rounded-xs space-y-3">
            <div className="flex items-center gap-2 text-white font-bold uppercase">
              <Mail className="w-4 h-4 text-neutral-400" />
              <span>DIRECT INQUIRIES</span>
            </div>
            <div className="text-neutral-400 space-y-1">
              <div>ENGINEERING: <span className="text-white">engineering@arka-systems.io</span></div>
              <div>OPERATIONS: <span className="text-white">dispatch@arka-systems.io</span></div>
              <div>SECURITY: <span className="text-white">security@arka-systems.io</span></div>
            </div>
          </div>

          <div className="p-6 bg-[#080808] border border-white/10 rounded-xs space-y-3">
            <div className="flex items-center gap-2 text-white font-bold uppercase">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <span>FACILITIES & LABS</span>
            </div>
            <div className="text-neutral-400 space-y-1">
              <div className="text-white font-medium">AEROSPACE & SPATIAL LABS</div>
              <div>PRECISION SENSOR TESTBENCH FACILITY</div>
              <div>GLOBAL GROUND STATION TELEMETRY NODE</div>
            </div>
          </div>

          <div className="p-6 bg-[#080808] border border-white/10 rounded-xs space-y-3">
            <div className="flex items-center gap-2 text-white font-bold uppercase">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>RESPONSE SLA</span>
            </div>
            <div className="text-neutral-400 space-y-1">
              <div>CIVIL INFRASTRUCTURE: &lt; 24 HOURS</div>
              <div>CRITICAL TELEMETRY: REAL-TIME ESCALATION</div>
              <div>SECURE CLEARANCE BRIEFINGS: AVAILABLE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
