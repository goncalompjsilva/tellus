import { useLanguage } from "@/contexts/LanguageContext";

export const UtilityBar = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <div className="w-full h-9 bg-tellus-off-white border-b border-tellus-divider flex items-center justify-between px-4 md:px-8 lg:px-20">
      <span className="font-body text-xs text-tellus-muted hidden sm:block">
        Associação para o Ambiente e Sociedade · Nonprofit
      </span>
      <div className="flex items-center gap-1.5 ml-auto">
        <button
          onClick={() => lang !== "pt" && toggleLang()}
          className={`w-7 h-5 rounded-sm overflow-hidden transition-all duration-200 ${lang === "pt" ? "ring-2 ring-tellus-green ring-offset-1" : "opacity-50 hover:opacity-80"}`}
          aria-label="Português"
          title="Português"
        >
          <img
            src="https://flagcdn.com/pt.svg"
            alt="Portugal flag"
            className="w-full h-full object-cover"
            width={28}
            height={20}
          />
        </button>
        <span className="w-px h-4 bg-tellus-divider" />
        <button
          onClick={() => lang !== "en" && toggleLang()}
          className={`w-7 h-5 rounded-sm overflow-hidden transition-all duration-200 ${lang === "en" ? "ring-2 ring-tellus-green ring-offset-1" : "opacity-50 hover:opacity-80"}`}
          aria-label="English"
          title="English"
        >
          <img
            src="https://flagcdn.com/gb.svg"
            alt="United Kingdom flag"
            className="w-full h-full object-cover"
            width={28}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};
