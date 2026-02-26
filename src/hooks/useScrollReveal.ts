import { useEffect } from 'react';

// Protected for Next.js SSR by running only inside useEffect
export const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = { root: null, rootMargin: '-50px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100', 'rotate-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95', 'rotate-2', '-rotate-2');

                    // Trigger SVG draw animations
                    const paths = entry.target.querySelectorAll('.path-draw') as NodeListOf<HTMLElement>;
                    paths.forEach(p => {
                        // @ts-ignore
                        p.style.animation = 'draw 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards';
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
};
