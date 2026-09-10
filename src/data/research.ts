import { ResearchItem } from '../types';

export const researchData: ResearchItem[] = [
  {
    id: 'res-sentinel-nodes',
    number: 'RES-01',
    title: 'Neuromorphic Sentinel Nodes with Ephemeral Identity Rotation',
    status: 'ACTIVE LAB',
    area: 'Post-Quantum Cyber-Defence & Autonomous Systems',
    description: 'Developing neuromorphic edge-compute sentinel units that run lightweight quantum-resistant micro-operating systems. By rotating ephemeral cryptographic identities, nodes classify network threats on-device in under 50ms without central coordination, operating like white blood cells in a living immune mesh.',
    technicalMilestones: [
      'Sub-50ms autonomous threat classification benchmarked on neuromorphic silicon',
      'Ephemeral cryptographic identity rotation preventing adversarial tracking and compromise',
      'Distributed leaderless gossip protocol resilient to single-node capture'
    ],
    relatedProgram: 'ASIMOV',
    documentationStatus: 'Sentient Mesh Architecture Brief (#ASIMOV-SM-01)'
  },
  {
    id: 'res-collaborative-slam',
    number: 'RES-02',
    title: '5G-Enabled Collaborative Visual-SLAM for Multi-AAV 3D Mapping',
    status: 'PROTOTYPE VALIDATION',
    area: 'Robotics, 5G & Edge Computing',
    description: 'Integrating physically motivated 6-DOF Newton-Euler quadrotor dynamics with local keyframe extraction, streaming compact spatial metadata (6.6 Mbps/AAV) over 5G gNB to a Multi-access Edge Computing (MEC) node for SE(3) pose graph optimization and sub-20ms global map fusion.',
    technicalMilestones: [
      'Newton-Euler 6-DOF dynamic simulator with 2.5 kg mass and 3,712 hover RPM verification',
      'Relative SE(3) transformation and robust loss pose-graph convergence verified',
      'End-to-end 5G latency budget verified at <= 20 ms across normal/degraded network channels'
    ],
    relatedProgram: 'VYOM',
    documentationStatus: 'Collaborative Visual-SLAM Framework (#VYOM-SLAM-DOC-04)'
  },
  {
    id: 'res-land-intelligence',
    number: 'RES-03',
    title: 'Multi-Model Ensemble Geospatial AI for Predictive Land Intelligence',
    status: 'PROTOTYPE VALIDATION',
    area: 'Earth Observation & Urban Planning',
    description: 'Constructing unified 50m × 50m spatial feature vectors from Copernicus Sentinel-2, SRTM DEM, NASA POWER, and FAO SoilGrids. Multi-model ensembles (XGBoost, Random Forest, Gradient Boosting) compute dynamic suitability scores for flood mitigation, tree plantation, and solar deployment in 3D CesiumJS.',
    technicalMilestones: [
      'Automated feature extraction: NDVI, slope derivation, and hydrological flow buffering',
      'Real-time objective-weight scenario recalibration (Climate Resilience vs Revenue Focus)',
      '3D WebGL terrain and parcel extrusion pipeline deployed without on-site IoT hardware'
    ],
    relatedProgram: 'IRA',
    documentationStatus: 'Intelligent Regional Analytics Spec (#IRA-GEO-SPEC-02)'
  },
  {
    id: 'res-kinetic-city-engine',
    number: 'RES-04',
    title: 'City-Scale Kinetic Analysis & Ground-Satellite Digital Twin Synchronization',
    status: 'ACTIVE LAB',
    area: 'Geospatial Intelligence & Smart Cities',
    description: 'Normalizing heterogeneous urban sensory inputs (CCTV optical flow, IoT sensors, telecom vectors, utility SCADA) into a unified, continuously updating 3D digital twin to track vehicular and pedestrian velocity vectors citywide for proactive incident dispatch.',
    technicalMilestones: [
      'Multi-source telemetry ingestion normalized via Kafka/ZeroMQ event buses',
      'Computer vision kinetic tracking engine measuring velocity vectors across 14,000+ entities',
      'Sub-250ms cross-agency incident dispatch pipeline across municipal emergency departments'
    ],
    relatedProgram: 'ARKA',
    documentationStatus: 'Kinetic City Architecture (#ARKA-KINETIC-01)'
  },
  {
    id: 'res-gan-threat-engine',
    number: 'RES-05',
    title: 'GAN-Powered Adaptive AI Threat Engine for Zero-Day Attack Defense',
    status: 'ACTIVE LAB',
    area: 'Autonomous Cyber-Defence & Machine Learning',
    description: 'Deploying a Generative Adversarial Network (GAN) that autonomously invents novel attack signatures and evaluates them against discriminators trained on real-world APT datasets, synthesizing digital antibodies at machine speed before attackers deploy zero-day mutations.',
    technicalMilestones: [
      'Adversarial generative loop fine-tuned on real-world APT telemetry datasets',
      'Countermeasure synthesis loop operating within a quantum-secured inference pipeline',
      'Model weights hardened against poisoning and side-channel exfiltration'
    ],
    relatedProgram: 'ASIMOV',
    documentationStatus: 'AI Threat Engine Technical Report (#ASIMOV-TE-02)'
  },
  {
    id: 'res-qkd-bb84-pqc',
    number: 'RES-06',
    title: 'Quantum Key Distribution (BB84) & NIST Post-Quantum Cryptography Hybridization',
    status: 'STANDARDS DRAFT',
    area: 'Quantum Cryptography & Communications',
    description: 'Combining BB84 polarized photon quantum state transmission (where eavesdropping is physically detectable via state collapse) with NIST-standardized CRYSTALS-Kyber (ML-KEM) and CRYSTALS-Dilithium (ML-DSA) algorithms for unbreakable orbital downlinks and mesh communications.',
    technicalMilestones: [
      'Physical eavesdrop detection via no-cloning theorem state collapse verification',
      'NIST FIPS 203 & FIPS 204 algorithm integration into standard network frame payloads',
      'End-to-end post-quantum cryptographic mesh attestation verified'
    ],
    relatedProgram: 'ASIMOV',
    documentationStatus: 'Quantum Communications Standard (#ASIMOV-QKD-REV1)'
  }
];
