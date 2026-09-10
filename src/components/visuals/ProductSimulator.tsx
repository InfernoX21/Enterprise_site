import React, { useState, useEffect } from 'react';
import { Product } from '../../types';
import { 
  Activity, 
  Layers, 
  Eye, 
  Sliders, 
  Maximize2, 
  Radio, 
  RefreshCw, 
  Check, 
  Terminal, 
  AlertTriangle,
  Cpu,
  Shield,
  Compass,
  Zap
} from 'lucide-react';

export const ProductSimulator: React.FC<{ product: Product }> = ({ product }) => {
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [activeScenario, setActiveScenario] = useState<string>('default');

  // Periodic simulated telemetry log entries
  useEffect(() => {
    let timer: any;
    const initialLogs: Record<string, string[]> = {
      arka: [
        '[ARKA-DATA] CCTV, IoT, weather, and utility GIS normalized into single pipeline',
        '[KINETIC-ENGINE] 14,280 vehicular and pedestrian movement vectors tracked citywide',
        '[DIGITAL-TWIN] 3D city cadastre synchronized with sub-second sensory streams',
        '[DISPATCH] Incident #491 flagged: corridor clearance dispatched to emergency units'
      ],
      ira: [
        '[IRA-GRID] 50m × 50m spatial grid feature vectors generated (NDVI, Slope, DEM, Solar)',
        '[ENSEMBLE-ML] XGBoost, Random Forest & Gradient Boosting suitability inference complete',
        '[SCENARIO-REC] Climate Resilience objective-weight layer applied across cadastral parcels',
        '[3D-CESIUM] CesiumJS terrain extrusion rendered: flood risk & tree canopy corridors mapped'
      ],
      vyom: [
        '[6-DOF-DYNAMICS] 2.5 kg quadrotor model: hover thrust 24.525 N (6.13 N/motor @ 3,712 RPM)',
        '[LOCAL-SLAM] AAV-01, AAV-02, AAV-03 streaming keyframe-landmark tuples (720p @ 30 FPS)',
        '[5G-MEC] Compact metadata uplink: 6.6 Mbps/AAV -> gNB -> UPF -> MEC (Latency: 18.2 ms)',
        '[POSE-GRAPH] Relative SE(3) pose graph optimization converged: min Σ ρ(||e_ij||²)'
      ],
      asimov: [
        '[SENTINEL-NODE] Neuromorphic edge classifier active | On-device response: 41.2 ms',
        '[GAN-ENGINE] Adversarial loop generating novel attack signatures vs real-world APT data',
        '[BB84-QKD] Quantum key distribution established | No-cloning eavesdropping test: ZERO STATE COLLAPSE',
        '[NIST-PQC] CRYSTALS-Kyber (ML-KEM) & CRYSTALS-Dilithium (ML-DSA) frames locked'
      ]
    };

    const currentLogs = initialLogs[product.id] || [
      `[${product.name}] System engine initialized in operational mode`,
      `[TELEMETRY] Sensor array calibrated and streaming WGS84 coordinates`,
      `[COMPUTE] Real-time inference running with zero packet loss`
    ];

    setLogMessages(currentLogs);

    if (isSimulating) {
      timer = setInterval(() => {
        const timeStr = new Date().toISOString().slice(11, 19);
        const randomNum = Math.floor(Math.random() * 900 + 100);
        let dynamicEntry = '';

        if (product.id === 'arka') {
          const events = [
            `[${timeStr}] KINETIC_ANALYTICS_STREAM: ${randomNum} entities processed in 4.2 ms`,
            `[${timeStr}] SCADA_TELEMETRY: Substation grid bus voltage nominal (33 kV)`,
            `[${timeStr}] TRAFFIC_SIGNAL_ADAPT: Green-wave clearance corridor extended +15s`,
            `[${timeStr}] 3D_VOXEL_SYNC: Metropolitan digital twin mesh updated (0 packet drop)`
          ];
          dynamicEntry = events[Math.floor(Math.random() * events.length)];
        } else if (product.id === 'ira') {
          const events = [
            `[${timeStr}] SENTINEL2_TILE: Band 4/8 reflectance evaluated (NDVI: +0.64)`,
            `[${timeStr}] XGBOOST_INFERENCE: 50m cell #8491 solar deployment feasibility score: 0.89`,
            `[${timeStr}] FLOOD_SIM: Hydrological flow accumulation buffer recalculation OK`,
            `[${timeStr}] CANOPY_CORRIDOR: High-potential tree plantation parcel indexed (SDG 11/13)`
          ];
          dynamicEntry = events[Math.floor(Math.random() * events.length)];
        } else if (product.id === 'vyom') {
          const events = [
            `[${timeStr}] AAV_PHYSICS: State X=[x,y,z,vx,vy,vz,φ,θ,ψ,p,q,r] integrated @ 100 Hz`,
            `[${timeStr}] 5G_URLLC: Radio access 5.1 ms | MEC transport 2.8 ms (Total: 18.6 ms <= 20ms)`,
            `[${timeStr}] LANDMARK_MATCH: Shared landmark L_AAV1 ↔ L_AAV2 confirmed (T12 ∈ SE(3))`,
            `[${timeStr}] MAP_FUSION: Global 3D point cloud reconstructed across 3 AAV sorties`
          ];
          dynamicEntry = events[Math.floor(Math.random() * events.length)];
        } else if (product.id === 'asimov') {
          const events = [
            `[${timeStr}] SENTINEL_MESH: Ephemeral identity rotated across 1,240 nodes`,
            `[${timeStr}] GAN_ADAPT: Novel zero-day signature evaluated by discriminator (Risk: NEUTRALIZED)`,
            `[${timeStr}] BB84_QKD: Quantum channel polarization fidelity: 99.84%`,
            `[${timeStr}] CRYSTALS_KYBER: ML-KEM-768 ciphertext verified in 24.3 ms`
          ];
          dynamicEntry = events[Math.floor(Math.random() * events.length)];
        } else {
          dynamicEntry = `[${timeStr}] TELEM_${product.name}_CH${randomNum % 4}: OK (${(Math.random() * 10 + 2).toFixed(1)} ms)`;
        }

        setLogMessages(prev => [dynamicEntry, ...prev.slice(0, 3)]);
      }, 3200);
    }

    return () => clearInterval(timer);
  }, [product.id, isSimulating, product.name]);

  return (
    <div className="w-full bg-[#080808] border border-white/10 rounded-xs overflow-hidden font-sans">
      {/* Simulator HUD Header */}
      <div className="px-5 py-3 border-b border-white/10 bg-black/70 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-xs font-mono-tech">
          <span className="w-2 h-2 rounded-full bg-[#D96B2B] animate-pulse" />
          <span className="text-white font-semibold uppercase tracking-wider">
            {product.name} // TECHNICAL BENCHMARK & SIMULATION
          </span>
          <span className="text-[10px] px-1.5 py-0.5 bg-white/10 text-neutral-300 rounded-xs">
            LIVE SYSTEM TESTBED
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono-tech">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white cursor-pointer px-2 py-1 bg-white/5 rounded-xs"
          >
            <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'SIMULATION ACTIVE' : 'PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Main Console Viewport */}
      <div className="relative min-h-[340px] sm:min-h-[380px] w-full bg-[#050505] flex items-center justify-center p-4 overflow-hidden tech-grid-subtle">
        {/* ARKA Interactive Console */}
        {product.id === 'arka' && (
          <div className="w-full h-full relative flex flex-col justify-between p-4 border border-white/10 bg-black/50 font-mono-tech">
            {/* Coordinate grid and kinetic streams */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <svg className="w-full h-full">
                <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                <line x1="0" y1="35%" x2="100%" y2="35%" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                <line x1="0" y1="65%" x2="100%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />

                {/* Animated kinetic tracking vectors */}
                <circle cx="50%" cy="35%" r="6" fill="none" stroke="#D96B2B" strokeWidth="2" />
                <circle cx="50%" cy="35%" r="16" fill="none" stroke="#D96B2B" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="50%" y1="35%" x2="75%" y2="65%" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="4 2" />
                <circle cx="75%" cy="65%" r="4" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Top Stats */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs">
              <div className="p-3 bg-black/80 border border-white/10 rounded-xs space-y-1">
                <div className="text-white font-bold tracking-wide">ARKA // 'GROUND SATELLITE' CITY ENGINE</div>
                <div className="text-neutral-400 text-[11px]">DATA LAYER: CCTV / SENSORS / TELECOM / PUBLIC GIS</div>
                <div className="text-[#D96B2B] text-[11px]">KINETIC TRACKING: 14,280 ACTIVE AGENTS</div>
              </div>
              <div className="p-3 bg-black/80 border border-white/10 rounded-xs text-left sm:text-right space-y-1">
                <div className="text-white font-semibold">CROSS-AGENCY INCIDENT DISPATCH</div>
                <div className="text-neutral-400 text-[11px]">WORKFLOW: POLICE / FIRE / AMBULANCE / TRANSIT</div>
                <div className="text-green-400 text-[11px]">LATENCY: &lt; 250 MS STREAM NORMALIZATION</div>
              </div>
            </div>

            {/* Middle Grid telemetry */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
              <div className="p-2.5 bg-white/3 border border-white/10 rounded-xs">
                <div className="text-[10px] text-neutral-500 uppercase">3D DIGITAL TWIN</div>
                <div className="text-sm font-bold text-white mt-0.5">SYNCHRONIZED</div>
                <div className="text-[9px] text-neutral-400">Live queryable model</div>
              </div>
              <div className="p-2.5 bg-white/3 border border-white/10 rounded-xs">
                <div className="text-[10px] text-neutral-500 uppercase">KINETIC VELOCITY</div>
                <div className="text-sm font-bold text-white mt-0.5">38.4 KM/H AVG</div>
                <div className="text-[9px] text-neutral-400">Arterial flow corridor</div>
              </div>
              <div className="p-2.5 bg-white/3 border border-white/10 rounded-xs">
                <div className="text-[10px] text-neutral-500 uppercase">INFRASTRUCTURE HEALTH</div>
                <div className="text-sm font-bold text-green-400 mt-0.5">99.98% GRID NOMINAL</div>
                <div className="text-[9px] text-neutral-400">Power, water & telecom</div>
              </div>
              <div className="p-2.5 bg-white/3 border border-white/10 rounded-xs">
                <div className="text-[10px] text-neutral-500 uppercase">HISTORICAL REPLAY</div>
                <div className="text-sm font-bold text-[#D96B2B] mt-0.5">RECORDING T-30D</div>
                <div className="text-[9px] text-neutral-400">Forensic incident review</div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 flex flex-wrap justify-between items-center text-[10px] text-neutral-400 pt-2 border-t border-white/10">
              <span className="text-neutral-300">ARCHITECTURE: DATA LAYER → INTEGRATION → AI LAYER → 3D VISUALIZATION → RBAC</span>
              <span className="text-neutral-400">INGESTION: KAFKA / POSTGIS / TENSORRT / CESIUMJS</span>
            </div>
          </div>
        )}

        {/* IRA Interactive Console */}
        {product.id === 'ira' && (
          <div className="w-full h-full relative flex flex-col justify-between p-4 border border-white/10 bg-black/50 font-mono-tech">
            {/* Top Information */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs">
              <div className="p-3 bg-black/80 border border-white/10 rounded-xs space-y-1">
                <div className="text-white font-bold tracking-wide">IRA // PREDICTIVE LAND INTELLIGENCE</div>
                <div className="text-neutral-400 text-[11px]">FEATURE SPACE: 50M × 50M CONFIGURABLE GRID CELLS</div>
                <div className="text-[#D96B2B] text-[11px]">HARDWARE REQUIREMENT: ZERO GROUND IOT (SaaS READY)</div>
              </div>
              <div className="p-3 bg-black/80 border border-white/10 rounded-xs text-left sm:text-right space-y-1">
                <div className="text-white font-semibold">MULTI-MODEL ML ENSEMBLE</div>
                <div className="text-neutral-400 text-[11px]">XGBOOST + RANDOM FOREST + GRADIENT BOOSTING</div>
                <div className="text-green-400 text-[11px]">UN SDGs ALIGNMENT: 9, 11, 13, 15</div>
              </div>
            </div>

            {/* Middle Suitability Matrix Simulation */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
              <div className="p-2.5 bg-white/3 border border-white/10 rounded-xs">
                <div className="text-[10px] text-neutral-500 uppercase">TREE PLANTATION</div>
                <div className="text-base font-bold text-green-400 mt-0.5">INDEX 0.88</div>
                <div className="text-[9px] text-neutral-400">Canopy corridor optimization</div>
              </div>
              <div className="p-2.5 bg-white/3 border border-white/10 rounded-xs">
                <div className="text-[10px] text-neutral-500 uppercase">CONSTRUCTION FEASIBILITY</div>
                <div className="text-base font-bold text-white mt-0.5">INDEX 0.74</div>
                <div className="text-[9px] text-neutral-400">Slope & zoning compliance</div>
              </div>
              <div className="p-2.5 bg-white/3 border border-white/10 rounded-xs">
                <div className="text-[10px] text-neutral-500 uppercase">SOLAR POTENTIAL</div>
                <div className="text-base font-bold text-yellow-400 mt-0.5">5.4 kWh/m²/day</div>
                <div className="text-[9px] text-neutral-400">NASA POWER irradiance model</div>
              </div>
              <div className="p-2.5 bg-white/3 border border-white/10 rounded-xs">
                <div className="text-[10px] text-neutral-500 uppercase">FLOOD INUNDATION RISK</div>
                <div className="text-base font-bold text-[#D96B2B] mt-0.5">CLASS 2 (MODERATE)</div>
                <div className="text-[9px] text-neutral-400">Hydrological buffer & DEM</div>
              </div>
            </div>

            {/* Objective-Weight Scenario Recalibration HUD */}
            <div className="relative z-10 p-3 bg-white/3 border border-white/10 rounded-xs flex flex-wrap items-center justify-between gap-2 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="text-neutral-400">ACTIVE SCENARIO:</span>
                <span className="text-white font-semibold bg-white/10 px-2 py-0.5 rounded-xs">CLIMATE RESILIENCE</span>
              </div>
              <div className="text-neutral-400 flex gap-3 text-[10px]">
                <span>DATA: SENTINEL-2 / SRTM DEM / NASA POWER / FAO SOILGRIDS</span>
                <span>RENDER: CESIUMJS + WEBGL</span>
              </div>
            </div>
          </div>
        )}

        {/* VYOM Interactive Console */}
        {product.id === 'vyom' && (
          <div className="w-full h-full relative flex flex-col justify-between p-4 border border-white/10 bg-black/50 font-mono-tech">
            {/* Top Information */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="text-white font-bold tracking-wide">VYOM // 5G COLLABORATIVE VISUAL-SLAM (MULTI-AAV)</div>
                <div className="text-neutral-400 text-[11px]">
                  NEWTON-EULER 6-DOF RIGID BODY: m = 2.5 kg | Arm: 0.23m | Props: 13-inch
                </div>
                <div className="text-[#D96B2B] text-[11px]">
                  HOVER WEIGHT W = mg = 24.525 N | T_motor = 6.13 N @ 3,712 HOVER RPM
                </div>
              </div>
              <div className="text-left sm:text-right space-y-1 text-[11px]">
                <div className="text-white font-semibold">5G MEC LATENCY BUDGET</div>
                <div className="text-neutral-400">L_total &le; 20 ms (Radio 5ms, MEC 2ms, SLAM 6ms)</div>
                <div className="text-green-400">ACTIVE LATENCY: 18.2 ms [NORMAL 5G]</div>
              </div>
            </div>

            {/* Multi-AAV Flight & SLAM State */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
              <div className="p-3 bg-white/3 border border-white/10 rounded-xs">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-white font-bold">AAV-01 (LEAD)</span>
                  <span className="text-green-400">BATTERY: 82%</span>
                </div>
                <div className="text-[11px] text-neutral-300 mt-1 font-mono">POSE: [14.2, 8.6, 25.0] m</div>
                <div className="text-[10px] text-neutral-500">Local SLAM: 48 Keyframes / 340 Landmarks</div>
              </div>
              <div className="p-3 bg-white/3 border border-white/10 rounded-xs">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-white font-bold">AAV-02 (WING)</span>
                  <span className="text-green-400">BATTERY: 79%</span>
                </div>
                <div className="text-[11px] text-neutral-300 mt-1 font-mono">POSE: [-6.8, 22.4, 28.5] m</div>
                <div className="text-[10px] text-neutral-500">Local SLAM: 52 Keyframes / 390 Landmarks</div>
              </div>
              <div className="p-3 bg-white/3 border border-white/10 rounded-xs">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-white font-bold">AAV-03 (SWEEP)</span>
                  <span className="text-green-400">BATTERY: 84%</span>
                </div>
                <div className="text-[11px] text-neutral-300 mt-1 font-mono">POSE: [3.1, -18.2, 22.0] m</div>
                <div className="text-[10px] text-neutral-500">Local SLAM: 45 Keyframes / 315 Landmarks</div>
              </div>
            </div>

            {/* MEC Optimization Metrics */}
            <div className="relative z-10 p-2.5 bg-black/80 border border-white/10 rounded-xs flex flex-wrap items-center justify-between text-[10px] text-neutral-400 gap-2">
              <div className="text-neutral-300">
                MEC POSE GRAPH: <span className="text-white font-bold">min Σ ρ(||e_ij||²_Σ⁻¹)</span> | SHARED LANDMARKS: <span className="text-[#D96B2B] font-bold">L1 ↔ L2 MATCHED</span>
              </div>
              <div>BANDWIDTH: 6.6 Mbps / AAV (19.8 Mbps Swarm Total)</div>
              <div>SIMULATOR INTERFACES: KEYBOARD / GAMEPAD API / WEBXR VR</div>
            </div>
          </div>
        )}

        {/* ASIMOV Interactive Console */}
        {product.id === 'asimov' && (
          <div className="w-full h-full relative flex flex-col justify-between p-4 border border-white/10 bg-black/50 font-mono-tech">
            {/* Top Information */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="text-white font-bold tracking-wide">PROJECT ASIMOV // POST-QUANTUM CYBER-DEFENCE</div>
                <div className="text-neutral-400 text-[11px]">
                  TOPOLOGY: DECENTRALIZED MESH OF NEUROMORPHIC SENTINEL NODES
                </div>
                <div className="text-[#D96B2B] text-[11px]">
                  NIST FIPS 203 (CRYSTALS-KYBER / ML-KEM) & FIPS 204 (CRYSTALS-DILITHIUM / ML-DSA)
                </div>
              </div>
              <div className="text-left sm:text-right space-y-1 text-[11px]">
                <div className="text-white font-semibold">QUANTUM SECURITY LEVEL</div>
                <div className="text-[#D96B2B] font-bold">PHYSICAL STATE COLLAPSE DETECTION</div>
                <div className="text-green-400">ON-DEVICE AI RESPONSE: &lt; 50 MS</div>
              </div>
            </div>

            {/* Three Quantum-Native Pillars */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
              <div className="p-3 bg-white/3 border border-white/10 rounded-xs space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
                  <Cpu className="w-3.5 h-3.5 text-[#D96B2B]" />
                  <span>SENTINEL NODES</span>
                </div>
                <div className="text-[10px] text-neutral-400">
                  Neuromorphic edge units running lightweight quantum-resistant OS with ephemeral identity rotation.
                </div>
                <div className="text-[9px] text-green-400 pt-1 font-semibold">41.2 MS MACHINE-SPEED REACTION</div>
              </div>

              <div className="p-3 bg-white/3 border border-white/10 rounded-xs space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
                  <Shield className="w-3.5 h-3.5 text-[#D96B2B]" />
                  <span>AI THREAT ENGINE</span>
                </div>
                <div className="text-[10px] text-neutral-400">
                  GAN loop generating novel attack vectors vs discriminator trained on real-world APT datasets.
                </div>
                <div className="text-[9px] text-[#D96B2B] pt-1 font-semibold">ANTIBODY SYNTHESIS ACTIVE</div>
              </div>

              <div className="p-3 bg-white/3 border border-white/10 rounded-xs space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
                  <Zap className="w-3.5 h-3.5 text-[#D96B2B]" />
                  <span>POST-QUANTUM QKD</span>
                </div>
                <div className="text-[10px] text-neutral-400">
                  BB84 photonic protocol exploiting no-cloning theorem. Eavesdropping collapses quantum state.
                </div>
                <div className="text-[9px] text-white pt-1 font-semibold">EAVESDROPPING PHYSICALLY DETECTABLE</div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 p-2.5 bg-black/80 border border-white/10 rounded-xs flex flex-wrap items-center justify-between text-[10px] text-neutral-400 gap-2">
              <span className="text-neutral-300">
                DEFENCE PARADIGM: LIVING IMMUNE SYSTEM (INDEPENDENT ACTION, COLLECTIVE INTELLIGENCE)
              </span>
              <span>PROTECTED PIPELINE: MODEL WEIGHTS SAFE FROM EXFILTRATION</span>
            </div>
          </div>
        )}

        {/* Fallback general technical HUD for other products if ever loaded */}
        {!['arka', 'ira', 'vyom', 'asimov'].includes(product.id) && (
          <div className="w-full h-full flex flex-col justify-between p-4 border border-white/10 bg-black/40 font-mono-tech">
            <div className="flex justify-between text-xs">
              <span className="text-white font-semibold">{product.fullName}</span>
              <span className="text-neutral-400">TIER: {product.tier}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
              {product.specs.map((spec, i) => (
                <div key={i} className="p-3 bg-white/3 border border-white/10 rounded-xs">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-500">{spec.label}</div>
                  <div className="text-xs font-semibold text-white mt-1 truncate">{spec.value}</div>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-neutral-500 flex justify-between">
              <span>STATUS: HARDWARE TESTBENCH NOMINAL</span>
              <span>DATA FLOW: STREAMING</span>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Log Output at Bottom */}
      <div className="p-4 bg-black/90 border-t border-white/10 font-mono-tech text-[11px] text-neutral-400 space-y-1">
        <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-neutral-400" />
            <span>REAL-TIME TELEMETRY & SYSTEM DIAGNOSTICS</span>
          </div>
          <span className="text-[10px] text-neutral-600 font-mono">STREAM: WGS84 / OGC / 3GPP REL-16 / NIST PQC</span>
        </div>
        {logMessages.map((msg, idx) => (
          <div key={idx} className="truncate text-neutral-300">
            <span className="text-[#D96B2B] mr-2">&gt;</span>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};
