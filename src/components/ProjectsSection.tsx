import { useLanguage } from '@/contexts/LanguageContext';
import projectImg from '@/assets/project-criar-raizes.jpg';

interface ProjectCard {
  acronym: string;
  namePt: string;
  nameEn: string;
  subtitlePt: string;
  subtitleEn: string;
  descPt: string;
  descEn: string;
  objectivesPt: string[];
  objectivesEn: string[];
  targetPt: string[];
  targetEn: string[];
}

const row2: ProjectCard[] = [
  {
    acronym: 'CLIMALAB',
    namePt: 'Laboratório Vivo para Ação Climática', nameEn: 'Living Lab for Climate Action',
    subtitlePt: 'Ação Climática Local', subtitleEn: 'Local Climate Action',
    descPt: 'Um living lab que testa soluções reais para adaptação climática em contexto local, criando modelos replicáveis para municípios e comunidades.',
    descEn: 'A living lab that tests real solutions for climate adaptation in local contexts, creating replicable models for municipalities and communities.',
    objectivesPt: ['Reduzir emissões locais', 'Testar soluções baseadas na natureza', 'Criar modelos replicáveis', 'Capacitar comunidades'],
    objectivesEn: ['Reduce local emissions', 'Test nature-based solutions', 'Create replicable models', 'Empower communities'],
    targetPt: ['Municípios', 'Empresas', 'Cidadãos'], targetEn: ['Municipalities', 'Businesses', 'Citizens'],
  },
  {
    acronym: 'CIRCULA',
    namePt: 'Comunidades para a Economia Circular', nameEn: 'Communities for Circular Economy',
    subtitlePt: 'Economia Circular', subtitleEn: 'Circular Economy',
    descPt: 'Projeto focado na transição para modelos circulares, reduzindo resíduos e promovendo novos hábitos de consumo responsável.',
    descEn: 'Project focused on transitioning to circular models, reducing waste and promoting new responsible consumption habits.',
    objectivesPt: ['Reduzir produção de resíduos', 'Promover reutilização e reparação', 'Sensibilizar para consumo consciente', 'Apoiar negócios sustentáveis'],
    objectivesEn: ['Reduce waste production', 'Promote reuse and repair', 'Raise awareness for conscious consumption', 'Support sustainable businesses'],
    targetPt: ['Famílias', 'Escolas', 'PMEs', 'Comunidades'], targetEn: ['Families', 'Schools', 'SMEs', 'Communities'],
  },
  {
    acronym: 'CoExistir',
    namePt: 'Bem-Estar Animal e Convivência Harmoniosa', nameEn: 'Animal Welfare and Harmonious Coexistence',
    subtitlePt: 'Bem-Estar Animal', subtitleEn: 'Animal Welfare',
    descPt: 'Promove uma abordagem integrada ao bem-estar animal e à convivência sustentável entre humanos e animais.',
    descEn: 'Promotes an integrated approach to animal welfare and sustainable coexistence between humans and animals.',
    objectivesPt: ['Promover políticas de proteção animal', 'Combater abandono e maus-tratos', 'Educar para a convivência responsável', 'Construir comunidades mais inclusivas'],
    objectivesEn: ['Promote animal protection policies', 'Combat abandonment and mistreatment', 'Educate for responsible coexistence', 'Build more inclusive communities'],
    targetPt: ['Escolas', 'Municípios', 'Associações de proteção animal'], targetEn: ['Schools', 'Municipalities', 'Animal protection associations'],
  },
];

const row3: ProjectCard[] = [
  {
    acronym: 'HERITAGE+',
    namePt: 'Valorização do Património Natural e Cultural', nameEn: 'Natural and Cultural Heritage Valorization',
    subtitlePt: 'Património e Turismo', subtitleEn: 'Heritage and Tourism',
    descPt: 'Integra conservação ambiental e valorização cultural, promovendo a identidade territorial e o turismo sustentável.',
    descEn: 'Integrates environmental conservation and cultural valorization, promoting territorial identity and sustainable tourism.',
    objectivesPt: ['Proteger património natural e construído', 'Promover turismo sustentável', 'Valorizar identidade local', 'Envolver comunidades'],
    objectivesEn: ['Protect natural and built heritage', 'Promote sustainable tourism', 'Valorize local identity', 'Engage communities'],
    targetPt: ['Turistas', 'Comunidades locais', 'Autarquias', 'Escolas'], targetEn: ['Tourists', 'Local communities', 'Municipalities', 'Schools'],
  },
  {
    acronym: 'EcoCIDADANIA',
    namePt: 'Educação e Participação para a Sustentabilidade', nameEn: 'Education and Participation for Sustainability',
    subtitlePt: 'Cidadania Ambiental', subtitleEn: 'Environmental Citizenship',
    descPt: 'Programa transversal que promove literacia ambiental e participação cívica informada, formando agentes de mudança capazes de influenciar políticas públicas.',
    descEn: 'Cross-cutting program that promotes environmental literacy and informed civic participation, forming change agents capable of influencing public policies.',
    objectivesPt: ['Aumentar conhecimento ambiental', 'Promover cidadania ativa', 'Formar agentes de mudança', 'Influenciar políticas públicas'],
    objectivesEn: ['Increase environmental knowledge', 'Promote active citizenship', 'Train change agents', 'Influence public policies'],
    targetPt: ['Jovens', 'Estudantes', 'Cidadãos', 'Decisores'], targetEn: ['Youth', 'Students', 'Citizens', 'Decision-makers'],
  },
];

