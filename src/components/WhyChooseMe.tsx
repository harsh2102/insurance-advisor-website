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
    <section id="why-choose-me" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-16 text-gray-900"
        >
          {t.why_title}
        </motion.h2>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-20">
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-200 rounded-xl p-6
                         hover:shadow-md transition bg-white"
            >
              <item.icon className="w-6 h-6 text-gray-900 mb-4" />

              <h3 className="text-lg font-medium mb-2 text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 border border-gray-200 rounded-xl p-10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            {t.cta_title}
          </h3>

          <p className="text-gray-600 mb-8">{t.cta_subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917906850213"
              className="px-6 py-3 bg-gray-900 text-white rounded-md
                         font-medium hover:bg-gray-800 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917906850213"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3
             rounded-md font-medium text-white
             bg-[#25D366] hover:bg-[#1EBE5D]
             transition"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
