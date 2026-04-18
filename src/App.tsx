import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Profile } from './components/sections/Profile';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Certificates } from './components/sections/Certificates';
import { AssociativeWork } from './components/sections/AssociativeWork';
import { CareerObjective } from './components/sections/CareerObjective';
import { Contact } from './components/sections/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

const sectionIds = [
  'profile', 'education', 'experience', 'skills', 'certificates',
  'activities', 'career-strategy', 'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        <main className="pt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
            <div id="profile"><Profile /></div>
            <div id="education"><Education /></div>
            <div id="experience"><Experience /></div>
            <div id="skills"><Skills /></div>
            <div id="certificates"><Certificates /></div>
            <div id="activities"><AssociativeWork /></div>
            <div id="career-strategy"><CareerObjective /></div>
            <div id="contact"><Contact /></div>
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}
