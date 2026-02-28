"use client";

import { GlassWater } from "lucide-react";

interface ExperiencesProps {
    openModal: (context: string) => void;
}

export default function ExperiencesSection({ openModal }: ExperiencesProps) {
    return (
        <section id="currents" className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16 lg:mb-24 reveal-on-scroll opacity-0 translate-y-12">
                <span className="font-[family-name:var(--font-caveat)] text-2xl lg:text-3xl text-[#C5A880] block mb-3 rotate-2">A nautical scrapbook...</span>
                <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-playfair)] text-slate-900 relative inline-block watercolor-swipe">
                    Chapters Waiting
                    <br /> to be Written.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-10 h-auto md:h-[550px] lg:h-[600px]">
                {/* Main Scrapbook Feature */}
                <div className="md:col-span-8 flex flex-col relative group reveal-on-scroll opacity-0 translate-y-12 p-3 bg-white shadow-xl hand-drawn -rotate-1 animate-float">

                    <div className="absolute top-4 right-4 z-20 font-[family-name:var(--font-caveat)] text-2xl lg:text-3xl text-white drop-shadow-md rotate-6 bg-slate-900/30 px-4 py-1.5 hand-drawn backdrop-blur-sm border border-white/20">The Golden Hour</div>

                    <div className="w-full flex-1 relative overflow-hidden hand-drawn-fill min-h-[350px]">
                        <img
                            src="https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?auto=format&fit=crop&q=80&w=1200"
                            alt="Curated Celebrations on Yacht"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                            <GlassWater className="w-6 h-6 lg:w-8 lg:h-8 text-[#C5A880] mb-4 transform group-hover:-rotate-12 transition-transform duration-500" />
                            <h3 className="text-2xl md:text-4xl font-[family-name:var(--font-playfair)] text-white mb-3">Curated Celebrations</h3>
                            <p className="text-white/90 font-light text-sm lg:text-base max-w-md mb-6">Because life's most beautiful moments deserve a backdrop that takes your breath away.</p>
                            <button
                                onClick={() => openModal('Experience: Celebrations')}
                                className="self-start text-[10px] lg:text-xs text-slate-900 tracking-[0.2em] uppercase bg-white px-5 py-2 lg:px-6 lg:py-3 hand-drawn-fill hover:bg-[#C5A880] hover:text-white transition-colors shadow-lg font-bold"
                            >
                                Write This Chapter
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4 grid grid-rows-2 gap-8 md:gap-5 lg:gap-6">
                    {/* Small Feature 1 */}
                    <div className="relative group flex flex-col p-2 bg-white shadow-lg hand-drawn-alt rotate-3 reveal-on-scroll opacity-0 translate-y-12 animate-float-delayed min-h-[180px]" style={{ transitionDelay: '150ms' }}>
                        <div className="absolute -left-5 lg:-left-6 top-1/2 font-[family-name:var(--font-caveat)] text-xl lg:text-2xl text-slate-800 -rotate-90 origin-bottom-left z-20 bg-[#FBFBF9] px-3 hand-drawn shadow-md border-b-4 border-b-[#0077b6]">Adrenaline</div>
                        <div className="w-full flex-1 relative overflow-hidden hand-drawn-fill">
                            <img
                                src="https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&q=80&w=800"
                                alt="Jet Ski Thrills"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 filter sepia-[20%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-5">
                                <h3 className="text-xl lg:text-2xl font-[family-name:var(--font-playfair)] text-white mb-2">Ocean Thrills</h3>
                                <button onClick={() => openModal('Experience: Ocean Thrills')} className="text-[10px] lg:text-xs text-[#C5A880] uppercase tracking-widest text-left mt-1 hover:text-white transition-colors nav-link inline-block self-start font-bold">
                                    Discover More ↗
                                    <svg viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Small Feature 2 */}
                    <div className="relative group flex flex-col p-2 bg-white shadow-lg hand-drawn -rotate-2 reveal-on-scroll opacity-0 translate-y-12 animate-float min-h-[180px]" style={{ transitionDelay: '300ms' }}>
                        <div className="absolute right-2 -bottom-4 lg:right-4 lg:-bottom-6 font-[family-name:var(--font-caveat)] text-xl lg:text-2xl text-white rotate-12 z-20 bg-[#0077b6] px-3 py-1 hand-drawn-alt shadow-lg">Deep Blue</div>
                        <div className="w-full flex-1 relative overflow-hidden hand-drawn-fill">
                            <img
                                src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=800"
                                alt="Marine Tours"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 filter contrast-125"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-5">
                                <h3 className="text-xl lg:text-2xl font-[family-name:var(--font-playfair)] text-white mb-2">Marine Escapes</h3>
                                <button onClick={() => openModal('Experience: Marine Escapes')} className="text-[10px] lg:text-xs text-[#C5A880] uppercase tracking-widest text-left mt-1 hover:text-white transition-colors nav-link inline-block self-start font-bold">
                                    Discover More ↗
                                    <svg viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
