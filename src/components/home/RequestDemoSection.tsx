import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export const RequestDemoSection: React.FC = () => {
  const { selectedDemoInterest, setSelectedDemoInterest } = useNavigation();

  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: selectedDemoInterest || 'ARKA (City Operations Platform)',
    environment: '',
    dataClassification: 'Commercial / Civil Infrastructure'
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [error, setError] = useState('');

  const interestOptions = [
    'ARKA (City Operations Platform)',
    'IRA (Remote Sensing & GIS Analytics)',
    'VYOM (Space & Earth Observation Platform)',
    'ASIMOV (Post-Quantum Cryptographic Mesh)',
    'GENERAL TECHNICAL BRIEFING'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.organization.trim() || !formState.email.trim()) {
      setError('Please complete Name, Organization, and Work Email.');
      return;
    }

    // Email format check
    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setError('Please enter a valid work email address.');
      return;
    }

    setError('');
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const id = `ARKA-ENG-${new Date().getFullYear()}-${randomHex}`;
    setTicketId(id);
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-24 border-b border-white/10 bg-[#050505] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Intent */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-neutral-400">
                09 // TECHNICAL DEMONSTRATION
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                See what the system can do.
              </h2>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Tell us what environment, infrastructure or operational problem you are trying to understand. We can show you the relevant platform or technology.
            </p>

            <div className="p-4 bg-black/60 border border-white/10 rounded-xs space-y-3 font-mono-tech text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-neutral-300" />
                <span>CONFIDENTIALITY & OPERATIONAL INTEGRITY</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal">
                ARKA briefs engineers, program directors, and operators directly. We conduct live technical demonstrations using real spatial scenarios or customer-supplied benchmark geometries under mutual NDA when required.
              </p>
            </div>

            <div className="space-y-2 text-[11px] font-mono-tech text-neutral-500">
              <div>RESPONSE WINDOW: WITHIN 1 OPERATIONAL BUSINESS DAY</div>
              <div>DIRECT DIALOGUE: ARKA APPLIED ENGINEERING TEAM</div>
            </div>
          </div>

          {/* Right Column: Form or Confirmation */}
          <div className="lg:col-span-7 bg-[#090909] border border-white/10 p-6 sm:p-8 rounded-xs">
            {submitted ? (
              <div className="py-8 space-y-6 text-center font-mono-tech">
                <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/20 text-white">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    TECHNICAL INQUIRY TRANSMITTED
                  </h3>
                  <div className="mt-2 text-xs text-neutral-400">
                    REFERENCE DISPATCH ID: <span className="text-white font-semibold">{ticketId}</span>
                  </div>
                </div>

                <div className="p-4 bg-black border border-white/10 rounded-xs text-left text-xs space-y-1.5 text-neutral-400">
                  <div className="text-[10px] text-neutral-500 uppercase">TRANSMISSION SUMMARY:</div>
                  <div><span className="text-neutral-500">NAME:</span> {formState.name}</div>
                  <div><span className="text-neutral-500">ORG:</span> {formState.organization}</div>
                  <div><span className="text-neutral-500">WORK EMAIL:</span> {formState.email}</div>
                  <div><span className="text-neutral-500">INTEREST:</span> {formState.interest}</div>
                </div>

                <p className="text-xs text-neutral-400">
                  An ARKA systems engineer will review your operational environment and contact you with scheduling coordinates.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: '',
                      organization: '',
                      email: '',
                      phone: '',
                      interest: 'ARKA (City Operations Platform)',
                      environment: '',
                      dataClassification: 'Commercial / Civil Infrastructure'
                    });
                  }}
                  className="px-4 py-2 border border-white/20 text-neutral-300 text-xs uppercase tracking-wider hover:bg-white/5 cursor-pointer rounded-xs"
                >
                  TRANSMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech text-xs">
                {error && (
                  <div className="p-3 bg-red-950/40 border border-red-800/60 text-red-300 rounded-xs text-xs">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase text-neutral-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Dr. Alex Mercer"
                      className="w-full bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-neutral-600 focus:outline-hidden focus:border-white rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-neutral-400 mb-1">
                      Organization / Agency *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.organization}
                      onChange={e => setFormState({ ...formState, organization: e.target.value })}
                      placeholder="e.g. Municipal Transportation Authority"
                      className="w-full bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-neutral-600 focus:outline-hidden focus:border-white rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase text-neutral-400 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@organization.gov"
                      className="w-full bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-neutral-600 focus:outline-hidden focus:border-white rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-neutral-400 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-neutral-600 focus:outline-hidden focus:border-white rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-neutral-400 mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formState.interest}
                    onChange={e => {
                      setFormState({ ...formState, interest: e.target.value });
                      setSelectedDemoInterest(e.target.value);
                    }}
                    className="w-full bg-black border border-white/15 px-3 py-2 text-white focus:outline-hidden focus:border-white rounded-xs"
                  >
                    {interestOptions.map(opt => (
                      <option key={opt} value={opt} className="bg-neutral-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-neutral-400 mb-1">
                    Operational Environment / Problem Statement
                  </label>
                  <textarea
                    rows={4}
                    value={formState.environment}
                    onChange={e => setFormState({ ...formState, environment: e.target.value })}
                    placeholder="Describe your spatial constraints, latency requirements, existing telemetry sources, or evaluation scope..."
                    className="w-full bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-neutral-600 focus:outline-hidden focus:border-white rounded-xs text-xs font-mono-tech"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-[10px] text-neutral-500">
                    TRANSMISSION VIA TLS 1.3 ENCRYPTION
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-white text-black font-bold uppercase tracking-[0.2em] rounded-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
