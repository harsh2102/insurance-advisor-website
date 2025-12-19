import Image from "next/image";

const logos = [
  { src: "/logos/lic.png", alt: "LIC" },
  { src: "/logos/tata-aig.png", alt: "TATA AIG" },
  { src: "/logos/hdfc-ergo.png", alt: "HDFC ERGO" },
  { src: "/logos/united-india.png", alt: "United India Insurance" },
  { src: "/logos/niva.png", alt: "Niva Bupa" },
];

export default function BrandSlider() {
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-sm font-medium text-gray-600 mb-10">
          Companies I Work With
        </h2>

        {/* Slider Wrapper */}
        <div className="relative overflow-hidden">
          {/* Marquee Track */}
          <div className="flex w-max flex-nowrap animate-marquee gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[140px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={50}
                  className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
