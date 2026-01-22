import React, { useState, useEffect } from 'react';
import { BrainCircuit } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact US', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0c121d] backdrop-blur-2xl shadow-xl py-4' : 'bg-[#0c121d]/95 backdrop-blur-xl py-6'} border-b border-transparent`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setActivePage('home')}>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform bg-white/6`}>
            <BrainCircuit className={`w-6 h-6 text-white`} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`text-xl font-extrabold tracking-tight text-white`}>Joddex</span>
            <span className="text-[11px] uppercase tracking-widest text-blue-200/60">Human-like Hiring</span>
          </div>
        </div>

        {/* Centered Links */}
        <div className="hidden md:flex flex-grow justify-center items-center">
          <div className="flex space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`relative overflow-hidden text-base font-semibold tracking-wide transition-colors px-1 text-white hover:text-blue-50 `}
              >
                    <span className={`${activePage === link.id ? 'opacity-100' : 'opacity-90'} transition-opacity`}>{link.name}</span>
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-transform duration-300 ${activePage === link.id ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`} style={{ transformOrigin: 'left' }}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex justify-end w-48">
          <button className={`px-6 py-2.5 rounded-lg font-bold transition-all ${isScrolled ? 'bg-white text-[#0c121d] shadow-sm' : 'bg-white/12 text-white border border-white/12 hover:bg-white/20'}`}>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
