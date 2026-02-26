"use client";

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
    return (
        <section id="our-fleet" className="py-20 lg:py-28 bg-slate-900 text-white relative z-10">
            {/* Torn paper top border */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg className="relative block w-[calc(100%+1.3px)] h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FBFBF9]"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll opacity-0 translate-y-12">
                    <div className="max-w-2xl relative mb-6 md:mb-0">
                        <span className="font-[family-name:var(--font-caveat)] text-3xl lg:text-4xl text-[#C5A880] block mb-3 -rotate-3">Meet your perfect match...</span>
                        <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-playfair)] mb-2 watercolor-swipe">Vessels with Soul.</h2>
                    </div>
                    <p className="text-slate-300 font-light max-w-sm md:text-right text-lg border-l-2 md:border-l-0 md:border-r-2 border-[#C5A880] pl-4 md:pl-0 md:pr-4 py-2 font-[family-name:var(--font-caveat)] text-2xl lg:text-3xl">
                        Not just boats. Floating sanctuaries for those who demand the extraordinary.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                    {fleet.map((yacht, index) => (
                        <div
                            key={yacht.name}
                            className={`group reveal-on-scroll opacity-0 translate-y-12 relative animate-float ${index % 2 === 0 ? '-rotate-1' : 'rotate-2 lg:mt-12'}`}
                            style={{ transitionDelay: `${index * 150}ms`, animationDelay: `${index}s` }}
                        >
                            {/* Hand-written floating post-it note */}
                            <div className="absolute -top-6 -right-4 lg:-top-8 lg:-right-6 z-30 font-[family-name:var(--font-caveat)] text-xl lg:text-2xl text-slate-900 -rotate-12 bg-[#FBFBF9] px-4 py-2 hand-drawn-alt shadow-lg border-t-4 border-t-[#0077b6] hover:rotate-0 transition-transform">
                                {/* Compass/Star pin */}
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[#C5A880]">★</div>
                                {yacht.note}
                            </div>

                            <div className="bg-white p-4 hand-drawn hover:-translate-y-4 transition-transform duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                                {/* Sail Tape */}
                                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 lg:w-20 h-8 sail-tape z-20 ${index % 2 === 0 ? '-rotate-3' : 'rotate-4'}`}></div>

                                <div className="overflow-hidden relative aspect-[4/5] mb-6 hand-drawn-fill">
                                    <img
                                        src={yacht.image}
                                        alt={yacht.name}
                                        className="w-full h-full object-cover filter grayscale-[20%] sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0 transform group-hover:scale-105 transition-all duration-1000 ease-out"
                                    />
                                    {/* Faint marine stamp overlay */}
                                    <div className="absolute bottom-2 right-2 text-white/60 font-[family-name:var(--font-inter)] text-[10px] z-10 mix-blend-overlay border border-white/30 p-1 rounded-sm backdrop-blur-sm">
                                        LAT 1.24°N
                                    </div>
                                </div>

                                <div className="px-2 pb-2 text-slate-900">
                                    <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-playfair)] mb-1">
                                        {yacht.name}
                                    </h3>
                                    <p className="font-[family-name:var(--font-caveat)] text-xl lg:text-2xl text-slate-500 mb-4">{yacht.model}</p>

                                    <div className="flex gap-4 text-xs lg:text-sm text-[#0077b6] font-bold mb-6">
                                        <span className="flex items-center gap-1.5 hand-drawn px-3 py-1 bg-[#0077b6]/5"><Ship className="w-4 h-4 text-[#C5A880]" /> {yacht.guests}</span>
                                        <span className="flex items-center gap-1.5 hand-drawn px-3 py-1 bg-[#0077b6]/5"><Anchor className="w-4 h-4 text-[#C5A880]" /> {yacht.cabins}</span>
                                    </div>

                                    <div className="flex justify-between items-center pt-4 relative">
                                        {/* Scribble wave line above footer */}
                                        <svg className="absolute top-0 left-0 w-full h-2 text-slate-200" preserveAspectRatio="none">
                                            <path d="M0 5 Q 12.5 0 25 5 T 50 5 T 75 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                                        </svg>

                                        <span className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl text-slate-900">{yacht.price}</span>
                                        <button
                                            onClick={() => openModal(`Charter: ${yacht.name}`)}
                                            className="text-[10px] lg:text-xs tracking-[0.2em] uppercase flex items-center gap-2 text-white bg-slate-900 px-3 lg:px-4 py-2 lg:py-3 hand-drawn-alt hover:bg-[#0077b6] transition-colors font-bold"
                                        >
                                            Reserve <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:translate-x-2 transition-transform" />
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
