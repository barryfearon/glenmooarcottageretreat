const photos = [
  {
    src: "/images/glenmooarcottageretreat_001.webp",
    alt: "Cosy living room with wood burning stove and vaulted ceiling",
    tall: false,
  },
  {
    src: "/images/glenmooarcottageretreat_005.webp",
    alt: "Glenmooar Cottage exterior with Sulby Glen hills behind",
    tall: true,
  },
  {
    src: "/images/glenmooarcottageretreat_002.webp",
    alt: "Comfortable twin bedroom with wooden wardrobe",
    tall: false,
  },
  {
    src: "/images/glenmooarcottageretreat_003.webp",
    alt: "Fully equipped kitchen with wooden worktops",
    tall: false,
  },
  {
    src: "/images/glenmooarcottageretreat_006.webp",
    alt: "Sulby River flowing past the cottage",
    tall: true,
  },
  {
    src: "/images/glenmooarcottageretreat_004.webp",
    alt: "Charming outdoor timber cabin nestled in the trees",
    tall: false,
  },
  {
    src: "/images/glenmooarcottageretreat_007.webp",
    alt: "Cottage exterior surrounded by summer greenery",
    tall: true,
  },
  {
    src: "/images/glenmooarcottageretreat_008.webp",
    alt: "Glenmooar Cottage viewed from across the Sulby River",
    tall: false,
  },
  {
    src: "/images/glenmooarcottageretreat_009.webp",
    alt: "Open plan living and dining room",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Photo Gallery
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
            Explore the cottage
          </h2>
        </div>

        {/*
          3-col masonry grid on desktop (md+), 2-col on mobile.
          Tall items span 2 rows on desktop only.
          Grid rows are fixed at 220px on desktop; mobile uses aspect-ratio padding trick.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 md:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                photo.tall ? "md:row-span-2" : ""
              }`}
            >
              {/* Aspect-ratio spacer for mobile; hidden on desktop where grid rows set the height */}
              <div className={`${photo.tall ? "pt-[133%]" : "pt-[75%]"} md:pt-0 md:h-full`} />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover caption */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs md:text-sm font-medium drop-shadow-md">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
