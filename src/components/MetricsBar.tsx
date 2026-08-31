import { BarChart3, Clock, ShieldCheck, Bot } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const MetricsBar = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: Clock,
      value: t.metrics.experience.value,
      label: t.metrics.experience.label,
      highlight: t.metrics.experience.highlight,
    },
    {
      icon: BarChart3,
      value: t.metrics.spark.value,
      label: t.metrics.spark.label,
      highlight: t.metrics.spark.highlight,
    },
    {
      icon: ShieldCheck,
      value: t.metrics.sla.value,
      label: t.metrics.sla.label,
      highlight: t.metrics.sla.highlight,
    },
    {
      icon: Bot,
      value: t.metrics.ai.value,
      label: t.metrics.ai.label,
      highlight: t.metrics.ai.highlight,
    },
  ];

  return (
    <section className="py-8 bg-surface/50 border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center gap-2 mb-1">
                <metric.icon size={16} className="text-primary" />
                <span className="font-mono text-xs text-slate-400 font-medium">{metric.highlight}</span>
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-100 mb-1 tracking-tight">
                {metric.value}
              </span>
              <p className="text-xs sm:text-sm text-slate-400 leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
