import { useLanguage } from "@/contexts/LanguageContext";

export const ParticipationSection = () => {
  const { t } = useLanguage();

  const ways = [
    { num: "01", pt: "Projetos Comunitários", en: "Community Projects" },
    { num: "02", pt: "Consultas Públicas", en: "Public Consultations" },
    { num: "03", pt: "Ações de Voluntariado", en: "Volunteering Actions" },
    { num: "04", pt: "Iniciativas de Advocacy", en: "Advocacy Initiatives" },
  ];

  const joinModes = [
    {
      labelPt: "Torna-te associado/a",
      labelEn: "Become a member",
      descPt: "Faz parte da nossa comunidade de mudança",
      descEn: "Be part of our community of change",
    },
    {
      labelPt: "Participa como voluntário/a",
      labelEn: "Participate as a volunteer",
      descPt: "Contribui com o teu tempo e energia",
      descEn: "Contribute with your time and energy",
    },
    {
      labelPt: "Apoia os nossos projetos",
      labelEn: "Support our projects",
      descPt: "Ajuda a financiar iniciativas de impacte",
      descEn: "Help fund impactful initiatives",
    },
    {
      labelPt: "Colabora como parceiro",
      labelEn: "Collaborate as a partner",
      descPt: "Trabalha connosco institucionalmente",
      descEn: "Work with us institutionally",
    },
  ];

  return (
    <section
      id="junta-te"
      className="relative noise-texture bg-tellus-off-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:divide-x divide-tellus-divider gap-12 lg:gap-0">
          {/* Left — Participação Cívica */}
          <div className="lg:w-1/2 lg:pr-12 scroll-reveal">
            <span className="eyebrow">
              {t("PARTICIPAÇÃO CÍVICA", "CIVIC PARTICIPATION")}
            </span>
            <h2 className="font-display text-3xl lg:text-[40px] font-medium mt-3">
              {t("O teu papel na mudança", "Your role in change")}
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-tellus-body mt-4">
              {t(
                "Acreditamos que todos têm um papel na proteção do ambiente. Incentivamos a participação ativa dos cidadãos através de:",
                "We believe everyone has a role in protecting the environment. We encourage active citizen participation through:",
              )}
            </p>
            <div className="mt-8 divide-y divide-tellus-divider">
              {ways.map((w) => (
                <div key={w.num} className="py-4 flex items-center gap-6">
                  <span className="font-display italic text-2xl text-tellus-green flex-shrink-0 w-8">
                    {w.num}
                  </span>
                  <h4 className="font-display text-xl font-medium text-tellus-charcoal">
                    {t(w.pt, w.en)}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Junta-te */}
          <div
            className="lg:w-1/2 lg:pl-12 scroll-reveal"
            style={{ transitionDelay: "150ms" }}
          >
            <span className="eyebrow opacity-0 pointer-events-none select-none" aria-hidden="true">placeholder</span>
            <h2 className="font-display italic text-3xl lg:text-[40px] font-medium mt-3">
              {t("Queres fazer parte?", "Want to be part of it?")}
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-tellus-body mt-4">
              {t(
                "Juntos, podemos construir um futuro mais sustentável e justo.",
                "Together, we can build a more sustainable and fair future for people, animals and the planet.",
              )}
            </p>
            <div className="mt-8 divide-y divide-tellus-divider">
              {joinModes.map((m) => (
                <div
                  key={m.labelPt}
                  className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                >
                  <div>
                    <h4 className="font-body text-[15px] font-bold text-tellus-charcoal">
                      {t(m.labelPt, m.labelEn)}
                    </h4>
                    <p className="font-body text-sm text-tellus-muted">
                      {t(m.descPt, m.descEn)}
                    </p>
                  </div>
                  <a
                    href="#colaborar"
                    className="font-body text-sm text-tellus-green flex-shrink-0 hover:text-tellus-green-light transition-colors"
                  >
                    →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
