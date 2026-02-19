import React from 'react'
import { BrainCircuit, Linkedin, Instagram, Mail } from 'lucide-react'

const Footer = () => (
  <footer className="bg-[#001A3D] text-blue-100 py-16 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <BrainCircuit className="text-white w-8 h-8" />
          <span className="text-2xl font-black text-white tracking-tighter uppercase">Joddex</span>
        </div>
        <p className="text-sm text-blue-200/80 max-w-sm">We build human-like AI for recruitment — fairer, faster, and more context-aware. Join our waitlist for early access and product updates.</p>
        <div className="flex items-center space-x-3">
          <a href="https://www.linkedin.com/company/joddex" target="_blank" rel="noreferrer" aria-label="Joddex on LinkedIn" className="hover:opacity-90">
            <Linkedin className="w-6 h-6 text-blue-100" />
          </a>
          <a href="https://www.instagram.com/joddex_official/" target="_blank" rel="noreferrer" aria-label="Joddex on Instagram" className="hover:opacity-90">
            <Instagram className="w-6 h-6 text-blue-100" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:justify-self-center">
        <div>
          <h4 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-blue-100/80">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Demo</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-blue-100/80">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>
      </div>

      <div className="md:justify-self-end">
        <h4 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-3">Stay in touch</h4>
        <div className="flex items-center gap-3 bg-white/6 border border-white/8 p-3 rounded-md">
          <Mail className="w-5 h-5 text-blue-100" />
          <a href="#contact" className="text-sm text-blue-100 hover:text-white">Contact us</a>
        </div>
        <div className="mt-6 text-sm text-blue-200/60">© {new Date().getFullYear()} Joddex. All rights reserved.</div>
      </div>
    </div>
  </footer>
)

export default Footer
