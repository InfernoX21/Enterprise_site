import { ApplicationDomain } from '../types';

export const applicationsData: ApplicationDomain[] = [
  {
    id: 'city-operations-kinetics',
    number: '01',
    title: 'City-Scale Geospatial Intelligence & Operations',
    focus: 'Metropolitan authorities, emergency response, infrastructure operators, and urban planners',
    description: 'Creating a software-defined \'ground satellite\' intelligence layer that unifies cameras, sensors, telecom, and public GIS datasets into a continuously updating 3D digital twin with real-time kinetic motion tracking.',
    subdomains: [
      {
        name: 'Advanced Real-Time Kinetic Analysis',
        description: 'Tracking the velocity, flow, and movement patterns of vehicles, pedestrians, and city assets citywide to flag emerging bottlenecks and safety risks.'
      },
      {
        name: 'Live Multi-Agency Incident Dispatch',
        description: 'Coordinating detection-to-response workflows across police, fire, emergency medical dispatch, and municipal transit without data silos.'
      },
      {
        name: 'Critical Urban Infrastructure Monitoring',
        description: 'Correlating live health, voltage, water pressure, and telemetry across power, utility, and telecommunication distribution grids.'
      }
    ],
    operationalImpact: 'Compresses cross-department response times with sub-second stream normalization and live 3D digital twin situational awareness.',
    relatedProducts: ['ARKA', 'IRA']
  },
  {
    id: 'predictive-land-intelligence',
    number: '02',
    title: 'Predictive Land Intelligence & 3D Planning',
    focus: 'Municipal planners, environmental researchers, clean energy developers, and civil engineers',
    description: 'Transforming satellite imagery, Digital Elevation Models (SRTM DEM), rainfall records, and cadastre into a unified 3D spatial feature space (50m × 50m grid cells) with multi-model machine learning ensembles.',
    subdomains: [
      {
        name: 'Flood Inundation Risk & Hydrological Modeling',
        description: 'Classifying flood hazards using slope derivation, historical NASA POWER precipitation, and hydrological flow accumulation buffers.'
      },
      {
        name: 'Optimized Urban Tree Plantation Corridors',
        description: 'Pinpointing high-priority urban canopy reforestation zones to mitigate urban heat islands and support UN SDGs 11 & 13.'
      },
      {
        name: 'Solar Energy & Construction Feasibility',
        description: 'Evaluating rooftop/ground solar irradiance potential and slope stability across cadastre parcels without requiring ground IoT hardware.'
      }
    ],
    operationalImpact: 'Enables rapid nationwide scenario simulation and dynamic objective-weight recalibration (Climate Resilience vs Revenue) in CesiumJS 3D.',
    relatedProducts: ['IRA', 'ARKA']
  },
  {
    id: 'collaborative-aav-slam',
    number: '03',
    title: '5G Collaborative Visual-SLAM & Robotics',
    focus: 'Disaster response teams, search-and-rescue agencies, and autonomous drone fleet operators',
    description: 'Deploying multiple Autonomous Aerial Vehicles (AAVs) to cooperatively survey and reconstruct dense, globally consistent 3D maps of complex environments using low-latency 5G and Multi-access Edge Computing (MEC).',
    subdomains: [
      {
        name: 'Urban Disaster Rapid 3D Mapping',
        description: 'Surveying collapsed structures, blocked roads, and flood debris with 6-DOF quadrotors streaming compact keyframe metadata (6.6 Mbps/AAV).'
      },
      {
        name: 'Wilderness Search & Rescue Missions',
        description: 'Cooperative visual search across dense forests and rough terrain with inter-agent landmark matching under normal or degraded 5G links.'
      },
      {
        name: 'Critical Infrastructure Aerial Surveillance',
        description: 'Continuous autonomous inspection of power facilities, industrial perimeters, and transmission towers with real-time pose graph optimization.'
      }
    ],
    operationalImpact: 'Reduces communication bandwidth from 28+ Mbps raw video to 6.6 Mbps metadata while keeping end-to-end MEC latency <= 20 ms.',
    relatedProducts: ['VYOM', 'ARKA']
  },
  {
    id: 'post-quantum-cyber-defence',
    number: '04',
    title: 'Post-Quantum Autonomous Cyber-Defence',
    focus: 'Sovereign security agencies, telecom backbone operators, and satellite ground stations',
    description: 'Treating the internet as a living organism and deploying an autonomous post-quantum immune system that neutralizes attacks at machine speed without waiting for human intervention.',
    subdomains: [
      {
        name: 'Decentralized Neuromorphic Sentinel Mesh',
        description: 'Leaderless edge-compute nodes running quantum-resistant OS with ephemeral identity rotation, responding to threats on-device in under 50ms.'
      },
      {
        name: 'GAN-Powered Adaptive AI Threat Engine',
        description: 'Adversarial neural loop generating novel attack vectors vs real-world APT discriminators to synthesize digital antibodies before zero-day deployment.'
      },
      {
        name: 'Quantum Key Distribution (BB84) & NIST PQC',
        description: 'Physical eavesdrop detection via no-cloning state collapse combined with CRYSTALS-Kyber and CRYSTALS-Dilithium cryptographic algorithms.'
      }
    ],
    operationalImpact: 'Replaces 207-day average breach detection times with sub-50ms autonomous defense resistant to quantum adversaries indefinitely.',
    relatedProducts: ['ASIMOV']
  },
  {
    id: 'sovereign-infrastructure-security',
    number: '05',
    title: 'Critical National Infrastructure Protection',
    focus: 'Defense ministries, national grid operators, and governmental communications authorities',
    description: 'Securing satellite downlinks, municipal utility grids, and sovereign command-and-control communications against quantum cryptanalysis, physical tampering, and advanced persistent threats.',
    subdomains: [
      {
        name: 'Orbital Satellite Downlink & Command Defense',
        description: 'Securing spacecraft telemetry and telecommand links against state-level interception and replay using post-quantum mesh protocols.'
      },
      {
        name: 'Electrical Grid SCADA Substation Immunity',
        description: 'Hardening breaker actuations and high-voltage telemetry relays against quantum-assisted decryption and coordinated cyber-physical sabotage.'
      },
      {
        name: 'Air-Gapped Sovereign Operations',
        description: 'Operating deterministic digital twin and mapping pipelines in completely disconnected, self-contained sovereign infrastructure.'
      }
    ],
    operationalImpact: 'Eliminates single points of failure across strategic national assets with verifiable mathematical security and zero cloud lock-in.',
    relatedProducts: ['ASIMOV', 'ARKA', 'VYOM']
  }
];
