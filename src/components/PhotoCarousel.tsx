import Image from "next/image";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
];

export default function PhotoCarousel() {
  return (
    <section className="bg-black border-t border-gray-800 overflow-hidden">
      <div className="relative w-full py-10">
        {/* Track */}
        <div className="flex w-max animate-marquee-slow">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] h-[200px]
                         bg-gray-900 border border-gray-800
                         flex items-center justify-center"
            >
              <div className="relative w-full h-full p-4">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
