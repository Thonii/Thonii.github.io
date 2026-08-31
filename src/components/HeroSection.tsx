import { ArrowRight, Database, Cpu, Sparkles, MapPin } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status & Location Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-surface-border text-xs font-mono text-slate-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-semibold">Disponible para roles de Ingeniería Senior</span>
            <span className="text-slate-500">•</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <MapPin size={12} className="text-secondary" /> Lima, Perú (GMT-5)
            </span>
          </div>

          {/* Main Headings */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-slate-100 mb-6 leading-[1.1]">
            Anthony <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Villalobos</span>
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-slate-300 mb-4 max-w-3xl mx-auto">
            Senior Data & Software Engineer <span className="text-primary">|</span> AI Systems Architect
          </p>

          <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Especializado en diseñar <strong>Lakehouses distribuidos de alto volumen (Spark, Iceberg)</strong>, 
            orquestación de <strong>agentes de IA y workflows (n8n, Python)</strong>, y arquitecturas <strong>Local-First / Mobile-First</strong> con filosofía Solarpunk.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-slate-950 font-bold text-sm tracking-wide transition-all shadow-glow-emerald"
            >
              <span>Explorar Case Studies de Arquitectura</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="https://github.com/Thonii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-surface-border hover:border-slate-400 text-slate-200 font-semibold text-sm transition-all"
            >
              <span>Ver Código en GitHub</span>
            </a>
          </div>

          {/* Key Value Pillars Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/70 border border-surface-border">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Database size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Big Data Core</p>
                <p className="text-xs font-semibold text-slate-200">Apache Spark & Iceberg</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/70 border border-surface-border">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <Cpu size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">AI-Native Systems</p>
                <p className="text-xs font-semibold text-slate-200">Multi-Agent & n8n</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/70 border border-surface-border">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Software Craft</p>
                <p className="text-xs font-semibold text-slate-200">TypeScript & Mobile-First</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
