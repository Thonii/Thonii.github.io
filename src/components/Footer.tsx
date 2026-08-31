import { Terminal, Sun } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

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

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono text-center sm:text-left">
            <Sun size={14} className="text-amber-400 flex-shrink-0" />
            <span>{t.footer.solarpunkText}</span>
          </div>

          <div className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} • {t.footer.hostedText}
          </div>
        </div>
      </div>
    </footer>
  );
};
