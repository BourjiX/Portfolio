import { jobSearchRecommendations } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';

export function JobSearchRecommendations() {
  return (
    <section className="py-16">
      <SectionHeader number="10" title="Job Search Recommendations" />
      <div className="max-w-4xl mx-auto space-y-6">
        {jobSearchRecommendations.map((rec, index) => (
          <div key={index} className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900">{rec.title}</h3>
              <span className="text-green-600 font-semibold text-sm">Timeline: {rec.timeframe}</span>
            </div>
            <p className="text-gray-700 mb-4">{rec.description}</p>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Key Focus Areas:</p>
              <div className="flex flex-wrap gap-2">
                {rec.focus.map((item, idx) => (
                  <span key={idx} className="bg-white border border-green-300 text-green-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
