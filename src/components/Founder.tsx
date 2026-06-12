import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Languages, BookOpen, Compass } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  '河南大学历史文化学院': Award,
  'Henan University': Award,
  '中英文双语导游证': Languages,
  'Bilingual Guide License': Languages,
  '文化部认证资质': Compass,
  'Ministry of Culture Certified': Compass,
  '河南省少年儿童图书馆': BookOpen,
  "Henan Children's Library": BookOpen,
};

export default function Founder() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const f = t.founder;

  return (
    <section id="founder" className="w-full py-24 sm:py-32 bg-brand-light relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-dark/[0.02] rounded-full -translate-y-1/2 -translate-x-1/2" />

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
            <span className="font-serif-zh text-sm text-brand-red tracking-[0.3em]">{f.sectionLabel}</span>
            <div className="divider-line" />
          </div>
          <h2 className="section-title">{f.title}</h2>
          <p className="section-subtitle">{f.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Founder Photo */}
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-brand-dark-10">
                <img
                  src="/images/founder.jpg"
                  alt={f.photoAlt}
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent" />

                {/* Decorative corner marks */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-brand-red/50" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-brand-red/50" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-brand-red/50" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-brand-red/50" />
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 bg-white border border-brand-dark-10">
                <p className="font-serif-zh text-lg text-brand-dark italic leading-relaxed tracking-wide">
                  {f.quote}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-brand-red" />
                  <span className="text-brand-dark-60 text-sm">{f.quoteLabel}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Credentials */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-brand-dark-80 leading-relaxed mb-10 text-[15px]"
            >
              {f.bio}
            </motion.p>

            <div className="space-y-5">
              {f.credentials.map((cred, index) => {
                const Icon = iconMap[cred.title] || Award;
                return (
                  <motion.div
                    key={cred.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
                    className="group flex gap-5 p-5 bg-white/70 border border-brand-dark-10 hover:border-brand-dark-30 transition-all duration-300"
                  >
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-brand-light border border-brand-dark-10 group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-300">
                      <Icon size={20} className="text-brand-dark group-hover:text-brand-light transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h4 className="font-serif-zh text-lg font-semibold text-brand-dark">
                          {cred.title}
                        </h4>
                        <span className="text-brand-red text-xs font-medium tracking-wider">
                          {cred.detail}
                        </span>
                      </div>
                      <p className="text-brand-dark-60 text-sm leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {f.roles.map((item) => (
                <div key={item.role} className="text-center p-4 bg-white/50 border border-brand-dark-10">
                  <div className="font-serif-zh text-brand-dark font-medium text-sm mb-1">
                    {item.role}
                  </div>
                  <div className="text-brand-dark-50 text-xs">
                    {item.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
