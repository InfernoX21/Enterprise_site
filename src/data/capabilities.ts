import { CapabilityCategory } from '../types';

export const capabilitiesData: CapabilityCategory[] = [
  {
    id: 'geospatial-computing',
    number: '01',
    title: 'Geospatial Computing',
    summary: 'High-throughput spatial coordinate math, multi-dimensional geometric indexing, and cloud-native spatial query execution.',
    items: [
      'Geographic Information Systems (GIS)',
      'High-performance spatial databases (PostGIS, MobilityDB)',
      'Spatiotemporal analytics & hexagonal discrete global grids (H3, S2)',
      'Geospatial visualization & continuous vector rendering',
      '3D geographic coordinate systems & digital elevation models (DEM)'
    ]
  },
  {
    id: 'earth-observation',
    number: '02',
    title: 'Earth Observation',
    summary: 'Multi-constellation satellite imagery ingestion, radiometric calibration, and multi-spectral surface analytics.',
    items: [
      'Multi-constellation optical satellite imagery pipelines',
      'Synthetic Aperture Radar (SAR) interferometry & backscatter',
      'Atmospheric correction & surface reflectance normalization',
      'Multi-temporal change detection & phenology tracking',
      'Environmental monitoring (hydrology, canopy density, thermal flux)'
    ]
  },
  {
    id: 'computer-vision',
    number: '03',
    title: 'Computer Vision',
    summary: 'Real-time scene parsing, physical object localization, and kinetic motion tracking across static and aerial sensor streams.',
    items: [
      'Real-time object detection & bounding geometry regression',
      'High-resolution aerial & orbital semantic segmentation',
      'Multi-camera tracking & kinetic trajectory estimation',
      'Facial landmark & operator gaze alertness analysis',
      '3D scene understanding & depth estimation from 2D streams'
    ]
  },
  {
    id: 'digital-twins',
    number: '04',
    title: 'Digital Twins',
    summary: 'Physically accurate 3D computational replicas of metropolitan infrastructure, utilities, and regional terrain.',
    items: [
      'Dynamic 3D voxel & mesh environment modeling',
      'Cadastral and underground utility infrastructure mapping',
      'Physical environment simulation (traffic, hydraulics, thermal)',
      'Sub-second real-time telemetry synchronization',
      'High-fidelity WebGL / WebGPU scene visualizers'
    ]
  },
  {
    id: 'edge-networked-systems',
    number: '05',
    title: 'Edge & Networked Systems',
    summary: 'Distributed edge intelligence, deterministic low-latency communication slices, and field sensor mesh protocols.',
    items: [
      'Low-power edge AI inference on ruggedized silicon',
      'Private 5G stand-alone (SA) and URLLC low-latency transport',
      'Industrial IoT telemetry acquisition (MQTT, Modbus, OPC-UA)',
      'Distributed stream processing & zero-copy memory pipelines',
      'Resilient edge-to-cloud synchronization under intermittent backhaul'
    ]
  },
  {
    id: 'autonomous-systems',
    number: '06',
    title: 'Autonomous Systems',
    summary: 'Spatial perception, simultaneous localization, and resilient trajectory planning for unmanned vehicles and robotic agents.',
    items: [
      'Unmanned aerial vehicles (UAV) & autonomous mobile robots',
      'Visual-inertial odometry (VIO) & collaborative SLAM',
      'GPS-denied navigation in subterranean and dense urban environments',
      '3D octree occupancy mapping & real-time obstacle avoidance',
      'Multi-agent peer-to-peer spatial consensus protocols'
    ]
  },
  {
    id: 'security-infrastructure',
    number: '07',
    title: 'Security & Computational Infrastructure',
    summary: 'Cryptographic data integrity, verifiable audit trails, and post-quantum security hardening for critical national assets.',
    items: [
      'Post-quantum lattice-based key exchange and signature schemes',
      'Hardware security module (HSM) & secure boot attestation',
      'High-throughput distributed consensus & fault-tolerant replication',
      'End-to-end encrypted telemetry over zero-trust architectures',
      'Compliant spatial data access control for civil & defense operators'
    ]
  }
];
