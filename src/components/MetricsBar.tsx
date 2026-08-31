import { BarChart3, Clock, ShieldCheck, Bot } from 'lucide-react';

export const MetricsBar = () => {
  const metrics = [
    {
      icon: Clock,
      value: '5+ Años',
      label: 'Experiencia en Ingeniería de Datos y Software',
      highlight: 'Despegar.com & TecnoAncon',
    },
    {
      icon: BarChart3,
      value: '-30%',
      label: 'Latencia y Tiempos de Cómputo en Pipelines Spark',
      highlight: 'Optimización de Particionado',
    },
    {
      icon: ShieldCheck,
      value: '99.8%',
      label: 'Disponibilidad SLA en Data Marts Críticos',
      highlight: 'Arquitectura Medallion',
    },
    {
      icon: Bot,
      value: '85%',
      label: 'Reducción de Intervención Manual con AI',
      highlight: 'Orquestación n8n + Python',
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
