import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-brand-light">
        <div className="absolute top-20 right-20 w-64 h-64 border border-brand-dark-10 rounded-full opacity-50" />
        <div className="absolute bottom-32 left-16 w-48 h-48 border border-brand-dark-10 rounded-full opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-brand-red/10 rounded-full opacity-40" />
        <svg className="absolute top-0 right-0 w-full h-full opacity-[0.04]" viewBox="0 0 1200 800">
          <line x1="800" y1="0" x2="600" y2="800" stroke="#2F4B5D" strokeWidth="1" />
          <line x1="900" y1="0" x2="700" y2="800" stroke="#2F4B5D" strokeWidth="1" />
          <line x1="1000" y1="0" x2="800" y2="800" stroke="#2F4B5D" strokeWidth="1" />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-light to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <MapPin size={16} className="text-brand-red" />
          <span className="font-serif-zh text-brand-dark-60 text-sm tracking-[0.3em]">
            {h.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif-zh text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-dark leading-tight tracking-wider"
        >
          {h.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif-en text-xl sm:text-2xl lg:text-3xl text-brand-dark-60 italic mt-4 tracking-wide"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4 my-10"
        >
          <div className="w-12 h-[1px] bg-brand-dark-40" />
          <div className="w-2 h-2 bg-brand-red rotate-45" />
          <div className="w-12 h-[1px] bg-brand-dark-40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-serif-zh text-lg sm:text-xl text-brand-dark-80 max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          {h.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-4 text-brand-dark-60 max-w-xl mx-auto leading-relaxed whitespace-pre-line"
        >
          {h.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a href="#themes" className="btn-primary text-base w-full sm:w-auto">
            {h.ctaThemes}
          </a>
          <a href="#contact" className="btn-outline text-base w-full sm:w-auto">
            {h.ctaBook}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-xl mx-auto"
        >
          {[h.stat1, h.stat2, h.stat3].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif-en text-2xl sm:text-3xl font-semibold text-brand-dark">
                {stat.num}
              </div>
              <div className="font-serif-zh text-xs sm:text-sm text-brand-dark-60 mt-1 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-dark-40 text-xs tracking-widest">{h.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-brand-dark-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
