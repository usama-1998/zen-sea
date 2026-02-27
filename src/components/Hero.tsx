"use client";

import { ArrowDown } from "lucide-react";

interface HeroProps {
    openModal: (context: string) => void;
}

export default function Hero({ openModal }: HeroProps) {
    return (
        <section className="relative h-screen min-h-[700px] lg:min-h-[850px] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-[#0077b6]/30 to-slate-950/90 z-10 mix-blend-multiply pointer-events-none" />
                <video
                    autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover scale-105 opacity-80 mix-blend-luminosity pointer-events-none"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-yacht-sailing-on-the-sea-11881-large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Floating Background Compass Rose in Hero */}
            <div className="absolute right-10 top-1/4 opacity-10 text-white z-10 pointer-events-none animate-[spin_120s_linear_infinite] hidden lg:block">
                <svg width="400" height="400" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <path d="M50 5 L53 47 L95 50 L53 53 L50 95 L47 53 L5 50 L47 47 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="relative z-20 text-center px-6 max-w-6xl mx-auto flex flex-col items-center mt-12">
                <div className="relative reveal-on-scroll opacity-0 translate-y-12 scale-95 rotate-2">
                    <span className="font-[family-name:var(--font-caveat)] text-3xl md:text-5xl text-[#C5A880] -rotate-6 block mb-4 ml-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                        Let the currents guide you...
                    </span>
                    <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-[family-name:var(--font-playfair)] text-white mb-2 leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative inline-block">
                        Write Your Story <br />
                        <span className="italic font-light text-white/95">on the Water.</span>

                        {/* Watercolor swipe under Hero */}
                        <span className="absolute bottom-4 left-1/4 w-1/2 h-8 bg-gradient-to-r from-[#0077b6]/0 via-[#0077b6]/80 to-[#C5A880]/60 opacity-60 mix-blend-screen rounded-full -rotate-2 -z-10 animate-[scale-in_1.5s_cubic-bezier(0.22,1,0.36,1)_0.5s_forwards] origin-left scale-x-0 filter blur-[3px]" />
                    </h1>
                </div>

                <p className="text-white/90 text-base md:text-xl font-light max-w-3xl mb-12 mt-10 reveal-on-scroll opacity-0 translate-y-12 drop-shadow-md" style={{ transitionDelay: '200ms' }}>
                    We don't just charter yachts. We curate visceral, handcrafted escapes along Singapore's most breathtaking coastlines.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 reveal-on-scroll opacity-0 translate-y-12" style={{ transitionDelay: '300ms' }}>
                    <button
                        onClick={() => openModal('Hero: Discover Fleet')}
                        className="px-8 lg:px-10 py-3 lg:py-4 bg-[#C5A880] text-white text-xs tracking-[0.2em] uppercase font-bold hand-drawn-fill border-2 border-transparent hover:bg-[#0077b6] transition-all duration-500 transform hover:-translate-y-1 hover:rotate-2 shadow-[0_0_30px_rgba(197,168,128,0.4)] hover:shadow-[0_0_30px_rgba(0,119,182,0.6)]"
                    >
                        Meet The Fleet
                    </button>
                    <button
                        onClick={() => openModal('Hero: Watch Film')}
                        className="px-8 lg:px-10 py-3 lg:py-4 text-white text-xs tracking-[0.2em] uppercase font-bold hand-drawn hover:bg-white hover:text-slate-900 transition-all duration-500 backdrop-blur-md bg-white/5 flex items-center justify-center gap-3 border-white/50"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg> Watch Film
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-70 animate-bounce cursor-pointer" onClick={() => window.scrollTo(0, window.innerHeight)}>
                <span className="font-[family-name:var(--font-caveat)] text-2xl text-[#C5A880] mb-2 -rotate-3">Dive in</span>
                <ArrowDown className="w-6 h-6 text-white" />
            </div>

            {/* Hand-drawn ocean waves paper tear */}
            <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[2px] pointer-events-none">
                <svg viewBox="0 0 1440 120" className="w-full h-auto text-[#FBFBF9] fill-current drop-shadow-lg">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
}
