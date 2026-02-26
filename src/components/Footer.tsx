"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";

interface FooterProps {
    openModal: (context: string) => void;
}

export default function Footer({ openModal }: FooterProps) {
    return (
        <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t-4 border-[#0077b6] relative overflow-hidden z-10">
            <svg className="absolute bottom-0 right-0 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] text-[#0077b6] opacity-[0.08] pointer-events-none translate-x-1/4 translate-y-1/4 rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.69l5.66 4.2c.86.63 1.34 1.63 1.34 2.7v9.42c0 1.65-1.35 3-3 3H8c-1.65 0-3-1.35-3-3v-9.42c0-1.07.48-2.07 1.34-2.7L12 2.69zm0 2.51L7.54 8.52A1.5 1.5 0 0 0 7 9.59v9.42c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.59c0-.46-.22-.9-.6-1.18L12 5.2z" />
            </svg>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 lg:mb-20">
                    <div>
                        <div className="text-3xl lg:text-4xl font-[family-name:var(--font-caveat)] text-white mb-6 -rotate-2">Zen Sea.</div>
                        <p className="text-slate-400 font-light text-sm leading-relaxed mb-6 pr-4">
                            Curating visceral, handcrafted escapes along the magnificent coastlines of Singapore.
                        </p>
                        <div className="font-[family-name:var(--font-caveat)] text-2xl lg:text-3xl text-[#C5A880] -rotate-3 mt-8">Yours truly...</div>
                    </div>

                    <div>
                        <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6 font-bold">The Chapters</h4>
                        <ul className="space-y-4">
                            {['The Chart', 'Our Fleet', 'Currents', 'Captain\'s Log'].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="nav-link inline-block text-slate-400 hover:text-[#C5A880] text-sm transition-colors font-light">
                                        {link}
                                        <svg viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6 font-bold">The Concierge</h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-light">
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 group-hover:animate-bounce" />
                                <span className="hand-drawn px-2 py-1 border-slate-700 group-hover:border-[#C5A880] transition-colors">One°15 Marina Sentosa Cove,<br />11 Cove Drive, SGP 098497</span>
                            </li>
                            <li className="flex items-center gap-3 group mt-2">
                                <Phone className="w-5 h-5 text-[#C5A880] shrink-0 group-hover:rotate-12 transition-transform" />
                                <span className="hand-drawn px-2 py-1 border-slate-700 group-hover:border-[#C5A880] transition-colors">+65 9062 2460</span>
                            </li>
                            <li className="flex items-center gap-3 group mt-2">
                                <Mail className="w-5 h-5 text-[#C5A880] shrink-0 group-hover:-rotate-12 transition-transform" />
                                <span className="hand-drawn px-2 py-1 border-slate-700 group-hover:border-[#C5A880] transition-colors">hello@zenseayacht.com.sg</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6 font-bold">Message in a Bottle</h4>
                        <p className="text-slate-400 font-light text-sm mb-6">Join our inner circle for whispered secrets and hidden coves.</p>
                        <div className="flex border-b-2 border-[#0077b6] pb-2 group focus-within:border-[#C5A880] transition-colors relative">
                            <input
                                type="email"
                                placeholder="Where to send the albatross..."
                                className="bg-transparent text-white text-sm w-full focus:outline-none placeholder:text-slate-500 font-light pl-2 font-[family-name:var(--font-playfair)] italic"
                            />
                            <button
                                onClick={() => openModal('Newsletter Signup')}
                                className="text-[#C5A880] group-hover:text-white transition-colors pr-2 hover:scale-110"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
                    <p>Copyright © 2026 Zen Sea Yacht Charter. Handcrafted in SGP.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors underline decoration-[0.5px] underline-offset-4">Terms</a>
                        <a href="#" className="hover:text-white transition-colors underline decoration-[0.5px] underline-offset-4">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
