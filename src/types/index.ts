export type PortfolioTier = 'PRODUCT' | 'PLATFORM' | 'RESEARCH' | 'EXPERIMENTAL';

export interface UseCase {
  title: string;
  domain: string;
  description: string;
  metrics?: string;
}

export interface ArchitectureLayer {
  level: string;
  name: string;
  components: string[];
  protocolOrEngine: string;
}

export interface Product {
  id: string;
  slug: string;
  number: string;
  name: string;
  fullName: string;
  tier: PortfolioTier;
  category: string;
  tagline: string;
  shortDescription: string;
  status?: string;
  problem: string[];
  whatItDoes: string[];
  howItWorks: string[];
  capabilities: string[];
  technology: string[];
  useCases: UseCase[];
  architecture: ArchitectureLayer[];
  architectureDescription?: string;
  inputs?: string[];
  outputs?: string[];
  targetUsers?: { role: string; organization: string }[];
  deployment?: {
    environment: string;
    hardware: string;
    connectivity: string;
  };
  researchAndPatents?: string[];
  specs: { label: string; value: string; note?: string }[];
  demoType: 'city-operations' | 'spatial-ndvi' | 'orbital-telemetry' | 'soil-spectral' | 'edge-5g' | 'fatigue-vision' | 'slam-mapping' | 'quantum-crypto';
}

export interface CapabilityCategory {
  id: string;
  number: string;
  title: string;
  summary: string;
  items: string[];
}

export interface TechPipelineStage {
  id: string;
  step: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  standards: string[];
  inputs: string;
  outputs: string;
}

export interface ApplicationDomain {
  id: string;
  number: string;
  title: string;
  focus: string;
  description: string;
  subdomains: {
    name: string;
    description: string;
    detail?: string;
  }[];
  operationalImpact: string;
  relatedProducts?: string[];
}

export interface ResearchItem {
  id: string;
  number: string;
  title: string;
  status: 'ACTIVE LAB' | 'PROTOTYPE VALIDATION' | 'FIELD EXPERIMENTAL' | 'STANDARDS DRAFT';
  area: string;
  description: string;
  technicalMilestones: string[];
  relatedProgram: string;
  documentationStatus: string;
}

export interface DemoFormSubmission {
  name: string;
  organization: string;
  workEmail: string;
  phone?: string;
  areaOfInterest: string;
  operationalEnvironment: string;
  message: string;
}
