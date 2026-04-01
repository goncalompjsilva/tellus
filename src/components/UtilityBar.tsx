import { useLanguage } from '@/contexts/LanguageContext';

export const UtilityBar = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <div className="w-full h-9 bg-tellus-off-white border-b border-tellus-divider flex items-center justify-between px-4 md:px-8 lg:px-20">
      <span className="font-body text-xs text-tellus-muted hidden sm:block">
        Associação para o Ambiente e Sociedade · Nonprofit
      </span>
      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={() => lang !== 'pt' && toggleLang()}
          className={`font-body text-xs flex items-center gap-1 px-1 py-0.5 ${lang === 'pt' ? 'border-b-2 border-tellus-green' : 'opacity-60 hover:opacity-100'} transition-opacity`}
          aria-label="Português"
        >
          🇵🇹 PT
        </button>
        <span className="w-px h-4 bg-tellus-divider" />
        <button
          onClick={() => lang !== 'en' && toggleLang()}
          className={`font-body text-xs flex items-center gap-1 px-1 py-0.5 ${lang === 'en' ? 'border-b-2 border-tellus-green' : 'opacity-60 hover:opacity-100'} transition-opacity`}
          aria-label="English"
        >
          🇬🇧 EN
        </button>
      </div>
    </div>
  );
};
