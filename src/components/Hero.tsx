import { motion } from "framer-motion";
import HeroTypingText from "@/components/HeroTypingText";
import { useLang } from "@/utils/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video - Optimized */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover scale-105 gpu-accelerated"
        aria-label="Background video showcasing insurance services"
        style={{ willChange: "auto" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Animated Background Elements - Hidden on mobile for performance */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-4 sm:px-6 pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-white w-full"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent"
          >
            {t.hero_title}
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8"
          >
            <HeroTypingText />
          </motion.div>

          {/* Founder Highlight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-4 sm:mb-6"
          >
            <p className="text-xs sm:text-sm md:text-base text-blue-200 mb-1 sm:mb-2 font-medium">
              {t.hero_lead}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white mb-1">
              {t.hero_name}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              {t.hero_role}
            </p>
          </motion.div>

          {/* Experience */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-10 font-medium"
          >
            ✨ {t.hero_subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto"
          >
            {/* Call Button */}
            <motion.a
              href="tel:+917906850213"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg
                         bg-white text-gray-900
                         hover:bg-gray-100 active:bg-gray-200 shadow-lg hover:shadow-xl
                         transition-all duration-300 flex items-center justify-center gap-2
                         touch-manipulation"
              aria-label="Call Sushil Mishra Insurance Advisor"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/917906850213"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4
                         rounded-xl font-semibold text-base sm:text-lg text-white
                         bg-gradient-to-r from-[#25D366] to-[#1EBE5D]
                         hover:from-[#1EBE5D] hover:to-[#25D366]
                         shadow-lg hover:shadow-xl active:opacity-90
                         transition-all duration-300 touch-manipulation"
              aria-label="Contact Sushil Mishra on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.54-.44-.47-.61-.48h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.13.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.65.87 5.1 2.35 7.07L5 29l7.06-1.85a11.93 11.93 0 0 0 5.98 1.6h.01c6.64 0 12.04-5.4 12.04-12.04C30.09 8.4 22.68 3 16.04 3zm0 21.79h-.01c-2.02 0-4-.54-5.72-1.57l-.41-.24-4.19 1.1 1.12-4.09-.27-.42a9.82 9.82 0 0 1-1.5-5.24c0-5.43 4.42-9.85 9.85-9.85 5.43 0 9.85 4.42 9.85 9.85 0 5.43-4.42 9.85-9.85 9.85z" />
              </svg>
              WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
