import { useState } from 'react';
import { Terminal } from 'lucide-react';
import { MorphIcon } from '@/components/ui/MorphIcon';
import { useLanguage } from '@/i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const [solarStep, setSolarStep] = useState(0);

  const cycleSolarState = () => {
    setSolarStep((prev) => (prev + 1) % 3);
  };

  return (
    <footer className="py-12 bg-background border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-300 text-sm font-mono">
            <Terminal size={16} className="text-primary" />
            <span>Anthony Villalobos</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 text-xs">{t.footer.roleDescription}</span>
          </div>

          {/* Interactive Solarpunk micro-widget */}
          <button
            onClick={cycleSolarState}
            className="flex items-center gap-2 text-xs text-slate-400 font-mono text-center sm:text-left px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-amber-400/50 hover:text-slate-200 transition-all cursor-pointer group"
            title="Haz clic para transformar el nodo Solarpunk"
            aria-label="Nodo Solarpunk interactivo"
          >
            <MorphIcon
              type="solarpunk-cycle"
              step={solarStep}
              size={15}
              className="text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform"
            />
            <span>{t.footer.solarpunkText}</span>
          </button>

          <div className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} • {t.footer.hostedText}
          </div>
        </div>
      </div>
    </footer>
  );
};
