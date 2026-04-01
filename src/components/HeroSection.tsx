import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImg from '@/assets/hero-landscape.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { num: '6', pt: 'Áreas de Intervenção', en: 'Areas of Intervention' },
    { num: '6', pt: 'Projetos-Âncora', en: 'Anchor Projects' },
    { num: '5+', pt: 'Domínios de Expertise', en: 'Expertise Domains' },
    { num: '100%', pt: 'Independente', en: 'Independent' },
  ];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <img
        src={heroImg}
        alt={t('Paisagem portuguesa', 'Portuguese landscape')}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Left gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[700px]">
        <span className="eyebrow mb-6">
          🌍 ECOCENTRIC LAB · PORTUGAL
        </span>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-[88px] font-bold leading-[1] text-tellus-charcoal">
          {['Ciência.', 'Ação.', 'Terra.'].map((word, i) => (
            <span
              key={word}
              className={`block transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="font-body text-[17px] leading-[1.75] text-tellus-body mt-8 max-w-[480px]">
          {t(
            'Uma associação independente dedicada à defesa do ambiente, da natureza e do bem-estar de todas as formas de vida. Ecocêntricos por convicção, rigorosos por princípio.',
            'An independent association dedicated to the defense of the environment, nature and the well-being of all forms of life. Ecocentric by conviction, rigorous by principle.'
          )}
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#sobre"
            className="inline-flex items-center h-12 px-7 bg-tellus-terracotta text-primary-foreground font-body text-sm font-semibold rounded-md hover:bg-tellus-terracotta-hover transition-colors"
          >
            {t('Conhecer a TELLUS', 'Discover TELLUS')}
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center h-12 px-7 border-[1.5px] border-tellus-charcoal text-tellus-charcoal font-body text-sm font-semibold rounded-md hover:border-tellus-green hover:text-tellus-green transition-colors"
          >
            {t('Os Nossos Projetos', 'Our Projects')}
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-tellus-green flex items-center justify-center z-10">
        <div className="flex items-center gap-4 md:gap-8 px-4 overflow-x-auto">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 flex-shrink-0">
              {i > 0 && <span className="w-px h-6 bg-primary-foreground/30" />}
              <div className="flex items-center gap-2 text-primary-foreground">
                <span className="font-body text-lg font-bold">{stat.num}</span>
                <span className="font-body text-xs opacity-80 whitespace-nowrap">{t(stat.pt, stat.en)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
