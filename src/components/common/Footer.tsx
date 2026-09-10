import React, { useEffect, useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArkaLogo } from './ArkaLogo';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();
  const [utcTime, setUtcTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-white/10 bg-[#050505] text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => navigate('/')}
              className="text-left focus:outline-hidden cursor-pointer"
            >
              <ArkaLogo variant="compact" />
            </button>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              ARKA builds computational systems for understanding, modelling and operating complex physical environments — from Earth observation and geospatial intelligence to digital infrastructure and autonomous systems.
            </p>
            <div className="pt-2 text-[10px] font-mono-tech text-neutral-500 uppercase tracking-wider space-y-1">
              <div>SPACE → EARTH → DATA → COMPUTATION → ACTION</div>
              <div className="text-neutral-400">PRECISION AEROSPACE & GEOSPATIAL COMPUTATION</div>
            </div>
          </div>

          {/* Links Column 1: Products */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-white">
              PRODUCTS & PLATFORMS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/products/arka')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>ARKA (City Operations)</span>
                  <span className="text-[10px] font-mono-tech opacity-0 group-hover:opacity-100 transition-opacity">01</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products/ira')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>IRA (Remote Sensing & GIS)</span>
                  <span className="text-[10px] font-mono-tech opacity-0 group-hover:opacity-100 transition-opacity">02</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products/vyom')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>VYOM (Space Platform)</span>
                  <span className="text-[10px] font-mono-tech opacity-0 group-hover:opacity-100 transition-opacity">03</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products/asimov')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center justify-between w-full group"
                >
                  <span>ASIMOV (Quantum-Resilient Mesh)</span>
                  <span className="text-[10px] font-mono-tech opacity-0 group-hover:opacity-100 transition-opacity">04</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Architecture & Research */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-white">
              SYSTEMS & ARCHITECTURE
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/platform')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Platform Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/technology')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Technology Pipeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/applications')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Application Domains
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/research')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Research Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/company')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Engineering Philosophy
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Contact & Engagement */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-white">
              ENGAGEMENT
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/demo')}
                  className="hover:text-white text-white font-medium transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Request Demo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Telemetry Bar & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono-tech text-neutral-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>ARKA TECHNOLOGIES</span>
            <span>•</span>
            <span>SYSTEM STATE: <span className="text-neutral-300">NOMINAL</span></span>
            <span>•</span>
            <span>TIME: <span className="text-neutral-300">{utcTime || '12:00:00 UTC'}</span></span>
            <span>•</span>
            <span>COORD REF: <span className="text-neutral-400">WGS84 EPSG:4326</span></span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 cursor-pointer">PRIVACY</span>
            <span className="hover:text-neutral-300 cursor-pointer">TERMS OF OPERATION</span>
            <span className="hover:text-neutral-300 cursor-pointer">SECURITY DISCLOSURE</span>
            <span>© {new Date().getFullYear()} ARKA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
