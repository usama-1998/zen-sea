"use client";

import { useEffect, useState, useRef } from "react";
import { Play } from "lucide-react";

interface HeroProps {
    openModal: (context: string) => void;
}

export default function Hero({ openModal }: HeroProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const [isLoaded, setIsLoaded] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 200);

        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // 3D tilt for glass card
    const tiltX = (mousePosition.y - 0.5) * -8;
    const tiltY = (mousePosition.x - 0.5) * 8;

    return (
        <section
            ref={heroRef}
            className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#050B14]"
        >
            {/* ═══ Ambient Orbs ═══ */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-30"
                style={{
                    background: "radial-gradient(circle, rgba(197,168,128,0.35) 0%, transparent 70%)",
                    top: "10%",
                    right: "5%",
                    filter: "blur(80px)",
                    animation: "orbFloat 8s ease-in-out infinite",
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)",
                    bottom: "5%",
                    left: "10%",
                    filter: "blur(100px)",
                    animation: "orbFloat 10s ease-in-out infinite reverse",
                }}
            />
            <div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none z-0 opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(197,168,128,0.25) 0%, transparent 70%)",
                    top: "50%",
                    left: "40%",
                    filter: "blur(90px)",
                    animation: "orbFloat 12s ease-in-out infinite 2s",
                }}
            />

            {/* ═══ Subtle grid lines ═══ */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* ═══ Content Grid ═══ */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 lg:pt-36 lg:pb-24">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ──── Left Column: Text ──── */}
                    <div className="flex-1 lg:max-w-[55%] flex flex-col items-start">

                        {/* Accent tag */}
                        <div
                            className={`flex items-center gap-3 mb-8 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            <div className="h-[1px] w-10 bg-gradient-to-r from-[#C5A880] to-transparent" />
                            <span className="text-[#C5A880] text-[10px] tracking-[0.35em] uppercase font-bold">
                                Luxury Yacht Charters
                            </span>
                        </div>

                        {/* Heading */}
                        <h1
                            className={`font-[family-name:var(--font-playfair)] text-white/95 leading-[1.05] tracking-tight transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-8 blur-sm"}`}
                        >
                            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                                Uncharted
                            </span>
                            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-1 italic font-light">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#C5A880]">
                                    Elegance.
                                </span>
                            </span>
                        </h1>

                        {/* Tagline with typing cursor */}
                        <p
                            className={`text-white/50 text-sm sm:text-base lg:text-lg font-light max-w-md mt-6 leading-relaxed transition-all duration-800 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            Discover a realm where the ocean&apos;s vastness meets unmatched luxury.
                            Handcrafted voyages, tailored exclusively for the elite.
                            <span
                                className="inline-block w-[2px] h-4 bg-[#C5A880] ml-1 align-middle"
                                style={{ animation: "blinkCursor 1s step-end infinite" }}
                            />
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className={`flex items-center gap-4 mt-10 transition-all duration-700 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            <button
                                onClick={() => openModal("Hero: Discover Fleet")}
                                className="group relative px-7 py-3.5 bg-white/[0.06] backdrop-blur-md text-white text-[10px] tracking-[0.2em] uppercase font-bold border border-white/15 hover:border-[#C5A880]/50 rounded-full transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880]/30 to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
                                <span className="relative z-10 flex items-center gap-2.5">
                                    Curate Your Voyage
                                    <svg
                                        className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <button
                                onClick={() => openModal("Hero: Watch Film")}
                                className="group flex items-center gap-3 text-white/60 hover:text-white text-[10px] tracking-[0.2em] uppercase font-bold transition-colors duration-400"
                            >
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C5A880] group-hover:bg-[#C5A880]/10 group-hover:scale-110 transition-all duration-400 relative">
                                    <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                                </div>
                                Watch Film
                            </button>
                        </div>

                        {/* Scroll hint */}
                        <div
                            className={`mt-16 lg:mt-20 flex items-center gap-3 cursor-pointer group transition-all duration-700 delay-[1300ms] ${isLoaded ? "opacity-40 hover:opacity-80" : "opacity-0"}`}
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                        >
                            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/30 to-[#C5A880] overflow-hidden relative">
                                <div
                                    className="absolute top-0 left-0 w-full h-1/2 bg-white"
                                    style={{ animation: "slideDownHero 2.5s ease-in-out infinite" }}
                                />
                            </div>
                            <span className="font-mono text-[9px] tracking-[0.4em] text-white uppercase">
                                Scroll
                            </span>
                        </div>
                    </div>

                    {/* ──── Right Column: Glass Video Card ──── */}
                    <div
                        className={`flex-1 w-full lg:max-w-[45%] transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
                    >
                        <div
                            ref={cardRef}
                            className="relative group"
                            style={{ perspective: "1200px" }}
                        >
                            {/* Glow halo behind card */}
                            <div
                                className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: "radial-gradient(ellipse at center, rgba(197,168,128,0.15) 0%, transparent 70%)",
                                    filter: "blur(30px)",
                                }}
                            />

                            {/* The glass card */}
                            <div
                                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out"
                                style={{
                                    transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                                }}
                            >
                                {/* Video */}
                                <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] relative">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1200"
                                        className="w-full h-full object-cover"
                                    >
                                        <source
                                            src="https://assets.mixkit.co/videos/preview/mixkit-yacht-sailing-on-the-sea-11881-large.mp4"
                                            type="video/mp4"
                                        />
                                    </video>

                                    {/* Inner gradient overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-transparent to-transparent opacity-30 lg:opacity-50" />
                                </div>

                                {/* Bottom info bar inside card */}
                                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between bg-gradient-to-t from-[#050B14]/90 to-transparent">
                                    <div>
                                        <div className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-mono">
                                            Destination
                                        </div>
                                        <div className="text-white/80 text-sm font-[family-name:var(--font-playfair)] italic mt-0.5">
                                            Sentosa Cove, Singapore
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-mono">
                                            Coordinates
                                        </div>
                                        <div className="text-[#C5A880]/70 text-xs font-mono mt-0.5">
                                            1°17&apos;N · 103°50&apos;E
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle inner border glow */}
                                <div className="absolute inset-0 rounded-2xl border border-white/[0.05] pointer-events-none" />
                            </div>

                            {/* Floating accent badge */}
                            <div
                                className={`absolute -top-3 -right-3 lg:-top-4 lg:-right-4 z-20 px-4 py-2 bg-[#C5A880]/10 backdrop-blur-xl border border-[#C5A880]/20 rounded-full transition-all duration-700 delay-[1100ms] ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                            >
                                <span className="text-[#C5A880] text-[9px] tracking-[0.2em] uppercase font-bold">
                                    Est. 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ Keyframes ═══ */}
            <style>{`
                @keyframes orbFloat {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-30px) scale(1.05); }
                }
                @keyframes blinkCursor {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes slideDownHero {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { transform: translateY(100%); opacity: 1; }
                    100% { transform: translateY(300%); opacity: 0; }
                }
            `}</style>
        </section>
    );
}
