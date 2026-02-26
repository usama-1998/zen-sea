import { Heart, Shield, Compass, Anchor } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        { icon: <Heart className="w-6 h-6" />, title: 'Curated with Love', desc: 'Hand-stitched itineraries crafted by locals who know the ocean\'s every secret.' },
        { icon: <Shield className="w-6 h-6" />, title: 'Fiercely Guarded', desc: 'We only welcome vessels that possess undeniable character and flawless safety.' },
        { icon: <Compass className="w-6 h-6" />, title: 'Beyond the Map', desc: 'We don\'t do off-the-shelf. Every voyage is a blank canvas painted for you.' },
        { icon: <Anchor className="w-6 h-6" />, title: 'Crystal Clear', desc: 'Honest conversations, transparent pricing. Just you and the open sea.' }
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden bg-white border-y border-[#C5A880]/20 z-10">
            {/* Giant background compass drawing */}
            <svg className="absolute left-[-10%] top-[-10%] w-[120%] h-[120%] text-slate-100 opacity-60 pointer-events-none -z-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <circle className="path-draw" cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 20" />
                <path className="path-draw" d="M100 500 L900 500 M500 100 L500 900" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 lg:mb-20 reveal-on-scroll opacity-0 translate-y-12">
                    <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-slate-900 mb-4 relative inline-block watercolor-swipe">
                        The Zen Sea Vibe
                        <div className="absolute -top-6 -right-8 lg:-top-8 lg:-right-12 w-8 h-8 lg:w-10 lg:h-10 text-[#C5A880] animate-pulse">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" /></svg>
                        </div>
                    </h2>
                    <p className="font-[family-name:var(--font-caveat)] text-3xl lg:text-4xl text-slate-500 -rotate-2 mt-2 lg:mt-4">Guided by the stars, crafted with care.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
                    {features.map((feature, idx) => (
                        <div key={idx} className="reveal-on-scroll opacity-0 translate-y-12 bg-[#FBFBF9] p-8 hand-drawn shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative border border-[#0077b6]/10" style={{ transitionDelay: `${idx * 100}ms` }}>

                            {/* Sail tape on top of cards */}
                            <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 sail-tape opacity-80 z-20 ${idx % 2 === 0 ? 'rotate-2' : '-rotate-3'}`}></div>

                            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto border-[2px] border-[#0077b6] text-[#0077b6] flex items-center justify-center mb-6 hand-drawn-alt transform -rotate-6 group-hover:rotate-[15deg] group-hover:bg-[#C5A880] group-hover:text-white group-hover:border-[#C5A880] transition-all duration-500 bg-white shadow-sm">
                                {feature.icon}
                            </div>
                            <h4 className="text-lg lg:text-xl font-[family-name:var(--font-playfair)] text-slate-900 mb-3 lg:mb-4 font-bold">{feature.title}</h4>
                            <p className="text-slate-600 font-light text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
