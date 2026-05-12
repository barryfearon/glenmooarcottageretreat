export default function BookingCTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/glenmooarcottageretreat_010.webp"
        alt="Aerial view of Glen Mooar Cottage and Sulby Glen countryside"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-stone-900/70" />

      <div className="relative text-center text-white px-4">
        <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-5">
          Available to Book
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 drop-shadow-md">
          Ready for your island escape?
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Send us a message with your preferred dates and we&apos;ll get back to
          you within 24 hours to confirm availability.
        </p>
        <button
          onClick={onBook}
          className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-lg"
        >
          Request to Book
        </button>
        <p className="text-white/50 text-sm mt-5">No payment required to enquire</p>
      </div>
    </section>
  );
}
