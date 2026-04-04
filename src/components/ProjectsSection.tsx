import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import projectImg from "@/assets/project-criar-raizes.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectCard {
  acronym: string;
  namePt: string;
  nameEn: string;
  subtitlePt: string;
  subtitleEn: string;
  descPt: string;
  descEn: string;
  fullDescPt?: string;
  fullDescEn?: string;
  objectivesPt?: string[];
  objectivesEn?: string[];
  actionsPt?: string[];
  actionsEn?: string[];
  targetPt: string[];
  targetEn: string[];
}

const row2: ProjectCard[] = [
  {
    acronym: "CLIMALAB",
    namePt: "Laboratório Vivo para Ação Climática",
    nameEn: "Living Lab for Climate Action",
    subtitlePt: "Ação Climática Local",
    subtitleEn: "Local Climate Action",
    descPt:
      "Um living lab que testa soluções reais para adaptação climática em contexto local.",
    descEn:
      "A living lab that tests real solutions for climate adaptation in local contexts.",
    objectivesPt: [
      "Reduzir emissões locais",
      "Testar soluções baseadas na natureza",
      "Criar modelos replicáveis",
      "Capacitar comunidades",
    ],
    objectivesEn: [
      "Reduce local emissions",
      "Test nature-based solutions",
      "Create replicable models",
      "Empower communities",
    ],
    actionsPt: [
      "Desenvolvimento de planos climáticos locais",
      "Instalação de infraestruturas verdes",
      "Monitorização da pegada de carbono",
      "Workshops sobre resiliência climática",
    ],
    actionsEn: [
      "Development of local climate plans",
      "Installation of green infrastructure",
      "Carbon footprint monitoring",
      "Workshops on climate resilience",
    ],
    targetPt: ["Municípios", "Empresas", "Cidadãos"],
    targetEn: ["Municipalities", "Businesses", "Citizens"],
  },
  {
    acronym: "CIRCULA",
    namePt: "Comunidades para a Economia Circular",
    nameEn: "Communities for Circular Economy",
    subtitlePt: "Economia Circular",
    subtitleEn: "Circular Economy",
    descPt:
      "Projeto focado na transição para modelos circulares, reduzindo resíduos e promovendo novos hábitos de consumo.",
    descEn:
      "Project focused on transitioning to circular models, reducing waste and promoting new consumption habits.",
    objectivesPt: [
      "Reduzir produção de resíduos",
      "Promover reutilização e reparação",
      "Sensibilizar para consumo consciente",
      "Apoiar negócios sustentáveis",
    ],
    objectivesEn: [
      "Reduce waste production",
      "Promote reuse and repair",
      "Raise awareness for conscious consumption",
      "Support sustainable businesses",
    ],
    actionsPt: [
      "Criação de eco-hubs locais",
      "Oficinas de reparação e upcycling",
      "Programas 'bairro zero desperdício'",
      "Guias de boas práticas",
    ],
    actionsEn: [
      "Creation of local eco-hubs",
      "Repair and upcycling workshops",
      "'Zero waste neighbourhood' programs",
      "Good practice guides",
    ],
    targetPt: ["Famílias", "Escolas", "PMEs", "Comunidades"],
    targetEn: ["Families", "Schools", "SMEs", "Communities"],
  },
  {
    acronym: "CoExistir",
    namePt: "Programa de Bem-Estar Animal e Convivência Harmoniosa",
    nameEn: "Program for Animal Welfare and Harmonious Coexistence",
    subtitlePt: "Bem-Estar Animal",
    subtitleEn: "Animal Welfare",
    descPt:
      "Promove uma abordagem integrada ao bem-estar animal e à convivência sustentável entre humanos e animais.",
    descEn:
      "Promotes an integrated approach to animal welfare and sustainable coexistence between humans and animals.",
    fullDescPt:
      "O programa CoExistir promove uma abordagem integrada ao bem-estar animal e à convivência sustentável entre humanos e animais, reconhecendo-os como parte interdependente dos ecossistemas e das comunidades. Parte do princípio de que uma sociedade verdadeiramente resiliente e sustentável é aquela que assegura relações éticas, responsáveis e equilibradas com todas as formas de vida.||Este conceito assenta na valorização do respeito pela vida animal, na promoção da responsabilidade individual e coletiva e na construção de práticas de coexistência que minimizem conflitos e maximizem o bem-estar comum. Assim, pretende-se ultrapassar uma visão utilitarista dos animais, reforçando uma perspetiva de integração, proteção e equilíbrio.||O programa atua na prevenção de problemas associados ao abandono, à sobrepopulação e ao conflito humano-animal, ao mesmo tempo que incentiva comportamentos responsáveis de tutela, cuidado e proteção. Paralelamente, promove a sensibilização da comunidade para a importância dos animais na biodiversidade, na saúde dos ecossistemas e na qualidade de vida urbana e rural.||O CoExistir aposta também na educação e na mudança de comportamentos, através de ações formativas, campanhas de sensibilização e iniciativas comunitárias que incentivem a empatia, o respeito e a convivência harmoniosa. Desta forma, contribui para a criação de comunidades mais inclusivas, conscientes e sustentáveis, onde humanos e animais possam coexistir de forma equilibrada e benéfica para ambos.",
    fullDescEn:
      "The CoExistir program promotes an integrated approach to animal welfare and sustainable coexistence between humans and animals, recognizing them as an interdependent part of ecosystems and communities. It is grounded in the principle that a truly resilient and sustainable society is one that ensures ethical, responsible, and balanced relationships with all forms of life.||This concept is based on valuing respect for animal life, promoting individual and collective responsibility, and building coexistence practices that minimize conflicts and maximize common well-being. The aim is to move beyond a utilitarian view of animals, reinforcing a perspective of integration, protection, and balance.||The program works to prevent problems associated with abandonment, overpopulation, and human-animal conflict, while encouraging responsible behaviors of guardianship, care, and protection. It also promotes community awareness of the importance of animals in biodiversity, ecosystem health, and urban and rural quality of life.||CoExistir also invests in education and behavior change through training activities, awareness campaigns, and community initiatives that encourage empathy, respect, and harmonious coexistence. In this way, it contributes to the creation of more inclusive, conscious, and sustainable communities, where humans and animals can coexist in a balanced and mutually beneficial way.",
    targetPt: ["Escolas", "Municípios", "Associações de proteção animal"],
    targetEn: ["Schools", "Municipalities", "Animal protection associations"],
  },
];

