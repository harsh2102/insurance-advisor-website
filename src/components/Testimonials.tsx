import { useLang } from "@/utils/LanguageContext";

const testimonials = [
  { key: "test_1", name: "Nitish Vishnoi" },
  { key: "test_2", name: "Ranu Tripathi" },
  { key: "test_3", name: "Bhoori Mishra" },
];

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gray-50 border-t border-gray-200 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-12">
          {t.testimonials_title}
        </h2>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Track */}
          <div className="flex w-max flex-nowrap animate-marquee gap-8">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] max-w-[320px]
                           bg-white rounded-xl border border-gray-200
                           p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700 text-xl leading-relaxed italic">
                  “{t[item.key]}”
                </p>

                <div className="mt-4 text-sm font-medium text-gray-900">
                  — {item.name}
                </div>
              </div>
            ))}
          </div>

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
