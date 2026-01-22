import React, { useState, useEffect } from 'react';
import {
  BrainCircuit,
  Zap,
  ShieldCheck,
  ChevronRight,
  Globe,
  Lock,
  Search,
  LayoutDashboard,
  Timer,
  CheckCircle2,
  ArrowUpRight,
  Fingerprint,
  Menu,
  X,
  Cpu,
  BarChart3,
  Layers,
  Linkedin,
  Instagram
} from 'lucide-react';
import AboutPage from './pages/About';

// --- Theme Constants (Preserved) ---
const COLORS = {
  primary: '#001A3D', // Deep Ink Blue
  accent: '#3B82F6',  // Professional Blue
  textMain: '#111827',
  textMuted: '#4B5563',
  border: '#E5E7EB'
};

// Small presentational component to render the decorative grid with dynamic effects
const GridPattern = ({ size = 64, opacity = 0.06 }) => {
  const bg = `linear-gradient(${COLORS.primary} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.primary} 1px, transparent 1px)`;
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: bg,
          backgroundSize: `${size}px ${size}px`,
          willChange: 'background-position',
        }}
      />

      <div
        className="absolute inset-0 grid-shimmer"
        style={{ mixBlendMode: 'overlay', opacity: 0.045 }}
        aria-hidden
      />

      <style>{`
        @keyframes shimmerMove { 0% { background-position: 0 0; } 50% { background-position: ${size/2}px ${size/2}px; } 100% { background-position: 0 0; } }
        .grid-shimmer {
          background-image: radial-gradient(circle at 10% 20%, ${COLORS.accent} 4px, transparent 20%), radial-gradient(circle at 80% 80%, ${COLORS.primary} 6px, transparent 24%);
          background-size: ${size}px ${size}px, ${size*1.5}px ${size*1.5}px;
          animation: shimmerMove 12s linear infinite;
          filter: blur(12px);
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

// FeatureCard used in Products: keep original simple design, add subtle hover lift/scale/shadow
const FeatureCard = ({ icon: Icon, title, description, className = '' }) => (
  <div
    className={`relative p-8 rounded-3xl border border-gray-100 border-l-4 bg-white overflow-hidden transition-all duration-500 transform-gpu ${className} group hover:-translate-y-2 hover:scale-105 hover:shadow-2xl`}
    style={{ borderLeftColor: COLORS.accent }}
  >
    {/* Decorative ghost watermark using the same icon (subtle, behind content) */}
    {Icon && (
      <div aria-hidden className="absolute top-4 right-4 pointer-events-none opacity-40 transform-gpu transition-transform duration-500 group-hover:scale-105 mix-blend-multiply z-0">
        <Icon className="w-28 h-28 text-gray-300" />
      </div>
    )}

    <div className="relative z-10">
      <div className="w-12 h-12 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-[#001A3D] group-hover:shadow-md">
        {Icon ? (
          <Icon className="text-gray-400 group-hover:text-white w-5 h-5 transition-colors duration-300" />
        ) : (
          <svg className="text-gray-400 group-hover:text-white w-5 h-5 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="3" />
            <path d="M19 12a7 7 0 0 0-14 0" />
          </svg>
        )}
      </div>
      <h3 className="text-lg font-bold text-[#001A3D] mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed font-medium">{description}</p>
    </div>
  </div>
)

// --- Navbar Component (always transparent + small dynamic effects) ---
const Navbar = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['About', 'Products', 'Pricing', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 bg-white/25 backdrop-blur-2xl border-b border-gray-100 py-3`} aria-label="Main navigation">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Brand */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group" 
          onClick={() => setActivePage('home')}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-[#001A3D] rounded-xl flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:rotate-180">
              <BrainCircuit className="text-white w-5 h-5" />
            </div>
            <div className="absolute inset-0 bg-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#001A3D]">JODDEX</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item.toLowerCase())}
              className="px-5 py-2 text-[13px] font-semibold text-gray-500 hover:text-[#001A3D] transition-colors tracking-wide uppercase relative group"
            >
              {item}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#001A3D] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-[13px] font-bold text-white/80 hover:text-white transition-colors uppercase tracking-wider">Login</button>
          <button className="px-5 py-2.5 bg-[#001A3D] text-white text-[13px] rounded-lg font-bold hover:bg-black transition-all active:scale-95 shadow-sm uppercase tracking-wider flex items-center">
            Request Access
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#001A3D]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActivePage(item.toLowerCase());
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-bold text-gray-600 py-2 uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
             <button className="w-full py-3 text-center text-sm font-bold border border-gray-200 rounded-lg">Login</button>
             <button className="w-full py-3 text-center text-sm font-bold bg-[#001A3D] text-white rounded-lg">Request Access</button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section className="relative pt-48 pb-32 px-6 lg:px-8 overflow-hidden bg-white">
    {/* Technical Background Pattern */}
    <div className="absolute inset-0 z-0 opacity-[0.03]" 
         style={{ backgroundImage: 'radial-gradient(#001A3D 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
    </div>
    
    {/* Ambient Glows */}
    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gray-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 -z-10 pointer-events-none"></div>

    <div className="max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center space-x-3 bg-white border border-blue-100 px-4 py-1.5 rounded-full mb-10 shadow-sm animate-fade-in-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
        </span>
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Alpha v1.0.4 Live</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#001A3D] mb-8 tracking-[-0.03em] leading-[0.95]">
        AI that Understands <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
          Resumes Like Humans.
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
        Joddex replaces keyword matching with <span className="text-[#001A3D] font-semibold">neural context</span>. We identify the top-tier talent that legacy ATS systems overlook.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="w-full sm:w-auto px-10 py-4 bg-[#001A3D] text-white rounded-xl font-bold text-sm shadow-xl shadow-blue-900/10 hover:bg-black hover:scale-105 transition-all duration-300 group">
          Join the Waitlist
          <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-sm hover:border-[#001A3D] hover:bg-gray-50 transition-all duration-300">
          View Technical Vision
        </button>
      </div>

      {/* Removed the "Trusted by engineering teams at" block as requested */}
      <div className="mt-24 pt-12 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 pointer-events-none"></div>
      </div>
    </div>
  </section>
);

// --- Pricing Card (suspenseful Launching Soon variant) ---
const PricingCard = ({ tier, recommended = false }) => (
  <div
    aria-hidden={false}
    style={recommended ? undefined : { borderColor: COLORS.border }}
    className={`flex flex-col p-8 rounded-3xl border bg-white transition-all duration-300 relative overflow-hidden group ${
      recommended ? 'shadow-2xl scale-105 z-10 bg-[#001A3D] text-white' : 'hover:shadow-xl'
    }`}
  >
    {recommended && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
        Popular
      </div>
    )}

    <div className="mb-6 text-center">
      <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${recommended ? 'text-blue-200' : 'text-gray-400'}`}>
        {tier.name}
      </h3>

      {/* Suspenseful price placeholder */}
      <div className="flex items-center justify-center h-14 mb-3">
        <div className="w-40 h-10 bg-gray-100/50 rounded-lg flex items-center justify-center animate-pulse"></div>
      </div>

      <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 font-bold text-sm">Launching Soon</div>
    </div>

    {/* Minimal, mysterious feature area */}
    <div className="space-y-3 mb-6 flex-grow">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-3 bg-gray-100 rounded-md opacity-70 animate-pulse" style={{ width: `${70 - i * 10}%` }} />
      ))}
    </div>

    <button
      disabled
      aria-disabled="true"
      className="w-full py-3 rounded-lg font-semibold text-gray-500 bg-gray-100/60 cursor-not-allowed opacity-95"
    >
      Launching Soon
    </button>
  </div>
);
 

// --- Main App Component ---
export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    if (activePage !== 'home') {
      const el = document.getElementById(activePage);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-white text-[#001A3D] selection:bg-blue-100 selection:text-[#001A3D] font-sans antialiased">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      {activePage === 'about' ? (
        <AboutPage setActivePage={setActivePage} />
      ) : (
      <main>
        <div id="home">
          <Hero />
        </div>

        {/* Products Section - Bento Grid Layout */}
        <section id="products" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-[#001A3D]">Engineered for Precision</h2>
              <p className="text-gray-500 font-medium text-lg">Legacy systems rely on simple strings. Joddex builds a cognitive understanding of career trajectories.</p>
            </div>
            <button className="text-[13px] font-bold text-[#001A3D] border-b border-[#001A3D] pb-0.5 flex items-center group hover:opacity-70 transition-opacity">
              Explore Documentation <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Fingerprint}
              title="Identity Neutrality"
              description="Automated obfuscation of demographic markers. Our engine strips bias before the resume ever hits the hiring manager's dashboard."
              className="md:col-span-1"
            />
            <FeatureCard 
              icon={Globe}
              title="Global Context Engine"
              description="Understands educational equivalence across 180+ countries. It knows that a GPA from a specific university in Berlin matches your requirements."
              className="md:col-span-2 bg-gray-50/50"
            />
            <FeatureCard 
              icon={Cpu}
              title="Neural Matching"
              description="Matches candidates based on skill adjacency. A Java developer can be a great C# hire; Joddex knows why."
              className="md:col-span-2 bg-gray-50/50"
            />
            <FeatureCard 
              icon={Lock}
              title="Secure Pipeline"
              description="Enterprise-grade data encryption for every candidate file. SOC2 Type II ready architecture."
              className="md:col-span-1"
            />
          </div>
        </section>

        {/* About summary (short, links to full About page) */}
        <section id="about" className="py-24 bg-[#F9FAFB] border-y border-gray-100 relative overflow-hidden">
          <GridPattern size={64} opacity={0.04} />

          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-widest rounded-md mb-4">About Joddex</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[#001A3D]">A better ATS — built with context</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">We replace brittle keyword filters with a multi-layer AI that reads resumes by section and ranks candidates by real job fit.</p>

              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Fixes parsing errors that exclude qualified candidates.</li>
                <li>Reduces bias through de-identification and explainable scoring.</li>
                <li>Integrates via API — no full-system replacement required.</li>
              </ul>

              <div className="flex gap-4">
                <button onClick={() => setActivePage('about')} className="px-6 py-3 bg-[#001A3D] text-white rounded-lg font-bold">Learn More</button>
                <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-semibold">Join Design Partners</button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg w-full max-w-md">
                <div className="text-sm text-gray-400 uppercase tracking-widest mb-3">Example</div>
                <div className="text-2xl font-bold text-[#001A3D] mb-2">94% match</div>
                <p className="text-sm text-gray-500 mb-4">Sectional analysis shows strong technical fit and positive signal across projects and impact metrics.</p>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-3"><div className="w-[94%] h-full bg-[#001A3D] rounded-full" /></div>
                <div className="text-xs text-gray-500">Transparent reasoning available in the full report.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-[#001A3D]">Early Access Tiers</h2>
            <p className="text-gray-500 font-medium text-lg">Secure your spot in our design partner program. Pricing is locked for early adopters.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <PricingCard tier={{ name: 'Individual', price: '$0', features: ['1 Active Project', 'Basic Neural Parsing', 'Standard Export', 'Community Support'] }} />
            <PricingCard recommended tier={{ name: 'Startup', price: '$49', features: ['10 Active Projects', 'Advanced Ranker', 'API Access', 'Priority Email Support', 'Bias Shield Pro'] }} />
            <PricingCard tier={{ name: 'Enterprise', price: 'Contact', features: ['Unlimited Projects', 'Custom Model Training', 'SSO & Audit Logs', 'Dedicated Success Manager'] }} />
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-[#001A3D] rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-900/30">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-[-0.02em] leading-tight">
                Contact Us
              </h2>
              <p className="text-blue-200 text-lg mb-12 max-w-2xl mx-auto font-medium">
                Interested in the product or want to discuss partnerships? Reach out and we'll respond within 2 business days.
              </p>
              
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="your@work.email" 
                  className="flex-grow px-6 py-4 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 font-medium placeholder:text-blue-200/50 transition-all backdrop-blur-sm"
                />
                <button className="bg-white text-[#001A3D] px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-50 hover:scale-105 transition-all shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}

      {/* Footer - preserved (no changes) */}
      <footer className="bg-[#0c121d] text-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BrainCircuit className="text-white w-7 h-7" />
              <div>
                <div className="text-lg font-extrabold tracking-tight text-white">JODDEX</div>
                <div className="text-sm text-blue-200/80">Human-like Hiring</div>
              </div>
            </div>
            <p className="text-sm text-blue-200/70 max-w-sm">We build fair, fast, and context-aware AI for recruitment. Join our early access list for product updates and partnership opportunities.</p>
            <div className="flex items-center space-x-3">
              <a href="https://www.linkedin.com/company/joddex" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="bg-white/6 p-2 rounded-md hover:bg-white/8 transition">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/joddex" target="_blank" rel="noreferrer" aria-label="Instagram" className="bg-white/6 p-2 rounded-md hover:bg-white/8 transition">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-blue-100/80">
              <li><a href="#products" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-blue-100/80">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4">Contact</h4>
            <p className="text-sm text-blue-100/80 mb-4">Have questions or want to partner? Reach us and we’ll get back within 2 business days.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
              <input type="email" placeholder="Your work email" className="flex-grow px-4 py-2 rounded-md bg-white/6 placeholder:text-blue-200/60 text-white focus:outline-none" />
              <button className="px-4 py-2 bg-white text-[#001A3D] rounded-md font-semibold hover:brightness-95">Join</button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 mt-12 border-t border-white/8 pt-8 text-center text-xs text-blue-200/60">
          © {new Date().getFullYear()} Joddex Labs. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
