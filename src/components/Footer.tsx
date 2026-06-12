import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();
  const f = t.footer;

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.themes, href: '#themes' },
    { label: t.nav.about, href: '#founder' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const themeLinks = lang === 'zh'
    ? ['佛教文化之旅', '道教文化之旅', '古代书院之旅', '凭吊名人墓葬之旅', '中原诗词之旅', '嵩岳文化深度游']
    : ['Buddhist Heritage', 'Taoist Immersion', 'Academy Heritage', 'Literary Pilgrimage', 'Poetry Journey', 'Songyue Depth'];

  return (
    <footer className="w-full bg-brand-dark text-brand-light/70">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-brand-light/30 flex items-center justify-center rounded-sm">
                <span className="font-serif-zh text-lg font-bold text-brand-light">
                  寻
                </span>
              </div>
              <div>
                <div className="font-serif-zh text-xl font-semibold text-brand-light tracking-widest">
                  {lang === 'zh' ? '寻踪文旅' : 'Trace & Trail'}
                </div>
                <div className="font-serif-en text-xs text-brand-light/50 tracking-wider">
                  {f.slogan}
                </div>
              </div>
            </div>
            <p className="text-brand-light/50 text-sm leading-relaxed max-w-sm">
              {f.desc}
            </p>
            <div className="mt-6 font-serif-zh text-brand-light/40 text-sm italic tracking-wide">
              {f.brandQuote}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-serif-zh text-brand-light text-sm font-medium tracking-wider mb-5">
              {f.quickLinks}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-brand-light/50 hover:text-brand-light transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Themes */}
          <div className="md:col-span-3">
            <h4 className="font-serif-zh text-brand-light text-sm font-medium tracking-wider mb-5">
              {f.themeLinks}
            </h4>
            <ul className="space-y-3">
              {themeLinks.map((theme, i) => (
                <li key={i}>
                  <a
                    href="#themes"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#themes')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-brand-light/50 hover:text-brand-light transition-colors duration-300 text-sm"
                  >
                    {theme}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-light/10">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-light/40 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} {f.company} {f.copyright}
          </p>
          <p className="text-brand-light/40 text-xs tracking-wider">
            {f.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
