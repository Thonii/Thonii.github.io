import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X, FileText, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.caseStudies, href: '#case-studies' },
    { name: t.nav.techMatrix, href: '#tech-matrix' },
    { name: t.nav.experience, href: '#experiencia' },
    { name: t.nav.openSource, href: '#open-source' },
    { name: t.nav.contact, href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-100 font-display font-bold text-lg tracking-tight hover:text-primary transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-surface border border-surface-border flex items-center justify-center text-primary group-hover:border-primary transition-colors">
              <Terminal size={18} />
            </div>
            <span>
              anthony<span className="text-primary font-mono">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-primary text-slate-200 text-xs font-mono transition-colors"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              aria-label="Cambiar idioma"
            >
              <Globe size={14} className="text-secondary" />
              <span className={language === 'es' ? 'text-primary font-bold' : 'text-slate-400'}>ES</span>
              <span className="text-slate-600">|</span>
              <span className={language === 'en' ? 'text-primary font-bold' : 'text-slate-400'}>EN</span>
            </button>

            <a
              href="https://github.com/Thonii"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface border border-surface-border text-slate-300 hover:text-slate-100 hover:border-slate-400 transition-colors"
              aria-label="Perfil de GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-villalobos-b26773186/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface border border-surface-border text-slate-300 hover:text-slate-100 hover:border-slate-400 transition-colors"
              aria-label="Perfil de LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contacto"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-glow-emerald"
            >
              <FileText size={15} />
              <span>{t.nav.downloadCv}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface border border-surface-border text-xs font-mono text-slate-200"
              aria-label="Cambiar idioma"
            >
              <Globe size={13} className="text-secondary" />
              <span className="font-bold text-primary">{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-surface border border-surface-border text-slate-300 hover:text-slate-100"
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-lg border-b border-surface-border px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-primary border-b border-surface-border/40"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/Thonii"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-elevated border border-surface-border text-slate-300 text-sm"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-villalobos-b26773186/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-elevated border border-surface-border text-slate-300 text-sm"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
