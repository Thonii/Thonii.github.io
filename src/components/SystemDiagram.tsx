import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

interface Step {
  step: string;
  detail: string;
}

interface SystemDiagramProps {
  title: string;
  steps: Step[];
  stageLabel?: string;
}

export const SystemDiagram: React.FC<SystemDiagramProps> = ({ title, steps, stageLabel = 'ETAPA' }) => {
  return (
    <div className="rounded-xl bg-surface-elevated/70 border border-surface-border p-5 my-6">
      <div className="flex items-center gap-2 mb-4">
        <Layers size={16} className="text-secondary" />
        <h4 className="text-sm font-semibold font-mono text-slate-200">{title}</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((item, index) => (
          <div
            key={index}
            className="relative p-3.5 rounded-lg bg-surface border border-surface-border/80 flex flex-col justify-between group hover:border-primary/60 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-primary">{item.step.split('.')[0]}. {stageLabel}</span>
                <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              </div>
              <h5 className="text-xs font-bold text-slate-200 mb-1.5 leading-snug">
                {item.step.includes('.') ? item.step.split('.')[1].trim() : item.step}
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-500">
                <ArrowRight size={14} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
