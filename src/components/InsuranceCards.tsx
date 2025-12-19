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

  return (
    <section
      id="insurance"
      className="py-24 px-6 bg-gray-50 border-t border-gray-200 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariant}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-16 text-gray-900"
        >
          {t.insurance_title}
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: card.delay }}
              className="bg-white border border-gray-200 rounded-xl p-8
                         hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {card.desc}
              </p>

              <p className="text-xs text-gray-500">
                <span className="font-medium text-gray-700">Best for:</span>{" "}
                {card.for}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
