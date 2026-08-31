import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-24 bg-background border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-primary mb-3">
            <Briefcase size={14} />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-100 tracking-tight mb-4">
            {t.experience.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Experience (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold font-mono text-slate-200 flex items-center gap-2 mb-4">
              <Briefcase size={18} className="text-primary" />
              <span>{t.experience.rolesTitle}</span>
            </h3>

            {t.experience.jobs.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-surface border border-surface-border hover:border-slate-500 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold font-display text-slate-100">{exp.role}</h4>
                    <p className="text-sm font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{exp.description}</p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {t.experience.keyAchievements}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border/60">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-md bg-surface-elevated text-[11px] font-mono text-slate-300 border border-surface-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Formative Background (Right 1 col) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-mono text-slate-200 flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-secondary" />
              <span>{t.experience.educationTitle}</span>
            </h3>

            <div className="space-y-4">
              {t.experience.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface border border-surface-border space-y-2"
                >
                  <span className="text-[11px] font-mono text-secondary block">{edu.period}</span>
                  <h4 className="text-sm font-bold text-slate-100 font-display">{edu.title}</h4>
                  <p className="text-xs font-medium text-slate-400">{edu.institution}</p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* ATS Tip Box */}
            <div className="p-5 rounded-2xl bg-surface-elevated/60 border border-primary/20 space-y-3">
              <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                {t.experience.atsTitle}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.experience.atsDescription}
              </p>
              <a
                href="/Anthony_Villalobos_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Anthony_Villalobos_CV.pdf"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
              >
                <span>{t.experience.requestCv}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
