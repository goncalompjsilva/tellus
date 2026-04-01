import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Lang = 'pt' | 'en';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (pt: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  toggleLang: () => {},
  t: (pt) => pt,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('pt');

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'pt' ? 'en' : 'pt';
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  const t = useCallback((pt: string, en: string) => lang === 'pt' ? pt : en, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
