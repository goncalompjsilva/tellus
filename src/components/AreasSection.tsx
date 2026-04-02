import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import areaBiodiversity from "@/assets/area-biodiversity.jpg";
import areaSustainability from "@/assets/area-sustainability.jpg";
import areaClimate from "@/assets/area-climate.jpg";
import areaAnimal from "@/assets/area-animal.jpg";
import areaHeritage from "@/assets/area-heritage.jpg";

interface AreaData {
  num: string;
  labelPt: string;
  labelEn: string;
  titlePt: string;
  titleEn: string;
  descPt: string;
  descEn: string;
  objectivesPt: string[];
  objectivesEn: string[];
  initiativesPt: string[];
  initiativesEn: string[];
  image: string;
  accentColor: string;
}

const areas: AreaData[] = [
  {
    num: "01",
    labelPt: "NATUREZA",
    labelEn: "NATURE",
    titlePt: "Conservação da Natureza e Biodiversidade",
    titleEn: "Nature Conservation and Biodiversity",
    descPt:
      "A biodiversidade é a base do equilíbrio dos ecossistemas e do bem-estar humano. A TELLUS atua na proteção de habitats naturais e espécies, promovendo soluções baseadas na ciência e na participação comunitária.",
    descEn:
      "Biodiversity is the foundation of ecosystem balance and human well-being. TELLUS works to protect natural habitats and species, promoting science-based and community-driven solutions.",
    objectivesPt: [
      "Apoiar decisores com recomendações baseadas em evidências",
      "Preservar habitats e ecossistemas sensíveis",
      "Proteger espécies ameaçadas",
      "Promover a conectividade ecológica",
      "Integrar comunidades locais na conservação",
    ],
    objectivesEn: [
      "Support decision-makers with evidence-based recommendations",
      "Preserve sensitive habitats and ecosystems",
      "Protect endangered species",
      "Promote ecological connectivity",
      "Integrate local communities in conservation",
    ],
    initiativesPt: [
      "Programas de monitorização de biodiversidade participativa",
      "Criação de micro-reservas urbanas",
      "Ações de restauro ecológico",
      "Projetos de corredores ecológicos locais",
      "Inventários de fauna e flora",
    ],
    initiativesEn: [
      "Participatory biodiversity monitoring programs",
      "Creation of urban micro-reserves",
      "Ecological restoration actions",
      "Local ecological corridor projects",
      "Fauna and flora inventories",
    ],
    image: areaBiodiversity,
    accentColor: "#48B87A",
  },
  {
    num: "02",
    labelPt: "SUSTENTABILIDADE",
    labelEn: "SUSTAINABILITY",
    titlePt: "Sustentabilidade e Recursos Naturais",
    titleEn: "Sustainability and Natural Resources",
    descPt:
      "A utilização excessiva dos recursos naturais exige uma transição para modelos sustentáveis. A TELLUS promove práticas que conciliem desenvolvimento económico com responsabilidade ambiental.",
    descEn:
      "The excessive use of natural resources requires a transition to sustainable models. TELLUS promotes practices that reconcile economic development with environmental responsibility.",
    objectivesPt: [
      "Promover o uso eficiente de recursos",
      "Incentivar a economia circular",
      "Reduzir o desperdício e a pegada ecológica",
      "Apoiar práticas sustentáveis em comunidades e organizações",
    ],
    objectivesEn: [
      "Promote efficient resource use",
      "Incentivize circular economy",
      "Reduce waste and ecological footprint",
      "Support sustainable practices in communities and organizations",
    ],
    initiativesPt: [
      "Programas de eco-literacia para escolas e empresas",
      "Projetos de redução de resíduos",
      "Oficinas de reutilização e upcycling",
      "Auditorias ambientais participativas",
    ],
    initiativesEn: [
      "Eco-literacy programs for schools and businesses",
      "Waste reduction projects",
      "Reuse and upcycling workshops",
      "Participatory environmental audits",
    ],
    image: areaSustainability,
    accentColor: "#2D8653",
  },
  {
    num: "03",
    labelPt: "CLIMA",
    labelEn: "CLIMATE",
    titlePt: "Ação Climática",
    titleEn: "Climate Action",
    descPt:
      "As alterações climáticas exigem respostas urgentes. A TELLUS defende uma abordagem integrada, centrada na articulação entre soluções baseadas na natureza, capacitação social e transformação comportamental.",
    descEn:
      "Climate change demands urgent responses. TELLUS advocates for an integrated approach, centered on nature-based solutions, social empowerment and behavioral transformation.",
    objectivesPt: [
      "Promover soluções baseadas na natureza",
      "Aumentar a resiliência das comunidades",
      "Sensibilizar para a emergência climática",
    ],
    objectivesEn: [
      "Promote nature-based solutions",
      "Increase community resilience",
      "Raise awareness about the climate emergency",
    ],
    initiativesPt: [
      "Desenvolvimento de planos locais de ação climática participativos",
      "Análise de Comportamento, Perceção e Vulnerabilidade",
      "Projetos de sequestro de carbono",
      "Campanhas de sensibilização climática",
      "Living labs para alteração de comportamentos",
    ],
    initiativesEn: [
      "Development of participatory local climate action plans",
      "Behavior, Perception and Vulnerability Analysis",
      "Carbon sequestration projects",
      "Climate awareness campaigns",
      "Living labs for behavior change",
    ],
    image: areaClimate,
    accentColor: "#2D8653",
  },
  {
    num: "04",
    labelPt: "BEM-ESTAR ANIMAL",
    labelEn: "ANIMAL WELFARE",
    titlePt: "Proteção e Bem-Estar Animal",
    titleEn: "Animal Protection and Welfare",
    descPt:
      "Reconhecendo os animais como seres sencientes, a TELLUS promove o aprofundamento desse reconhecimento legal e a convivência equilibrada entre humanos e não humanos.",
    descEn:
      "Recognizing animals as sentient beings, TELLUS promotes the deepening of this legal recognition and balanced coexistence between humans and non-humans.",
    objectivesPt: [
      "Promover políticas públicas de proteção dos animais",
      "Defender o bem-estar animal",
      "Sensibilizar para os direitos dos animais",
      "Combater abandono e maus-tratos",
    ],
    objectivesEn: [
      "Promote public animal protection policies",
      "Defend animal welfare",
      "Raise awareness about animal rights",
      "Combat abandonment and mistreatment",
    ],
    initiativesPt: [
      "Programas de educação para o respeito pelos animais",
      "Parcerias com associações locais de proteção animal",
      "Observatório de denúncia e monitorização de maus-tratos",
    ],
    initiativesEn: [
      "Education programs for animal respect",
      "Partnerships with local animal protection associations",
      "Observatory for reporting and monitoring mistreatment",
    ],
    image: areaAnimal,
    accentColor: "#C4522A",
  },
  {
    num: "05",
    labelPt: "PATRIMÓNIO",
    labelEn: "HERITAGE",
    titlePt: "Património Natural e Construído",
    titleEn: "Natural and Built Heritage",
    descPt:
      "O património natural e construído representa a memória coletiva e a identidade dos territórios. A sua proteção é essencial para o desenvolvimento sustentável.",
    descEn:
      "Natural and built heritage represents the collective memory and identity of territories. Its protection is essential for sustainable development.",
    objectivesPt: [
      "Valorizar paisagens e património local",
      "Promover a conservação integrada",
      "Incentivar o turismo sustentável",
    ],
    objectivesEn: [
      "Valorize landscapes and local heritage",
      "Promote integrated conservation",
      "Incentivize sustainable tourism",
    ],
    initiativesPt: [
      "Inventários participativos de património local",
      "Projetos de valorização de paisagens culturais",
      "Roteiros ecológicos e culturais",
      "Workshops sobre reabilitação sustentável",
    ],
    initiativesEn: [
      "Participatory local heritage inventories",
      "Cultural landscape valorization projects",
      "Ecological and cultural routes",
      "Sustainable rehabilitation workshops",
    ],
    image: areaHeritage,
    accentColor: "#2D8653",
  },
];

