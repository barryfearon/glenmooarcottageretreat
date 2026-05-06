import {
  Wifi,
  Car,
  Flame,
  Tv,
  Coffee,
  WashingMachine,
  Utensils,
  Bath,
  Wind,
  Leaf,
  Zap,
  Package,
  PawPrint,
  UtensilsCrossed,
  BookOpen,
  Thermometer,
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Flame, label: "Wood Burning Stove" },
  { icon: Car, label: "Free Parking" },
  { icon: Tv, label: "Smart TV" },
  { icon: Coffee, label: "Coffee Machine" },
  { icon: Utensils, label: "Fully Equipped Kitchen" },
  { icon: WashingMachine, label: "Washing Machine" },
  { icon: Bath, label: "Deep Soaking Bath" },
  { icon: Wind, label: "Hairdryer" },
  { icon: Leaf, label: "Private Garden" },
  { icon: Zap, label: "BBQ" },
  { icon: Package, label: "Welcome Hamper" },
  { icon: PawPrint, label: "Dog Friendly" },
  { icon: UtensilsCrossed, label: "Dishwasher" },
  { icon: BookOpen, label: "Books & Games" },
  { icon: Thermometer, label: "Central Heating" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">
            What&apos;s Included
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
            Amenities
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            Everything you need for a comfortable and memorable stay.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-stone-50 hover:bg-amber-50 rounded-xl px-4 py-4 transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                <Icon size={16} className="text-stone-600 group-hover:text-amber-600 transition-colors" strokeWidth={1.5} />
              </div>
              <span className="text-stone-700 text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
