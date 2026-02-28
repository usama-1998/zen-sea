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
        <section id="the-chart" className="py-24 lg:py-32 relative z-10 bg-[#050B14] overflow-hidden">
            {/* Ambient Orbs */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-25"
                style={{
                    background: "radial-gradient(circle, rgba(197,168,128,0.3) 0%, transparent 70%)",
                    top: "20%",
                    right: "10%",
                    filter: "blur(100px)",
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)",
                    bottom: "10%",
                    left: "5%",
                    filter: "blur(90px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

                    {/* Left Side: Image */}
                    <div className="relative group">
                        {/* Ambient glow behind image */}
                        <div className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: "radial-gradient(ellipse at center, rgba(197,168,128,0.12) 0%, transparent 70%)",
                                filter: "blur(30px)",
                            }}
                        />

                        <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-white/[0.03]">
                            <img
                                src="https://images.unsplash.com/photo-1523496922380-91d5afba98a3?auto=format&fit=crop&q=80&w=1200"
                                alt="Aesthetic Yacht Lifestyle"
                                className="w-full h-auto aspect-[4/5] object-cover group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Quote Box */}
                        <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-[#050B14]/90 backdrop-blur-xl p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-w-sm z-30 border border-white/10 rounded-2xl group-hover:border-[#C5A880]/20 transition-colors duration-700">
                            <p className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl text-white/90 mb-4 leading-relaxed font-light">&quot;The ocean stirs the heart, inspires the imagination...&quot;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-[1px] bg-[#C5A880]" />
                                <p className="text-[10px] tracking-[0.2em] text-[#C5A880] uppercase">Wyland</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Typography */}
                    <div className="pt-8 lg:pt-0">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#C5A880]" />
                            <span className="text-[#C5A880] text-[10px] tracking-[0.35em] uppercase font-bold">A Love Letter</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white/95 mb-8 leading-tight">
                            Crafted for the <br />
                            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C5A880]">Wild at Heart.</span>
                        </h2>

                        <div className="space-y-6 text-white/50 font-light leading-relaxed text-sm lg:text-base border-l border-white/10 pl-6">
                            <p>
                                We believe that every journey should feel entirely your own. Whether it&apos;s a sun-drenched morning escaping the city or a candlelit evening anchored in a hidden cove, we weave your desires into reality.
                            </p>
                            <p>
                                It&apos;s not just a trip. It&apos;s an awakening.
                            </p>
                        </div>

                        {/* Glass Stats Cards */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-12 pt-8 border-t border-white/10">
                            <div className="p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#C5A880]/20 transition-all duration-500 group cursor-default">
                                <h4 className="text-3xl font-[family-name:var(--font-playfair)] text-white mb-2 group-hover:text-[#C5A880] transition-colors">Bespoke</h4>
                                <p className="text-[9px] tracking-[0.2em] text-white/40 uppercase">Tailored Experiences</p>
                            </div>
                            <div className="p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#C5A880]/20 transition-all duration-500 group cursor-default">
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
