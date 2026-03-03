"use client";

import { useEffect, useState } from "react";
import { Ship, Anchor, ArrowRight, Play } from "lucide-react";

interface FleetProps {
    openModal: (context: string) => void;
    fleet: {
        name: string;
        model: string;
        guests: number;
        cabins: number;
        price: string;
        rating: number;
        note: string;
        image: string;
    }[];
}

export default function FleetSection({ fleet, openModal }: FleetProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('our-fleet');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    // Duplicate for seamless infinite loop
    const marqueeItems = [...fleet, ...fleet];

    return (
        <section id="our-fleet" className="py-24 lg:py-32 bg-[#050B14] text-white relative z-10 overflow-hidden">
            {/* Ambient Orbs */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)",
                    top: "10%",
                    left: "-10%",
                    filter: "blur(100px)",
                }}
            />
            <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(197,168,128,0.25) 0%, transparent 70%)",
                    bottom: "10%",
                    right: "-5%",
                    filter: "blur(100px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className={`flex flex-col md:flex-row justify-between items-end mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-2xl relative mb-8 md:mb-0">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#C5A880]" />
                            <span className="text-[#C5A880] text-[10px] tracking-[0.35em] uppercase font-bold">The Collection</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-playfair)] mb-4">
                            Vessels with <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C5A880]">Soul.</span>
                        </h2>
                    </div>

                    <div className="md:max-w-xs md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6 py-2">
                        <p className="text-white/50 font-light text-sm lg:text-base leading-relaxed">
                            Not just boats. Floating sanctuaries for those who demand the extraordinary.
                        </p>
                    </div>
                </div>
            </div>

            {/* Infinite Horizontal Scroll Marquee */}
            <div className="relative w-full overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050B14] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050B14] to-transparent z-10 pointer-events-none" />

                <div
                    className={`flex gap-8 w-max transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        animation: "fleetMarquee 35s linear infinite",
                    }}
                >
                    {marqueeItems.map((yacht, index) => (
                        <div
                            key={`${yacht.name}-${index}`}
                            className="group w-[340px] lg:w-[380px] shrink-0"
                        >
                            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-5 hover:bg-white/[0.06] hover:border-[#C5A880]/20 transition-all duration-700 h-full flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

                                {/* Image Container */}
                                <div className="overflow-hidden relative aspect-[4/5] mb-8 rounded-xl">
                                    <img
                                        src={yacht.image}
                                        alt={yacht.name}
                                        className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transform group-hover:scale-110 transition-all duration-[2000ms] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />

                                    {/* Top Note Overlay */}
                                    <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-full transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <p className="text-[9px] tracking-[0.2em] text-white uppercase font-bold">{yacht.note}</p>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-[#C5A880]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay pointer-events-none rounded-xl" />

                                    {/* Play Video CTA overlay on card */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); openModal("Video"); }}
                                        className="absolute inset-0 flex items-center justify-center group/play cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"
                                        aria-label="View Yacht Video"
                                    >
                                        <div className="w-14 h-14 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center group-hover/play:border-[#C5A880] group-hover/play:bg-[#C5A880]/30 group-hover/play:scale-110 transition-all duration-400 shadow-[0_0_20px_rgba(197,168,128,0.3)]">
                                            <Play className="w-4 h-4 ml-1 fill-white text-white group-hover/play:fill-[#C5A880] group-hover/play:text-[#C5A880] transition-colors duration-300" />
                                        </div>
                                    </button>
                                </div>

                                {/* Content Details */}
                                <div className="flex-1 flex flex-col px-2">
                                    <div className="mb-6">
                                        <p className="text-[#C5A880] text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">{yacht.model}</p>
                                        <h3 className="text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] text-white group-hover:text-[#C5A880] transition-colors duration-500">
                                            {yacht.name}
                                        </h3>
                                    </div>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/10">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Guests</span>
                                            <span className="flex items-center gap-2 text-white/90 text-sm">
                                                <Ship className="w-4 h-4 text-[#C5A880]" />
                                                Up to {yacht.guests}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Cabins</span>
                                            <span className="flex items-center gap-2 text-white/90 text-sm">
                                                <Anchor className="w-4 h-4 text-[#C5A880]" />
                                                {yacht.cabins} Suites
                                            </span>
                                        </div>
                                    </div>

                                    {/* Footer / CTA */}
                                    <div className="flex justify-between items-end mt-auto pt-6 border-t border-white/10">
                                        <div>
                                            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1">From</p>
                                            <span className="font-[family-name:var(--font-playfair)] text-2xl text-white">{yacht.price}</span>
                                        </div>

                                        <button
                                            onClick={() => openModal(`Charter: ${yacht.name}`)}
                                            className="group/btn relative overflow-hidden flex items-center justify-center px-5 py-3 bg-white/[0.06] border border-white/10 hover:border-[#C5A880]/40 rounded-full transition-all duration-500"
                                        >
                                            <div className="absolute inset-0 bg-[#C5A880] w-0 group-hover/btn:w-full transition-all duration-500 ease-out z-0 rounded-full" />
                                            <span className="relative z-10 flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-white font-bold transition-colors">
                                                Reserve
                                                <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fleetMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
