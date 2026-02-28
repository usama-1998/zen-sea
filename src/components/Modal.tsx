"use client";

import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    context: string;
    closeModal: () => void;
}

export default function Modal({ isOpen, context, closeModal }: ModalProps) {
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => setIsRendered(true), 10);
        } else {
            document.body.style.overflow = 'unset';
            setIsRendered(false);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isRendered ? 'bg-[#050B14]/80 backdrop-blur-md opacity-100' : 'bg-transparent backdrop-blur-none opacity-0'}`}>
            {/* Modal Background click to close */}
            <div className="absolute inset-0" onClick={closeModal}></div>

            <div className={`relative w-full max-w-5xl bg-slate-900 border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row overflow-hidden transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${isRendered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>

                {/* Left side: Premium Image */}
                <div className="w-full md:w-5/12 h-48 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 md:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900 z-10 hidden md:block" />
                    <img
                        src="/images/yacht-modal.png"
                        alt="Luxury Yacht Details"
                        className="w-full h-full object-cover"
                    />

                    {/* Floating gold flair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#C5A880]/30 rounded-full flex items-center justify-center z-20 mix-blend-overlay hidden md:flex">
                        <div className="w-24 h-24 border border-[#C5A880]/50 rounded-full" />
                    </div>
                </div>

                {/* Right side: Sleek Form */}
                <div className="w-full md:w-7/12 p-8 md:p-14 relative bg-slate-900 flex flex-col justify-center">

                    {/* Ambient glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white hover:bg-white/10 transition-all p-3 rounded-full group z-20"
                    >
                        <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                    </button>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-8 bg-[#C5A880]" />
                            <span className="text-[#C5A880] text-[10px] tracking-[0.3em] uppercase font-bold">Inquiring about: {context}</span>
                        </div>

                        <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white mb-4 leading-tight">
                            Curate Your<br /><span className="italic font-light text-white/50">Escape.</span>
                        </h3>

                        <p className="font-light text-white/50 text-sm md:text-base mb-10 max-w-md">
                            Share your vision. Our concierge will privately arrange the finer details of your maritime journey.
                        </p>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group relative">
                                    <input type="text" id="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#C5A880] focus:bg-white/10 text-white transition-all peer placeholder-transparent text-sm" placeholder="Name" />
                                    <label htmlFor="name" className="absolute left-4 top-4 text-xs tracking-widest text-[#C5A880] uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/40 -top-2 text-[10px] bg-slate-900 px-1 pointer-events-none">Your Name</label>
                                </div>
                                <div className="group relative">
                                    <input type="email" id="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#C5A880] focus:bg-white/10 text-white transition-all peer placeholder-transparent text-sm" placeholder="Email" />
                                    <label htmlFor="email" className="absolute left-4 top-4 text-xs tracking-widest text-[#C5A880] uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/40 -top-2 text-[10px] bg-slate-900 px-1 pointer-events-none">Your Email</label>
                                </div>
                            </div>

                            <div className="group relative">
                                <textarea id="message" required rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#C5A880] focus:bg-white/10 text-white transition-all resize-none peer placeholder-transparent text-sm" placeholder="Message"></textarea>
                                <label htmlFor="message" className="absolute left-4 top-4 text-xs tracking-widest text-[#C5A880] uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/40 -top-2 text-[10px] bg-slate-900 px-1 pointer-events-none">Envisioned Voyage</label>
                            </div>

                            <button type="submit" className="group relative w-full overflow-hidden bg-white mt-4 flex items-center justify-center p-5 cursor-pointer rounded-full">
                                <div className="absolute inset-0 bg-[#C5A880] w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 rounded-full" />
                                <span className="relative z-10 text-slate-900 group-hover:text-white text-[10px] tracking-[0.3em] uppercase font-bold flex items-center transition-colors duration-500">
                                    Submit Inquiry
                                    <Send className="w-3 h-3 ml-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
