import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

const Hero = () => (
  <section className="relative pt-40 pb-32 px-6 overflow-hidden">
    {/* Dynamic Blur Blobs - Hero Only */}
    <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[100px]"></div>
    
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center space-x-2 bg-[#0c121d] px-5 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-10 shadow-md">
        <Sparkles className="w-4 h-4 text-white" />
        <span>The Future of AI Recruitment</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight leading-[0.9]">
        AI that Understands <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
          Resumes Like Humans.
        </span>
      </h1>
      
      <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
        Joddex goes beyond keywords. We're building the first neural ATS that understands intent, context, and potential just like a professional recruiter.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <button className="w-full sm:w-auto px-10 py-5 bg-[#001A3D] text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/20 hover:scale-105 active:scale-95 transition-all">
          Join the Waitlist
        </button>
        <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#001A3D] border-2 border-gray-100 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center group">
          Watch Demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
)

export default Hero
