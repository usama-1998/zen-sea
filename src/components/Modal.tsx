"use client";

import { X, Send } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    context: string;
    closeModal: () => void;
}

export default function Modal({ isOpen, context, closeModal }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-slate-900/80 transition-opacity">
            {/* Modal Background click to close */}
            <div className="absolute inset-0" onClick={closeModal}></div>

            <div className="relative bg-[#FBFBF9] max-w-lg w-full p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] hand-drawn transform rotate-1 animate-[scale-in_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)] border-2 border-[#0077b6]">

                {/* Sail Tape on Modal */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-8 md:h-10 sail-tape opacity-90 z-20 rotate-2 shadow-md"></div>

                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-[#0077b6] transition-colors p-2 hover:rotate-90 duration-300 bg-white rounded-full shadow-sm hand-drawn border border-[#0077b6]/30"
                >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <div className="text-center mt-2 md:mt-4">
                    <h3 className="font-[family-name:var(--font-caveat)] text-5xl md:text-6xl text-[#C5A880] mb-2 transform -rotate-4 drop-shadow-sm">Ahoy!</h3>
                    <h4 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-slate-900 mb-4 md:mb-6 font-bold">Let's script your escape.</h4>
                    <p className="font-light text-slate-600 mb-6 md:mb-8 text-xs md:text-sm px-2 md:px-4">
                        Inquiring about: <span className="italic text-[#0077b6] font-bold bg-[#0077b6]/10 px-2 py-1 rounded">"{context}"</span>.<br /><br />
                        Drop your details below. Our captain's concierge will personally reach out to weave your perfect maritime story.
                    </p>

                    <form className="space-y-4 md:space-y-6 text-left" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                        <div className="relative group">
                            <label className="font-[family-name:var(--font-caveat)] text-lg md:text-xl text-slate-500 block mb-1">Your Good Name</label>
                            <input type="text" required className="w-full bg-white border-2 border-slate-200 p-2 md:p-3 focus:outline-none focus:border-[#0077b6] font-[family-name:var(--font-playfair)] text-slate-800 transition-colors hand-drawn-alt text-sm md:text-base" />
                        </div>
                        <div className="relative group">
                            <label className="font-[family-name:var(--font-caveat)] text-lg md:text-xl text-slate-500 block mb-1">Where to send the albatross (Email)</label>
                            <input type="email" required className="w-full bg-white border-2 border-slate-200 p-2 md:p-3 focus:outline-none focus:border-[#0077b6] font-[family-name:var(--font-inter)] font-light text-slate-800 transition-colors hand-drawn text-sm md:text-base" />
                        </div>
                        <div className="relative group">
                            <label className="font-[family-name:var(--font-caveat)] text-lg md:text-xl text-slate-500 block mb-1">Whisper your dream voyage...</label>
                            <textarea required rows={3} className="w-full bg-white border-2 border-slate-200 p-2 md:p-3 focus:outline-none focus:border-[#0077b6] font-[family-name:var(--font-playfair)] text-slate-800 transition-colors resize-none hand-drawn-alt text-sm md:text-base"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-slate-900 text-white py-4 md:py-5 tracking-[0.2em] text-[10px] md:text-xs uppercase font-bold hand-drawn-fill hover:bg-[#0077b6] transition-all duration-300 mt-4 md:mt-6 group shadow-xl hover:-translate-y-1">
                            Send Message <Send className="inline-block w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
