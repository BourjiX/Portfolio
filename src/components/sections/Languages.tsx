import { languages } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../contexts/LanguageContext';

export function Languages() {
  const { t, language } = useLanguage();
  return (
    <section className="py-16">
      <SectionHeader number="06" title={t('sections.languages.title')} />
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-900">{lang.language}</h3>
              <p className="text-purple-600 font-semibold text-sm mt-1">{lang.proficiency}</p>
              <p className="text-gray-600 text-sm mt-2">{lang.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
