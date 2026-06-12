import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Compass, Camera, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  '01': GraduationCap,
  '02': Compass,
  '03': Camera,
  '04': Users,
};

function ValueCard({ value, index }: { value: { num: string; title: string; desc: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = iconMap[value.num] || GraduationCap;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-white/60 backdrop-blur-sm border border-brand-dark-10 p-8 sm:p-10 card-hover"
    >
      <div className="absolute top-6 right-6 font-serif-en text-5xl font-bold text-brand-dark-10 group-hover:text-brand-red/10 transition-colors duration-500">
        {value.num}
      </div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 flex items-center justify-center border border-brand-dark-20 rounded-sm mb-6 group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-500">
          <Icon size={24} className="text-brand-dark group-hover:text-brand-light transition-colors duration-500" strokeWidth={1.5} />
        </div>
        
        <h3 className="font-serif-zh text-xl sm:text-2xl font-semibold text-brand-dark mb-4 tracking-wide">
          {value.title}
        </h3>
        
        <p className="text-brand-dark-60 leading-relaxed text-[15px]">
          {value.desc}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function CoreValues() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const v = t.values;

  return (
    <section className="w-full py-24 sm:py-32 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-dark/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/[0.02] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="divider-line" />
            <span className="font-serif-zh text-sm text-brand-red tracking-[0.3em]">{v.sectionLabel}</span>
            <div className="divider-line" />
          </div>
          <h2 className="section-title">{v.title}</h2>
          <p className="section-subtitle">{v.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {v.items.map((value, index) => (
            <ValueCard key={value.num} value={value} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-serif-zh text-brand-dark-60 text-lg italic tracking-wide">
            {v.quote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