const AreaRow = ({ area, index }: { area: AreaData; index: number }) => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const imageFirst = index % 2 !== 0;

  const textContent = (
    <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-0">
      <div className="inline-block w-12 h-1 mb-4 bg-tellus-green" />
      <span className="eyebrow mb-2">
        {area.num} · {t(area.labelPt, area.labelEn)}
      </span>
      <h3 className="font-display text-3xl lg:text-4xl font-medium mb-4">
        {t(area.titlePt, area.titleEn)}
      </h3>
      <p className="font-body text-[17px] leading-[1.75] text-tellus-body mb-4">
        {t(area.descPt, area.descEn)}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-body text-sm text-tellus-green hover:text-tellus-green-light transition-colors text-left"
      >
        {expanded
          ? t("Ver menos −", "See less −")
          : t("Ver mais +", "See more +")}
      </button>
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: expanded ? "600px" : "0px",
          opacity: expanded ? 1 : 0,
        }}
      >
        <div className="pt-4">
          {area.objectivesPt.length > 0 && (
            <>
              <h4 className="eyebrow mb-2">{t("OBJETIVOS", "OBJECTIVES")}</h4>
              <ul className="space-y-1 mb-4">
                {t(area.objectivesPt.join("||"), area.objectivesEn.join("||"))
                  .split("||")
                  .map((obj, i) => (
                    <li key={i} className="font-body text-sm text-tellus-body">
                      → {obj}
                    </li>
                  ))}
              </ul>
            </>
          )}
          {area.initiativesPt.length > 0 && (
            <>
              <h4 className="eyebrow mb-2">
                {t("INICIATIVAS", "INITIATIVES")}
              </h4>
              <ul className="space-y-1">
                {t(area.initiativesPt.join("||"), area.initiativesEn.join("||"))
                  .split("||")
                  .map((ini, i) => (
                    <li key={i} className="font-body text-sm text-tellus-body">
                      → {ini}
                    </li>
                  ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const imageContent = (
    <div className="w-full h-64 lg:h-auto">
      <img
        src={area.image}
        alt={t(area.titlePt, area.titleEn)}
        className="w-full h-full object-cover"
        loading="lazy"
        width={960}
        height={640}
      />
    </div>
  );

  return (
    <div className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 min-h-[480px] border-b border-tellus-divider">
      {imageFirst ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1 flex">{textContent}</div>
          <div className="order-1 lg:order-2 flex">{imageContent}</div>
        </>
      )}
    </div>
  );
};

export const AreasSection = () => {
  const { t } = useLanguage();

  return (
    <section id="areas" className="relative noise-texture bg-background">
      <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-20">
        <span className="eyebrow scroll-reveal">
          {t("ÁREAS DE INTERVENÇÃO", "AREAS OF INTERVENTION")}
        </span>
        <h2 className="font-display text-4xl lg:text-[56px] font-medium mt-3 scroll-reveal">
          {t("Onde atuamos", "Where we act")}
        </h2>
      </div>
      {areas.map((area, i) => (
        <AreaRow key={area.num} area={area} index={i} />
      ))}
    </section>
  );
};
