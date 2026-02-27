"use client";

export default function AboutSection() {
    return (
        <section id="the-chart" className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
            {/* Floating Nautical Rope graphic */}
            <svg className="absolute top-10 right-[35%] w-32 h-32 text-[#C5A880]/40 -rotate-12 hidden lg:block animate-float-delayed pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path className="path-draw" d="M20 80 Q 50 10 80 80 Q 50 50 20 80" />
                <path className="path-draw" d="M20 80 C 10 90 0 70 15 60" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                <div className="relative reveal-on-scroll opacity-0 translate-y-12 -rotate-2 group animate-float">

                    {/* Sail Tape */}
                    <div className="absolute -top-4 -left-6 w-32 h-10 sail-tape -rotate-12 z-20 flex items-center justify-center opacity-90 shadow-sm" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-8 sail-tape rotate-6 z-20 flex items-center justify-center opacity-90 shadow-sm" />

                    <div className="relative p-4 bg-white shadow-2xl hand-drawn rotate-2 group-hover:-rotate-1 transition-transform duration-1000">
                        <div className="hand-drawn-fill">
                            <img
                                src="https://images.unsplash.com/photo-1523496922380-91d5afba98a3?auto=format&fit=crop&q=80&w=1200"
                                alt="Aesthetic Yacht Lifestyle"
                                className="w-full h-auto aspect-[4/5] object-cover filter contrast-110 saturate-50 group-hover:saturate-100 transition-all duration-1000"
                            />
                        </div>
                    </div>

                    <div className="absolute -bottom-12 -right-4 md:-right-12 bg-[#FBFBF9] p-6 lg:p-8 shadow-xl max-w-xs hand-drawn-alt z-30 transform -rotate-6 border-[1.5px] border-[#0077b6] group-hover:rotate-0 transition-transform duration-700">
                        <p className="font-[family-name:var(--font-caveat)] text-2xl lg:text-3xl text-slate-800 mb-2 leading-tight">"The ocean stirs the heart, inspires the imagination..."</p>
                        <p className="text-xs tracking-widest text-[#0077b6] uppercase mt-4 font-[family-name:var(--font-playfair)] italic">— Wyland</p>
                        {/* Ocean blue watercolor circle */}
                        <svg className="absolute top-2 left-2 w-full h-full pointer-events-none opacity-30 text-[#0077b6]" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <ellipse cx="50" cy="50" rx="45" ry="30" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-5 50 50)" className="path-draw" />
                        </svg>
                    </div>
                </div>

                <div className="reveal-on-scroll opacity-0 translate-y-12" style={{ transitionDelay: '200ms' }}>
                    <div className="flex items-center gap-4 mb-6">
                        <svg className="w-16 h-4 text-[#C5A880]" viewBox="0 0 60 10">
                            <path className="path-draw" d="M0 5 Q 15 0 30 5 T 60 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-[#C5A880] text-xs tracking-[0.2em] uppercase font-bold">A Love Letter to the Ocean</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-playfair)] text-slate-900 mb-8 leading-tight relative inline-block">
                        Crafted for the <br />
                        <span className="italic text-slate-900 watercolor-swipe">Wild at Heart.</span>
                    </h2>
                    <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                        We believe that every journey should feel entirely your own. Whether it’s a sun-drenched morning escaping the city or a candlelit evening anchored in a hidden cove, we weave your desires into reality.
                    </p>
                    <p className="font-[family-name:var(--font-caveat)] text-3xl lg:text-4xl text-[#0077b6] mb-12 -rotate-2 ml-4">
                        It's not just a trip. It's an awakening...
                    </p>

                    <div className="grid grid-cols-2 gap-6 lg:gap-8 mb-4 border-t border-[#C5A880]/30 pt-8 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FBFBF9] px-4 font-[family-name:var(--font-caveat)] text-slate-400">The Details</div>
                        <div className="relative group p-4 hand-drawn hover:bg-white transition-colors text-center sm:text-left">
                            <h4 className="text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] text-slate-900 mb-1">Bespoke</h4>
                            <p className="text-xs tracking-widest text-[#0077b6] uppercase font-bold mt-2">Tailored Experiences</p>
                        </div>
                        <div className="relative group p-4 hand-drawn-alt hover:bg-white transition-colors text-center sm:text-left">
                            <h4 className="text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] text-slate-900 mb-1">Soul</h4>
                            <p className="text-xs tracking-widest text-[#0077b6] uppercase font-bold mt-2">Infused in Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
