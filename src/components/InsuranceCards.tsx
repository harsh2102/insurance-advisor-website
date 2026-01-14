import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function InsuranceCards() {
  const { t } = useLang();

  const cards = [
    {
      title: t.ins_1_title,
      desc: t.ins_1_desc,
      for: t.ins_1_for,
      delay: 0.1,
    },
    {
      title: t.ins_2_title,
      desc: t.ins_2_desc,
      for: t.ins_2_for,
      delay: 0.2,
    },
    {
      title: t.ins_3_title,
      desc: t.ins_3_desc,
      for: t.ins_3_for,
      delay: 0.3,
    },
    {
      title: t.ins_4_title,
      desc: t.ins_4_desc,
      for: t.ins_4_for,
      delay: 0.4,
    },
    {
      title: t.ins_5_title,
      desc: t.ins_5_desc,
      for: t.ins_5_for,
      delay: 0.5,
    },
    {
      title: t.ins_6_title,
      desc: t.ins_6_desc,
      for: t.ins_6_for,
      delay: 0.6,
    },
  ];

  const iconColors = [
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
    "text-orange-500",
    "text-pink-500",
    "text-indigo-500",
  ];

  const iconGradients = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
    "from-pink-500 to-pink-600",
    "from-indigo-500 to-indigo-600",
  ];

  return (
    <section
      id="insurance"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariant}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-green-600 bg-clip-text text-transparent px-4">
            {t.insurance_title}
          </motion.h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            Choose the perfect protection for your family
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: card.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8
                         hover:border-blue-300 hover:shadow-2xl active:shadow-lg transition-all duration-300
                         overflow-hidden touch-manipulation"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${iconGradients[i]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay + 0.2, type: "spring" }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconGradients[i]} flex items-center justify-center mb-6 shadow-lg`}
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </motion.div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{card.desc}</p>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Perfect for:
                </p>
                <p className="text-sm text-gray-600">{card.for}</p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
