import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Car, Hotel, UtensilsCrossed, FileText, Camera, Music } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const iconList = [Car, Hotel, UtensilsCrossed, Music, Camera, FileText];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="w-full py-24 sm:py-32 bg-white relative">
      <div className="section-container">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="divider-line" />
            <span className="font-serif-zh text-sm text-brand-red tracking-[0.3em]">{s.sectionLabel}</span>
            <div className="divider-line" />
          </div>
          <h2 className="section-title">{s.title}</h2>
          <p className="section-subtitle">{s.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {s.items.map((service, index) => {
            const Icon = iconList[index] || Car;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="group p-6 bg-brand-light border border-brand-dark-10 hover:border-brand-dark-30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-white border border-brand-dark-10 group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-300">
                    <Icon size={18} className="text-brand-dark group-hover:text-brand-light transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif-zh text-lg font-semibold text-brand-dark">
                    {service.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-brand-dark-60 text-sm">
                      <span className="mt-1.5 w-1 h-1 bg-brand-red rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-brand-dark text-brand-light p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {s.highlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-serif-en text-3xl sm:text-4xl font-bold text-brand-light">
                  {item.num}
                </div>
                <div className="text-brand-light/60 text-sm mt-1 tracking-wider">
                  {item.unit}
                </div>
                <div className="text-brand-light/80 text-sm mt-3 font-serif-zh">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 text-center"
        >
          <p className="font-serif-zh text-brand-dark-60 text-lg leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {s.bottomQuote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
