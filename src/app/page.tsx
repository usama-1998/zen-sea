"use client";

import { useState } from "react";
import { Anchor } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FleetSection from "@/components/FleetSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

const fleet = [
  { name: 'The Wanderer', model: 'Helium I', guests: 13, cabins: 2, price: '$1088', rating: 4.9, note: "For intimate whispers...", image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Ocean Song', model: 'Lagoon II', guests: 30, cabins: 3, price: '$988', rating: 4.8, note: "Our beloved classic!", image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Stargazer', model: 'Azimut III', guests: 25, cabins: 3, price: '$1188', rating: 5.0, note: "Pure poetry in motion", image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000' }
];

export default function Home() {
  const [modalState, setModalState] = useState({ isOpen: false, context: '' });

  useScrollReveal();

  const openModal = (context: string) => {
    setModalState({ isOpen: true, context });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, context: '' });
  };

  return (
    <div className="bg-[#050B14] overflow-x-hidden selection:bg-[#C5A880] selection:text-slate-900 noise-bg min-h-screen relative text-white">

      {/* BACKGROUND NAUTICAL CHARTS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.02] reveal-on-scroll opacity-0">
        <svg className="absolute top-0 left-0 w-[150%] h-[150%] text-white" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Bathymetric depth lines */}
          <path className="path-draw" d="M -100 200 Q 200 100 500 350 T 1100 200" fill="none" stroke="currentColor" strokeWidth="2" />
          <path className="path-draw" d="M -100 220 Q 220 120 520 370 T 1100 220" fill="none" stroke="currentColor" strokeWidth="1" />
          <path className="path-draw" d="M -100 240 Q 240 140 540 390 T 1100 240" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path className="path-draw" d="M 400 600 Q 600 500 800 700 T 1200 600" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
        </svg>
      </div>

      {/* Harbor Master Stamp */}
      <div className="fixed bottom-40 left-10 w-48 h-48 rounded-full border-[3px] border-white/20 opacity-[0.05] pointer-events-none rotate-[-15deg] flex items-center justify-center z-0 hand-drawn-alt mix-blend-overlay">
        <div className="w-40 h-40 rounded-full border border-white/20 flex flex-col items-center justify-center text-center">
          <span className="font-[family-name:var(--font-playfair)] tracking-[0.4em] text-[10px] uppercase mt-2 text-white">Cleared for Departure</span>
          <Anchor className="w-6 h-6 my-2 text-white" />
          <span className="font-[family-name:var(--font-playfair)] tracking-[0.3em] text-[8px] uppercase text-white">Sentosa Cove</span>
        </div>
      </div>

      <Navigation openModal={openModal} />
      <Hero openModal={openModal} />
      <AboutSection />
      <FleetSection fleet={fleet} openModal={openModal} />
      <ExperiencesSection openModal={openModal} />
      <FeaturesSection />
      <Footer openModal={openModal} />
      <Modal isOpen={modalState.isOpen} context={modalState.context} closeModal={closeModal} />
    </div>
  );
}
