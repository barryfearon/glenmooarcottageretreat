"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <a
            href="#"
            className={`font-serif text-xl font-bold tracking-wide transition-colors ${
              solid ? "text-stone-900" : "text-white"
            }`}
          >
            Glen Mooar Cottage
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  solid ? "text-stone-700" : "text-white"
                }`}
              >
                {label}
              </a>
            ))}
            <button
              onClick={onBook}
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Request to Book
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-1 transition-colors ${solid ? "text-stone-900" : "text-white"}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-6 space-y-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-stone-700 font-medium border-b border-stone-50 last:border-0"
            >
              {label}
            </a>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                setMenuOpen(false);
                onBook();
              }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-colors"
            >
              Request to Book
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