const row3: ProjectCard[] = [
  {
    acronym: "HERITAGE+",
    namePt: "Valorização do Património Natural e Cultural",
    nameEn: "Natural and Cultural Heritage Valorization",
    subtitlePt: "Património e Turismo",
    subtitleEn: "Heritage and Tourism",
    descPt:
      "Integra conservação ambiental e valorização cultural, promovendo a identidade territorial e a sustentabilidade.",
    descEn:
      "Integrates environmental conservation and cultural valorization, promoting territorial identity and sustainability.",
    objectivesPt: [
      "Proteger património natural e construído",
      "Promover turismo sustentável",
      "Valorizar identidade local",
      "Envolver comunidades",
    ],
    objectivesEn: [
      "Protect natural and built heritage",
      "Promote sustainable tourism",
      "Valorize local identity",
      "Engage communities",
    ],
    actionsPt: [
      "Criação de roteiros ecológicos e culturais",
      "Inventários participativos",
      "Projetos de reabilitação sustentável",
      "Eventos e experiências imersivas",
    ],
    actionsEn: [
      "Creation of ecological and cultural itineraries",
      "Participatory inventories",
      "Sustainable rehabilitation projects",
      "Events and immersive experiences",
    ],
    targetPt: ["Turistas", "Comunidades locais", "Autarquias", "Escolas"],
    targetEn: ["Tourists", "Local communities", "Municipalities", "Schools"],
  },
  {
    acronym: "EcoCIDADANIA",
    namePt: "Educação e Participação para a Sustentabilidade",
    nameEn: "Education and Participation for Sustainability",
    subtitlePt: "Cidadania Ambiental",
    subtitleEn: "Environmental Citizenship",
    descPt:
      "Programa transversal que promove literacia ambiental e participação cívica informada.",
    descEn:
      "Cross-cutting program that promotes environmental literacy and informed civic participation.",
    objectivesPt: [
      "Aumentar conhecimento ambiental",
      "Promover cidadania ativa",
      "Formar agentes de mudança",
      "Influenciar políticas públicas",
    ],
    objectivesEn: [
      "Increase environmental knowledge",
      "Promote active citizenship",
      "Train change agents",
      "Influence public policies",
    ],
    actionsPt: [
      "Programas educativos",
      "Simulações de assembleias cidadãs",
      "Campanhas de sensibilização",
      "Plataformas digitais participativas",
    ],
    actionsEn: [
      "Educational programs",
      "Citizen assembly simulations",
      "Awareness campaigns",
      "Participatory digital platforms",
    ],
    targetPt: ["Jovens", "Estudantes", "Cidadãos", "Decisores"],
    targetEn: ["Youth", "Students", "Citizens", "Decision-makers"],
  },
];

