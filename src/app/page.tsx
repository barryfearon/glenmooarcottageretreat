"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onBook={() => setContactOpen(true)} />
      <main>
        <Hero onBook={() => setContactOpen(true)} />
        <Highlights />
        <About onBook={() => setContactOpen(true)} />
        <Gallery />
        <Amenities />
        <BookingCTA onBook={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <CookieBanner />
    </>
  );
}
