import { Users, BedDouble, Bath, Car, Wifi } from "lucide-react";

const items = [
  { icon: Users, label: "Guests", value: "Sleeps 2" },
  { icon: BedDouble, label: "Bedrooms", value: "1 Bedroom" },
  { icon: Bath, label: "Bathroom", value: "1 Bath" },
  { icon: Car, label: "Parking", value: "Free" },
  { icon: Wifi, label: "WiFi", value: "Included" },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-6">
          {items.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center py-7 px-3 border-r border-white/10 last:border-0"
            >
              <Icon size={22} className="text-amber-400 mb-2.5" strokeWidth={1.5} />
              <span className="text-white/50 text-xs uppercase tracking-wider leading-none">{label}</span>
              <span className="font-semibold text-sm mt-1.5">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
