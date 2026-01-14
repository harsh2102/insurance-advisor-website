import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/utils/LanguageContext";
import LanguageModal from "@/components/LanguageModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <LanguageModal />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
