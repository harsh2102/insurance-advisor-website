import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
];

export default function PhotoCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-blue-400 to-green-400 bg-clip-text text-transparent"
          >
            Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base text-gray-400"
          >
            Moments of trust and service
          </motion.p>
        </motion.div>

        {/* Gallery Track with enhanced animations */}
        <div className="relative w-full py-6 overflow-hidden">
          {/* Track */}
          <div className="flex w-max animate-marquee-slow gap-4 sm:gap-5 md:gap-6">
            {[...images, ...images, ...images].map((src, i) => {
              const imageIndex = i % images.length;
              const isHovered = hoveredIndex === i;

              return (
                <motion.div
                  key={`${src}-${i}`}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (imageIndex % images.length) * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] h-[160px] sm:h-[180px] md:h-[220px]
                             bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden
                             shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer
                             border-2 border-gray-800 hover:border-blue-500/50 relative"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    animate={{
                      opacity: isHovered ? 0.3 : 0,
                    }}
                  />

                  {/* Image container with padding */}
                  <div className="relative w-full h-full p-3 sm:p-4">
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${imageIndex + 1}`}
                        fill
                        className="object-contain transition-all duration-500"
                        sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 300px"
                      />
                    </motion.div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Image number badge with animation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full
                               border border-white/20 shadow-lg z-20"
                  >
                    {imageIndex + 1} / {images.length}
                  </motion.div>

                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/50 transition-colors duration-300 rounded-tl-xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/0 group-hover:border-green-500/50 transition-colors duration-300 rounded-br-xl" />
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced edge fade with gradient */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-40 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />
        </div>

        {/* Enhanced View More Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8 sm:mt-10"
        >
          <motion.p
            className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </motion.svg>
            <span>Scroll to view all {images.length} photos</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
