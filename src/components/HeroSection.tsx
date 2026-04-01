import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { num: "6", pt: "Áreas de Intervenção", en: "Areas of Intervention" },
    { num: "6", pt: "Projetos-Âncora", en: "Anchor Projects" },
    { num: "5+", pt: "Domínios de Expertise", en: "Expertise Domains" },
    { num: "100%", pt: "Independente", en: "Independent" },
  ];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-background">
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 pb-[60px]">
        <h1 className="font-display text-5xl sm:text-7xl lg:text-[88px] font-bold leading-[1] text-tellus-charcoal">
          {(
            [
              ["Ciência.", "Science."],
              ["Ação.", "Action."],
              ["Terra.", "Earth."],
            ] as const
          ).map(([pt, en], i) => (
            <span
              key={pt}
              className={`block transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {t(pt, en)}
            </span>
          ))}
        </h1>

        <p
          className={`font-body text-[17px] leading-[1.75] text-tellus-body mt-8 max-w-[560px] transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {t(
            "Uma associação independente dedicada à defesa do ambiente, da natureza e do bem-estar de todas as formas de vida. Ecocêntricos por convicção, rigorosos por princípio.",
            "An independent association dedicated to the defense of the environment, nature and the well-being of all forms of life. Ecocentric by conviction, rigorous by principle.",
          )}
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 mt-8 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          <a
            href="#sobre"
            className="inline-flex items-center h-12 px-7 bg-tellus-green text-primary-foreground font-body text-sm font-semibold rounded-md hover:bg-tellus-green-dark transition-colors"
          >
            {t("Conhecer a TELLUS", "Discover TELLUS")}
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center h-12 px-7 border-[1.5px] border-tellus-charcoal text-tellus-charcoal font-body text-sm font-semibold rounded-md hover:border-tellus-green hover:text-tellus-green transition-colors"
          >
            {t("Os Nossos Projetos", "Our Projects")}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className={`absolute bottom-[72px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-tellus-charcoal/50 transition-all duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "900ms" }}
        aria-hidden="true"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.15em]">
          {t("Explorar", "Explore")}
        </span>
        <ChevronDown size={13} className="animate-bounce" />
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-tellus-green flex items-center justify-center z-10">
        <div className="flex items-center gap-4 md:gap-8 px-4 overflow-x-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 md:gap-8 flex-shrink-0"
            >
              {i > 0 && <span className="w-px h-6 bg-primary-foreground/30" />}
              <div className="flex items-center gap-2 text-primary-foreground">
                <span className="font-body text-lg font-bold">{stat.num}</span>
                <span className="font-body text-xs opacity-80 whitespace-nowrap">
                  {t(stat.pt, stat.en)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
