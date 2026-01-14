import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";
import {
  ShieldCheck,
  FileText,
  LifeBuoy,
  Layers,
  RefreshCcw,
  Award,
} from "lucide-react";

export default function WhyChooseMe() {
  const { t } = useLang();

  const points = [
    { icon: ShieldCheck, title: t.why_1_title, desc: t.why_1_desc },
    { icon: FileText, title: t.why_2_title, desc: t.why_2_desc },
    { icon: LifeBuoy, title: t.why_3_title, desc: t.why_3_desc },
    { icon: Layers, title: t.why_4_title, desc: t.why_4_desc },
    { icon: RefreshCcw, title: t.why_5_title, desc: t.why_5_desc },
    { icon: Award, title: t.why_6_title, desc: t.why_6_desc },
  ];

  return (
    <section
      id="why-choose-me"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 md:mb-16 text-gray-900 px-4"
        >
          {t.why_title}
        </motion.h2>

        {/* Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-left mb-12 sm:mb-16 md:mb-20">
          {points.map((item, i) => {
            const colors = [
              "from-blue-500 to-blue-600",
              "from-green-500 to-green-600",
              "from-purple-500 to-purple-600",
              "from-orange-500 to-orange-600",
              "from-pink-500 to-pink-600",
              "from-indigo-500 to-indigo-600",
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8
                           hover:border-blue-300 hover:shadow-2xl active:shadow-lg transition-all duration-300
                           bg-white overflow-hidden touch-manipulation"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors[i]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>

                {/* Decorative Element */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[i]} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 border-2 border-blue-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-green-400/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-green-600 bg-clip-text text-transparent px-2"
            >
              {t.cta_title}
            </motion.h3>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 md:mb-10 font-medium px-2">
              {t.cta_subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="tel:+917906850213"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl
                           font-semibold text-base sm:text-lg hover:from-gray-800 hover:to-gray-900
                           shadow-lg hover:shadow-xl active:opacity-90 transition-all duration-300
                           flex items-center justify-center gap-2 touch-manipulation"
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
                           shadow-lg hover:shadow-xl active:opacity-90 transition-all duration-300 touch-manipulation"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
