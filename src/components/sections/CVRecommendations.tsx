import { cvRecommendations } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';

export function CVRecommendations() {
  return (
    <section className="py-16">
      <SectionHeader number="09" title="CV Recommendations" />
      <div className="max-w-4xl mx-auto space-y-4">
        {cvRecommendations.map((rec, index) => (
          <div key={index} className="border-l-4 border-amber-500 pl-6 py-4 bg-amber-50 rounded-r-lg px-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-bold text-gray-900">{rec.title}</h3>
              {rec.priority && (
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                  rec.priority === 'High' 
                    ? 'bg-red-200 text-red-800' 
                    : 'bg-yellow-200 text-yellow-800'
                }`}>
                  {rec.priority} Priority
                </span>
              )}
            </div>
            <p className="text-gray-700 mt-3">{rec.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
