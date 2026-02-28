"use client";

import { Send, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
    openModal: (context: string) => void;
}

export default function Footer({ openModal }: FooterProps) {
    return (
        <footer id="contact" className="relative bg-[#050B14] text-white overflow-hidden pt-32 flex flex-col justify-between min-h-[90vh] border-t border-white/5">
            {/* Mind-blowing ambient ocean glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0077b6] rounded-full blur-[150px] opacity-20 pointer-events-none animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C5A880] rounded-full blur-[200px] opacity-10 pointer-events-none" />

            {/* Top Interactive Area */}
            <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10 w-full flex-grow flex flex-col items-center">
                {/* Minimal CTA */}
                <div className="text-center mb-32 max-w-2xl w-full pt-10">
                    <p className="font-[family-name:var(--font-caveat)] text-[#C5A880] text-4xl mb-6 -rotate-2">Your horizon awaits</p>
                    <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] tracking-wide mb-16 text-white drop-shadow-lg">
                        Join the <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Currents.</span>
                    </h3>

                    {/* Sleek Newsletter Input */}
                    <div className="relative group w-full max-w-md mx-auto">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0077b6] to-[#C5A880] rounded-none blur opacity-0 group-focus-within:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex items-center bg-transparent border-b border-white/20 focus-within:border-[#C5A880] pb-4 transition-all">
                            <input
                                type="email"
                                placeholder="Whisper your email..."
                                className="bg-transparent w-full text-white placeholder-white/30 outline-none font-light tracking-[0.1em] text-sm"
                            />
                            <button
                                onClick={() => openModal('Newsletter Signup')}
                                className="text-white/40 hover:text-[#C5A880] transition-colors ml-4 uppercase text-xs tracking-[0.2em] flex items-center gap-2 group/btn font-bold"
                            >
                                Send <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Micro-Navigation Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-20 z-20">
                    <div className="flex flex-col gap-5 items-center md:items-start">
                        <span className="text-white/80 mb-4 tracking-[0.3em] text-xs">NAVIGATE</span>
                        <a href="#the-chart" className="hover:text-[#C5A880] transition-colors">THE CHART</a>
                        <a href="#our-fleet" className="hover:text-[#C5A880] transition-colors">OUR FLEET</a>
                        <a href="#currents" className="hover:text-[#C5A880] transition-colors">CURRENTS</a>
                    </div>

                    <div className="flex flex-col gap-5 items-center md:items-start">
                        <span className="text-white/80 mb-4 tracking-[0.3em] text-xs">CONNECT</span>
                        <a href="mailto:hello@zenseayacht.com.sg" className="hover:text-[#C5A880] transition-colors flex items-center gap-3 lowercase normal-case text-sm tracking-normal font-light">
                            <Mail className="w-4 h-4" /> hello@zenseayacht.com.sg
                        </a>
                        <a href="tel:+6590622460" className="hover:text-[#C5A880] transition-colors flex items-center gap-3 text-sm tracking-normal font-light">
                            <Phone className="w-4 h-4" /> +65 9062 2460
                        </a>
                    </div>

                    <div className="flex flex-col gap-5 items-center md:items-start md:col-span-2 lg:col-span-1 lg:col-start-4">
                        <span className="text-white/80 mb-4 tracking-[0.3em] text-xs">VISIT</span>
                        <p className="flex items-start gap-4 text-center md:text-left leading-relaxed text-sm tracking-normal font-light lowercase capitalize">
                            <MapPin className="w-5 h-5 shrink-0 text-[#C5A880] mt-1" />
                            <span>One°15 Marina Sentosa Cove<br />11 Cove Drive, Sgp 098497</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Mind-Blowing Huge Typography Container */}
            <div className="w-full relative mt-auto flex flex-col items-center justify-end overflow-hidden z-0 pb-6 sm:pb-0">
                {/* The huge text */}
                <h1 className="text-[25vw] sm:text-[22vw] leading-[0.75] font-black tracking-tighter select-none pointer-events-none whitespace-nowrap opacity-50 md:opacity-100"
                    style={{
                        WebkitTextStroke: '1px rgba(255,255,255,0.05)',
                        color: 'transparent'
                    }}>
                    ZEN SEA
                </h1>

                {/* Floating Socials over the text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 sm:gap-12 z-10 w-full justify-center px-4">
                    <a href="#" className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/10 hover:border-[#C5A880]/50 hover:text-[#C5A880] transition-all duration-500 hover:scale-110">
                        <Instagram className="w-5 h-5 sm:w-8 sm:h-8" />
                    </a>
                    <a href="#" className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/10 hover:border-[#C5A880]/50 hover:text-[#C5A880] transition-all duration-500 hover:scale-110">
                        <Facebook className="w-5 h-5 sm:w-8 sm:h-8" />
                    </a>
                </div>

                {/* Bottom Bar overlaying the text */}
                <div className="absolute bottom-4 sm:bottom-8 flex flex-col md:flex-row justify-between items-center w-full px-8 text-[9px] sm:text-[10px] text-white/30 font-bold tracking-[0.3em] uppercase z-10">
                    <span>© {new Date().getFullYear()} ZEN SEA YACHT CHARTER</span>

                    <div className="flex gap-6 sm:gap-12 mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#C5A880] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] after:transition-all hover:after:w-full">TERMS OF VOYAGE</a>
                        <a href="#" className="hover:text-[#C5A880] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] after:transition-all hover:after:w-full">PRIVACY POLICY</a>
                    </div>

                    <span className="hidden md:block">HANDCRAFTED IN SGP</span>
                </div>
            </div>
        </footer>
    );
}
