import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'family',
    theme: '',
    date: '',
    people: '',
    message: '',
  });
  const { t } = useLanguage();
  const c = t.contact;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-24 sm:py-32 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-dark/[0.02] rounded-full -translate-y-1/2 translate-x-1/3" />

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
            <span className="font-serif-zh text-sm text-brand-red tracking-[0.3em]">{c.sectionLabel}</span>
            <div className="divider-line" />
          </div>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-subtitle">{c.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-brand-dark text-brand-light p-8 sm:p-10 h-full">
              <h3 className="font-serif-zh text-2xl font-semibold mb-8 tracking-wide">
                {c.infoTitle}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-brand-light/10 rounded-sm shrink-0">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-brand-light/60 text-sm mb-1">{c.phoneLabel}</div>
                    <div className="font-serif-en text-lg">{c.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-brand-light/10 rounded-sm shrink-0">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-brand-light/60 text-sm mb-1">{c.emailLabel}</div>
                    <div className="font-serif-en text-sm">{c.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-brand-light/10 rounded-sm shrink-0">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-brand-light/60 text-sm mb-1">{c.addressLabel}</div>
                    <div className="font-serif-zh text-sm leading-relaxed whitespace-pre-line">
                      {c.address}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-brand-light/10">
                <p className="font-serif-zh text-sm text-brand-light/60 leading-relaxed italic">
                  {c.infoQuote}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center bg-white border border-brand-dark-10 p-12"
              >
                <CheckCircle size={56} className="text-brand-red mb-6" strokeWidth={1.5} />
                <h3 className="font-serif-zh text-2xl font-semibold text-brand-dark mb-3">
                  {c.form.successTitle}
                </h3>
                <p className="text-brand-dark-60 text-center">
                  {c.form.successMessage}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-brand-dark-10 p-8 sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-serif-zh text-sm text-brand-dark mb-2">
                      {c.form.name} <span className="text-brand-red">{c.form.required}</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-light border border-brand-dark-10 text-brand-dark placeholder:text-brand-dark-40 focus:outline-none focus:border-brand-dark transition-colors"
                      placeholder={c.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block font-serif-zh text-sm text-brand-dark mb-2">
                      {c.form.phone} <span className="text-brand-red">{c.form.required}</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-light border border-brand-dark-10 text-brand-dark placeholder:text-brand-dark-40 focus:outline-none focus:border-brand-dark transition-colors"
                      placeholder={c.form.phonePlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-serif-zh text-sm text-brand-dark mb-2">
                      {c.form.type}
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-light border border-brand-dark-10 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
                    >
                      <option value="family">{c.form.typeFamily}</option>
                      <option value="business">{c.form.typeBusiness}</option>
                      <option value="individual">{c.form.typeIndividual}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-serif-zh text-sm text-brand-dark mb-2">
                      {c.form.theme}
                    </label>
                    <select
                      name="theme"
                      value={formData.theme}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-light border border-brand-dark-10 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">{c.form.themePlaceholder}</option>
                      <option value="buddhism">{t.themes.items[0].title}</option>
                      <option value="taoism">{t.themes.items[1].title}</option>
                      <option value="academy">{t.themes.items[2].title}</option>
                      <option value="memorial">{t.themes.items[3].title}</option>
                      <option value="poetry">{t.themes.items[4].title}</option>
                      <option value="songyue">{t.themes.items[5].title}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-serif-zh text-sm text-brand-dark mb-2">
                      {c.form.date}
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-light border border-brand-dark-10 text-brand-dark focus:outline-none focus:border-brand-dark transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-serif-zh text-sm text-brand-dark mb-2">
                      {c.form.people}
                    </label>
                    <input
                      type="number"
                      name="people"
                      min="1"
                      max="20"
                      value={formData.people}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-light border border-brand-dark-10 text-brand-dark placeholder:text-brand-dark-40 focus:outline-none focus:border-brand-dark transition-colors"
                      placeholder={c.form.peoplePlaceholder}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block font-serif-zh text-sm text-brand-dark mb-2">
                    {c.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-light border border-brand-dark-10 text-brand-dark placeholder:text-brand-dark-40 focus:outline-none focus:border-brand-dark transition-colors resize-none"
                    placeholder={c.form.messagePlaceholder}
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto gap-2">
                  <Send size={16} strokeWidth={1.5} />
                  {c.form.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
