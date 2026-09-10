import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'arka',
    slug: 'arka',
    number: '01',
    name: 'ARKA',
    fullName: 'Adaptive Resource & Knowledge Architecture',
    tier: 'PLATFORM',
    category: 'City-Scale Geospatial Intelligence & Real-Time Kinetic Analysis',
    tagline: 'A city-scale geospatial intelligence platform that creates a ‘ground satellite’ by integrating heterogeneous urban data into a unified digital twin.',
    shortDescription: 'ARKA (Adaptive Resource & Knowledge Architecture) is an Advanced Real-Time Kinetic Analysis Platform that creates a software-defined intelligence layer for cities — observing, understanding, predicting, and assisting urban operations in real time by turning fragmented urban data into a single, continuously updating 3D digital twin.',
    problem: [
      'Cities operate with fragmented, disconnected data silos: traffic controllers, CCTV streams, environmental sensors, asset registers, utility grids, and telecom networks reside in isolated proprietary software.',
      'Emergency response and municipal decision-makers lack real-time situational awareness, relying on static GIS snapshots and manual cross-department communication during active crises.',
      'Existing municipal systems monitor historical status rather than real-time kinetic motion, preventing proactive detection of emerging traffic bottlenecks, utility failures, or crowd safety anomalies before they escalate.'
    ],
    whatItDoes: [
      'Creates a live, queryable 3D Digital Twin of the city kept in continuous synchronization with real-world physical sensor feeds.',
      'Executes Advanced Real-Time Kinetic Analysis, tracking the velocity, trajectory, and movement patterns of vehicles, pedestrians, and public assets citywide as it happens.',
      'Delivers live traffic intelligence with real-time flow estimation, bottleneck identification, dynamic signal adjustments, and automated incident detection.',
      'Monitors critical infrastructure in real time, correlating live health, pressure, and electrical status across power, water, gas, and telecommunications networks.',
      'Enables secure cross-agency collaboration and coordinated detection-to-response workflows across police, fire, medical dispatch, and municipal planners without data silos.',
      'Provides historical timeline replay, allowing operators and forensic investigators to reconstruct past urban events and simulate scenario-based planning interventions.'
    ],
    howItWorks: [
      'Data Layer: Ingests raw sensory inputs from CCTV cameras, IoT sensors, drones, satellites, weather APIs, telecom networks, utility SCADA systems, and public GIS datasets.',
      'Integration Layer: Normalizes and routes heterogeneous feeds through streaming pipelines (Kafka, ZeroMQ), ETL processors, and an event bus into a common geodetic operational model.',
      'AI Layer: Runs computer vision, time-series forecasting, anomaly detection, LLM-assisted operational reasoning, and graph analytics — driving the kinetic analysis engine.',
      'Visualization Layer: Renders a 3D Earth interface with WebGL/WebGPU extrusion, live dashboards, mission planning views, and timeline playback controls.',
      'Security & Governance: Enforces role-based access control (RBAC), end-to-end encryption, verifiable audit logs, and secure REST/gRPC APIs for authorized multi-agency access.'
    ],
    capabilities: [
      'Digital Twin of the City (Live 3D queryable model)',
      'Advanced Real-Time Kinetic Analysis (Citywide movement tracking)',
      'Live Traffic Intelligence (Flow, congestion, and incident alerts)',
      'Critical Infrastructure Monitoring (Power, water, and utility networks)',
      'Geospatial Analytics (Multi-layer spatial correlation)',
      'Incident Management (Coordinated detection-to-response workflows)',
      'Environmental Monitoring (Air quality, weather, and hazard tracking)',
      'Resource Optimization (Data-driven allocation of city personnel and assets)',
      'Historical Replay (Reconstructing past urban events for planning and review)'
    ],
    technology: [
      'Streaming Ingestion Pipelines & Event Bus (Apache Kafka / ZeroMQ)',
      'PostgreSQL with PostGIS Geospatial Indexing & Query Engine',
      'Computer Vision & Real-Time Kinetic Tracking (TensorRT / PyTorch)',
      '3D Earth Visualization & Digital Twin Mesh Engine (WebGL / WebGPU)',
      'Time-Series Spatial Telemetry & Predictive Anomaly Models',
      'Role-Based Access Control (RBAC) & Sovereign Cryptographic Audit Logs'
    ],
    useCases: [
      {
        title: 'Smart City Command-and-Control Operations',
        domain: 'Municipal Governance',
        description: 'Providing city administrators and department chiefs with a centralized real-time oversight dashboard during major civic events, severe weather, and daily operations.',
        metrics: 'Single unified operational picture across 14+ municipal departments'
      },
      {
        title: 'Disaster Response & Incident Management',
        domain: 'Emergency Services',
        description: 'Live coordination between emergency dispatch, fire crews, and ambulance units with real-time hazard perimeter mapping and dynamic evacuation routing.',
        metrics: 'Sub-second incident propagation to first responder mobile terminals'
      },
      {
        title: 'Dynamic Traffic & Kinetic Optimization',
        domain: 'Transportation Infrastructure',
        description: 'Continuous kinetic monitoring of vehicular volume and pedestrian bottlenecks with automated green-wave signal clearance for emergency vehicles.',
        metrics: '28% reduction in emergency corridor transit delay'
      }
    ],
    architecture: [
      {
        level: '01 Data Layer',
        name: 'Heterogeneous Sensory Ingestion',
        components: ['CCTV Camera Streams', 'IoT Sensor Gateways', 'Drone / Satellite Feeds', 'Telecom & Utility Data'],
        protocolOrEngine: 'RTSP / MQTT / gRPC / WebSockets'
      },
      {
        level: '02 Integration Layer',
        name: 'Streaming ETL & Event Bus',
        components: ['Kafka Stream Processing', 'Spatial Normalizer', 'Unified Operational Data Lake'],
        protocolOrEngine: 'Apache Kafka / ZeroMQ / Protobuf'
      },
      {
        level: '03 AI Layer',
        name: 'Kinetic Analytics & Inference',
        components: ['Kinetic Tracking Engine', 'Computer Vision Pipeline', 'Anomaly Detection & Forecasting'],
        protocolOrEngine: 'TensorRT / PyTorch / Graph Neural Nets'
      },
      {
        level: '04 Visualization & Security',
        name: '3D Earth Digital Twin & RBAC',
        components: ['3D WebGL Interface', 'Timeline Playback Engine', 'Multi-Agency RBAC Gateway'],
        protocolOrEngine: 'WebGL2 / WebGPU / Cesium / OAuth2'
      }
    ],
    specs: [
      { label: 'Spatial Latency', value: '< 250ms End-to-End Streaming' },
      { label: 'Ingestion Capacity', value: '500,000+ Events / Second / Cluster' },
      { label: 'Digital Twin Model', value: '3D City Cadastre + Sub-Surface Utility Vector' },
      { label: 'Deployment Class', value: 'Air-Gapped Sovereign Cloud / On-Premises' }
    ],
    demoType: 'city-operations'
  },
  {
    id: 'ira',
    slug: 'ira',
    number: '02',
    name: 'IRA',
    fullName: 'Intelligent Resource Architecture (Intelligent Regional Analytics)',
    tier: 'PRODUCT',
    category: '3D AI-Driven Geospatial Framework for Sustainable Urban Planning',
    tagline: 'A 3D AI-driven geospatial framework for sustainable urban planning and predictive land intelligence.',
    shortDescription: 'IRA (Intelligent Resource Architecture / Intelligent Regional Analytics) transforms heterogeneous satellite, environmental, and infrastructure datasets into a unified 3D spatial feature space (50m × 50m configurable grid cells), using multi-model machine learning ensembles (XGBoost, Random Forest, Gradient Boosting) to deliver predictive land intelligence, flood risk classification, solar potential, and climate-adjusted urban growth simulations without relying on ground IoT infrastructure.',
    problem: [
      'Rapid urban expansion and climate variability create critical challenges in sustainable land-use planning, infrastructure allocation, and environmental risk mitigation.',
      'Traditional urban planning relies on static zoning maps, fragmented datasets, and outdated environmental records, causing inefficient land utilization, urban heat islands, and uncoordinated construction.',
      'The lack of predictive, simulation-based spatial intelligence prevents municipal authorities, developers, and researchers from making long-term, data-driven decisions before capital allocation.'
    ],
    whatItDoes: [
      'Constructs a multi-layered 3D Geospatial Intelligence Architecture integrating satellite imagery, Digital Elevation Models (SRTM DEM), land-use rasters, rainfall metrics, and infrastructure networks.',
      'Discretizes landscapes into configurable 50m × 50m grid cells, each encoding multi-dimensional feature vectors including elevation, slope, NDVI, rainfall intensity, solar potential, zoning compliance, and road proximity.',
      'Runs multi-model ensembles (XGBoost, Random Forest, Gradient Boosting) to compute dynamic suitability indices for tree plantation corridors, construction feasibility, solar deployment, and flood inundation risk.',
      'Provides real-time recalibration through objective-weight scenario planning (Environmental Optimization, Balanced Development, Revenue Focus, and Climate Resilience).',
      'Simulates climate-adjusted urban growth trends and future land transformations within a rich 3D CesiumJS environment with WebGL terrain and extruded parcel overlays.',
      'Enables rapid nationwide deployment using open, globally validated geospatial datasets (Copernicus Sentinel-2, NASA POWER, Global Flood Database, FAO SoilGrids, OpenStreetMap) without requiring ground IoT hardware.'
    ],
    howItWorks: [
      'Data Ingestion: Harvests open remote-sensing and planetary data: Sentinel-2 multispectral bands, SRTM digital elevation rasters, NASA POWER solar/meteorological records, FAO SoilGrids, and OpenStreetMap cadastre.',
      'Feature Engineering: Computes NDVI, slope derivation, hydrological flow accumulation, buffer proximity vectors, and raster aggregations across 50m × 50m grid units.',
      'Machine Learning Pipeline: Employs trained scikit-learn and XGBoost regression/classification models deployed via Joblib for real-time inference on demand.',
      'Scenario-Based Recalibration: Allows planners to adjust policy weights dynamically (e.g. prioritizing flood resilience over development revenue) to recalculate suitability scores across all grid cells in real time.',
      '3D Visualization: Renders 3D terrain and extruded suitability polygons using CesiumJS and WebGL, cached with Redis and optimized via vector tiles.'
    ],
    capabilities: [
      '50m × 50m Configurable Spatial Grid Feature Vectors',
      'Multi-Model Ensemble Suitability Prediction (XGBoost, Random Forest, GBDT)',
      'Flood Inundation Risk Classification & Hydrological Buffering',
      'Solar Potential & Rooftop/Ground Irradiance Assessment',
      'Optimized Tree Plantation & Urban Canopy Corridor Modeling',
      'Construction Feasibility & Slope Stability Analysis',
      'Objective-Weight Scenario Recalibration (Climate Resilience vs Revenue)',
      '3D Terrain & Parcel Extrusion in CesiumJS with WebGL',
      'UN Sustainable Development Goals (SDGs 9, 11, 13, 15) Alignment'
    ],
    technology: [
      '3D Visualization: CesiumJS with WebGL Extrusion for Terrain & Grid Overlays',
      'Backend Framework: Node.js (NestJS) & Python (FastAPI)',
      'Spatial Database: PostgreSQL with PostGIS Geospatial Extension',
      'Machine Learning: Scikit-learn, XGBoost, Joblib Model Registry',
      'Data Sources: Copernicus Sentinel-2, NASA POWER, SRTM DEM, FAO SoilGrids, OpenStreetMap',
      'Performance: Redis In-Memory Caching & Vector-Tile Serialization'
    ],
    useCases: [
      {
        title: 'Flood Risk Classification & Climate Mitigation',
        domain: 'Urban Resilience',
        description: 'Identifying high-risk flood zones by combining SRTM slope models, historical rainfall records from NASA POWER, and hydrological buffering to guide defensive drainage investments.',
        metrics: '50m × 50m localized risk score calculated across entire watersheds'
      },
      {
        title: 'Optimized Urban Tree Plantation Corridors',
        domain: 'Environmental Sustainability',
        description: 'Modeling soil moisture, heat island indices, and solar radiation to pinpoint optimal micro-locations for urban forestry initiatives mitigating urban heat.',
        metrics: 'Multi-criteria spatial suitability optimization (SDG 11 & 13)'
      },
      {
        title: 'Solar Energy Deployment Feasibility',
        domain: 'Clean Energy Infrastructure',
        description: 'Calculating surface slope, aspect, solar irradiance potential, and grid interconnection proximity to identify viable commercial solar farm parcels.',
        metrics: 'Automated solar yield feasibility indexing per cadastre parcel'
      }
    ],
    architecture: [
      {
        level: '01 Data Harvest',
        name: 'Planetary & Open Earth Feeds',
        components: ['Sentinel-2 Multispectral Ingest', 'NASA POWER Solar/Rainfall API', 'SRTM DEM & FAO SoilGrids', 'OpenStreetMap Ingest'],
        protocolOrEngine: 'Python Async Harvesters / OGC STAC'
      },
      {
        level: '02 Feature Space',
        name: '50m × 50m Grid Feature Engineering',
        components: ['NDVI Calculator', 'Slope & Aspect Derivations', 'Hydrological Buffers', 'Proximity Indexers'],
        protocolOrEngine: 'PostGIS / GDAL / NumPy / Rasterio'
      },
      {
        level: '03 Machine Learning',
        name: 'Multi-Model Suitability Ensemble',
        components: ['XGBoost Classifier', 'Random Forest Regressor', 'Gradient Boosting Trees', 'Objective-Weight Recalibrator'],
        protocolOrEngine: 'Scikit-learn / XGBoost / Joblib'
      },
      {
        level: '04 3D Presentation',
        name: 'CesiumJS 3D WebGL Viewport',
        components: ['Cesium Terrain Engine', 'Grid Cell Vector Extruder', 'Scenario Controls', 'Redis Spatial Cache'],
        protocolOrEngine: 'CesiumJS / WebGL / Redis / React'
      }
    ],
    specs: [
      { label: 'Spatial Grid Resolution', value: '50m × 50m Configurable Feature Cells' },
      { label: 'ML Algorithms', value: 'XGBoost, Random Forest, Gradient Boosting' },
      { label: 'Primary Data Sources', value: 'Sentinel-2, NASA POWER, SRTM DEM, FAO Soil' },
      { label: 'Hardware Dependency', value: 'Zero On-Site IoT Hardware Required (SaaS Deployable)' }
    ],
    demoType: 'spatial-ndvi'
  },
  {
    id: 'vyom',
    slug: 'vyom',
    number: '03',
    name: 'VYOM',
    fullName: 'Visual Yield & Operational Mapping',
    tier: 'PLATFORM',
    category: '5G-Enabled Collaborative Visual-SLAM Framework for Multi-AAV 3D Mapping',
    tagline: 'A 5G-enabled collaborative Visual-SLAM framework for multi-AAV 3D mapping using edge computing.',
    shortDescription: 'VYOM (Visual Yield & Operational Mapping) is an advanced aerospace and robotics framework that unites physically motivated 6-DOF quadrotor flight dynamics, local Visual-SLAM perception, low-latency 5G wireless transport, and Multi-access Edge Computing (MEC) to enable multiple Autonomous Aerial Vehicles (AAVs) to collaboratively reconstruct dense, consistent 3D global maps of complex environments in real time.',
    problem: [
      'Conventional single-agent aerial surveying is severely constrained by quadrotor battery endurance (15–20 minutes), limited sensor coverage, and low onboard compute power.',
      'Collaborative multi-drone SLAM systems encounter severe communication bottlenecks: streaming raw video from multiple vehicles saturates wireless links and degrades mapping latency.',
      'Existing robotics research treats flight dynamics, visual perception, wireless networking, and 3D visualization as isolated modules rather than an integrated, deterministic closed-loop system.'
    ],
    whatItDoes: [
      'Simulates multi-AAV flight using a complete 6-DOF Newton-Euler quadrotor physics model including translational dynamics, hover thrust (6.13 N/motor, 24.525 N total for 2.5 kg mass), rotor aerodynamics (CT = 0.11, 3712 hover RPM), rotational inertia, and aerodynamic drag.',
      'Executes local Visual-SLAM on each AAV (image acquisition at 1280×720 @ 30 FPS, feature detection, pose estimation, keyframe selection) to generate local keyframe-landmark submaps.',
      'Transmits compact mapping metadata (keyframes, feature descriptors, pose estimates ~6.6 Mbps/AAV) over a 5G gNB/UPF radio access link instead of raw video, drastically reducing network overhead.',
      'Performs heavy computational tasks at a 5G Multi-access Edge Computing (MEC) node: inter-agent landmark matching, relative SE(3) transformation estimation, robust pose-graph optimization, and unified global map fusion.',
      'Maintains a strict target 5G end-to-end latency budget of ≤ 20 ms (5ms radio, 3ms transport, 2ms MEC routing, 6ms SLAM processing, 2ms map sync, 2ms margin).',
      'Provides a browser-based virtual 3D environment with flight control via Keyboard, Gamepad API, and WebXR-compatible VR interfaces with real-time network stress injection (Normal 18ms / Degraded 60ms / Severe 100ms).'
    ],
    howItWorks: [
      'Physics Simulation: Calculates position, linear velocity, roll/pitch/yaw Euler angles, and angular rates using Newton-Euler equations: m v_dot = m g + R F_T + F_D, with 22.2V 6S 5000 mAh battery modeling.',
      'Visual-SLAM Pipeline: Projects camera features p_i ~ K [R | t] P_i. Each AAV constructs a local map tuple M_i = {K_i, L_i, T_i}.',
      '5G Network Uplink: AAV streams compact keyframes and landmark descriptors across a simulated 5G NR interface (gNodeB -> 5G Core AMF/SMF/UPF) directly to local breakout MEC.',
      'MEC Collaborative Fusion: Identifies inter-drone shared landmarks (L1 <-> L2), estimates relative SE(3) transformations T_12, and minimizes robust pose-graph loss sum rho(||e_ij||^2_Sigma^-1).',
      'Global 3D Visualization: Renders the unified dense map, individual AAV flight trajectories, coverage percentages, and SLAM alignment accuracy within WebGL / WebXR.'
    ],
    capabilities: [
      '6-Degree-of-Freedom Quadrotor Physics Simulation (2.5 kg, 3712 hover RPM, 24.525 N hover thrust)',
      'Local Visual-SLAM on Autonomous Aerial Vehicles (1280×720 @ 30 FPS)',
      'Collaborative Multi-AAV Map Fusion (SE(3) landmark matching & pose-graph optimization)',
      '5G Network Architecture with Multi-access Edge Computing (MEC) local breakout',
      'Low-Latency 5G Budget (Target end-to-end latency <= 20 ms, 6.6 Mbps/AAV bandwidth)',
      'Network Stress Simulation (Normal 18ms / Degraded 60ms / Severe 100ms)',
      'Interactive Flight Simulator with Keyboard, Gamepad API, and WebXR VR support',
      'Three Operational Scenarios: Urban Disaster Mapping, Search & Rescue, Critical Infrastructure Surveillance'
    ],
    technology: [
      '6-DOF Rigid-Body Newton-Euler Quadrotor Dynamics & Euler Equations',
      'Visual-SLAM Keyframe Feature Extraction & Tracking (ORB / VIO)',
      'Pose Graph Optimization (Levenberg-Marquardt / Ceres Solver / g2o)',
      '5G MEC Edge Processing & Local Breakout (3GPP Rel-16 Architecture)',
      'Interactive Simulation: Gamepad API, WebXR, WebGL 3D City Engine',
      'Battery & Energy Degradation Model (6S 5000mAh 111Wh / 300W power draw)'
    ],
    useCases: [
      {
        title: 'Urban Disaster Rapid 3D Mapping (Scenario A)',
        domain: 'Disaster Response',
        description: 'Deploying a 3-AAV swarm to survey collapsed buildings, blocked roadways, and flood inundation zones, merging independent camera sweeps into a single unified 3D mesh at the MEC node.',
        metrics: '19.8 Mbps total swarm bandwidth with sub-20ms edge map fusion'
      },
      {
        title: 'Wilderness Search & Rescue (Scenario B)',
        domain: 'Public Safety',
        description: 'Multi-drone cooperative visual search across dense forest trails and rough terrain, synchronizing landmark maps and target sightings under degraded 5G signal conditions.',
        metrics: 'Cooperative landmark matching over 60ms degraded network links'
      },
      {
        title: 'Critical Infrastructure Surveillance (Scenario C)',
        domain: 'Asset Protection',
        description: 'Continuous autonomous inspection of high-voltage transmission towers, industrial facilities, and perimeter fences with automated visual defect localization.',
        metrics: 'Millimeter-grade trajectory consistency across 17.8-minute battery sorties'
      }
    ],
    architecture: [
      {
        level: '01 Operator Layer',
        name: 'Interactive Mission Control',
        components: ['Web UI Dashboard', 'Gamepad API Controller', 'WebXR VR Interface', 'Mission Waypoint Manager'],
        protocolOrEngine: 'Gamepad API / WebXR / WebGL'
      },
      {
        level: '02 AAV Simulation',
        name: '6-DOF Quadrotor Dynamics',
        components: ['Newton-Euler Solver', '4 Brushless Motors & ESCs', 'Battery Discharge Model (111 Wh)', 'Aerodynamic Drag Model'],
        protocolOrEngine: 'Physics Engine / 2.5 kg Model / 3712 RPM'
      },
      {
        level: '03 Perception / SLAM',
        name: 'Local Visual-SLAM per Drone',
        components: ['720p 30FPS Camera', 'IMU Integrator', 'Feature Point Detector', 'Keyframe Selector'],
        protocolOrEngine: 'p_i ~ K[R|t]P_i / SE(3) Geometry'
      },
      {
        level: '04 5G & MEC Fusion',
        name: 'Edge Collaborative SLAM Engine',
        components: ['5G gNB / UPF Local Breakout', 'Feature Matcher', 'Pose Graph Optimizer', 'Global Map Fusion'],
        protocolOrEngine: 'min sum rho(||e_ij||^2) / <=20ms 5G Budget'
      }
    ],
    specs: [
      { label: 'Vehicle Mass & Frame', value: '2.5 kg / 0.23m Arm / 13-inch Props' },
      { label: 'Hover Dynamics', value: '24.525 N Total Thrust / 3,712 Hover RPM' },
      { label: '5G Latency Target', value: 'L_total <= 20 ms (5ms Radio, 6ms SLAM, 2ms MEC)' },
      { label: 'Communication Rate', value: '6.6 Mbps / AAV (Compact Keyframes vs 28+ Mbps Raw)' }
    ],
    demoType: 'slam-mapping'
  },
  {
    id: 'asimov',
    slug: 'asimov',
    number: '04',
    name: 'ASIMOV',
    fullName: 'Autonomous Sentient Internet Mesh for Orbital Vigilance',
    tier: 'PLATFORM',
    category: 'Post-Quantum Autonomous Cyber-Defence Framework',
    tagline: 'A post-quantum autonomous cyber-defence framework that treats the internet as a living organism and itself as its immune system.',
    shortDescription: 'PROJECT ASIMOV (Autonomous Sentient Internet Mesh for Orbital Vigilance) is a post-quantum autonomous cyber-defence framework that protects orbital downlinks, critical infrastructure, and internet architecture against quantum-enabled adversaries through a decentralized mesh of intelligent Sentinel Nodes, an adaptive GAN-based AI Threat Engine, and a Quantum Key Distribution (QKD) BB84 communication layer.',
    problem: [
      'Cyber attacks on critical infrastructure are up 47% year-on-year (2024), with sophisticated state-sponsored actors poised to leverage quantum computing to break classical cryptography.',
      'Current cyber defences are dangerously slow: the average breach takes 207 days to detect and 73 days to contain — timescales fundamentally incompatible with autonomous machine-speed threats.',
      'Classical public-key standards such as RSA-2048 and ECC are mathematically broken by Shor’s algorithm on quantum systems, turning current encrypted communications into open books.',
      'Defenders consume enormous resources responding to reactive alerts while quantum-capable adversaries mutate vectors faster than human analysts can patch vulnerabilities.'
    ],
    whatItDoes: [
      'Deploys neuromorphic Sentinel Nodes acting as the nervous system of the internet, independently classifying threats via on-device AI inference with sub-50ms machine-speed response times without centralized coordination.',
      'Operates a distributed, leaderless mesh where nodes communicate exclusively via post-quantum encrypted channels with ephemeral identity rotation, mirroring the autonomous behavior of white blood cells.',
      'Employs an adaptive AI Threat Engine powered by a Generative Adversarial Network (GAN) that continuously synthesizes new attack signatures against discriminators trained on real-world APT datasets, evolving countermeasures faster than adversaries can mutate attacks.',
      'Maintains model weights and threat intelligence within a quantum-secured inference pipeline to prevent model poisoning and adversarial exfiltration.',
      'Secures node-to-node links via Quantum Key Distribution (QKD) using the BB84 protocol, exploiting the quantum no-cloning theorem to make eavesdropping physically detectable by collapsing quantum states.',
      'Pairs physical quantum key exchange with NIST-standardized post-quantum cryptographic algorithms (CRYSTALS-Kyber / ML-KEM and CRYSTALS-Dilithium / ML-DSA) to provide cryptographic security against classical and quantum adversaries indefinitely.'
    ],
    howItWorks: [
      'Sentinel Nodes: Lightweight neuromorphic edge-compute units deployed across routers, satellite ground stations, and critical gateways. Nodes rotate ephemeral cryptographic identities and execute on-device threat classification under 50 milliseconds.',
      'AI Threat Engine (GAN Loop): Generative network autonomously invents novel exploitation vectors and adversary mutations; discriminator network evaluates vectors against real-world Advanced Persistent Threat (APT) logs, generating antibodies before zero-day deployment.',
      'Post-Quantum QKD Backbone: Employs BB84 polarized photon quantum state transmission for key exchange. Any interception attempt perturbs polarization and collapses the wave function, alerting the mesh instantly.',
      'Lattice Cryptography Integration: Formats payload encryption using NIST-standardized CRYSTALS-Kyber (ML-KEM-768/1024) and signatures via CRYSTALS-Dilithium (ML-DSA), safeguarding orbital downlinks and industrial telemetry.'
    ],
    capabilities: [
      'Neuromorphic Edge Sentinel Nodes (Sub-50ms decentralized response)',
      'Ephemeral Identity Rotation (Untrackable, compromise-resilient nodes)',
      'Autonomous White-Blood-Cell Mesh Topology (Leaderless, self-healing)',
      'Generative Adversarial Network (GAN) Threat Engine (Antibody synthesis)',
      'Zero-Day Defense against Advanced Persistent Threats (APT Datasets)',
      'Quantum Key Distribution (QKD) using BB84 Protocol (Physics-based security)',
      'No-Cloning Theorem Eavesdrop Detection (Physical state collapse alerting)',
      'NIST Post-Quantum Cryptography (CRYSTALS-Kyber & CRYSTALS-Dilithium)',
      'Quantum-Secured Inference Pipeline (Model weights protected against poisoning)'
    ],
    technology: [
      'Quantum Key Distribution (QKD) & BB84 Photonic Protocol',
      'NIST PQC Standards: CRYSTALS-Kyber (ML-KEM) & CRYSTALS-Dilithium (ML-DSA)',
      'Neuromorphic Edge Computing & On-Device Neural Inference',
      'Generative Adversarial Networks (GANs) for Adversarial Attack Synthesis',
      'Decentralized Peer-to-Peer Leaderless Mesh Architecture',
      'Quantum-Secured Enclave & Ephemeral Identity Rotation OS'
    ],
    useCases: [
      {
        title: 'Orbital Satellite Downlink & Command Channel Defense',
        domain: 'Aerospace & Space Systems',
        description: 'Defending satellite constellation command uplinks and ground telemetry stations against quantum-assisted interception, signal replay, and state-sponsored hijacking.',
        metrics: 'Physical eavesdrop detection via BB84 quantum state collapse'
      },
      {
        title: 'Critical National Infrastructure & Grid Protection',
        domain: 'Civil Defense & Power Utilities',
        description: 'Autonomous machine-speed containment of cyber intrusions across power distribution grids, nuclear facilities, and water treatment networks without waiting 207 days for detection.',
        metrics: 'Sub-50ms automated threat neutralization without human intervention'
      },
      {
        title: 'Autonomous Sentinel Mesh for Telecom Backbones',
        domain: 'Telecommunications & 5G Cores',
        description: 'Deploying leaderless sentinel nodes across subsea cable landing stations and 5G packet cores to insulate continental communications from harvest-now-decrypt-later adversaries.',
        metrics: 'Zero single-point-of-failure immune mesh architecture'
      }
    ],
    architecture: [
      {
        level: '01 Sentinel Nodes',
        name: 'Neuromorphic Edge Immune Nervous System',
        components: ['Neuromorphic Inference Processor', 'Ephemeral Identity Engine', 'Autonomous Threat Classifier', 'Peer-to-Peer Gossip Mesh'],
        protocolOrEngine: 'Lightweight Quantum-Resistant OS / <50ms On-Device AI'
      },
      {
        level: '02 AI Threat Engine',
        name: 'GAN-Powered Adaptive Intelligence Layer',
        components: ['Attack Signature Generator (GAN)', 'APT Discriminator Model', 'Automated Countermeasure Synthesizer', 'Protected Model Pipeline'],
        protocolOrEngine: 'PyTorch / Adversarial GAN Loop / Quantum Enclave'
      },
      {
        level: '03 Quantum Backbone',
        name: 'QKD & Lattice Cryptographic Stack',
        components: ['BB84 Photonic Key Exchanger', 'No-Cloning Eavesdrop Detector', 'CRYSTALS-Kyber (ML-KEM)', 'CRYSTALS-Dilithium (ML-DSA)'],
        protocolOrEngine: 'QKD BB84 / NIST FIPS 203 & 204'
      }
    ],
    specs: [
      { label: 'Threat Response Latency', value: '< 50 ms On-Device Autonomous Inference' },
      { label: 'Quantum Protocols', value: 'BB84 QKD, CRYSTALS-Kyber, CRYSTALS-Dilithium' },
      { label: 'Detection Threshold', value: 'Physical State Collapse via No-Cloning Theorem' },
      { label: 'Mesh Topology', value: 'Leaderless Immune Mesh with Ephemeral Identity' }
    ],
    demoType: 'quantum-crypto'
  }
];
