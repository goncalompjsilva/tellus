import { useLanguage } from "@/contexts/LanguageContext";

export const GenderEqualitySection = () => {
  const { t } = useLanguage();

  const objectives = [
    {
      pt: "Garantir ambiente de trabalho livre de discriminação e de assédio",
      en: "Ensure a discrimination-free and harassment-free work environment",
    },
    {
      pt: "Promover equilíbrio de género nos processos de decisão e equipas",
      en: "Promote gender balance in decision-making and teams",
    },
    {
      pt: "Integrar a dimensão de género nos projetos sempre que relevante",
      en: "Integrate gender dimension in projects whenever relevant",
    },
    {
      pt: "Fomentar cultura organizacional inclusiva e de respeito pela diversidade",
      en: "Foster inclusive organizational culture and respect for diversity",
    },
    {
      pt: "Assegurar práticas de sensibilização e melhoria contínua em matéria de igualdade",
      en: "Ensure awareness practices and continuous improvement in matters of equality",
    },
  ];

  return (
    <section
      id="igualdade"
      className="relative noise-texture bg-tellus-green-dark py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading + description */}
          <div className="scroll-reveal">
            <span className="font-body text-xs uppercase tracking-[0.15em] text-tellus-green-light">
              {t("IGUALDADE DE GÉNERO", "GENDER EQUALITY")}
            </span>
            <h2 className="font-display text-4xl lg:text-[52px] font-medium mt-3 text-white leading-tight">
              <span className="hidden lg:inline">
                {t("Política de Igualdade", "Gender Equality")}
                <br />
                {t("de Género", "Policy")}
              </span>
              <span className="lg:hidden">
                {t("Política de Igualdade de Género", "Gender Equality Policy")}
              </span>
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-white/70 mt-6">
              {t(
                "A TELLUS está comprometida com a promoção da igualdade de género em todas as suas áreas, enquanto princípio essencial de uma organização inclusiva, justa e sustentável. Integramos a perspetiva de género na nossa ação, promovendo a igualdade de oportunidades e a participação equitativa de todas as pessoas, independentemente do género.",
                "TELLUS is committed to promoting gender equality in all its areas, as an essential principle of an inclusive, fair and sustainable organization. We integrate the gender perspective into our actions, promoting equal opportunities and equitable participation for all individuals, regardless of gender.",
              )}
              <br className="my-4" />
              <br className="my-4" />
              {t(
                "A TELLUS Ecocentric Lab acredita que a igualdade de género é fundamental para a qualidade, inovação e impacte das suas ações, contribuindo para uma sociedade mais equilibrada e sustentável.",
                "TELLUS Ecocentric Lab believes that gender equality is fundamental to the quality, innovation, and impact of its actions, contributing to a more balanced and sustainable society.",
              )}
            </p>
          </div>

          {/* Right: objectives */}
          <div className="scroll-reveal" style={{ transitionDelay: "150ms" }}>
            <span className="font-body text-xs uppercase tracking-[0.15em] text-tellus-green-light">
              {t("COMPROMETEMO-NOS A", "WE COMMIT TO")}
            </span>
            <ul className="mt-6 space-y-5">
              {objectives.map((obj) => (
                <li
                  key={obj.pt}
                  className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <span className="text-tellus-green-light shrink-0 mt-0.5">
                    →
                  </span>
                  <span className="font-body text-[16px] leading-[1.7] text-white/80">
                    {t(obj.pt, obj.en)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
