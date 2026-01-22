import React from 'react'

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className={`bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/30 hover:shadow-2xl hover:shadow-[#002B5B]/10 hover:-translate-y-3 transition-all duration-500 group ${className}`}>
      {Icon && <Icon className="text-[#002B5B] group-hover:text-white w-8 h-8 transition-colors duration-500" />}
    </div>
    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
  </div>
)

export default FeatureCard
    <div className="w-16 h-16 bg-blue-50 group-hover:bg-[#002B5B] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
      {Icon && <Icon className="text-[#002B5B] group-hover:text-white w-8 h-8 transition-colors duration-500" />}
    </div>
    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
  </div>
)

export default FeatureCard
