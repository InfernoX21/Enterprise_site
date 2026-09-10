import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { productsData } from '../data/products';
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';

export const ProductsListPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedTier, setSelectedTier] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tiers = ['ALL', 'PLATFORM', 'PRODUCT', 'RESEARCH', 'EXPERIMENTAL'];

  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      const matchesTier = selectedTier === 'ALL' || p.tier === selectedTier;
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(q) ||
        p.fullName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.technology.some(t => t.toLowerCase().includes(q));
      return matchesTier && matchesSearch;
    });
  }, [selectedTier, searchQuery]);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-10 space-y-4">
          <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
            SYSTEMS CATALOG
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            Products & Platforms
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl font-normal">
            Specialized computational engines, sensor platforms, and edge runtimes engineered for deterministic operation across physical environments.
          </p>

          {/* Search & Tier Filters */}
          <div className="pt-6 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by system name, sensor, or keyword..."
                className="w-full bg-[#090909] border border-white/15 pl-9 pr-4 py-2 text-xs font-mono-tech text-white placeholder-neutral-500 focus:outline-hidden focus:border-white rounded-xs"
              />
            </div>

            {/* Tier Badges */}
            <div className="flex flex-wrap items-center gap-1.5 border border-white/10 p-1 bg-black/60 rounded-xs">
              {tiers.map(tier => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-3 py-1.5 text-[10px] font-mono-tech uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                    selectedTier === tier
                      ? 'bg-white text-black font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="divide-y divide-white/10">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center text-xs font-mono-tech text-neutral-500">
              No systems match the current search filters.
            </div>
          ) : (
            filteredProducts.map(product => (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.slug}`)}
                className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group cursor-pointer hover:bg-white/[0.015] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
              >
                {/* ID & Tier */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-tech text-neutral-500">{product.number}</span>
                    <span className="text-[9px] font-mono-tech uppercase tracking-widest px-2 py-0.5 border border-white/15 bg-white/5 text-neutral-300 rounded-xs">
                      {product.tier}
                    </span>
                    <span className="text-[9px] font-mono-tech uppercase text-neutral-500">
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-xs font-mono-tech text-neutral-400 uppercase">
                    {product.fullName}
                  </div>
                </div>

                {/* Description & Technology */}
                <div className="lg:col-span-5 space-y-3">
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {product.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.technology.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-black border border-white/10 text-neutral-400 text-[10px] font-mono-tech rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metric & CTA */}
                <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end space-y-4">
                  <div className="text-left lg:text-right">
                    <div className="text-[9px] font-mono-tech text-neutral-500 uppercase">PRIMARY METRIC</div>
                    <div className="text-xs font-mono-tech text-white font-semibold">{product.specs[0]?.label}: {product.specs[0]?.value}</div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-white group-hover:translate-x-1 transition-transform">
                    <span>SPEC SHEET</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
