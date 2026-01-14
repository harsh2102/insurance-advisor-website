import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

const testimonials = [
  { key: "test_1", name: "Nitish Vishnoi", role: "Business Owner" },
  { key: "test_2", name: "Ranu Tripathi", role: "Business Owner" },
  { key: "test_3", name: "Ajit", role: "Teacher" },
];

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-green-600 bg-clip-text text-transparent px-4">
            {t.testimonials_title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            Real experiences from real families
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Track */}
          <div className="flex w-max flex-nowrap animate-marquee gap-4 sm:gap-6 md:gap-8">
            {[...testimonials, ...testimonials].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] max-w-[280px] sm:max-w-[320px] md:max-w-[360px]
                           bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200
                           p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:border-blue-300 active:shadow-lg
                           transition-all duration-300 relative overflow-hidden group touch-manipulation"
              >
                {/* Quote Icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-blue-200 text-4xl sm:text-6xl font-serif leading-none opacity-20 group-hover:opacity-30 transition-opacity">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed relative z-10 mb-4 sm:mb-6">
                  "{t[item.key]}"
                </p>

                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">
                    {item.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {item.role}
                  </div>
                </div>

                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white to-transparent z-10" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
