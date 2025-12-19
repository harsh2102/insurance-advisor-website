import { motion } from "framer-motion";
import { useLang } from "@/utils/LanguageContext";

const videos = ["VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3"];

export default function VideoTestimonial() {
  const { t } = useLang();

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-center mb-12"
        >
          {t.video_testimonial}
        </motion.h3>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((id, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-video rounded-xl overflow-hidden border border-white/20"
            >
              <iframe
                loading="lazy"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title="Client Testimonial"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
