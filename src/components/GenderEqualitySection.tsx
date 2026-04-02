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
      className="relative noise-texture bg-background py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-[760px] scroll-reveal">
          <span className="eyebrow">06 · {t("IGUALDADE", "EQUALITY")}</span>
          <h2 className="font-display text-4xl lg:text-[48px] font-medium mt-3">
            {t("Política de Igualdade de Género", "Gender Equality Policy")}
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-tellus-body mt-6">
            {t(
              "A TELLUS está comprometida com a promoção da igualdade de género em todas as suas áreas, enquanto princípio essencial de uma organização inclusiva, justa e sustentável.",
              "TELLUS is committed to promoting gender equality in all its areas, as an essential principle of an inclusive, fair and sustainable organization.",
            )}
          </p>
          <div
            className="mt-8 scroll-reveal"
            style={{ transitionDelay: "150ms" }}
          >
            <h3 className="eyebrow mb-4">{t("OBJETIVOS", "OBJECTIVES")}</h3>
            <ul className="space-y-3">
              {objectives.map((obj) => (
                <li
                  key={obj.pt}
                  className="flex items-start gap-3 font-body text-[17px] leading-[1.75] text-tellus-body"
                >
                  <span className="text-tellus-green mt-[2px] shrink-0">→</span>
                  {t(obj.pt, obj.en)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
