import { experience } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../contexts/LanguageContext';

export function Experience() {
  const { t, language } = useLanguage();
  return (
    <section className="py-16">
      <SectionHeader number="03" title={t('sections.experience.title')} />
      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="border-l-4 border-emerald-500 pl-6 py-4 bg-gray-50 rounded-r-lg px-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{exp.title[language]}</h3>
                <p className="text-lg text-emerald-600 font-semibold mt-1">{exp.company}</p>
              </div>
              <p className="text-gray-600 font-semibold text-sm">{exp.period}</p>
            </div>
            <p className="text-gray-700 mt-4">{exp.description[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
