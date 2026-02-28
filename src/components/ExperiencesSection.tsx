"use client";

import { useEffect, useState } from "react";
import { GlassWater, Flame, Compass } from "lucide-react";

interface ExperiencesProps {
    openModal: (context: string) => void;
}

export default function ExperiencesSection({ openModal }: ExperiencesProps) {
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

        const element = document.getElementById('currents');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <section id="currents" className="py-24 lg:py-32 relative z-10 bg-slate-950 overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0077b6]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C5A880]" />
                        <span className="text-[#C5A880] text-[10px] tracking-[0.3em] uppercase font-bold">Curated Moments</span>
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C5A880]" />
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white relative inline-block">
                        Chapters Waiting
                        <br />
                        <span className="italic font-light text-white/50">to be Written.</span>
                    </h2>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px] lg:h-[700px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

                    {/* Main Large Feature */}
                    <div className="md:col-span-8 relative group overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-slate-900 cursor-pointer" onClick={() => openModal('Experience: Celebrations')}>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-[#C5A880]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-20 pointer-events-none" />

                        <img
                            src="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&q=80&w=1200"
                            alt="Curated Celebrations on Yacht"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] filter brightness-75 group-hover:brightness-100"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent z-10" />

                        {/* Floating Tag */}
                        <div className="absolute top-8 left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 flex items-center gap-2 rounded-full transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                            <span className="text-[9px] tracking-[0.2em] text-white uppercase font-bold">Featured</span>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <GlassWater className="w-6 h-6 lg:w-8 lg:h-8 text-[#C5A880] mb-6 transform group-hover:-rotate-12 transition-transform duration-500" />
                            <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-4 drop-shadow-md">Curated Celebrations</h3>
                            <p className="text-white/60 font-light text-sm lg:text-base max-w-md mb-8 group-hover:text-white/80 transition-colors duration-500">
                                Because life's most beautiful moments deserve a backdrop that takes your breath away.
                            </p>

                            <div className="flex items-center gap-4 text-[#C5A880] text-[10px] tracking-[0.2em] uppercase font-bold group/btn">
                                <span className="relative overflow-hidden">
                                    Write This Chapter
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                                </span>
                                <svg className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Stack */}
                    <div className="md:col-span-4 flex flex-col gap-6 h-[600px] md:h-full">

                        {/* Small Feature 1 */}
                        <div className="relative flex-1 group overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-slate-900 cursor-pointer" onClick={() => openModal('Experience: Ocean Thrills')}>
                            <img
                                src="https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&q=80&w=800"
                                alt="Jet Ski Thrills"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] filter brightness-50 group-hover:brightness-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent z-10" />

                            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20">
                                <Flame className="w-5 h-5 text-[#C5A880] mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                                <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-playfair)] text-white mb-2">Ocean Thrills</h3>
                                <button className="text-[9px] text-white/50 uppercase tracking-[0.2em] mt-2 group-hover:text-[#C5A880] transition-colors flex items-center gap-2">
                                    Discover More
                                    <span className="w-4 h-[1px] bg-[#C5A880] block transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                </button>
                            </div>
                        </div>

                        {/* Small Feature 2 */}
                        <div className="relative flex-1 group overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-slate-900 cursor-pointer" onClick={() => openModal('Experience: Marine Escapes')}>
                            <img
                                src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=800"
                                alt="Marine Tours"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] filter brightness-50 group-hover:brightness-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent z-10" />

                            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20">
                                <Compass className="w-5 h-5 text-[#C5A880] mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                                <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-playfair)] text-white mb-2">Marine Escapes</h3>
                                <button className="text-[9px] text-white/50 uppercase tracking-[0.2em] mt-2 group-hover:text-[#C5A880] transition-colors flex items-center gap-2">
                                    Discover More
                                    <span className="w-4 h-[1px] bg-[#C5A880] block transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
