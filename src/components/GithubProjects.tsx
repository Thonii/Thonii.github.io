import { Github, ExternalLink, Check, Lock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const GithubProjects = () => {
  const { t } = useLanguage();

  return (
    <section id="open-source" className="py-20 bg-surface/30 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-primary mb-3">
            <Github size={14} />
            <span>{t.openSource.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-100 tracking-tight mb-4">
            {t.openSource.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.openSource.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.openSource.repos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-surface-border hover:border-primary/60 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                    <h3 className="text-lg font-bold font-mono text-slate-100 group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    {repo.isPrivate && (
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-semibold"
                        title={repo.privateLabel || 'Repositorio Privado Corporativo'}
                      >
                        <Lock size={12} />
                        <span>{repo.privateLabel || 'Privado'}</span>
                      </span>
                    )}
                    {repo.links && repo.links.length > 0 ? (
                      repo.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-elevated border border-surface-border text-slate-200 hover:text-primary hover:border-primary/60 text-xs font-mono font-semibold transition-colors"
                          title={`Ver repositorio ${link.label}`}
                          aria-label={`Ver código fuente de ${link.label}`}
                        >
                          <Github size={13} />
                          <span>{link.label}</span>
                        </a>
                      ))
                    ) : (
                      <>
                        {repo.liveUrl && (
                          <a
                            href={repo.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-surface-elevated border border-surface-border text-slate-300 hover:text-primary transition-colors"
                            title="Ver demo en vivo"
                            aria-label={`Ver demo de ${repo.name}`}
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                        {repo.repoUrl && (
                          <a
                            href={repo.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-surface-elevated border border-surface-border text-slate-300 hover:text-slate-100 transition-colors"
                            title="Ver repositorio en GitHub"
                            aria-label={`Ver código fuente de ${repo.name}`}
                          >
                            <Github size={15} />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {repo.description}
                </p>

                {/* Highlights / Features */}
                <div className="space-y-1.5 pt-1">
                  {repo.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <Check size={12} className="text-primary flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Lang */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-6 mt-4 border-t border-surface-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-elevated text-slate-300 border border-surface-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-primary font-semibold">
                  {repo.language}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Direct Link Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Thonii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-surface-border hover:border-slate-400 text-slate-200 font-semibold text-xs sm:text-sm transition-all"
          >
            <Github size={16} />
            <span>{t.openSource.exploreAll}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
