import { LanguageProvider } from '@/i18n/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { MetricsBar } from '@/components/MetricsBar';
import { CaseStudies } from '@/components/CaseStudies';
import { TechMatrix } from '@/components/TechMatrix';
import { Experience } from '@/components/Experience';
import { GithubProjects } from '@/components/GithubProjects';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-slate-100 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <HeroSection />
          <MetricsBar />
          <CaseStudies />
          <TechMatrix />
          <Experience />
          <GithubProjects />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
