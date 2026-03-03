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
        <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#050B14]/80 backdrop-blur-md py-4 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <div className="relative group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <img
                        src="/zen-sea-logo.webp"
                        alt="Zen Sea Yacht Logo"
                        className="h-16 md:h-20 w-auto brightness-0 invert opacity-90 transition-opacity duration-500 group-hover:opacity-100 object-contain"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-12">
                    {['The Chart', 'Our Fleet', 'Currents'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/70 hover:text-[#C5A880] transition-colors duration-300 relative group">
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <button
                        onClick={() => openModal('Navbar Booking')}
                        className={`group cursor-pointer relative overflow-hidden flex items-center justify-center px-8 py-3 bg-white/5 border border-white/20 hover:border-[#C5A880]/50 rounded-full transition-colors ${!isScrolled && 'backdrop-blur-sm'}`}>
                        <div className="absolute inset-0 bg-[#C5A880] w-0 group-hover:w-full transition-all duration-500 ease-out z-0 rounded-full" />
                        <span className="relative z-10 text-[10px] tracking-[0.2em] uppercase font-bold text-white transition-colors">
                            Set Sail
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white/80 hover:text-white transition-colors p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-[#050B14]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                <div className="flex flex-col px-6 py-8 space-y-6 text-center">
                    {['The Chart', 'Our Fleet', 'Currents'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-[family-name:var(--font-playfair)] italic text-white/70 hover:text-white py-2 border-b border-white/5 mx-6">
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={() => { setMobileMenuOpen(false); openModal('Mobile Nav Booking'); }}
                        className="mt-6 px-6 py-4 cursor-pointer bg-white/5 border border-[#C5A880]/50 text-white text-[10px] tracking-[0.3em] uppercase font-bold mx-auto w-3/4 hover:bg-[#C5A880] transition-colors rounded-full">
                        Set Sail
                    </button>
                </div>
            </div>
        </nav>
    );
}
