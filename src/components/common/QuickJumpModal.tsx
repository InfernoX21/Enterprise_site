import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { productsData } from '../../data/products';
import { capabilitiesData } from '../../data/capabilities';
import { technologyStages } from '../../data/technology';
import { applicationsData } from '../../data/applications';
import { researchData } from '../../data/research';
import { Search, X, ArrowRight, CornerDownLeft, Box, Cpu, Layers, Globe, FileText } from 'lucide-react';

export const QuickJumpModal: React.FC = () => {
  const { isQuickJumpOpen, setIsQuickJumpOpen, navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isQuickJumpOpen) {
      setSearchQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isQuickJumpOpen]);

  interface SearchItem {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    icon: React.ReactNode;
    action: () => void;
  }

  const allItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // Products
    productsData.forEach(p => {
      items.push({
        id: `prod-${p.id}`,
        title: `${p.name} — ${p.fullName}`,
        subtitle: p.shortDescription,
        category: `PRODUCTS [${p.tier}]`,
        icon: <Box className="w-3.5 h-3.5 text-neutral-300" />,
        action: () => navigate(`/products/${p.slug}`)
      });
    });

    // Capabilities
    capabilitiesData.forEach(c => {
      items.push({
        id: `cap-${c.id}`,
        title: c.title,
        subtitle: c.summary,
        category: 'CAPABILITIES',
        icon: <Layers className="w-3.5 h-3.5 text-neutral-300" />,
        action: () => navigate('/#capabilities', { scrollToId: 'capabilities' })
      });
    });

    // Technology Pipeline Stages
    technologyStages.forEach(t => {
      items.push({
        id: `tech-${t.id}`,
        title: `${t.step}. ${t.name}`,
        subtitle: t.tagline,
        category: 'TECHNOLOGY STACK',
        icon: <Cpu className="w-3.5 h-3.5 text-neutral-300" />,
        action: () => navigate('/technology')
      });
    });

    // Applications
    applicationsData.forEach(a => {
      items.push({
        id: `app-${a.id}`,
        title: a.title,
        subtitle: a.focus,
        category: 'APPLICATIONS',
        icon: <Globe className="w-3.5 h-3.5 text-neutral-300" />,
        action: () => navigate('/applications')
      });
    });

    // Research
    researchData.forEach(r => {
      items.push({
        id: `res-${r.id}`,
        title: `${r.number}: ${r.title}`,
        subtitle: r.description,
        category: `RESEARCH [${r.status}]`,
        icon: <FileText className="w-3.5 h-3.5 text-neutral-300" />,
        action: () => navigate('/research')
      });
    });

    // Static pages
    items.push(
      {
        id: 'page-platform',
        title: 'Platform Architecture',
        subtitle: 'Space → Earth → Data → Computation → Action',
        category: 'OVERVIEW',
        icon: <Layers className="w-3.5 h-3.5 text-neutral-300" />,
        action: () => navigate('/platform')
      },
      {
        id: 'page-company',
        title: 'Company & Engineering Philosophy',
        subtitle: 'Principles for physical systems and real-world deployment',
        category: 'COMPANY',
        icon: <Box className="w-3.5 h-3.5 text-neutral-300" />,
        action: () => navigate('/company')
      },
      {
        id: 'page-demo',
        title: 'Request Technical Demonstration',
        subtitle: 'Engage with ARKA engineering for operational environments',
        category: 'ENGAGE',
        icon: <ArrowRight className="w-3.5 h-3.5 text-neutral-300" />,
        action: () => navigate('/demo')
      }
    );

    return items;
  }, [navigate]);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return allItems.slice(0, 8);
    const q = searchQuery.toLowerCase();
    return allItems.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [allItems, searchQuery]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        setIsQuickJumpOpen(false);
      }
    }
  };

  if (!isQuickJumpOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-100"
      onClick={() => setIsQuickJumpOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl bg-[#090909] border border-white/20 rounded-xs shadow-2xl overflow-hidden font-sans"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-4 h-4 text-neutral-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, technology stack, capabilities, research..."
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-hidden font-mono-tech"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-neutral-500 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <span className="text-[10px] font-mono-tech text-neutral-500 border border-white/10 px-1.5 py-0.5 rounded-xs">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-white/5 py-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono-tech text-neutral-500">
              No matching systems or documentation found for "{searchQuery}".
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.action();
                    setIsQuickJumpOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`px-4 py-3 flex items-start gap-3 cursor-pointer transition-colors ${
                    isSelected ? 'bg-white/10 text-white' : 'text-neutral-300 hover:bg-white/5'
                  }`}
                >
                  <div className="mt-0.5 p-1 rounded-xs bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs font-medium text-white truncate">
                        {item.title}
                      </div>
                      <span className="text-[9px] font-mono-tech text-neutral-400 shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  {isSelected && (
                    <CornerDownLeft className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-1" />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-black/60 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tech text-neutral-500">
          <div className="flex items-center gap-3">
            <span>↑↓ TO NAVIGATE</span>
            <span>↵ TO SELECT</span>
          </div>
          <span>ARKA DIRECTORY INDEX</span>
        </div>
      </div>
    </div>
  );
};
