"use client";

interface CTAProps {
    openModal: (context: string) => void;
}

export default function CTASection({ openModal }: CTAProps) {
    return (
        <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden z-10">
            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-fixed mix-blend-overlay filter grayscale" />

            <div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal-on-scroll opacity-0 translate-y-12 scale-95">
                <div className="inline-block mb-8 border-2 border-[#C5A880] px-6 py-2 hand-drawn-alt bg-slate-900/50 backdrop-blur-md">
                    <span className="text-[#C5A880] text-[10px] lg:text-xs tracking-[0.3em] uppercase font-bold">Your Horizon Awaits</span>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] text-white mb-6 lg:mb-8 relative inline-block drop-shadow-xl">
                    Set Your <br /> Spirit Free.
                    <span className="absolute bottom-4 left-1/4 w-1/2 h-8 bg-gradient-to-r from-[#0077b6]/0 via-[#0077b6]/80 to-[#C5A880]/60 opacity-60 mix-blend-screen rounded-full -rotate-2 -z-10 filter blur-[3px]" />
                </h2>
                <p className="font-[family-name:var(--font-caveat)] text-3xl md:text-4xl lg:text-5xl text-white/90 mb-12 lg:mb-16 rotate-2 drop-shadow-md">
                    Let's build something beautiful...
                </p>
                <button
                    onClick={() => openModal('Footer CTA')}
                    className="px-12 py-5 lg:px-16 lg:py-6 bg-white text-slate-900 text-xs lg:text-sm tracking-[0.2em] uppercase font-bold hand-drawn-fill hover:bg-[#0077b6] hover:text-white transition-all duration-500 transform hover:scale-110 shadow-[0_0_40px_rgba(0,119,182,0.5)] relative group"
                >
                    Begin Your Voyage
                    <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-8 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path className="path-draw" d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
