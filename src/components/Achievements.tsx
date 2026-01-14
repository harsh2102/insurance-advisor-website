import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Achievements() {
  const { t } = useLang();

  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariant}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gray-900 px-4"
        >
          {t.achievements_title}
        </motion.h2>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              title: t.ach_1_title,
              desc: t.ach_1_desc,
              gradient: "from-blue-500 to-blue-600",
              icon: "📊",
            },
            {
              title: t.ach_2_title,
              desc: t.ach_2_desc,
              gradient: "from-green-500 to-green-600",
              icon: "👨‍👩‍👧‍👦",
            },
            {
              title: t.ach_3_title,
              desc: t.ach_3_desc,
              gradient: "from-purple-500 to-purple-600",
              icon: "🏢",
            },
            {
              title: t.ach_4_title,
              desc: t.ach_4_desc,
              gradient: "from-orange-500 to-orange-600",
              icon: "💪",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, type: "spring" }}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center
                         hover:border-blue-300 hover:shadow-2xl active:shadow-lg transition-all duration-300 overflow-hidden group touch-manipulation"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                  className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                >
                  {item.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                >
                  {item.title}
                </motion.div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
