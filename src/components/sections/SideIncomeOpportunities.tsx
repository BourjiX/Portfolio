import { sideIncomeOpportunities } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';

export function SideIncomeOpportunities() {
  return (
    <section className="py-16">
      <SectionHeader number="11" title="Side Income Opportunities" />
      <div className="max-w-4xl mx-auto space-y-5">
        {sideIncomeOpportunities.map((opp, index) => (
          <div key={index} className="border-2 border-indigo-400 rounded-lg p-6 bg-indigo-50 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-900">{opp.title}</h3>
              <div className="text-right">
                <p className="text-indigo-700 font-bold text-lg">{opp.income}</p>
                <p className="text-indigo-600 text-xs mt-1">{opp.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-indigo-300">
              <span className={`px-3 py-1 rounded full text-xs font-semibold ${
                opp.effort === 'Low' 
                  ? 'bg-green-200 text-green-800'
                  : opp.effort === 'Medium'
                  ? 'bg-yellow-200 text-yellow-800'
                  : 'bg-red-200 text-red-800'
              }`}>
                {opp.effort} Effort
              </span>
            </div>
            <p className="text-gray-700">{opp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
