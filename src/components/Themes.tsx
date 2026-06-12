import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, Mountain, Scroll, Flame, Feather, Landmark } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  buddhism: Flame,
  taoism: Mountain,
  academy: BookOpen,
  memorial: Landmark,
  poetry: Feather,
  songyue: Scroll,
};

const idMap = ['buddhism', 'taoism', 'academy', 'memorial', 'poetry', 'songyue'];

function ThemeCard({ theme, index }: { theme: { title: string; enTitle: string; highlight: string; desc: string; spots: string[] }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[idMap[index]] || Scroll;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white border border-brand-dark-10 overflow-hidden cursor-pointer"
    >
      <div className={`h-1 bg-gradient-to-r from-brand-dark/80 to-brand-dark/60 transition-all duration-500 ${isHovered ? 'h-1.5' : ''}`} />

      <div className="p-8 sm:p-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 flex items-center justify-center border border-brand-dark-20 rounded-sm group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-500">
            <Icon size={22} className="text-brand-dark group-hover:text-brand-light transition-colors duration-500" strokeWidth={1.5} />
          </div>
          <span className="font-serif-en text-xs text-brand-dark-40 tracking-wider uppercase">
            {theme.enTitle}
          </span>
        </div>

        <h3 className="font-serif-zh text-2xl font-semibold text-brand-dark mb-2 tracking-wide">
          {theme.title}
        </h3>

        <p className="text-brand-red text-sm font-medium tracking-wider mb-4">
          {theme.highlight}
        </p>

        <p className="text-brand-dark-60 text-[15px] leading-relaxed mb-6">
          {theme.desc}
        </p>

        <div className="border-t border-brand-dark-10 pt-5">
          <div className="flex flex-wrap gap-2">
            {theme.spots.map((spot) => (
              <span
                key={spot}
                className="px-3 py-1.5 bg-brand-light border border-brand-dark-10 text-brand-dark-80 text-xs tracking-wider"
              >
                {spot}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 bg-brand-dark/5 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </motion.div>
  );
}

export default function Themes() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const th = t.themes;

  return (
    <section id="themes" className="w-full py-24 sm:py-32 bg-white relative">
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
            <span className="font-serif-zh text-sm text-brand-red tracking-[0.3em]">{th.sectionLabel}</span>
            <div className="divider-line" />
          </div>
          <h2 className="section-title">{th.title}</h2>
          <p className="section-subtitle">{th.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {th.items.map((theme, index) => (
            <ThemeCard key={idMap[index]} theme={theme} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 text-center"
        >
          <p className="text-brand-dark-60 mb-6">
            {th.note}
          </p>
          <a href="#contact" className="btn-outline">
            {th.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
