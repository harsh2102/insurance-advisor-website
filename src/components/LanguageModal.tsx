import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";
import { useEffect, useState } from "react";

export default function LanguageModal() {
  const { lang, setLang, mounted } = useLang();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Only check after component is mounted on client
    if (!mounted) return;

    // Check if user has already selected a language
    const savedLang = localStorage.getItem("preferred-language");
    if (!savedLang) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => setShowModal(true), 500);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  const handleLanguageSelect = (selectedLang: "en" | "hi") => {
    setLang(selectedLang);
    localStorage.setItem("preferred-language", selectedLang);
    setShowModal(false);
  };

  // Don't render until mounted (prevents hydration mismatch)
  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full overflow-hidden mx-4">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-5 sm:p-6 text-white">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl sm:text-2xl font-bold text-center mb-2"
                >
                  Choose Your Language
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-blue-100 text-xs sm:text-sm"
                >
                  अपनी भाषा चुनें
                </motion.p>
              </div>

              {/* Language Options */}
              <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                {/* English Option */}
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLanguageSelect("en")}
                  className="w-full p-4 sm:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 active:border-blue-600
                           bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-blue-100
                           transition-all duration-300 text-left group touch-manipulation"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 
                                    flex items-center justify-center text-white font-bold text-base sm:text-lg
                                    group-hover:scale-110 transition-transform"
                      >
                        EN
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-base sm:text-lg">
                          English
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          Continue in English
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.button>

                {/* Hindi Option */}
                <motion.button
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLanguageSelect("hi")}
                  className="w-full p-4 sm:p-6 rounded-xl border-2 border-gray-200 hover:border-green-500 active:border-green-600
                           bg-gradient-to-r from-white to-green-50 hover:from-green-50 hover:to-green-100
                           transition-all duration-300 text-left group touch-manipulation"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 
                                    flex items-center justify-center text-white font-bold text-base sm:text-lg
                                    group-hover:scale-110 transition-transform"
                      >
                        हि
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-base sm:text-lg">
                          हिंदी
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          हिंदी में जारी रखें
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.button>
              </div>

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="px-4 sm:px-8 pb-4 sm:pb-6 text-center"
              >
                <p className="text-xs text-gray-500">
                  You can change this anytime from the menu
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
