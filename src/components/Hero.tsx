"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Compass } from "lucide-react";

interface HeroProps {
    openModal: (context: string) => void;
}

export default function Hero({ openModal }: HeroProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const [isLoaded, setIsLoaded] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Trigger cinematic intro after a tiny delay
        const timer = setTimeout(() => setIsLoaded(true), 100);

        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = clientX / innerWidth;
            const y = clientY / innerHeight;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Subtle parallax effect for background
    const videoParallax = {
        transform: `translate(${(mousePosition.x - 0.5) * -40}px, ${(mousePosition.y - 0.5) * -40}px) scale(1.05)`,
        transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };

    // Foreground parallax
    const contentParallax = {
        transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`,
        transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };

    // Dynamic lighting that follows cursor
    const glowStyle = {
        background: `radial-gradient(circle 600px at ${Math.max(0, Math.min(mousePosition.x * 100, 100))}% ${Math.max(0, Math.min(mousePosition.y * 100, 100))}%, rgba(197, 168, 128, 0.15), transparent 80%)`,
        transition: 'background 0.2s ease-out'
    };

    return (
        <section ref={heroRef} className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Cinematic Letterbox Opening */}
            <div className={`absolute top-0 left-0 w-full bg-black z-[60] transition-all duration-[2000ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none ${isLoaded ? 'h-0 opacity-0' : 'h-1/2 opacity-100'}`} />
            <div className={`absolute bottom-0 left-0 w-full bg-black z-[60] transition-all duration-[2000ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none ${isLoaded ? 'h-0 opacity-0' : 'h-1/2 opacity-100'}`} />

            {/* Background Layer with Parallax */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={videoParallax}>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-950/95 z-10" />
                <video
                    autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-yacht-sailing-on-the-sea-11881-large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Mouse tracking glow */}
            <div className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000" style={glowStyle} />

            {/* Film Grain Overlay */}
            <div
                className="absolute inset-0 z-20 mix-blend-overlay opacity-[0.2] pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />

            {/* Floating Navigation/Coordinates Deco */}
            <div className={`absolute top-32 left-10 z-30 flex-col gap-2 font-mono text-[10px] tracking-[0.3em] text-white/50 hidden md:flex transition-all duration-1000 delay-[1500ms] ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <span className="animate-pulse">LAT 1° 17' N</span>
                <span className="animate-pulse" style={{ animationDelay: '500ms' }}>LONG 103° 50' E</span>
                <div className="h-16 w-[1px] bg-gradient-to-b from-[#C5A880]/50 to-transparent mt-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#C5A880]" style={{ animation: 'slideDownHero 3s ease-in-out infinite' }} />
                </div>
            </div>

            {/* Spinning Compass Decoration */}
            <div className="absolute right-[-100px] top-1/4 opacity-[0.02] text-white z-10 pointer-events-none animate-[spin_100s_linear_infinite] hidden lg:block scale-[2.5]">
                <Compass className="w-96 h-96" strokeWidth={0.5} />
            </div>

            {/* Main Content */}
            <div className="relative z-30 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center mt-12 w-full" style={contentParallax}>

                {/* Intro flair */}
                <div className={`overflow-hidden mb-6 transition-all duration-1000 delay-[800ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center gap-6 text-[#C5A880]">
                        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-[#C5A880] to-transparent" />
                        <span className="font-[family-name:var(--font-caveat)] text-2xl md:text-4xl lg:text-5xl -rotate-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-wider">
                            Beyond the horizon
                        </span>
                        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-[#C5A880] to-transparent" />
                    </div>
                </div>

                {/* Huge Typography */}
                <div className="relative mb-6 text-center">
                    <h1 className={`text-[3.5rem] sm:text-[5.5rem] lg:text-[8rem] xl:text-[9rem] font-[family-name:var(--font-playfair)] text-white/95 leading-[0.9] tracking-tight drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-[1500ms] delay-[1000ms] ${isLoaded ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-105 blur-md'}`}>
                        Uncharted <br />
                        <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#C5A880] relative inline-block drop-shadow-none filter-none">
                            Elegance.
                            {/* Ambient glow around the word Elegance */}
                            <div className="absolute -inset-4 bg-[#C5A880]/20 blur-2xl rounded-full -z-10 animate-pulse pointer-events-none mix-blend-screen" />
                        </span>
                    </h1>
                </div>

                <p className={`text-white/70 text-sm sm:text-base md:text-xl font-light max-w-2xl text-center mb-14 mt-6 transition-all duration-1000 delay-[1300ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Discover a realm where the ocean's vastness meets unmatched luxury. Handcrafted voyages, tailored exclusively for the elite.
                </p>

                {/* Interactive Glass Buttons */}
                <div className={`flex flex-col sm:flex-row gap-6 lg:gap-10 transition-all duration-1000 delay-[1600ms] w-full sm:w-auto ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <button
                        onClick={() => openModal('Hero: Discover Fleet')}
                        className="group relative px-10 py-5 bg-white/5 backdrop-blur-md text-white text-xs tracking-[0.25em] uppercase font-bold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-500 overflow-hidden w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#C5A880]/40 to-transparent group-hover:w-full transition-all duration-700 ease-out z-0" />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Curate Your Voyage
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </button>
                    <button
                        onClick={() => openModal('Hero: Watch Film')}
                        className="group relative px-10 py-5 text-white/80 hover:text-white text-xs tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-4 transition-colors duration-500 w-full sm:w-auto"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#C5A880] group-hover:bg-[#C5A880]/10 group-hover:scale-110 transition-all duration-500 relative">
                            {/* Inner ripple */}
                            <div className="absolute inset-0 rounded-full border border-[#C5A880]/50 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-0 group-hover:opacity-100" />
                            <Play className="w-4 h-4 ml-1 fill-current" />
                        </div>
                        Watch The Film
                    </button>
                </div>

                {/* Vertical Scroll Indicator - Moved inside content flow so it never overlaps buttons */}
                <div
                    className={`mt-12 sm:mt-16 flex flex-col items-center transition-all duration-1000 delay-[2000ms] cursor-pointer hover:opacity-100 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-[#C5A880] overflow-hidden relative mb-4">
                        <div className="absolute top-0 left-0 w-full h-[50%] bg-white" style={{ animation: 'slideDownHero 2.5s ease-in-out infinite' }} />
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.4em] text-white uppercase text-center w-max opacity-80">
                        Scroll
                    </span>
                </div>
            </div>

// ... existing Hero code above ...
            {/* Hand-drawn ocean waves paper tear */}
            <div className="absolute bottom-0 left-0 w-full z-40 translate-y-[2px] pointer-events-none">
                <svg viewBox="0 0 1440 120" className="w-full h-auto text-slate-950 fill-current drop-shadow-lg">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>

            <style>{`
                @keyframes slideDownHero {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { transform: translateY(100%); opacity: 1; }
                    100% { transform: translateY(300%); opacity: 0; }
                }
            `}</style>
        </section>
    );
}
