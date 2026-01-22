import React from 'react'

const FR_BLUE = '#0b3d91'

const FeatureCard = ({ icon: Icon, title, description, className = '' }) => (
  <div
    className={`p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-500 group relative overflow-hidden border-l-4 card-3d ${className}`}
    style={{ borderLeftColor: FR_BLUE }}
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 decorative-icon">
      {Icon ? <Icon className="w-24 h-24 text-[#001A3D]" /> : null}
    </div>

    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0b3d91] transition-colors duration-300 relative z-10 icon-container">
      {Icon ? <Icon className="text-[#001A3D] group-hover:text-white w-6 h-6 transition-colors duration-300" /> : null}
    </div>

    <h3 className="text-xl font-bold text-[#001A3D] mb-3 tracking-tight relative z-10">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed font-medium relative z-10">{description}</p>
  </div>
)

export default FeatureCard