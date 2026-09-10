import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WhatWeBuildSection } from '../components/home/WhatWeBuildSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { TechnologySection } from '../components/home/TechnologySection';
import { ApplicationsSection } from '../components/home/ApplicationsSection';
import { ResearchSection } from '../components/home/ResearchSection';
import { CompanySection } from '../components/home/CompanySection';
import { RequestDemoSection } from '../components/home/RequestDemoSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <WhatWeBuildSection />
      <ProductsSection />
      <CapabilitiesSection />
      <TechnologySection />
      <ApplicationsSection />
      <ResearchSection />
      <CompanySection />
      <RequestDemoSection />
    </div>
  );
};
