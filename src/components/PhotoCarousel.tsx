import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
];

export default function PhotoCarousel() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">
            Gallery
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Moments of trust and service
          </p>
        </motion.div>

        {/* Gallery Track */}
        <div className="relative w-full py-4 overflow-hidden">
          {/* Track */}
          <div className="flex w-max animate-marquee-slow gap-3 sm:gap-4 md:gap-6">
            {[...images, ...images].map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % images.length) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] h-[140px] sm:h-[160px] md:h-[200px]
                           bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden
                           shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-full h-full p-3 sm:p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Gallery image ${(i % images.length) + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        </div>

        {/* View More Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 sm:mt-8"
        >
          <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Scroll to view more</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
