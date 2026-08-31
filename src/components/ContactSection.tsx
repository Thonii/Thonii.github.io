import { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = 'villalobos.thony@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="py-24 bg-background border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-surface-border shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border text-xs font-mono text-primary mb-4">
                <Send size={13} />
                <span>{t.contact.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-100 tracking-tight mb-4">
                {t.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Contact Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Email Box */}
              <div className="p-5 rounded-2xl bg-surface-elevated border border-surface-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-mono text-slate-400">{t.contact.emailLabel}</p>
                    <p className="text-sm font-semibold text-slate-100 truncate">{email}</p>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-surface border border-surface-border text-slate-300 hover:text-primary transition-colors flex-shrink-0"
                  title="Copiar email"
                  aria-label="Copiar email"
                >
                  {copied ? <Check size={18} className="text-primary" /> : <Copy size={18} />}
                </button>
              </div>

              {/* LinkedIn Box */}
              <a
                href="https://www.linkedin.com/in/anthony-villalobos-b26773186/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-surface-elevated border border-surface-border hover:border-secondary/60 transition-all flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary flex-shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">{t.contact.linkedinLabel}</p>
                    <p className="text-sm font-semibold text-slate-100 group-hover:text-secondary transition-colors">
                      anthony-villalobos
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-secondary">→</span>
              </a>

              {/* Location Box */}
              <div className="p-5 rounded-2xl bg-surface-elevated border border-surface-border flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">{t.contact.locationLabel}</p>
                  <p className="text-sm font-semibold text-slate-100">{t.contact.locationValue}</p>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <a
                href="https://wa.me/51941221531"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-surface-elevated border border-surface-border hover:border-primary/60 transition-all flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">{t.contact.whatsappLabel}</p>
                    <p className="text-sm font-semibold text-slate-100 group-hover:text-primary transition-colors">
                      +51 941 221 531
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-primary">Chat →</span>
              </a>
            </div>

            {/* Direct Action Button */}
            <div className="text-center pt-2">
              <a
                href={`mailto:${email}?subject=Engineering%20Opportunity%20-%20Anthony%20Villalobos`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-slate-950 font-bold text-sm tracking-wide transition-all shadow-glow-emerald"
              >
                <Mail size={18} />
                <span>{t.contact.sendEmailButton}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