const CardComponent = ({ project }: { project: ProjectCard }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border border-tellus-divider rounded-md p-6 lg:p-8 flex flex-col scroll-reveal">
        <span className="eyebrow">{project.acronym}</span>
        <h4 className="font-display text-2xl font-medium mt-2">
          {t(project.namePt, project.nameEn)}
        </h4>
        <p className="font-body text-[13px] italic text-tellus-muted mt-1">
          {t(project.subtitlePt, project.subtitleEn)}
        </p>
        <p className="font-body text-[15px] leading-[1.7] text-tellus-body mt-4">
          {t(project.descPt, project.descEn)}
        </p>
        {project.objectivesPt && project.objectivesPt.length > 0 && (
          <div className="mt-4 space-y-1 flex-1">
            {t(
              project.objectivesPt.join("||"),
              project.objectivesEn!.join("||"),
            )
              .split("||")
              .map((obj, i) => (
                <p key={i} className="font-body text-sm text-tellus-body">
                  → {obj}
                </p>
              ))}
          </div>
        )}
        {project.actionsPt && project.actionsPt.length > 0 && (
          <div className="mt-4">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-tellus-muted">
              {t("AÇÕES PRINCIPAIS", "MAIN ACTIONS")}
            </p>
            <div className="mt-2 space-y-1">
              {t(project.actionsPt.join("||"), project.actionsEn!.join("||"))
                .split("||")
                .map((action, i) => (
                  <p key={i} className="font-body text-sm text-tellus-body">
                    → {action}
                  </p>
                ))}
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {t(project.targetPt.join("||"), project.targetEn.join("||"))
            .split("||")
            .map((tag, i) => (
              <span
                key={i}
                className="bg-tellus-green-xlight text-tellus-green-dark font-body text-xs px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
        </div>
        <button
          onClick={() => setOpen(true)}
          className="font-body text-[13px] text-tellus-green mt-4 nav-link-animated inline-block text-left"
        >
          {t("Saber mais →", "Learn more →")}
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <span className="eyebrow">{project.acronym}</span>
            <DialogTitle className="font-display text-2xl font-medium mt-2">
              {t(project.namePt, project.nameEn)}
            </DialogTitle>
            <p className="font-body text-[13px] italic text-tellus-muted mt-1">
              {t(project.subtitlePt, project.subtitleEn)}
            </p>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            {project.fullDescPt ? (
              t(project.fullDescPt, project.fullDescEn ?? "")
                .split("||")
                .map((para, i) => (
                  <p
                    key={i}
                    className="font-body text-[15px] leading-[1.7] text-tellus-body"
                  >
                    {para}
                  </p>
                ))
            ) : (
              <p className="font-body text-[15px] leading-[1.7] text-tellus-body">
                {t(project.descPt, project.descEn)}
              </p>
            )}
            {project.objectivesPt && project.objectivesPt.length > 0 && (
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-tellus-muted mb-2">
                  {t("OBJETIVOS", "OBJECTIVES")}
                </p>
                <div className="space-y-1">
                  {t(
                    project.objectivesPt.join("||"),
                    project.objectivesEn!.join("||"),
                  )
                    .split("||")
                    .map((obj, i) => (
                      <p key={i} className="font-body text-sm text-tellus-body">
                        → {obj}
                      </p>
                    ))}
                </div>
              </div>
            )}
            {project.actionsPt && project.actionsPt.length > 0 && (
              <div>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-tellus-muted mb-2">
                  {t("AÇÕES PRINCIPAIS", "MAIN ACTIONS")}
                </p>
                <div className="space-y-1">
                  {t(
                    project.actionsPt.join("||"),
                    project.actionsEn!.join("||"),
                  )
                    .split("||")
                    .map((action, i) => (
                      <p key={i} className="font-body text-sm text-tellus-body">
                        → {action}
                      </p>
                    ))}
                </div>
              </div>
            )}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-tellus-muted mb-2">
                {t("PÚBLICO-ALVO", "TARGET AUDIENCE")}
              </p>
              <div className="flex flex-wrap gap-2">
                {t(project.targetPt.join("||"), project.targetEn.join("||"))
                  .split("||")
                  .map((tag, i) => (
                    <span
                      key={i}
                      className="bg-tellus-green-xlight text-tellus-green-dark font-body text-xs px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="projetos"
      className="relative noise-texture bg-tellus-off-white py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <span className="eyebrow scroll-reveal">
          {t("PROJETOS", "PROJECTS")}
        </span>
        <h2 className="font-display text-4xl lg:text-[56px] font-medium mt-3 scroll-reveal">
          {t("Os nossos projetos-âncora", "Our anchor projects")}
        </h2>
        <p className="font-body text-lg text-tellus-body mt-4 max-w-[540px] scroll-reveal">
          {t(
            "Seis iniciativas transformadoras com impacte mensurável nas comunidades e nos ecossistemas.",
            "Six transformative initiatives with measurable impact on communities and ecosystems.",
          )}
        </p>

        {/* Featured project: CRIAR RAÍZES */}
        <div className="mt-12 scroll-reveal bg-tellus-green overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="relative p-8 lg:p-12 flex flex-col justify-center text-primary-foreground">
            <span className="font-body text-xs uppercase tracking-[0.15em] opacity-80">
              {t("PROJETO DESTAQUE", "FEATURED PROJECT")}
            </span>
            <h3 className="font-display text-3xl lg:text-[48px] font-medium mt-4 leading-tight">
              CRIAR RAÍZES AQUI NA TERRA
            </h3>
            <p className="font-body text-sm opacity-80 mt-2 italic">
              {t(
                "Conservação e Restauro Ecológico Participativo",
                "Participatory Ecological Conservation and Restoration",
              )}
            </p>
            <p className="font-body text-[17px] leading-[1.75] mt-4 opacity-90">
              {t(
                "O CRIAR RAÍZES AQUI NA TERRA promove a regeneração de ecossistemas através da ação direta das comunidades, combinando ciência, voluntariado e educação ambiental.",
                "CRIAR RAÍZES AQUI NA TERRA promotes ecosystem regeneration through direct community action, combining science, volunteering and environmental education.",
              )}
            </p>
            <div className="mt-4 space-y-1">
              {t(
                "Restaurar habitats degradados||Promover espécies autóctones||Envolver cidadãos na conservação ativa||Criar redes ecológicas locais",
                "Restore degraded habitats||Promote native species||Engage citizens in active conservation||Create local ecological networks",
              )
                .split("||")
                .map((obj, i) => (
                  <p key={i} className="font-body text-sm opacity-90">
                    → {obj}
                  </p>
                ))}
            </div>
            <p className="font-body text-xs uppercase tracking-[0.15em] opacity-80 mt-6">
              {t("AÇÕES PRINCIPAIS", "MAIN ACTIONS")}
            </p>
            <div className="mt-2 space-y-1">
              {t(
                "Plantação de espécies nativas||Remoção de espécies invasoras||Criação de micro-reservas urbanas||Programas de ciência cidadã",
                "Planting native species||Removal of invasive species||Creation of urban micro-reserves||Citizen science programs",
              )
                .split("||")
                .map((action, i) => (
                  <p key={i} className="font-body text-sm opacity-90">
                    → {action}
                  </p>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {t(
                "Comunidades locais||Escolas||Autarquias||Voluntários",
                "Local communities||Schools||Municipalities||Volunteers",
              )
                .split("||")
                .map((tag, i) => (
                  <span
                    key={i}
                    className="bg-primary-foreground/15 text-primary-foreground font-body text-xs px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
          <div>
            <img
              src={projectImg}
              alt="CRIAR RAÍZES"
              className="w-full h-full object-cover min-h-[300px]"
              loading="lazy"
              width={960}
              height={640}
            />
          </div>
        </div>

        {/* Row 2 — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {row2.map((p) => (
            <CardComponent key={p.acronym} project={p} />
          ))}
        </div>

        {/* Row 3 — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {row3.map((p) => (
            <CardComponent key={p.acronym} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
