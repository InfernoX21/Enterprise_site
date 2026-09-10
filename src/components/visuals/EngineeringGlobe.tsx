import React, { useEffect, useRef, useState } from 'react';

interface SatelliteNode {
  id: string;
  name: string;
  altitudeKm: number;
  inclinationDeg: number;
  velocityKmS: number;
  angle: number;
  speed: number;
  type: 'OPTICAL' | 'SAR' | 'RELAY' | 'EDGE';
}

interface GroundPoint {
  name: string;
  lat: number;
  lng: number;
  category: string;
}

export const EngineeringGlobe: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeTelemetry, setActiveTelemetry] = useState<string>('SAT-01 [VYOM-LEO] 524km 7.61km/s');
  const [mouseCoord, setMouseCoord] = useState<{ lat: number; lng: number } | null>(null);
  const [subSatCoord, setSubSatCoord] = useState<{ lat: string; lng: string }>({ lat: '34.0522° N', lng: '118.2437° W' });
  const [isHovered, setIsHovered] = useState(false);

  // Ground telemetry reference nodes
  const groundNodes: GroundPoint[] = [
    { name: 'SVALBARD GS', lat: 78.22, lng: 15.65, category: 'POLAR GROUND' },
    { name: 'SINGAPORE HUB', lat: 1.35, lng: 103.82, category: 'EQUATORIAL EDGE' },
    { name: 'BERLIN CORE', lat: 52.52, lng: 13.40, category: 'SPATIAL COMPUTE' },
    { name: 'COLORADO STN', lat: 39.73, lng: -104.99, category: 'EPHEMERIS UPLINK' },
    { name: 'TOKYO GATEWAY', lat: 35.67, lng: 139.65, category: 'EDGE ROUTING' }
  ];

  // Satellites with orbital characteristics
  const satellitesRef = useRef<SatelliteNode[]>([
    { id: 'SAT-01', name: 'VYOM-LEO-1', altitudeKm: 524, inclinationDeg: 51.6, velocityKmS: 7.61, angle: 0.2, speed: 0.0035, type: 'OPTICAL' },
    { id: 'SAT-02', name: 'ARKA-SAR-4', altitudeKm: 610, inclinationDeg: 97.4, velocityKmS: 7.54, angle: 1.8, speed: 0.0028, type: 'SAR' },
    { id: 'SAT-03', name: 'EDGE-RELAY-9', altitudeKm: 780, inclinationDeg: 35.0, velocityKmS: 7.42, angle: 3.5, speed: 0.0022, type: 'RELAY' }
  ]);

  const rotationRef = useRef<{ rotX: number; rotY: number; isDragging: boolean; lastX: number; lastY: number }>({
    rotX: 0.2,
    rotY: 0.4,
    isDragging: false,
    lastX: 0,
    lastY: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Simplified coastlines representation as discrete latitude/longitude arcs
    const continentArcs: { lat: number; lng: number }[][] = [
      // North America Outline
      [
        { lat: 60, lng: -140 }, { lat: 55, lng: -130 }, { lat: 48, lng: -124 }, { lat: 34, lng: -120 },
        { lat: 23, lng: -110 }, { lat: 18, lng: -96 }, { lat: 26, lng: -81 }, { lat: 35, lng: -75 },
        { lat: 44, lng: -65 }, { lat: 52, lng: -55 }, { lat: 68, lng: -85 }, { lat: 70, lng: -120 }
      ],
      // South America
      [
        { lat: 10, lng: -75 }, { lat: 2, lng: -50 }, { lat: -10, lng: -35 }, { lat: -25, lng: -45 },
        { lat: -45, lng: -65 }, { lat: -55, lng: -70 }, { lat: -35, lng: -72 }, { lat: -5, lng: -80 }, { lat: 10, lng: -75 }
      ],
      // Eurasia
      [
        { lat: 70, lng: 25 }, { lat: 60, lng: 5 }, { lat: 45, lng: -5 }, { lat: 36, lng: -6 },
        { lat: 37, lng: 15 }, { lat: 31, lng: 32 }, { lat: 25, lng: 60 }, { lat: 15, lng: 75 },
        { lat: 8, lng: 77 }, { lat: 22, lng: 90 }, { lat: 10, lng: 105 }, { lat: 22, lng: 120 },
        { lat: 38, lng: 122 }, { lat: 60, lng: 140 }, { lat: 72, lng: 130 }, { lat: 74, lng: 60 }
      ],
      // Africa
      [
        { lat: 36, lng: -5 }, { lat: 37, lng: 10 }, { lat: 31, lng: 32 }, { lat: 12, lng: 43 },
        { lat: -5, lng: 40 }, { lat: -34, lng: 20 }, { lat: -20, lng: 12 }, { lat: 5, lng: 2 },
        { lat: 15, lng: -17 }, { lat: 28, lng: -13 }, { lat: 36, lng: -5 }
      ],
      // Australia
      [
        { lat: -12, lng: 130 }, { lat: -15, lng: 145 }, { lat: -28, lng: 153 }, { lat: -38, lng: 145 },
        { lat: -35, lng: 116 }, { lat: -22, lng: 114 }, { lat: -12, lng: 130 }
      ]
    ];

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.36;

      ctx.clearRect(0, 0, width, height);

      // Slow autonomous rotation if not dragging
      if (!rotationRef.current.isDragging) {
        rotationRef.current.rotY += 0.0018;
      }

      const { rotX, rotY } = rotationRef.current;

      // Project spherical (lat, lng) in radians to 3D Cartesian, then rotate, then orthographic project
      const project = (latDeg: number, lngDeg: number, altFactor = 1.0) => {
        const phi = (latDeg * Math.PI) / 180;
        const theta = (lngDeg * Math.PI) / 180 + rotY;

        // Spherical to 3D Cartesian
        let x = Math.cos(phi) * Math.sin(theta);
        let y = -Math.sin(phi);
        let z = Math.cos(phi) * Math.cos(theta);

        // Pitch tilt by rotX
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const yNew = y * cosX - z * sinX;
        const zNew = y * sinX + z * cosX;
        y = yNew;
        z = zNew;

        const r = radius * altFactor;
        const screenX = centerX + x * r;
        const screenY = centerY + y * r;

        return { x: screenX, y: screenY, z, visible: z > -0.05 };
      };

      // 1. Draw outer atmospheric glow / boundary ring
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Atmospheric limb ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 12, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 2. Latitudinal Graticule Parallels (-60 to +60 in steps of 30)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.lineWidth = 0.8;
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let first = true;
        for (let lng = -180; lng <= 180; lng += 6) {
          const pt = project(lat, lng);
          if (pt.visible) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 3. Longitudinal Graticule Meridians (steps of 30 deg)
      for (let lng = -180; lng < 180; lng += 30) {
        ctx.beginPath();
        let first = true;
        for (let lat = -85; lat <= 85; lat += 5) {
          const pt = project(lat, lng);
          if (pt.visible) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 4. Draw Coastline Vectors (Monochrome white/gray)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1.1;
      continentArcs.forEach((arc) => {
        ctx.beginPath();
        let first = true;
        for (let i = 0; i < arc.length; i++) {
          const pt = project(arc[i].lat, arc[i].lng);
          if (pt.visible) {
            if (first) {
              ctx.moveTo(pt.x, pt.y);
              first = false;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      });

      // 5. Draw Ground Stations & Geospatial Hubs
      groundNodes.forEach((node) => {
        const pt = project(node.lat, node.lng);
        if (pt.visible) {
          // Crosshair point
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1;
          const size = 3;
          ctx.beginPath();
          ctx.moveTo(pt.x - size, pt.y);
          ctx.lineTo(pt.x + size, pt.y);
          ctx.moveTo(pt.x, pt.y - size);
          ctx.lineTo(pt.x, pt.y + size);
          ctx.stroke();

          // Node center dot
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(pt.x - 1, pt.y - 1, 2, 2);

          // Subtle label
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.fillText(node.name, pt.x + 6, pt.y + 3);
        }
      });

      // 6. Draw Orbital Paths and Satellites
      satellitesRef.current.forEach((sat, index) => {
        sat.angle += sat.speed;
        const orbitRadiusFactor = 1.0 + (sat.altitudeKm / 6371) * 1.6;

        // Draw orbital ellipse track
        ctx.strokeStyle = index === 0 ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 0.9;
        ctx.setLineDash(index === 0 ? [] : [2, 4]);
        ctx.beginPath();

        let trackFirst = true;
        for (let a = 0; a <= Math.PI * 2; a += 0.08) {
          const latOrbit = Math.sin(a) * sat.inclinationDeg;
          const lngOrbit = (a * 180) / Math.PI;
          const orbitPt = project(latOrbit, lngOrbit, orbitRadiusFactor);
          if (orbitPt.visible) {
            if (trackFirst) {
              ctx.moveTo(orbitPt.x, orbitPt.y);
              trackFirst = false;
            } else {
              ctx.lineTo(orbitPt.x, orbitPt.y);
            }
          } else {
            trackFirst = true;
          }
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // Satellite current position
        const currentLat = Math.sin(sat.angle) * sat.inclinationDeg;
        const currentLng = (sat.angle * 180) / Math.PI;
        const satPt = project(currentLat, currentLng, orbitRadiusFactor);
        const subSatPt = project(currentLat, currentLng, 1.0); // Sub-satellite nadir ground projection

        if (satPt.visible) {
          // Sensor nadir beam to Earth surface
          if (subSatPt.visible) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = 0.8;
            ctx.setLineDash([2, 3]);
            ctx.beginPath();
            ctx.moveTo(satPt.x, satPt.y);
            ctx.lineTo(subSatPt.x, subSatPt.y);
            ctx.stroke();
            ctx.setLineDash([]);

            // Ground footprint polygon / circle
            ctx.beginPath();
            ctx.arc(subSatPt.x, subSatPt.y, 8, 0, Math.PI * 2);
            ctx.strokeStyle = index === 0 ? 'rgba(217, 107, 43, 0.45)' : 'rgba(255, 255, 255, 0.2)';
            ctx.stroke();
          }

          // Satellite beacon body
          ctx.fillStyle = index === 0 ? '#D96B2B' : '#FFFFFF'; // subtle orange accent on flagship VYOM satellite
          ctx.beginPath();
          ctx.arc(satPt.x, satPt.y, 3, 0, Math.PI * 2);
          ctx.fill();

          // Telemetry box on primary satellite
          if (index === 0) {
            ctx.font = '9px "JetBrains Mono", monospace';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(`${sat.name}`, satPt.x + 8, satPt.y - 4);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fillText(`ALT: ${sat.altitudeKm}KM | VEL: ${sat.velocityKmS}KM/S`, satPt.x + 8, satPt.y + 7);

            // Update state telemetry periodically
            if (Math.random() < 0.03) {
              const latStr = `${Math.abs(currentLat).toFixed(2)}° ${currentLat >= 0 ? 'N' : 'S'}`;
              const lngNorm = ((currentLng % 360) + 360) % 360 - 180;
              const lngStr = `${Math.abs(lngNorm).toFixed(2)}° ${lngNorm >= 0 ? 'E' : 'W'}`;
              setSubSatCoord({ lat: latStr, lng: lngStr });
              setActiveTelemetry(`${sat.name} | ALT ${sat.altitudeKm}km | INC ${sat.inclinationDeg}° | ${latStr} ${lngStr}`);
            }
          }
        }
      });

      // 7. Reticle Crosshair at Center
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 0.8;
      const ch = 12;
      ctx.beginPath();
      // Top left corner marks
      ctx.moveTo(centerX - radius - 20, centerY - radius - 20);
      ctx.lineTo(centerX - radius - 20 + ch, centerY - radius - 20);
      ctx.moveTo(centerX - radius - 20, centerY - radius - 20);
      ctx.lineTo(centerX - radius - 20, centerY - radius - 20 + ch);

      // Bottom right corner marks
      ctx.moveTo(centerX + radius + 20, centerY + radius + 20);
      ctx.lineTo(centerX + radius + 20 - ch, centerY + radius + 20);
      ctx.moveTo(centerX + radius + 20, centerY + radius + 20);
      ctx.lineTo(centerX + radius + 20, centerY + radius + 20 - ch);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Mouse drag handlers
    const handleMouseDown = (e: MouseEvent) => {
      rotationRef.current.isDragging = true;
      rotationRef.current.lastX = e.clientX;
      rotationRef.current.lastY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;

      // Coordinate telemetry under cursor
      const normX = (x / width) * 360 - 180;
      const normY = ((height - y) / height) * 180 - 90;
      setMouseCoord({ lat: normY, lng: normX });

      if (rotationRef.current.isDragging) {
        const dx = e.clientX - rotationRef.current.lastX;
        const dy = e.clientY - rotationRef.current.lastY;
        rotationRef.current.rotY += dx * 0.005;
        rotationRef.current.rotX = Math.max(-1.2, Math.min(1.2, rotationRef.current.rotX + dy * 0.005));
        rotationRef.current.lastX = e.clientX;
        rotationRef.current.lastY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      rotationRef.current.isDragging = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[480px] lg:h-[580px] flex items-center justify-center select-none overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Top Left Engineering Readout */}
      <div className="absolute top-3 left-4 sm:top-6 sm:left-6 flex flex-col gap-1 text-[10px] sm:text-xs font-mono-tech text-neutral-400 pointer-events-none bg-black/40 backdrop-blur-xs p-2 border border-white/10 rounded-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D96B2B] animate-pulse" />
          <span className="text-white uppercase font-semibold tracking-widest">ORBITAL EPHEMERIS</span>
          <span className="text-[9px] px-1 py-0.5 bg-white/10 rounded-xs text-neutral-300">WGS84 / SGP4</span>
        </div>
        <div className="text-neutral-500 text-[10px]">
          TRACK: <span className="text-neutral-300 font-mono">{activeTelemetry}</span>
        </div>
        <div className="text-neutral-500 text-[10px]">
          SUBSATELLITE POINT: <span className="text-neutral-200">{subSatCoord.lat}, {subSatCoord.lng}</span>
        </div>
      </div>

      {/* Top Right Operational Telemetry */}
      <div className="absolute top-3 right-4 sm:top-6 sm:right-6 hidden sm:flex flex-col items-end gap-1 text-[10px] font-mono-tech text-neutral-400 pointer-events-none bg-black/40 backdrop-blur-xs p-2 border border-white/10 rounded-xs">
        <div className="text-neutral-400">FRAME: <span className="text-white">ECEF ORTHO-2.5D</span></div>
        <div className="text-neutral-400">STATION LOCKS: <span className="text-[#E5E5E5]">5 / 5 ACTIVE</span></div>
        <div className="text-neutral-500 text-[9px]">DRAG TO ROTATE VECTOR SPHERE</div>
      </div>

      {/* Bottom Status Bar */}
      <div className="absolute bottom-3 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-[9px] sm:text-[10px] font-mono-tech text-neutral-500 border-t border-white/10 pt-2 pointer-events-none">
        <div className="flex items-center gap-3">
          <span>LAT/LNG CURSOR: <span className="text-neutral-300">{mouseCoord ? `${mouseCoord.lat.toFixed(2)}°, ${mouseCoord.lng.toFixed(2)}°` : 'INACTIVE'}</span></span>
          <span className="hidden md:inline">SOLAR ILLUMINATION: 88.4%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-white/60 rounded-full" />
          <span>GEODESIC ENGINE: NOMINAL</span>
        </div>
      </div>
    </div>
  );
};
