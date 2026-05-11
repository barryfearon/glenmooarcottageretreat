import { Flame, TreePine, Mountain } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Wood Burning Stove",
    desc: "Cosy up beside the crackling stove on cool evenings.",
  },
  {
    icon: TreePine,
    title: "Private Garden",
    desc: "A tranquil enclosed garden with countryside views.",
  },
  {
    icon: Mountain,
    title: "Stunning Scenery",
    desc: "Doorstep access to Sulby Glen's walking trails.",
  },
];

export default function About({ onBook }: { onBook: () => void }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-4">
              About the Cottage
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Your peaceful escape in the heart of the Isle of Man
            </h2>
            <div className="space-y-4 text-stone-600 text-base leading-relaxed">
              <p>
                Glen Mooar Cottage is a beautifully restored 18th-century stone cottage
                built around 1750, sitting quietly at the edge of the enchanting Sulby Glen.
                Surrounded by ancient woodland, rolling hills, and the gentle sound of the
                Sulby River, this is a place where time slows down.
              </p>
              <p>
                Inside you&apos;ll find the perfect blend of original character and modern
                comfort, exposed stone walls, oak beams, and a wood burning stove sit
                alongside a fully equipped contemporary kitchen, a comfortable bedroom, and
                fast broadband. Whether you&apos;re seeking complete solitude or an active
                adventure base, Glen Mooar is your perfect retreat.
              </p>
              <p>
                The Isle of Man&apos;s most dramatic landscapes, Snaefell Mountain, the
                Sulby Reservoir, and miles of coastal paths, are all within easy reach,
                while the charming towns of Ramsey and Peel are just a short drive away.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                    <Icon size={18} className="text-amber-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-stone-900 text-sm">{title}</h3>
                  <p className="text-stone-500 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onBook}
              className="mt-10 bg-stone-900 hover:bg-stone-700 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Request to Book
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/glenmooarcottageretreat_006.webp"
                alt="Glenmooar Cottage exterior"
                className="w-full h-full object-cover object-right"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5">
              <p className="font-serif text-2xl font-bold text-stone-900">c.18</p>
              <p className="text-stone-500 text-sm">Stone Cottage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
