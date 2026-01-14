import { useLang } from "@/utils/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t py-4 px-6 text-xs text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>{t.footer_text}</span>
        <span className="hidden sm:inline">·</span>
        <span>{t.footer_city}</span>
        <span className="hidden sm:inline">·</span>
        <span>
          © {new Date().getFullYear()} {t.footer_rights}
        </span>
      </div>
    </footer>
  );
}
