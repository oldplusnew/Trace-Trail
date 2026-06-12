import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.themes, href: '#themes' },
    { label: t.nav.about, href: '#founder' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-light/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 border-2 border-brand-dark flex items-center justify-center rounded-sm group-hover:bg-brand-dark transition-colors duration-300">
              <span className="font-serif-zh text-lg font-bold text-brand-dark group-hover:text-brand-light transition-colors duration-300">
                寻
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif-zh text-xl font-semibold text-brand-dark tracking-widest">
                {lang === 'zh' ? '寻踪文旅' : 'Trace & Trail'}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative font-serif-zh text-brand-dark-80 hover:text-brand-dark transition-colors duration-300 text-[15px] tracking-wider group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: Language Switch + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-brand-dark-80 hover:text-brand-dark border border-brand-dark-20 hover:border-brand-dark transition-all duration-300 tracking-wider"
              aria-label="Switch language"
            >
              <Globe size={14} strokeWidth={1.5} />
              <span className="font-serif-en">{t.langSwitch}</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="btn-primary text-sm"
            >
              {t.nav.book}
            </a>
          </div>

          {/* Mobile: Language Switch + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2 py-1 text-sm text-brand-dark border border-brand-dark-20"
              aria-label="Switch language"
            >
              <Globe size={14} strokeWidth={1.5} />
              <span className="font-serif-en">{t.langSwitch}</span>
            </button>
            <button
              className="p-2 text-brand-dark"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-brand-light/98 backdrop-blur-lg shadow-lg transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-serif-zh text-brand-dark text-lg tracking-wider py-2 border-b border-brand-dark-10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="btn-primary text-center mt-2"
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </nav>
  );
}
