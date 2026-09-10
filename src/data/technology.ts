import { TechPipelineStage } from '../types';

export const technologyStages: TechPipelineStage[] = [
  {
    id: 'data',
    step: '01',
    name: 'DATA',
    tagline: 'Multi-domain physical and orbital data collection',
    description: 'Continuous capture of electromagnetic, kinetic, acoustic, and spatial signals emitted across planetary surfaces, orbital tracks, and human-made infrastructure.',
    technologies: ['Spaceborne Constellations', 'Synthetic Aperture Radar (SAR)', 'In-situ IoT Arrays', 'CCTV Video Streams', 'Cadastral GIS Datasets'],
    standards: ['CCSDS Telemetry', 'RTSP/H.265', 'LoRaWAN 1.0.4', 'OGC GeoPackage', 'NMEA 0183'],
    inputs: 'Electromagnetic radiation, radar backscatter, physical strain, fluid pressure, optical photons',
    outputs: 'Raw sensor frames, telemetry packets, analog signal traces'
  },
  {
    id: 'sensing',
    step: '02',
    name: 'SENSING',
    tagline: 'Transduction, calibration and digitisation',
    description: 'Hardware-level radiometric calibration, optical distortion correction, and analog-to-digital signal transformation on spaceborne, airborne, and edge hardware.',
    technologies: ['Global Shutter CMOS', 'SWIR & Thermal Photodetectors', 'Tactical-grade MEMS IMUs', 'Ground Reflectance Calibration Tarps', 'Phase-detection LiDAR'],
    standards: ['MODTRAN Radiative Transfer', 'IEEE 1451 Smart Transducer', 'ASPRS Lidar Standards', 'ISO 19115'],
    inputs: 'Raw detector voltage, photon count matrices, angular rate vectors',
    outputs: 'Radiometrically calibrated Level-1A digital arrays, synchronized timestamped packets'
  },
  {
    id: 'ingestion',
    step: '03',
    name: 'INGESTION',
    tagline: 'High-throughput fault-tolerant stream transport',
    description: 'Distributed ingress nodes buffering millions of spatial events per second with zero data loss, guaranteed ordering, and line-rate protocol decoding.',
    technologies: ['Distributed Kafka Brokers', 'eBPF High-Speed Kernel Sockets', 'gRPC Streaming Pipelines', 'STAC Catalog Harvesters', 'MQTT Brokers'],
    standards: ['STAC v1.0.0', '3GPP Rel-16 URLLC', 'RFC 5246 TLS 1.3', 'Protocol Buffers v3'],
    inputs: 'Calibrated packets, video bitstreams, orbital telemetry chunks',
    outputs: 'Partitioned event streams, normalized spatiotemporal payloads'
  },
  {
    id: 'processing',
    step: '04',
    name: 'PROCESSING',
    tagline: 'Orthorectification, geocoding and feature filtering',
    description: 'Executing coordinate frame transforms (ECEF to WGS84), digital elevation surface ray-intersections, lens rectification, and noise rejection algorithms.',
    technologies: ['GDAL / PROJ Vector-Raster Kernel', 'SGP4 Ephemeris Integrator', 'TensorRT Quantized Filtering', 'Kalman Filter State Estimators', 'Voxel Rasterizers'],
    standards: ['OGC WGS84 (EPSG:4326)', 'Cloud-Optimized GeoTIFF (COG)', 'GeoParquet 1.0', 'LAS 1.4'],
    inputs: 'Normalized payloads, satellite ephemeris, camera intrinsic matrices',
    outputs: 'Georeferenced orthomosaics, clean kinematic track vectors, spatial point clouds'
  },
  {
    id: 'computation',
    step: '05',
    name: 'COMPUTATION',
    tagline: 'Deep model inference, graph extraction and indexation',
    description: 'Running convolutional segmentation, multi-object kinetic tracking, discrete global grid indexing, and physical simulation engines at scale.',
    technologies: ['H3 Hexagonal Discrete Global Grid', 'Ray Distributed Task Scheduler', 'PyTorch Multi-Spectral Models', 'GTSAM Factor Graph Solver', 'OctoMap 3D Grids'],
    standards: ['Uber H3 v4', 'S2 Geometry', 'ONNX Runtime 1.16', 'ISO 19107 Spatial Schema'],
    inputs: 'Georeferenced imagery, spatial point clouds, time-series telemetry',
    outputs: 'Detected object vectors, segmented environmental boundaries, localized agent poses'
  },
  {
    id: 'geospatial-fusion',
    step: '06',
    name: 'GEOSPATIAL FUSION',
    tagline: 'Multi-layer spatiotemporal graph reconciliation',
    description: 'Merging spaceborne, terrestrial, underground, and temporal layers into an authoritative 4D dynamic spatial graph that maintains physical causality.',
    technologies: ['PostGIS Dynamic Spatial Engine', 'TimescaleDB Spatiotemporal Hypertable', 'Spatial Topology Reconciliation', 'Multi-Scale Bayesian Estimators'],
    standards: ['OGC 3D Tiles 1.1', 'CityGML 3.0', 'BIM / IFC 4.3', 'OGC API Features'],
    inputs: 'Disparate spatial vectors, time-indexed telemetry, cadastral models',
    outputs: 'Authoritative 4D operational digital twin state'
  },
  {
    id: 'visualization',
    step: '07',
    name: 'VISUALIZATION',
    tagline: 'Hardware-accelerated kinetic rendering',
    description: 'Rendering millions of dynamic geometric primitives, volumetric point clouds, and live satellite swaths smoothly at 60 FPS in standard browser viewports.',
    technologies: ['WebGPU Compute & Render Pipelines', 'Custom GLSL Geometry Shaders', 'Vector Tile GPU Decoders', 'Level-of-Detail (LOD) Octrees'],
    standards: ['W3C WebGPU 1.0', 'WebGL 2.0', 'glTF 2.0 / 3D Tiles', 'Mapbox Vector Tile (MVT)'],
    inputs: '4D digital twin state, dynamic spatial queries, user perspective frustum',
    outputs: 'Ultra-low-latency interactive graphics viewports for operational desks'
  },
  {
    id: 'decision-control',
    step: '08',
    name: 'DECISION / CONTROL',
    tagline: 'Actionable dispatch, automated routing and safety interlocks',
    description: 'Translating situational awareness into verifiable, audited commands: emergency dispatch routes, traffic signal adjustments, autonomous drone corridors, and driver safety alerts.',
    technologies: ['Deterministic Rules Engines', 'Safety-Critical Interlock Controllers', 'ROS2 Navigation Stacks', 'Multi-Agency Dispatch Relays', 'Post-Quantum Command Signers'],
    standards: ['CAP (Common Alerting Protocol)', 'ISOBUS 11783', 'NIST FIPS 203 (ML-KEM)', 'IEEE 802.1Q TSN'],
    inputs: 'Analytic alerts, operator intervention policies, spatial boundary triggers',
    outputs: 'Authenticated dispatch messages, automated vehicular trajectory updates, audit logs'
  }
];

export const techDisciplines = [
  { name: 'City-Scale Digital Twins & Kinetics (ARKA)', desc: 'Heterogeneous data ingestion, real-time kinetic movement tracking, and sub-second multi-agency dispatch.' },
  { name: 'Predictive Land Intelligence (IRA)', desc: '50m × 50m spatial grid feature vectors, multi-model ensemble ML (XGBoost, Random Forest), and CesiumJS 3D terrain extrusion.' },
  { name: '5G Collaborative SLAM & Multi-AAV (VYOM)', desc: '6-DOF quadrotor physics, local Visual-SLAM, 5G MEC local breakout (<=20ms latency), and SE(3) pose graph fusion.' },
  { name: 'Post-Quantum Cyber-Defence (ASIMOV)', desc: 'Neuromorphic sentinel nodes, GAN-based adaptive AI threat engine, BB84 QKD, and NIST CRYSTALS-Kyber / Dilithium.' },
  { name: 'GIS & Spatial Databases', desc: 'PostgreSQL with PostGIS indexing, topological validation, and OGC vector/raster standards.' },
  { name: 'Critical Infrastructure & Sovereign Security', desc: 'Air-gapped deployment, zero-trust hardware attestation, and machine-speed threat containment.' }
];
