import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

const logos = [
  { src: "/logos/lic.png", alt: "LIC", name: "LIC" },
  { src: "/logos/tata-aig.png", alt: "TATA AIG", name: "TATA AIG" },
  { src: "/logos/hdfc-ergo.png", alt: "HDFC ERGO", name: "HDFC ERGO" },
  {
    src: "/logos/united-india.png",
    alt: "United India Insurance",
    name: "United India",
  },
  { src: "/logos/niva.png", alt: "Niva Bupa", name: "Niva Bupa" },
];

export default function BrandSlider() {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-600 to-green-600 bg-clip-text text-transparent">
            {t.brands_title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Trusted partnerships with India's leading insurance providers
          </p>
        </motion.div>

        {/* Slider Wrapper */}
        <div className="relative overflow-hidden py-8">
          {/* Marquee Track */}
          <div className="flex w-max flex-nowrap animate-marquee gap-8 sm:gap-12 md:gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <motion.div
                key={`${logo.alt}-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % logos.length) * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group flex items-center justify-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px]"
              >
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300 w-full h-32 sm:h-36 md:h-40 flex items-center justify-center">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Logo */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={140}
                      height={60}
                      className="object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 max-h-16 sm:max-h-20"
                    />
                  </div>

                  {/* Company Name Tooltip */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded-md shadow-sm">
                      {logo.name}
                    </span>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-r from-white via-white to-transparent z-20" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-l from-white via-white to-transparent z-20" />
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Authorized Partner</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
