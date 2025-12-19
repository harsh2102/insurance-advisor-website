import { createContext, useContext, useState } from "react";
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";

const languages = { en, hi };

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: any }) {
  const [lang, setLang] = useState<"en" | "hi">("en");

  const t = languages[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
