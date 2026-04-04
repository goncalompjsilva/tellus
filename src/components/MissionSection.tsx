import { useLanguage } from "@/contexts/LanguageContext";

export const MissionSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      pt: "Sustentabilidade",
      en: "Sustainability",
      descPt: "Uso responsável dos recursos naturais",
      descEn: "Responsible use of natural resources",
    },
    {
      pt: "Responsabilidade Ambiental",
      en: "Environmental Responsibility",
      descPt: "Compromisso com as gerações presentes e futuras",
      descEn: "Commitment to present and future generations",
    },
    {
      pt: "Conhecimento Científico",
      en: "Scientific Knowledge",
      descPt: "Base para decisões informadas",
      descEn: "Foundation for informed decisions",
    },
    {
      pt: "Cidadania Ativa",
      en: "Active Citizenship",
      descPt: "Envolvimento da sociedade nas decisões ambientais",
      descEn: "Society's involvement in environmental decisions",
    },
    {
      pt: "Ética Interespécies",
      en: "Interspecies Ethics",
      descPt: "Respeito pelos animais e todas as formas de vida",
      descEn: "Respect for animals and all forms of life",
    },
    {
      pt: "Colaboração",
      en: "Collaboration",
      descPt: "Trabalho em rede com entidades públicas e privadas",
      descEn: "Networking with public and private entities",
    },
  ];

  return (
    <section
      id="missao"
      className="relative noise-texture bg-tellus-off-white py-20 lg:py-[80px]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-tellus-divider">
          {/* Missão */}
          <div className="scroll-reveal pb-10 md:pb-0 md:pr-12">
            <span className="eyebrow">{t("MISSÃO", "MISSION")}</span>
            <h3 className="font-display text-[32px] font-medium mt-3 mb-5">
              {t("O que fazemos", "What we do")}
            </h3>
            <p className="font-body text-[17px] leading-[1.75] text-tellus-body">
              {t(
                "A TELLUS Ecocentric Lab tem como missão desenvolver e promover soluções inovadoras e sustentáveis para a proteção do ambiente, da natureza e do património, contribuindo para a transição ecológica e para o fortalecimento da resiliência socioecológica. Com base numa abordagem interdisciplinar e independente, a associação atua na produção e disseminação de conhecimento, no apoio à definição de políticas públicas e na implementação de iniciativas que incentivem práticas responsáveis e participativas. Através da capacitação de atores institucionais e da sociedade civil, a TELLUS procura gerar impacte mensurável, promovendo a integração de princípios ecocêntricos na tomada de decisão e contribuindo para um desenvolvimento mais justo, inclusivo e sustentável.",
                "TELLUS Ecocentric Lab's mission is to develop and promote innovative and sustainable solutions for the protection of the environment, nature and heritage, contributing to the ecological transition and the strengthening of socio-ecological resilience. Based on an interdisciplinary and independent approach, the association works in the production and dissemination of knowledge, support for public policy definition and implementation of initiatives that encourage responsible and participatory practices. Through the empowerment of institutional actors and civil society, TELLUS seeks to generate measurable impact, promoting the integration of ecocentric principles in decision-making and contributing to a more just, inclusive and sustainable development.",
              )}
            </p>
          </div>

          {/* Visão */}
          <div
            className="scroll-reveal py-10 md:py-0 md:px-12"
            style={{ transitionDelay: "150ms" }}
          >
            <span className="eyebrow">{t("VISÃO", "VISION")}</span>
            <h3 className="font-display text-[32px] font-medium mt-3 mb-5">
              {t("Para onde vamos", "Where we're going")}
            </h3>
            <p className="font-body text-[17px] leading-[1.75] text-tellus-body">
              {t(
                "A TELLUS Ecocentric Lab ambiciona ser uma referência na promoção de modelos de desenvolvimento ecocêntricos, contribuindo ativamente para a construção de sociedades sustentáveis, resilientes e inclusivas, posicionando-se como hub de inovação socioambiental.Pretende afirmar-se como um agente de mudança na integração de conhecimento científico, ação cívica e inovação, influenciando políticas públicas e práticas institucionais a nível local, nacional e internacional. A longo prazo, visa contribuir para um paradigma em que o equilíbrio dos ecossistemas e a valorização do património natural e construído sejam princípios estruturantes das decisões humanas, assegurando o bem-estar das gerações presentes e futuras.",
                "TELLUS Ecocentric Lab aspires to be a reference in the promotion of ecocentric development models, actively contributing to the construction of sustainable, resilient and inclusive societies, positioning itself as a hub of socio-environmental innovation. It aims to establish itself as an agent of change in the integration of scientific knowledge, civic action and innovation, influencing public policies and institutional practices at local, national and international levels. In the long term, it aims to contribute to a paradigm in which the balance of ecosystems and the appreciation of natural and built heritage are structuring principles of human decisions, ensuring the well-being of present and future generations.",
              )}
            </p>
          </div>

          {/* Valores */}
          <div
            className="scroll-reveal pt-10 md:pt-0 md:pl-12"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="eyebrow">{t("VALORES", "VALUES")}</span>
            <h3 className="font-display text-[32px] font-medium mt-3 mb-5">
              {t("O que acreditamos", "What we believe")}
            </h3>
            <dl className="space-y-3">
              {values.map((v) => (
                <div key={v.pt}>
                  <dt className="font-body text-[15px] font-bold text-tellus-green-dark">
                    {t(v.pt, v.en)}
                  </dt>
                  <dd className="font-body text-[15px] text-tellus-muted">
                    {t(v.descPt, v.descEn)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
