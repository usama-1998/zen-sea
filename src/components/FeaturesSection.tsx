import { Heart, Shield, Compass, Anchor } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        { icon: <Heart className="w-5 h-5 lg:w-6 lg:h-6" />, title: 'Curated with Love', desc: 'Hand-stitched itineraries crafted by locals who know the ocean\'s every secret.' },
        { icon: <Shield className="w-5 h-5 lg:w-6 lg:h-6" />, title: 'Fiercely Guarded', desc: 'We only welcome vessels that possess undeniable character and flawless safety.' },
        { icon: <Compass className="w-5 h-5 lg:w-6 lg:h-6" />, title: 'Beyond the Map', desc: 'We don\'t do off-the-shelf. Every voyage is a blank canvas painted for you.' },
        { icon: <Anchor className="w-5 h-5 lg:w-6 lg:h-6" />, title: 'Crystal Clear', desc: 'Honest conversations, transparent pricing. Just you and the open sea.' }
    ];

    // Duplicate for seamless infinite loop
    const marqueeItems = [...features, ...features];

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-[#050B14] z-10">
            {/* Ambient Orbs */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(197,168,128,0.25) 0%, transparent 70%)",
                    top: "30%",
                    left: "40%",
                    filter: "blur(120px)",
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)",
                    top: "10%",
                    right: "10%",
                    filter: "blur(100px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C5A880]" />
                        <span className="text-[#C5A880] text-[10px] tracking-[0.35em] uppercase font-bold">The Standard</span>
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C5A880]" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white mb-6 relative inline-block">
                        The Zen Sea <span className="italic font-light text-white/50">Vibe.</span>
                    </h2>
                    <p className="font-light text-white/50 text-lg lg:text-xl max-w-xl mx-auto">
                        Guided by the stars, crafted with uncompromising care.
                    </p>
                </div>
            </div>

            {/* Infinite Horizontal Scroll Marquee */}
            <div className="relative w-full overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050B14] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050B14] to-transparent z-10 pointer-events-none" />

                <div
                    className="flex gap-6 w-max"
                    style={{
                        animation: "marqueeScroll 30s linear infinite",
                    }}
                >
                    {marqueeItems.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white/[0.03] backdrop-blur-sm p-8 lg:p-10 border border-white/10 rounded-2xl hover:border-[#C5A880]/20 hover:bg-white/[0.06] transition-all duration-700 group relative cursor-default shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-[300px] lg:w-[340px] shrink-0"
                        >
                            {/* Hover Gradient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#C5A880]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

                            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto border border-white/10 text-white/50 flex items-center justify-center mb-8 rounded-full group-hover:scale-110 group-hover:text-[#C5A880] group-hover:border-[#C5A880]/30 transition-all duration-700 bg-white/[0.03] shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_30px_rgba(197,168,128,0.15)] relative z-10">
                                {feature.icon}
                            </div>

                            <h4 className="text-lg lg:text-xl font-[family-name:var(--font-playfair)] text-white mb-4 relative z-10 text-center">{feature.title}</h4>
                            <p className="text-white/40 font-light text-sm leading-relaxed relative z-10 group-hover:text-white/60 transition-colors duration-500 text-center">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
