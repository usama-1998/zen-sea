"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Play } from "lucide-react";

interface CardData {
    image: string;
    video?: string;
    destination: string;
    coordinates: string;
}

const CARDS: CardData[] = [
    {
        image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1200",
        video: "https://assets.mixkit.co/videos/preview/mixkit-yacht-sailing-on-the-sea-11881-large.mp4",
        destination: "Sentosa Cove, Singapore",
        coordinates: "1°17\u2019N \u00b7 103°50\u2019E",
    },
    {
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200",
        destination: "Monaco Harbour, Monaco",
        coordinates: "43°44\u2019N \u00b7 7°25\u2019E",
    },
    {
        image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1200",
        destination: "Santorini, Greece",
        coordinates: "36°23\u2019N \u00b7 25°27\u2019E",
    },
];

interface HeroProps {
    openModal: (context: string) => void;
}

export default function Hero({ openModal }: HeroProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
    const [cursorTrail, setCursorTrail] = useState<{ x: number; y: number; id: number }[]>([]);
    const heroRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const trailCounterRef = useRef(0);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 200);

        const handleMouseMove = (e: MouseEvent) => {
            // Tilt tracking
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                setMousePosition({ x, y });
            }
            // Cursor trail
            setCursorPos({ x: e.clientX, y: e.clientY });
            trailCounterRef.current += 1;
            const id = trailCounterRef.current;
            setCursorTrail((prev) => [
                ...prev.slice(-12),
                { x: e.clientX, y: e.clientY, id },
            ]);
            setTimeout(() => {
                setCursorTrail((prev) => prev.filter((p) => p.id !== id));
            }, 600);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleCardClick = useCallback((index: number) => {
        if (index === activeIndex || isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 600);
    }, [activeIndex, isAnimating]);

    // 3D tilt for glass card
    const tiltX = (mousePosition.y - 0.5) * -8;
    const tiltY = (mousePosition.x - 0.5) * 8;

    // Build ordered card indices: active first, then others
    const cardOrder = [activeIndex, ...CARDS.map((_, i) => i).filter(i => i !== activeIndex)];

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

                    {/* ──── Right Column: Stacked Card Carousel ──── */}
                    <div
                        className={`flex-1 w-full lg:max-w-[45%] transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
                    >
                        <div
                            ref={cardRef}
                            className="relative group"
                            style={{ perspective: "1200px" }}
                        >
                            {/* Glow halo behind stack */}
                            <div
                                className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                                style={{
                                    background: "radial-gradient(ellipse at center, rgba(197,168,128,0.15) 0%, transparent 70%)",
                                    filter: "blur(30px)",
                                }}
                            />

                            {/* Render cards in reverse so front card is on top */}
                            {[...cardOrder].reverse().map((cardIndex) => {
                                const card = CARDS[cardIndex];
                                const isActive = cardIndex === activeIndex;
                                const stackPos = cardOrder.indexOf(cardIndex); // 0 = front, 1 = middle, 2 = back

                                // Stack offsets: back cards peek from the left
                                const xOffset = stackPos === 0 ? 0 : stackPos === 1 ? -40 : -72;
                                const yOffset = stackPos === 0 ? 0 : stackPos === 1 ? 8 : 16;
                                const rotation = stackPos === 0 ? 0 : stackPos === 1 ? -2 : -4;
                                const scale = stackPos === 0 ? 1 : stackPos === 1 ? 0.96 : 0.92;
                                const zIndex = stackPos === 0 ? 30 : stackPos === 1 ? 20 : 10;
                                const tiltMult = stackPos === 0 ? 1 : stackPos === 1 ? 0.3 : 0.1;

                                return (
                                    <div
                                        key={cardIndex}
                                        onClick={() => !isActive && handleCardClick(cardIndex)}
                                        className={`${isActive ? "relative" : "absolute inset-0"} rounded-2xl overflow-hidden border bg-white/[0.03] backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${isActive
                                            ? "border-white/10 cursor-default"
                                            : "border-white/[0.07] cursor-pointer hover:border-white/20"
                                            }`}
                                        style={{
                                            zIndex,
                                            transform: `translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotation}deg) scale(${scale}) rotateX(${tiltX * tiltMult}deg) rotateY(${tiltY * tiltMult}deg)`,
                                            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                            transformOrigin: "center center",
                                        }}
                                    >
                                        {/* Image / Video */}
                                        <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] relative">
                                            {isActive && card.video ? (
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    poster={card.image}
                                                    className="w-full h-full object-cover"
                                                >
                                                    <source src={card.video} type="video/mp4" />
                                                </video>
                                            ) : (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={card.image}
                                                    alt={card.destination}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}

                                            {/* Inner gradient overlays */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-transparent to-transparent opacity-30 lg:opacity-50" />

                                            {/* Darkening overlay for back cards */}
                                            {!isActive && (
                                                <div className="absolute inset-0 bg-[#050B14]/40" />
                                            )}

                                            {/* Play button overlay on active card */}
                                            {isActive && (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); openModal("Hero: Watch Film"); }}
                                                    className="absolute inset-0 flex items-center justify-center group/play"
                                                    aria-label="Watch Film"
                                                >
                                                    <div className="w-16 h-16 rounded-full border border-white/30 bg-black/30 backdrop-blur-md flex items-center justify-center group-hover/play:border-[#C5A880] group-hover/play:bg-[#C5A880]/20 group-hover/play:scale-110 transition-all duration-400 shadow-[0_0_30px_rgba(197,168,128,0.2)]">
                                                        <Play className="w-5 h-5 ml-1 fill-white text-white group-hover/play:fill-[#C5A880] group-hover/play:text-[#C5A880] transition-colors duration-300" />
                                                    </div>
                                                </button>
                                            )}
                                        </div>

                                        {/* Bottom info bar */}
                                        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between bg-gradient-to-t from-[#050B14]/90 to-transparent">
                                            <div>
                                                <div className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-mono">
                                                    Destination
                                                </div>
                                                <div className="text-white/80 text-sm font-[family-name:var(--font-playfair)] italic mt-0.5">
                                                    {card.destination}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-mono">
                                                    Coordinates
                                                </div>
                                                <div className="text-[#C5A880]/70 text-xs font-mono mt-0.5">
                                                    {card.coordinates}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Subtle inner border glow */}
                                        <div className="absolute inset-0 rounded-2xl border border-white/[0.05] pointer-events-none" />
                                    </div>
                                );
                            })}

                            {/* Floating accent badge */}
                            <div
                                className={`absolute -top-3 -right-3 lg:-top-4 lg:-right-4 z-40 px-4 py-2 bg-[#C5A880]/10 backdrop-blur-xl border border-[#C5A880]/20 rounded-full transition-all duration-700 delay-[1100ms] ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                            >
                                <span className="text-[#C5A880] text-[9px] tracking-[0.2em] uppercase font-bold">
                                    Est. 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ Golden Cursor Trail ═══ */}
            {/* Main cursor glow */}
            <div
                className="fixed pointer-events-none z-[9999] rounded-full"
                style={{
                    width: 28,
                    height: 28,
                    background: "radial-gradient(circle, rgba(197,168,128,0.85) 0%, rgba(197,168,128,0.3) 50%, transparent 100%)",
                    boxShadow: "0 0 16px 4px rgba(197,168,128,0.5)",
                    transform: `translate(${cursorPos.x - 14}px, ${cursorPos.y - 14}px)`,
                    transition: "transform 0.06s linear",
                    filter: "blur(1px)",
                }}
            />
            {/* Trail dots */}
            {cursorTrail.map((dot, i) => {
                const age = cursorTrail.length - 1 - cursorTrail.findIndex(d => d.id === dot.id);
                const opacity = Math.max(0, 0.55 - age * 0.045);
                const size = Math.max(4, 14 - age * 1.0);
                return (
                    <div
                        key={dot.id}
                        className="fixed pointer-events-none z-[9998] rounded-full"
                        style={{
                            width: size,
                            height: size,
                            background: `rgba(197,168,128,${opacity})`,
                            boxShadow: `0 0 ${size * 1.5}px ${size * 0.5}px rgba(197,168,128,${opacity * 0.6})`,
                            transform: `translate(${dot.x - size / 2}px, ${dot.y - size / 2}px)`,
                            filter: "blur(0.5px)",
                        }}
                    />
                );
            })}

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
