import { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";

const languages = { en, hi };

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: any }) {
  // Always start with "en" to prevent hydration mismatch
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [mounted, setMounted] = useState(false);

  // Load saved language preference after mount (client-side only)
  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language");
      if (saved === "en" || saved === "hi") {
        setLang(saved);
      }
    }
  }, []);

  // Update localStorage when language changes
  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      localStorage.setItem("preferred-language", lang);
    }
  }, [lang, mounted]);

  const t = languages[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