const CardComponent = ({ project }: { project: ProjectCard }) => {
  const { t } = useLanguage();
  return (
    <div className="border border-tellus-divider rounded-md p-6 lg:p-8 flex flex-col scroll-reveal">
      <span className="eyebrow">{project.acronym}</span>
      <h4 className="font-display text-2xl font-medium mt-2">{t(project.namePt, project.nameEn)}</h4>
      <p className="font-body text-[13px] italic text-tellus-muted mt-1">{t(project.subtitlePt, project.subtitleEn)}</p>
      <p className="font-body text-[15px] leading-[1.7] text-tellus-body mt-4">{t(project.descPt, project.descEn)}</p>
      <div className="mt-4 space-y-1 flex-1">
        {(t(project.objectivesPt.join('||'), project.objectivesEn.join('||'))).split('||').map((obj, i) => (
          <p key={i} className="font-body text-sm text-tellus-body">→ {obj}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {(t(project.targetPt.join('||'), project.targetEn.join('||'))).split('||').map((tag, i) => (
          <span key={i} className="bg-tellus-green-xlight text-tellus-green-dark font-body text-xs px-2.5 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <a href="#colaborar" className="font-body text-[13px] text-tellus-green mt-4 nav-link-animated inline-block">
        {t('Saber mais →', 'Learn more →')}
      </a>
    </div>
  );
};

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="relative noise-texture bg-tellus-off-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <span className="eyebrow scroll-reveal">{t('PROJETOS · PROJECTS', 'PROJECTS')}</span>
        <h2 className="font-display text-4xl lg:text-[56px] font-medium mt-3 scroll-reveal">{t('Os nossos projetos-âncora', 'Our anchor projects')}</h2>
        <p className="font-body text-lg text-tellus-body mt-4 max-w-[540px] scroll-reveal">
          {t(
            'Seis iniciativas transformadoras com impacte mensurável nas comunidades e nos ecossistemas.',
            'Six transformative initiatives with measurable impact on communities and ecosystems.'
          )}
        </p>

        {/* Featured project: CRIAR RAÍZES */}
        <div className="mt-12 scroll-reveal bg-tellus-green overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="relative p-8 lg:p-12 flex flex-col justify-center text-primary-foreground">
            {/* Decorative leaf */}
            <svg className="absolute bottom-4 left-4 opacity-20" width="60" height="60" viewBox="0 0 60 60">
              <path d="M10 50 Q30 10 50 30 Q40 50 10 50Z" fill="currentColor" />
            </svg>
            <span className="font-body text-xs uppercase tracking-[0.15em] opacity-80">{t('PROJETO DESTAQUE', 'FEATURED PROJECT')}</span>
            <h3 className="font-display text-3xl lg:text-[48px] font-medium mt-4 leading-tight">CRIAR RAÍZES AQUI NA TERRA</h3>
            <p className="font-body text-sm opacity-80 mt-2 italic">{t('Conservação e Restauro Ecológico Participativo', 'Participatory Ecological Conservation and Restoration')}</p>
            <p className="font-body text-[17px] leading-[1.75] mt-4 opacity-90">
              {t(
                'O CRIAR RAÍZES AQUI NA TERRA promove a regeneração de ecossistemas através da ação direta das comunidades, combinando ciência, voluntariado e educação ambiental.',
                'CRIAR RAÍZES AQUI NA TERRA promotes ecosystem regeneration through direct community action, combining science, volunteering and environmental education.'
              )}
            </p>
            <div className="mt-4 space-y-1">
              {(t(
                'Restaurar habitats degradados||Promover espécies autóctones||Envolver cidadãos na conservação ativa||Criar redes ecológicas locais',
                'Restore degraded habitats||Promote native species||Engage citizens in active conservation||Create local ecological networks'
              )).split('||').map((obj, i) => (
                <p key={i} className="font-body text-sm opacity-90">→ {obj}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {(t('Comunidades locais||Escolas||Autarquias||Voluntários', 'Local communities||Schools||Municipalities||Volunteers')).split('||').map((tag, i) => (
                <span key={i} className="bg-primary-foreground/15 text-primary-foreground font-body text-xs px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <img src={projectImg} alt="CRIAR RAÍZES" className="w-full h-full object-cover min-h-[300px]" loading="lazy" width={960} height={640} />
          </div>
        </div>

        {/* Row 2 — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {row2.map((p) => <CardComponent key={p.acronym} project={p} />)}
        </div>

        {/* Row 3 — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {row3.map((p) => <CardComponent key={p.acronym} project={p} />)}
        </div>
      </div>
    </section>
  );
};
