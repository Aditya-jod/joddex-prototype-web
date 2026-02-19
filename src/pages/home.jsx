import React from 'react'
import Hero from '../components/hero'
import FeatureCard from '../components/feature-card'
import PricingCard from '../components/pricing-card'
import { Search, LayoutDashboard, Zap, CheckCircle2, Timer } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>

      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard 
            icon={Search}
            title="Contextual Search"
            description="Find candidates based on the 'meaning' of their work history, not just matching specific keywords or job titles."
          />
          <FeatureCard 
            icon={LayoutDashboard}
            title="Visual Pipeline"
            description="A beautifully intuitive dashboard that maps your talent pool's density and skill distribution automatically."
          />
          <FeatureCard 
            icon={Zap}
            title="Instant Shortlisting"
            description="Our AI ranks the top 5% of candidates within seconds of application, explaining exactly why they fit the role."
          />
        </div>
      </section>

      <section id="about" className="py-24 bg-[#002B5B] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 leading-tight">We're reimagining <br/> hiring from scratch.</h2>
            <p className="text-blue-100/80 text-lg mb-10 leading-relaxed font-medium">
              Joddex is in the prototype stage of a revolution. We are moving away from robotic keyword filtering and towards a system that truly "reads" a candidate's potential. Our vision is a fair, fast, and human-like intelligence for every recruiter.
            </p>
            <div className="flex gap-10">
              <div>
                <div className="text-4xl font-black mb-1">98%</div>
                <div className="text-blue-300 text-sm font-bold uppercase tracking-widest">Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-1">10x</div>
                <div className="text-blue-300 text-sm font-bold uppercase tracking-widest">Efficiency</div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[3rem] shadow-2xl">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-xs font-mono text-blue-300 ml-4">JODDEX_CORE_ENGINE_V1.log</span>
            </div>
            <div className="space-y-4 font-mono text-sm text-blue-100">
              <div className="opacity-50 tracking-tighter">[{'>'}] Initializing neural parsing...</div>
              <div className="opacity-70 tracking-tighter">[{'>'}] Identifying latent skill clusters...</div>
              <div className="text-green-400 tracking-tighter">[{'>'}] 1,240 tokens analyzed. Context match: 94%</div>
              <div className="animate-pulse flex items-center">
                <span className="w-2 h-4 bg-blue-400 inline-block"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">Simple Pricing</h2>
            <p className="text-gray-500 font-medium">Everything you need to hire at scale, coming soon.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard tier={{ name: 'Basic', price: 'Free', features: ['1 Active Job', 'Basic Parsing', 'Email Support'] }} />
            <PricingCard tier={{ name: 'Pro', price: '$99', features: ['10 Active Jobs', 'AI Ranker', 'Priority Support'] }} />
            <PricingCard tier={{ name: 'Enterprise', price: 'Custom', features: ['Unlimited Jobs', 'Full API Access', 'Custom Models'] }} />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-[#001A3D] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Want to see the <br/>prototype in action?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed opacity-80">We're currently selecting design partners for our closed beta. Drop your email below to receive our development roadmap and early access.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-center">
              <label htmlFor="email" className="sr-only">Work email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your work email"
                aria-label="Work email"
                className="flex-grow px-5 py-4 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0c121d] placeholder-gray-400 font-medium transition"
              />
              <button type="submit" className="inline-flex items-center gap-2 bg-[#001A3D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transform hover:-translate-y-0.5 transition">Submit</button>
              <p className="mt-3 text-xs text-gray-500 sm:mt-0 sm:ml-3">We respect your privacy — we won’t share your email.</p>
            </form>
            
            <div className="mt-12 flex justify-center items-center space-x-12 opacity-40 text-white font-black text-xs uppercase tracking-[0.3em]">
              <span>Innovation</span>
              <span>•</span>
              <span>Accuracy</span>
              <span>•</span>
              <span>Fairness</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
// End of Home page
