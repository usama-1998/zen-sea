import { Heart, Shield, Compass, Anchor } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        { icon: <Heart className="w-5 h-5 lg:w-6 lg:h-6" />, title: 'Curated with Love', desc: 'Hand-stitched itineraries crafted by locals who know the ocean\'s every secret.' },
        { icon: <Shield className="w-5 h-5 lg:w-6 lg:h-6" />, title: 'Fiercely Guarded', desc: 'We only welcome vessels that possess undeniable character and flawless safety.' },
        { icon: <Compass className="w-5 h-5 lg:w-6 lg:h-6" />, title: 'Beyond the Map', desc: 'We don\'t do off-the-shelf. Every voyage is a blank canvas painted for you.' },
        { icon: <Anchor className="w-5 h-5 lg:w-6 lg:h-6" />, title: 'Crystal Clear', desc: 'Honest conversations, transparent pricing. Just you and the open sea.' }
    ];

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-950 border-y border-white/5 z-10">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A880]/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Giant background compass drawing */}
            <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-5">
                <Compass className="w-[800px] h-[800px] text-white animate-[spin_200s_linear_infinite]" strokeWidth={0.2} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C5A880]" />
                        <span className="text-[#C5A880] text-[10px] tracking-[0.3em] uppercase font-bold">The Standard</span>
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C5A880]" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white mb-6 relative inline-block">
                        The Zen Sea <span className="italic font-light text-white/50">Vibe.</span>
                    </h2>
                    <p className="font-light text-white/50 text-lg lg:text-xl max-w-xl mx-auto">
                        Guided by the stars, crafted with uncompromising care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center relative">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white/[0.02] backdrop-blur-md p-8 lg:p-10 border border-white/10 hover:border-[#C5A880]/30 hover:bg-white/[0.04] transition-all duration-700 group relative cursor-default">

                            {/* Hover Gradient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#C5A880]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto border border-white/10 text-white/50 flex items-center justify-center mb-8 rounded-full group-hover:scale-110 group-hover:text-[#C5A880] group-hover:border-[#C5A880]/50 transition-all duration-700 bg-slate-900 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(197,168,128,0.2)] relative z-10">
                                {feature.icon}
                            </div>

                            <h4 className="text-lg lg:text-xl font-[family-name:var(--font-playfair)] text-white mb-4 relative z-10">{feature.title}</h4>
                            <p className="text-white/40 font-light text-sm leading-relaxed relative z-10 group-hover:text-white/60 transition-colors duration-500">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
