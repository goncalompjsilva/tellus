import { TellusLogo } from './TellusLogo';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, lang, toggleLang } = useLanguage();

  const navLinks = [
    { pt: 'Sobre Nós', en: 'About Us', href: '#sobre' },
    { pt: 'Missão', en: 'Mission', href: '#missao' },
    { pt: 'Áreas', en: 'Areas', href: '#areas' },
    { pt: 'Projetos', en: 'Projects', href: '#projetos' },
    { pt: 'Colaborar', en: 'Collaborate', href: '#colaborar' },
    { pt: 'Contacto', en: 'Contact', href: '#contacto' },
  ];

  const projects = [
    'CRIAR RAÍZES', 'CLIMALAB', 'CIRCULA', 'CoExistir', 'HERITAGE+', 'EcoCIDADANIA',
  ];

  return (
    <footer className="relative bg-tellus-green-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="mb-10">
          <TellusLogo color="white" className="h-8 w-auto" />
          <p className="font-display italic text-lg text-primary-foreground/80 mt-3">
            {t('Ecocêntricos por convicção.', 'Ecocentric by conviction.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-4">{t('Navegação', 'Navigation')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {t(link.pt, link.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-4">{t('Projetos', 'Projects')}</h4>
            <ul className="space-y-2">
              {projects.map((p) => (
                <li key={p}>
                  <a href="#projetos" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/60 mb-4">{t('Contacto', 'Contact')}</h4>
            <a href="mailto:contacto@tellus.pt" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block">contacto@tellus.pt</a>
            <p className="font-body text-sm text-primary-foreground/60 mt-1">Portugal</p>
            <div className="flex gap-4 mt-4">
              {['LinkedIn', 'Instagram', 'Facebook'].map((s) => (
                <a key={s} href="#" className="font-body text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-primary-foreground/60">© 2025 TELLUS Ecocentric Lab. {t('Todos os direitos reservados.', 'All rights reserved.')}</span>
          <div className="flex items-center gap-2">
            <button onClick={() => lang !== 'pt' && toggleLang()} className={`${lang === 'pt' ? 'text-primary-foreground' : 'text-primary-foreground/50'}`}>🇵🇹 PT</button>
            <span className="text-primary-foreground/30">|</span>
            <button onClick={() => lang !== 'en' && toggleLang()} className={`${lang === 'en' ? 'text-primary-foreground' : 'text-primary-foreground/50'}`}>🇬🇧 EN</button>
          </div>
          <span className="text-primary-foreground/60">{t('Feito com 💚 para o Planeta', 'Made with 💚 for the Planet')}</span>
        </div>
      </div>
    </footer>
  );
};
