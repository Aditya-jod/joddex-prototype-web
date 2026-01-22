import React from 'react'
import { Timer, CheckCircle2 } from 'lucide-react'

const PricingCard = ({ tier }) => (
  <div className="group relative bg-white border-2 border-gray-100 p-12 rounded-[3rem] hover:border-[#002B5B] hover:shadow-2xl hover:shadow-[#002B5B]/5 transition-all duration-500">
    <div className="absolute top-8 right-8">
       <div className="flex items-center space-x-2 bg-gray-100 px-4 py-1.5 rounded-full group-hover:bg-[#002B5B] transition-colors">
          <Timer className="w-4 h-4 text-gray-400 group-hover:text-white" />
          <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-white">Coming Soon</span>
       </div>
    </div>
    <h3 className="text-xl font-black text-gray-400 mb-4 uppercase tracking-tighter">{tier.name}</h3>
    <div className="text-5xl font-black text-gray-900 mb-10">{tier.price}<span className="text-lg text-gray-300 font-medium">/mo</span></div>
    <ul className="space-y-4 mb-12">
      {tier.features.map((feature, i) => (
        <li key={i} className="flex items-center space-x-3 text-gray-300 line-through font-medium">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full py-5 bg-gray-50 text-gray-300 rounded-2xl font-black cursor-not-allowed uppercase text-xs tracking-widest border border-gray-100">
      Lock Early Access
    </button>
  </div>
)

export default PricingCard
