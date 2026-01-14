import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";
import { useState } from "react";

// Replace these with your actual YouTube video IDs
// To get a video ID: Copy the YouTube URL and extract the ID
// Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ → video ID is "dQw4w9WgXcQ"
// Or: https://youtu.be/dQw4w9WgXcQ → video ID is "dQw4w9WgXcQ"
const videos = [
  {
    id: "4CCscmtWt2w", // Replace with your YouTube video ID
    title: "Ranu Tripathi Testimonial",
  },
  {
    id: "YHnLqeFOdTI", // Replace with your YouTube video ID
    title: "Veetu Pandey Testimonial",
  },
  {
    id: "BTn1nPy61fg", // Replace with your YouTube video ID
    title: "Client Testimonial",
  },
];

export default function VideoTestimonial() {
  const { t } = useLang();
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
            {t.video_testimonial}
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Watch what our clients have to say
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden 
                         border-2 border-gray-800 hover:border-blue-500/50
                         shadow-2xl hover:shadow-blue-500/20
                         transition-all duration-300 bg-gray-900 cursor-pointer"
              onClick={() => setPlayingVideo(i)}
            >
              {playingVideo === i ? (
                /* Video Iframe (shown when playing) */
                <iframe
                  className="w-full h-full absolute inset-0"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  aria-label={`${t.video_testimonial} ${i + 1}`}
                />
              ) : (
                /* Video Thumbnail (shown when not playing) */
                <>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              )}

              {/* Video Number Badge */}
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-20">
                Video {i + 1}
              </div>

              {/* Gradient Overlay */}
              {playingVideo !== i && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Instructions Note */}
        {videos.some((v) => v.id.startsWith("VIDEO_ID")) && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-lg text-center"
          >
            <p className="text-sm text-yellow-200">
              ⚠️ Please replace VIDEO_ID_1, VIDEO_ID_2, VIDEO_ID_3 with your
              actual YouTube video IDs in{" "}
              <code className="bg-black/50 px-2 py-1 rounded text-yellow-300">
                src/components/VideoTestimonial.tsx
              </code>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
