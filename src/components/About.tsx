import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-t border-gray-200 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-green-600 bg-clip-text text-transparent">
            {t.about_title}
          </h2>

          <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
            {t.about_p1}
          </p>

          <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            {t.about_p2}
          </p>

          <p className="text-gray-700 font-medium text-sm sm:text-base">
            {t.about_p3}
          </p>
        </motion.div>

        {/* Right: Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          {[
            {
              value: "23+",
              label: t.about_stat_1,
              color: "from-blue-500 to-blue-600",
            },
            {
              value: "1000+",
              label: t.about_stat_2,
              color: "from-green-500 to-green-600",
            },
            {
              value: "5+",
              label: t.about_stat_3,
              color: "from-purple-500 to-purple-600",
            },
            {
              value: "PAN",
              label: t.about_stat_4,
              color: "from-orange-500 to-orange-600",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6
                         bg-gradient-to-br from-white to-gray-50
                         hover:border-blue-300 hover:shadow-xl active:shadow-lg transition-all duration-300
                         overflow-hidden group touch-manipulation"
            >
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}
              />
              <div
                className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
