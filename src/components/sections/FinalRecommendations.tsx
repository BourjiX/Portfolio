import { Rocket, AlertTriangle, Lightbulb, Target } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

const immediate = [
  { text: 'Enroll in CompTIA Security+ course this week — it\'s the essential foundation for cybersecurity careers.', urgency: 'critical' },
  { text: 'Update LinkedIn profile with detailed project descriptions from your internships and teaching experience.', urgency: 'critical' },
  { text: 'Create a portfolio website showcasing your firewall auditing platform and IoT projects.', urgency: 'high' },
];

const strategic = [
  { text: 'Your blend of academic knowledge and practical experience is valuable. Highlight your teaching background and real-world projects.' },
  { text: 'Focus on networking within Tunisia\'s growing tech scene and international cybersecurity communities.', urgency: 'high' },
  { text: 'Publish technical articles about your internship projects and security research to build credibility.', urgency: 'medium' },
  { text: 'Leverage your multilingual skills (Arabic, French, English, Spanish) for international opportunities.', urgency: 'medium' },
];

const risks = [
  { text: 'Delaying certification pursuit may leave you behind as the job market becomes more competitive.' },
  { text: 'Focusing only on teaching without building industry certifications may limit advancement opportunities.' },
  { text: 'Not networking actively in cybersecurity communities may result in missed opportunities and connections.' },
];

export function FinalRecommendations() {
  return (
    <section id="recommendations" className="mb-8">
      <SectionHeader number={13} title="Final Recommendations" description="Priority actions, strategic insights, and risks to avoid." />
      <div className="space-y-4">
        <Card className="p-6 bg-gradient-to-br from-sky-900 to-slate-900 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Rocket size={18} className="text-sky-400" />
            <h3 className="text-sm font-semibold text-sky-200">Start Here — Immediate Actions</h3>
          </div>
          <div className="space-y-3">
            {immediate.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-3">
                <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  item.urgency === 'critical' ? 'bg-rose-500' : 'bg-amber-500'
                }`}>{i + 1}</span>
                <p className="text-sm text-slate-200 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={16} className="text-amber-500" />
              <h3 className="text-sm font-semibold text-slate-700">Strategic Insights</h3>
            </div>
            <div className="space-y-3">
              {strategic.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Target size={14} className="text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5 border-rose-100 bg-rose-50/50">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={16} className="text-rose-500" />
              <h3 className="text-sm font-semibold text-slate-700">Risks to Avoid</h3>
            </div>
            <div className="space-y-3">
              {risks.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white rounded-xl p-3 border border-rose-100">
                  <AlertTriangle size={13} className="text-rose-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-slate-50">
          <div className="text-center">
            <h3 className="text-base font-bold text-slate-800 mb-2">Your 12-Month Outcome</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto mb-4">
              By executing this plan consistently, you can realistically transition from <strong>teaching/freelance roles</strong> to{' '}
              <strong>Cybersecurity Engineer ($45K–$65K)</strong> within 6–12 months — establishing a strong foundation in the Tunisian cybersecurity market.
              Combined with side income opportunities, your total earning potential reaches <strong>$50K–$80K/year</strong> while building expertise in a growing field.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {[
                { value: '4+ Certs', label: 'Completed' },
                { value: '6 mo', label: 'To Target Role' },
                { value: 'Tunisian Market', label: 'Focus' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white rounded-xl border border-slate-200 p-3">
                  <div className="text-xl font-black text-sky-600">{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
