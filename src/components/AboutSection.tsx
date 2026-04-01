import { useLanguage } from "@/contexts/LanguageContext";
import teamImg from "@/assets/team-field.jpg";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="sobre"
      className="relative noise-texture bg-background py-20 lg:py-[120px]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[5%]">
          {/* Left column — 55% */}
          <div className="lg:w-[55%] scroll-reveal">
            <span className="eyebrow">{t("SOBRE NÓS", "ABOUT US")}</span>
            <h2 className="font-display text-4xl lg:text-[48px] font-medium leading-[1.15] mt-4">
              {t("Uma visão ecocêntrica", "An ecocentric vision")}
              <br />
              <em className="font-display italic">
                {t("para um mundo mais justo", "for a more just world")}
              </em>
            </h2>
            <p className="font-body text-[17px] leading-[1.75] text-tellus-body mt-8 max-w-[560px]">
              {t(
                "A TELLUS Ecocentric Lab é uma associação sem fins lucrativos, composta por profissionais de diversas áreas, incluindo Engenharia, Direito, Relações Internacionais e Sociologia, entre outras. Dedica-se à defesa do ambiente, da natureza e do património, tanto natural como construído. Atua de forma independente, orientada por uma visão ecocêntrica que coloca a sustentabilidade e o equilíbrio dos ecossistemas no centro das decisões humanas. Acreditamos que um futuro justo e resiliente depende da harmonia entre sociedade e natureza, e trabalhamos para fortalecer essa relação através do conhecimento, da ação e da participação cívica.",
                "TELLUS Ecocentric Lab is a non-profit association, composed of professionals from diverse fields, including Engineering, Law, International Relations and Sociology, among others. It is dedicated to the defense of the environment, nature and heritage, both natural and built. It acts independently, guided by an ecocentric vision that places sustainability and ecosystem balance at the center of human decisions. We believe that a just and resilient future depends on the harmony between society and nature, and we work to strengthen this relationship through knowledge, action and civic participation.",
              )}
            </p>
            <div className="wavy-rule my-8" />
          </div>

          {/* Right column — 40% */}
          <div
            className="lg:w-[40%] scroll-reveal"
            style={{ transitionDelay: "150ms" }}
          >
            <img
              src={teamImg}
              alt={t("Equipa no campo", "Team in the field")}
              className="w-full aspect-[3/4] object-cover rounded"
              loading="lazy"
              width={800}
              height={1067}
            />
            <blockquote className="mt-6">
              <p className="font-display italic text-[22px] text-tellus-green-dark leading-snug">
                {t(
                  '"Harmonia entre sociedade e natureza."',
                  '"Harmony between society and nature."',
                )}
              </p>
              <cite className="font-body text-xs text-tellus-muted not-italic mt-2 block">
                — {t("Missão TELLUS", "TELLUS Mission")}
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
