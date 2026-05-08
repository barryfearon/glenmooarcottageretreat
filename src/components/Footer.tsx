import { MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      {/* Map */}
      <div className="w-full h-72 sm:h-96">
        <iframe
          src="https://maps.google.com/maps?q=Glen+Mooar+Cottage,Sulby,Isle+of+Man&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Glenmooar Cottage location map"
        />
      </div>

      {/* Footer content */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-4">Glenmooar Cottage</p>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              A beautiful traditional stone cottage in Sulby Glen, Isle of Man.
              The perfect retreat for families, couples, and nature lovers.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-colors"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                aria-label="Share"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-colors"
              >
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-5">
              Contact Us
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-stone-400 text-sm leading-snug">
                  Glenmooar Cottage<br />
                  Sulby Glen, Sulby<br />
                  Isle of Man, IM7 2HR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-400 shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+441624898341"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  +44 1624 898341
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400 shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:info@glenmooarcottage.com"
                  className="text-stone-400 hover:text-white text-sm transition-colors"
                >
                  info@glenmooarcottage.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { label: "About the Cottage", href: "#about" },
                { label: "Photo Gallery", href: "#gallery" },
                { label: "Amenities", href: "#amenities" },
                { label: "Request to Book", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-stone-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-white/5 rounded-xl">
              <p className="text-xs text-stone-400 leading-relaxed">
                <span className="text-white font-medium">Check-in:</span> from 4:00 pm<br />
                <span className="text-white font-medium">Check-out:</span> by 10:00 am<br />
                <span className="text-white font-medium">Min. stay:</span> 2 nights
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Glenmooar Cottage. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
