import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { TellusLogo } from './TellusLogo';
import { useLanguage } from '@/contexts/LanguageContext';

const navLinks = [
  { pt: 'Sobre Nós', en: 'About Us', href: '#sobre' },
  { pt: 'Missão', en: 'Mission', href: '#missao' },
  { pt: 'Áreas', en: 'Areas', href: '#areas' },
  { pt: 'Projetos', en: 'Projects', href: '#projetos' },
  { pt: 'Colaborar', en: 'Collaborate', href: '#colaborar' },
  { pt: 'Contacto', en: 'Contact', href: '#contacto' },
];

export const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full h-16 bg-background border-b border-tellus-divider flex items-center justify-between px-5 md:px-8 lg:px-20 transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_2px_12px_rgba(45,134,83,0.08)]' : ''
        }`}
      >
        <a href="#" className="flex-shrink-0">
          <TellusLogo color="hsl(148, 56%, 23%)" className="h-8 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-animated font-body text-sm font-medium text-tellus-body hover:text-tellus-green transition-colors"
            >
              {t(link.pt, link.en)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#junta-te"
            className="hidden sm:inline-flex items-center h-[38px] px-5 bg-tellus-terracotta text-primary-foreground font-body text-sm font-semibold rounded-md hover:bg-tellus-terracotta-hover transition-colors"
          >
            {t('Junta-te', 'Join Us')}
          </a>
          <button
            className="lg:hidden p-2 text-tellus-body"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100]" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-tellus-charcoal/20" />
          <div
            className="absolute right-0 top-0 h-full w-[300px] bg-background shadow-xl animate-[slide-in-right_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-tellus-body"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col gap-6 pt-20 px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-[28px] text-tellus-charcoal hover:text-tellus-green transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.pt, link.en)}
                </a>
              ))}
              <a
                href="#junta-te"
                className="mt-4 inline-flex items-center justify-center h-12 px-7 bg-tellus-terracotta text-primary-foreground font-body text-sm font-semibold rounded-md hover:bg-tellus-terracotta-hover transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t('Junta-te', 'Join Us')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
