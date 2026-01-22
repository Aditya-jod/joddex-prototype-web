import React from 'react';

const MiniFeature = ({ title, desc }) => (
  <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="font-semibold text-[#001A3D] mb-1">{title}</div>
    <div className="text-sm text-gray-600">{desc}</div>
  </div>
);

export default function AboutPage({ setActivePage }) {
  return (
    <div className="min-h-screen bg-white text-[#001A3D] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-[10px] font-bold uppercase tracking-widest rounded-md">About</div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">JODDEX</h1>
          <p className="text-lg text-gray-600 mt-3">AI that understands resumes like a human — designed to fix parsing, reduce bias, and surface the right candidates.</p>
        </div>

        <section className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-3">Mission</h2>
            <p className="text-gray-600 mb-4">Get Started — An AI-powered hiring platform that eliminates bias, fixes resume parsing, and helps teams find the right talent faster.</p>

            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-widest mb-2">What we fix</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Parsing errors that exclude qualified people (the 70% problem).</li>
              <li>Keyword-only filters that miss real fit and introduce bias.</li>
              <li>Poor candidate experience and limited actionable reporting.</li>
            </ul>

            <button onClick={() => setActivePage && setActivePage('home')} className="px-5 py-3 bg-[#001A3D] text-white rounded-md font-bold">Back to Home</button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">How JODDEX helps</h3>
            <p className="text-gray-600 mb-4">A multi-layer AI analyzes each resume section (skills, experience, education, projects, etc.) independently and ranks candidates by contextual relevance rather than exact wording.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <MiniFeature title="Semantic Matching" desc="Meaning-based ranking across sections." />
              <MiniFeature title="Bias Reduction" desc="De-identification and auditable explanations." />
              <MiniFeature title="Sectional Parsing" desc="Structured outputs for more reliable signals." />
              <MiniFeature title="Easy Integration" desc="API-first — plug into any ATS without replacing it." />
            </div>
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Workflow</div>
              <div className="font-bold text-lg text-[#001A3D]">Upload → Analyze → Evaluate → Rank</div>
            </div>
            <div className="text-sm text-gray-500">Status: <span className="font-semibold text-yellow-600">Launching Soon</span></div>
          </div>

          <p className="text-gray-600">We focus on clear, auditable reasoning — the score is the start, the explanation is the product. If you'd like to be a design partner, join our waitlist from the homepage.</p>
        </section>
      </div>
    </div>
  );
}
