import { Quote, Target, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const keywords = [
  'Cybersecurity', 'Network Security', 'Firewall Management', 'Penetration Testing',
  'Wireshark', 'Nmap', 'CCNA', 'Python Security',
  'Security Auditing', 'Teaching', 'Multilingual', 'Leadership', 'Graphic Design',
];

const audiences = [
  { audience: 'Telecom & Network Companies', message: 'Network security specialist with practical firewall experience and infrastructure security awareness.' },
  { audience: 'Educational Institutions', message: 'IT instructor with a strong ability to translate technical concepts into effective learning experiences.' },
  { audience: 'Security Consulting Firms', message: 'Technical consultant blending academic knowledge, hands-on practice, and client-facing communication.' },
  { audience: 'IoT & Smart City Projects', message: 'Practical IoT security expertise with smart-system awareness and threat mitigation insight.' },
  { audience: 'Government & Defense', message: 'Security professional with leadership experience and a disciplined approach to sensitive environments.' },
];

export function ProfessionalPositioning() {
  return (
    <section id="professional-positioning" className="mb-8">
      <SectionHeader number={6} title="Professional Positioning" description="A clear, professional way to present your expertise." />
      <div className="space-y-4">
        <Card className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Quote size={20} className="text-slate-900 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Recommended Headline</h3>
              <p className="text-base font-bold text-slate-900 italic">
                Cybersecurity Engineer & Educator | Network Security & IoT Specialist
              </p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">Unique Value Proposition</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              A combination of academic excellence and practical implementation — I teach cybersecurity concepts, design secure systems, and translate technical work into clear results. My multilingual and leadership background helps me collaborate effectively across teams.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Target size={16} className="text-slate-900" />
              <h3 className="text-sm font-semibold text-slate-900">Audience messaging</h3>
            </div>
            <div className="space-y-3">
              {audiences.map((a) => (
                <div key={a.audience} className="rounded-xl border border-slate-200 p-4">
                  <div className="text-xs font-semibold text-slate-900 mb-1">{a.audience}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{a.message}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={16} className="text-slate-900" />
              <h3 className="text-sm font-semibold text-slate-900">High-impact keywords</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">Use these keywords across your CV, LinkedIn, and interviews to communicate your expertise clearly.</p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw) => (
                <Badge key={kw} label={kw} variant="sky" size="sm" />
              ))}
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-600 leading-relaxed">
                Mirror language from job descriptions where it matches your experience to improve clarity and relevance.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
