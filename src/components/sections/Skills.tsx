import { skills } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../contexts/LanguageContext';

export function Skills() {
  const { t, language } = useLanguage();
  return (
    <section className="py-16">
      <SectionHeader number="04" title={t('sections.skills.title')} />
      <div className="max-w-4xl mx-auto space-y-8">
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-300">{skillGroup.category[language]}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skillGroup.items.map((skill, idx) => (
                <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                  <p className="text-gray-900 font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
