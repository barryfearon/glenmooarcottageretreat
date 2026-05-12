"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    url: "/images/glenmooarcottageretreat_010.webp",
    alt: "Glen Mooar Cottage exterior surrounded by Sulby Glen woodland, Isle of Man",
  },
  {
    url: "/images/glenmooarcottageretreat_005.webp",
    alt: "Front of Glen Mooar Cottage with rolling Sulby Glen hills in the background",
  },
  {
    url: "/images/glenmooarcottageretreat_006.webp",
    alt: "Sulby River flowing past Glen Mooar Cottage in summer",
  },
];

export default function Hero({ onBook }: { onBook: () => void }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-160 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/25 to-black/65" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-5">
          Sulby Glen &nbsp;·&nbsp; Isle of Man
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-md leading-tight">
          Glen Mooar Cottage
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
          A stunning traditional stone cottage nestled in the heart of Sulby Glen.
          Peaceful, private, and perfectly placed for exploring the Isle of Man.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onBook}
            className="bg-amber-600 hover:bg-amber-700 text-white px-9 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Request to Book
          </button>
          <a
            href="#about"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 px-9 py-4 rounded-full text-base font-semibold transition-all"
          >
            Explore the Cottage
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/45"
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <a
        href="#highlights"
        className="absolute bottom-10 right-8 text-white/60 flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase hover:text-white transition-colors"
      >
        <span>Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
