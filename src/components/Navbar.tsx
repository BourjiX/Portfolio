import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { id: 'profile', labelKey: 'nav.profile' },
  { id: 'education', labelKey: 'nav.education' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'certificates', labelKey: 'nav.certificates' },
  { id: 'activities', labelKey: 'nav.activities' },
  { id: 'career-strategy', labelKey: 'nav.careerStrategy' },
  { id: 'contact', labelKey: 'nav.contact' },
];

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => handleNavigate('profile')}>
              Chiheb Borji
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'fr'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}

              {/* Mobile Language Switch */}
              <div className="flex items-center space-x-2 px-3 py-2 border-t border-gray-200 mt-3 pt-3">
                <span className="text-sm text-gray-600 mr-2">Language:</span>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    language === 'fr'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
