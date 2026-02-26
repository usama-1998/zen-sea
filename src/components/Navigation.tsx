"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
    openModal: (context: string) => void;
}

export default function Navigation({ openModal }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle Navbar Background on Scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#FBFBF9]/90 backdrop-blur-md py-4 border-b border-[#C5A880]/20 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <div className="relative group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <div className={`text-3xl font-[family-name:var(--font-caveat)] tracking-wide transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                        Zen Sea.
                    </div>
                    {/* Hand-drawn ocean wave under logo */}
                    <svg className={`absolute -bottom-1 left-0 w-full h-3 transition-opacity duration-500 ${isScrolled ? 'text-[#0077b6] opacity-100' : 'opacity-0'}`} viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path className="path-draw" d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="hidden md:flex items-center space-x-10">
                    {['The Chart', 'Our Fleet', 'Currents'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className={`nav-link text-sm font-[family-name:var(--font-playfair)] italic tracking-wide transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-[#0077b6]' : 'text-white/90 hover:text-[#C5A880]'}`}>
                            {item}
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className={isScrolled ? 'text-[#0077b6]' : 'text-[#C5A880]'}>
                                <path d="M0 10 Q 25 0 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>
                    ))}
                    <button
                        onClick={() => openModal('Navbar Booking')}
                        className={`px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 hand-drawn hover:-rotate-3 ${isScrolled
                                ? 'text-white bg-slate-900 hover:bg-[#0077b6]'
                                : 'text-white border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-slate-900'
                            }`}>
                        Set Sail
                    </button>
                </div>

                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-[#FBFBF9] border-b border-[#C5A880]/20 shadow-xl transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                <div className="flex flex-col px-6 py-6 space-y-4 text-center">
                    {['The Chart', 'Our Fleet', 'Currents'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-[family-name:var(--font-playfair)] italic text-slate-600 py-2">
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={() => { setMobileMenuOpen(false); openModal('Mobile Nav Booking'); }}
                        className="mt-4 px-6 py-4 bg-[#0077b6] text-white text-xs tracking-[0.2em] uppercase hand-drawn-fill mx-auto w-3/4">
                        Set Sail
                    </button>
                </div>
            </div>
        </nav>
    );
}
