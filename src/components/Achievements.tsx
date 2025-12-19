import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Achievements() {
  const { t } = useLang();

  return (
    <section id="achievements" className="py-20 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariant}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-16 text-gray-900"
        >
          {t.achievements_title}
        </motion.h2>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-gray-900">{t.ach_1_title}</div>
            <p className="mt-2 text-gray-600">{t.ach_1_desc}</p>
          </motion.div>

          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-gray-900">{t.ach_2_title}</div>
            <p className="mt-2 text-gray-600">{t.ach_2_desc}</p>
          </motion.div>

          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-4xl font-bold text-gray-900">{t.ach_3_title}</div>
            <p className="mt-2 text-gray-600">{t.ach_3_desc}</p>
          </motion.div>

          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-4xl font-bold text-gray-900">{t.ach_4_title}</div>
            <p className="mt-2 text-gray-600">{t.ach_4_desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
