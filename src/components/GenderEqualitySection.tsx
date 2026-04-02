import { useLanguage } from "@/contexts/LanguageContext";

export const GenderEqualitySection = () => {
  const { t } = useLanguage();

  const objectives = [
    {
      pt: "Garantir ambiente de trabalho livre de discriminação",
      en: "Ensure a discrimination-free work environment",
    },
    {
      pt: "Promover equilíbrio de género nos processos de decisão",
      en: "Promote gender balance in decision-making",
    },
    {
      pt: "Integrar a dimensão de género nos projetos",
      en: "Integrate gender dimension in projects",
    },
    {
      pt: "Fomentar cultura organizacional inclusiva",
      en: "Foster inclusive organizational culture",
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
                "A TELLUS está comprometida com a promoção da igualdade de género em todas as suas áreas, enquanto princípio essencial de uma organização inclusiva, justa e sustentável.",
                "TELLUS is committed to promoting gender equality in all its areas, as an essential principle of an inclusive, fair and sustainable organization.",
              )}
            </p>
          </div>

          {/* Right: objectives */}
          <div className="scroll-reveal" style={{ transitionDelay: "150ms" }}>
            <span className="font-body text-xs uppercase tracking-[0.15em] text-tellus-green-light">
              {t("OBJETIVOS", "OBJECTIVES")}
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
