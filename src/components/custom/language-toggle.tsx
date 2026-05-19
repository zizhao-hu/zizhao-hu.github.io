'use client';

import { useLanguage } from '@/context/LanguageContext';

const seg = (active: boolean) => `
  inline-flex items-center justify-center w-5 h-full rounded-full leading-none
  font-mono text-[7px] tracking-[0.06em]
  transition-all duration-200 ease-out
  ${active
    ? "text-background bg-foreground"
    : "text-muted-foreground hover:text-foreground"
  }
`;

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center h-2.5 rounded-full bg-muted/40 border border-border/60 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
        className={seg(lang === 'en')}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={lang === 'cn'}
        onClick={() => setLang('cn')}
        className={seg(lang === 'cn')}
        aria-label="中文"
      >
        中
      </button>
    </div>
  );
}
