import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold leading-tight"
        >
          {t.hero_title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-6 text-lg text-gray-200"
        >
          {t.hero_subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+917906850213"
            className="px-6 py-3 border border-white rounded-md font-medium hover:bg-white hover:text-black transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917906850213"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium
             bg-[#25D366] text-white
             hover:bg-[#1EBE5D] transition"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.54-.44-.47-.61-.48h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
              <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.65.87 5.1 2.35 7.07L5 29l7.06-1.85a11.93 11.93 0 0 0 5.98 1.6h.01c6.64 0 12.04-5.4 12.04-12.04C30.09 8.4 22.68 3 16.04 3zm0 21.79h-.01c-2.02 0-4-.54-5.72-1.57l-.41-.24-4.19 1.1 1.12-4.09-.27-.42a9.82 9.82 0 0 1-1.5-5.24c0-5.43 4.42-9.85 9.85-9.85 5.43 0 9.85 4.42 9.85 9.85 0 5.43-4.42 9.85-9.85 9.85z" />
            </svg>
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
