import { Database, Cpu, Code2, ShieldCheck, Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const TechMatrix = () => {
  const { t } = useLanguage();

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Database size={18} className="text-primary" />;
      case 1:
        return <Cpu size={18} className="text-secondary" />;
      case 2:
        return <Code2 size={18} className="text-accent" />;
      default:
        return <ShieldCheck size={18} className="text-amber-400" />;
    }
  };

  return (
    <section id="tech-matrix" className="py-20 bg-surface/30 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-secondary mb-3">
            <Code2 size={14} />
            <span>{t.techMatrix.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-100 tracking-tight mb-4">
            {t.techMatrix.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.techMatrix.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.techMatrix.categories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-surface-border hover:border-slate-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-surface-elevated border border-surface-border">
                      {getCategoryIcon(idx)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-slate-100">
                        {category.category}
                      </h3>
                      <span className="text-xs font-mono text-primary font-semibold">
                        {category.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* All skill badges styled with uniform high-contrast, active look */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-surface-border/90 text-xs font-medium text-slate-100 hover:border-primary/50 transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <Check size={14} className="text-primary flex-shrink-0" />
                        <span className="font-semibold text-slate-100">{tech.name}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                          tech.level === 'Experto' || tech.level === 'Expert'
                            ? 'bg-primary/15 text-primary border border-primary/30'
                            : tech.level === 'Avanzado' || tech.level === 'Advanced'
                            ? 'bg-secondary/15 text-secondary border border-secondary/30'
                            : 'bg-accent/15 text-accent border border-accent/30'
                        }`}
                      >
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
