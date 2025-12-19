import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white border-t border-gray-200 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            {t.about_title}
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">{t.about_p1}</p>

          <p className="text-gray-600 mb-6 leading-relaxed">{t.about_p2}</p>

          <p className="text-gray-700 font-medium">{t.about_p3}</p>
        </motion.div>

        {/* Right: Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-2xl font-semibold text-gray-900 mb-1">23+</div>
            <div className="text-sm text-gray-600">{t.about_stat_1}</div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-2xl font-semibold text-gray-900 mb-1">
              1000+
            </div>
            <div className="text-sm text-gray-600">{t.about_stat_2}</div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-2xl font-semibold text-gray-900 mb-1">5+</div>
            <div className="text-sm text-gray-600">{t.about_stat_3}</div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-2xl font-semibold text-gray-900 mb-1">PAN</div>
            <div className="text-sm text-gray-600">{t.about_stat_4}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
