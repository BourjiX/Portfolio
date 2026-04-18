import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const strengths = [
  'Strong technical foundation in cybersecurity and networking with hands-on project experience.',
  'Leadership and teaching roles demonstrate strong communication and mentoring ability.',
  'Multilingual capability enhances collaboration across regional and international teams.',
];

const opportunities = [
  'Target Security+ and CCNP certifications to build a clear transition path into industry.',
  'Use technical writing and event participation to raise your professional visibility.',
  'Deepen cloud security skills to align with hybrid network demands in Tunisia and beyond.',
];

const recommendations = [
  'Lead with project outcomes in your CV and portfolio to show real impact.',
  'Leverage your design skills for polished security reports and visual case studies.',
  'Schedule weekly learning sprints for labs, certification study, and networking outreach.',
];

export function ProfileAnalysis() {
  return (
    <section id="profile-analysis" className="mb-10">
      <SectionHeader number={2} title="Profile Analysis" description="A concise view of strengths, high-impact opportunities, and next-step focus areas." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Core Strengths</h3>
              <p className="text-xs text-slate-500 mt-1">What makes your profile stand out</p>
            </div>
            <Badge label="Strong" variant="emerald" />
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            {strengths.map((item) => (
              <li key={item} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Growth Opportunities</h3>
              <p className="text-xs text-slate-500 mt-1">High-leverage development areas</p>
            </div>
            <Badge label="Priority" variant="amber" />
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            {opportunities.map((item) => (
              <li key={item} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Recommended Focus</h3>
              <p className="text-xs text-slate-500 mt-1">Immediate next actions</p>
            </div>
            <Badge label="Action" variant="sky" />
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            {recommendations.map((item) => (
              <li key={item} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
