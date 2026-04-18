import { careerObjective } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../contexts/LanguageContext';
import { Target, Eye, Clock } from 'lucide-react';

export function CareerObjective() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16">
      <SectionHeader number="07" title={t('sections.careerObjective.title')} />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('sections.careerObjective.targetRoles')}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {careerObjective.targetRoles.map((role, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-full px-4 py-2 hover:bg-blue-100 transition-colors">
                  <p className="text-blue-700 font-medium text-sm">{role[language]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Eye className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('sections.careerObjective.careerPerspective')}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed pl-13">{careerObjective.perspective[language]}</p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{t('sections.careerObjective.expectedTimeline')}</h3>
                <p className="text-purple-600 font-medium">{careerObjective.timeline[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
