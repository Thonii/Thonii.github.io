import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X, FileText } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Stack & Habilidades', href: '#tech-matrix' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Open Source', href: '#open-source' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/20'
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
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
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
              <span>DESCARGAR CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contacto"
              className="px-3 py-1.5 rounded-lg bg-primary text-slate-950 font-semibold text-xs transition-colors"
            >
              CV
            </a>
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
              key={link.name}
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
