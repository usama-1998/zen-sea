"use client";

import { useEffect, useState } from "react";
import { Ship, Anchor, ArrowRight } from "lucide-react";

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

    return (
        <section id="our-fleet" className="py-24 lg:py-32 bg-[#050B14] text-white relative z-10 overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 -left-64 w-[800px] h-[800px] bg-[#0077b6]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className={`flex flex-col md:flex-row justify-between items-end mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-2xl relative mb-8 md:mb-0">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A880]" />
                            <span className="text-[#C5A880] text-[10px] tracking-[0.3em] uppercase font-bold">The Collection</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-playfair)] mb-4">
                            Vessels with <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C5A880]">Soul.</span>
                        </h2>
                    </div>

                    <div className="md:max-w-xs md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6 py-2">
                        <p className="text-white/50 font-light text-sm lg:text-base leading-relaxed">
                            Not just boats. Floating sanctuaries for those who demand the extraordinary.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {fleet.map((yacht, index) => (
                        <div
                            key={yacht.name}
                            className={`group relative transition-all duration-1000 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="bg-white/5 border border-white/10 p-4 lg:p-5 hover:bg-white/10 hover:border-[#C5A880]/30 transition-all duration-700 h-full flex flex-col group">

                                {/* Image Container */}
                                <div className="overflow-hidden relative aspect-[4/5] mb-8 border border-white/5">
                                    <img
                                        src={yacht.image}
                                        alt={yacht.name}
                                        className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transform group-hover:scale-110 transition-all duration-[2000ms] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                                    {/* Top Note Overlay */}
                                    <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-sm transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <p className="text-[9px] tracking-[0.2em] text-white uppercase font-bold">{yacht.note}</p>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-[#C5A880]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay pointer-events-none" />
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
                                            className="group/btn relative overflow-hidden flex items-center justify-center p-4 bg-white/5 border border-white/10 hover:border-[#C5A880]/50 transition-colors"
                                        >
                                            <div className="absolute inset-0 bg-[#C5A880] w-0 group-hover/btn:w-full transition-all duration-500 ease-out z-0" />
                                            <span className="relative z-10 flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-white font-bold transition-colors">
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
        </section>
    );
}
