import { useState } from 'react';
import { caseStudies, CaseStudy } from '@/data/caseStudiesData';
import { SystemDiagram } from './SystemDiagram';
import {
  Database,
  Cpu,
  Smartphone,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Building,
  Calendar,
  Layers,
} from 'lucide-react';

export const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'data' | 'ai' | 'fullstack'>('all');
  const [expandedId, setExpandedId] = useState<string>(caseStudies[0].id);

  const filteredStudies =
    selectedCategory === 'all'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  const getCategoryIcon = (category: CaseStudy['category']) => {
    switch (category) {
      case 'data':
        return <Database size={16} className="text-primary" />;
      case 'ai':
        return <Cpu size={16} className="text-secondary" />;
      case 'fullstack':
        return <Smartphone size={16} className="text-accent" />;
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-primary mb-3">
            <Layers size={14} />
            <span>ARQUITECTURA & SYSTEM DESIGN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-100 tracking-tight mb-4">
            Case Studies de Ingeniería
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Desglose de problemas de escala real bajo el framework STAR (Situación, Tarea, Acción, Resultados) y diseño de sistemas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todos los Casos' },
            { id: 'data', label: 'Big Data & Lakehouse (Despegar)' },
            { id: 'ai', label: 'AI Multi-Agent & n8n' },
            { id: 'fullstack', label: 'Mobile-First & Offline POS' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === tab.id
                  ? 'bg-primary text-slate-950 shadow-glow-emerald'
                  : 'bg-surface border border-surface-border text-slate-300 hover:border-slate-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className="space-y-8">
          {filteredStudies.map((study) => {
            const isExpanded = expandedId === study.id;

            return (
              <article
                key={study.id}
                className={`rounded-2xl bg-surface border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-primary/60 shadow-xl shadow-black/40'
                    : 'border-surface-border hover:border-slate-500'
                }`}
              >
                {/* Header / Summary Card */}
                <div
                  onClick={() => setExpandedId(isExpanded ? '' : study.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border text-xs font-mono text-slate-200">
                        {getCategoryIcon(study.category)}
                        {study.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <Building size={13} className="text-slate-400" />
                        {study.company}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <Calendar size={13} className="text-slate-400" />
                        {study.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-100 leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                      {study.summary}
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-surface-elevated text-[11px] font-mono text-slate-300 border border-surface-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Metrics & Expand Toggle */}
                  <div className="flex items-center justify-between md:flex-col md:items-end gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-surface-border/60">
                    <div className="flex items-center gap-4">
                      {study.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="text-right">
                          <p className="text-xl sm:text-2xl font-extrabold font-mono text-primary">
                            {metric.value}
                          </p>
                          <p className="text-[11px] text-slate-400 leading-tight">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-surface-border text-xs font-semibold text-slate-200 hover:text-primary transition-colors"
                      aria-label="Ver detalles completos del caso de estudio"
                    >
                      <span>{isExpanded ? 'Ocultar Análisis' : 'Ver Deep Dive'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Deep Dive (STAR Breakdown) */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-surface-border bg-surface-elevated/40 space-y-6">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-surface border border-surface-border">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="p-2">
                          <span className="text-2xl font-extrabold font-mono text-primary block">
                            {metric.value}
                          </span>
                          <span className="text-xs text-slate-300">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Problem & Task Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="p-5 rounded-xl bg-surface border border-surface-border">
                        <div className="flex items-center gap-2 mb-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                          <AlertCircle size={15} />
                          <span>1. Situación & Desafío de Ingeniería</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {study.situation}
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-surface border border-surface-border">
                        <div className="flex items-center gap-2 mb-2 text-secondary font-mono text-xs font-bold uppercase tracking-wider">
                          <Layers size={15} />
                          <span>2. Tarea Arquitectónica</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {study.task}
                        </p>
                      </div>
                    </div>

                    {/* Architecture Flow Diagram */}
                    <SystemDiagram
                      title={study.architectureFlow.title}
                      steps={study.architectureFlow.steps}
                    />

                    {/* Action & Results Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="p-5 rounded-xl bg-surface border border-surface-border">
                        <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-3">
                          3. Decisiones Técnicas & Acciones Clave
                        </h4>
                        <ul className="space-y-2.5">
                          {study.action.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 rounded-xl bg-surface border border-surface-border">
                        <div className="flex items-center gap-2 mb-3 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                          <TrendingUp size={15} />
                          <span>4. Resultados Cuantitativos & Impacto</span>
                        </div>
                        <ul className="space-y-2.5">
                          {study.result.map((res, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                              <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
