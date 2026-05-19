'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Lang, type TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('lang');
    return saved === 'cn' ? 'cn' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
    }
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);

  const t = (key: TranslationKey) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
