import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { productsData } from '../../data/products';
import { ArrowRight, Terminal } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeTier, setActiveTier] = useState<string>('ALL');

  const tiers = ['ALL', 'PLATFORMS', 'PRODUCTS', 'RESEARCH'];

  const filteredProducts = activeTier === 'ALL'
    ? productsData
    : productsData.filter(p => {
        if (activeTier === 'PLATFORMS') return p.tier === 'PLATFORM';
        if (activeTier === 'PRODUCTS') return p.tier === 'PRODUCT';
        if (activeTier === 'RESEARCH') return p.tier === 'RESEARCH' || p.tier === 'EXPERIMENTAL';
        return true;
      });

  return (
    <section id="products" className="py-24 border-b border-white/10 bg-[#050505] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
              03 // TECHNOLOGY PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Products
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-normal">
              Technology built for specific problems.
            </p>
          </div>

          {/* Tier Filter Tabs */}
          <div className="flex items-center gap-2 border border-white/10 p-1 bg-black/60 rounded-xs">
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTier(t)}
                className={`px-3 py-1.5 text-[10px] font-mono-tech uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                  activeTier === t
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Product Blocks Stack */}
        <div className="divide-y divide-white/10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${product.slug}`)}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group cursor-pointer hover:bg-white/[0.015] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              {/* Left Column: Number & Tier & Category */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono-tech text-neutral-500">
                    {product.number}
                  </span>
                  <span className="text-[9px] font-mono-tech uppercase tracking-[0.2em] px-2 py-0.5 border border-white/15 bg-white/5 text-neutral-300 rounded-xs">
                    {product.tier}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans group-hover:text-neutral-100 transition-colors">
                  {product.name}
                </h3>

                <div className="text-xs font-mono-tech uppercase tracking-wider text-neutral-400">
                  {product.category}
                </div>
              </div>

              {/* Middle Column: One-Sentence Description & Problem Statement */}
              <div className="lg:col-span-5 space-y-4">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {product.shortDescription}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.technology.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-black border border-white/10 text-neutral-400 text-[10px] font-mono-tech rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {product.technology.length > 4 && (
                    <span className="text-[10px] font-mono-tech text-neutral-500 self-center">
                      +{product.technology.length - 4} MORE
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: CTA & Technical Metadata */}
              <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end space-y-6">
                <div className="text-left lg:text-right space-y-1">
                  <div className="text-[10px] font-mono-tech text-neutral-500 uppercase">
                    PRIMARY METRIC
                  </div>
                  <div className="text-xs font-mono-tech text-neutral-200">
                    {product.specs[0]?.label}: <span className="text-white font-semibold">{product.specs[0]?.value}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.18em] text-white group-hover:translate-x-1 transition-transform">
                  <span>VIEW PRODUCT</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
