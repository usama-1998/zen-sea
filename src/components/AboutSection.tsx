"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const element = document.getElementById('the-chart');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <section id="the-chart" className="py-24 lg:py-32 relative z-10 bg-slate-950 overflow-hidden">
            {/* Dark Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

                    {/* Left Side: Premium Image Layout */}
                    <div className="relative group">
                        {/* Floating Gold Border */}
                        <div className="absolute -inset-4 border border-[#C5A880]/20 z-0 hidden lg:block transition-transform duration-700 group-hover:scale-105" />

                        <div className="relative z-10 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-900">
                            <img
                                src="https://images.unsplash.com/photo-1523496922380-91d5afba98a3?auto=format&fit=crop&q=80&w=1200"
                                alt="Aesthetic Yacht Lifestyle"
                                className="w-full h-auto aspect-[4/5] object-cover filter contrast-110 saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000"
                            />
                            {/* Film Grain over Image */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Minimalist Quote Box */}
                        <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-[#050B14]/90 backdrop-blur-md p-8 lg:p-10 shadow-2xl max-w-sm z-30 border border-white/10 group-hover:border-[#C5A880]/30 transition-colors duration-700">
                            <p className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl text-white/90 mb-4 leading-relaxed font-light">"The ocean stirs the heart, inspires the imagination..."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-[1px] bg-[#C5A880]" />
                                <p className="text-[10px] tracking-[0.2em] text-[#C5A880] uppercase">Wyland</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Typography */}
                    <div className="pt-8 lg:pt-0">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A880]" />
                            <span className="text-[#C5A880] text-[10px] tracking-[0.3em] uppercase font-bold">A Love Letter</span>
                        </div>

                        <h2 className="text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white/95 mb-8 leading-tight">
                            Crafted for the <br />
                            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C5A880]">Wild at Heart.</span>
                        </h2>

                        <div className="space-y-6 text-white/50 font-light leading-relaxed text-sm lg:text-base border-l border-white/10 pl-6">
                            <p>
                                We believe that every journey should feel entirely your own. Whether it’s a sun-drenched morning escaping the city or a candlelit evening anchored in a hidden cove, we weave your desires into reality.
                            </p>
                            <p>
                                It's not just a trip. It's an awakening.
                            </p>
                        </div>

                        {/* Dark Glassmorphism Stats/Details */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-12 pt-8 border-t border-white/10">
                            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/5 hover:border-[#C5A880]/30 transition-all duration-500 group cursor-default">
                                <h4 className="text-3xl font-[family-name:var(--font-playfair)] text-white mb-2 group-hover:text-[#C5A880] transition-colors">Bespoke</h4>
                                <p className="text-[9px] tracking-[0.2em] text-white/40 uppercase">Tailored Experiences</p>
                            </div>
                            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/5 hover:border-[#C5A880]/30 transition-all duration-500 group cursor-default">
                                <h4 className="text-3xl font-[family-name:var(--font-playfair)] text-white mb-2 group-hover:text-[#C5A880] transition-colors">Soul</h4>
                                <p className="text-[9px] tracking-[0.2em] text-white/40 uppercase">Infused in Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
