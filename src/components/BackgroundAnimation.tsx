"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetMousePos = useRef({ x: -1000, y: -1000 });
    const currentMousePos = useRef({ x: -1000, y: -1000 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let width = window.innerWidth;
        let height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
            canvas.width = width;
            canvas.height = height;
            init(); // Reinitialize particles on resize to ensure even spread
        };
        window.addEventListener("resize", handleResize);

        const handleMouseMove = (e: MouseEvent) => {
            // Adjust mouse Y to account for page scroll
            targetMousePos.current = { x: e.clientX, y: e.clientY + window.scrollY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        // -- Optimization: Pre-render particles to offscreen canvases --
        // This avoids expensive ctx.arc, ctx.fill, and ctx.shadowBlur calls in the loop
        const createParticleGraphic = (size: number, blur: number, color: string) => {
            const oc = document.createElement("canvas");
            const dim = size * 2 + blur * 2;
            oc.width = dim;
            oc.height = dim;
            const octx = oc.getContext("2d");
            if (octx) {
                octx.shadowBlur = blur;
                octx.shadowColor = color;
                octx.fillStyle = color;
                octx.beginPath();
                octx.arc(dim / 2, dim / 2, size, 0, Math.PI * 2);
                octx.fill();
            }
            return { canvas: oc, offset: dim / 2 };
        };

        const largeGraphic = createParticleGraphic(2.5, 12, "#C5A880");
        const smallGraphic = createParticleGraphic(0.8, 0, "#C5A880");

        class Particle {
            x: number;
            y: number;
            isLarge: boolean;
            baseOpacity: number;
            opacity: number;
            speedX: number;
            speedY: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.isLarge = Math.random() < 0.1;
                this.baseOpacity = Math.random() * 0.4 + 0.1;
                this.opacity = this.baseOpacity;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3 - 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < -20) this.x = width + 20;
                if (this.x > width + 20) this.x = -20;
                if (this.y < -20) this.y = height + 20;
                if (this.y > height + 20) this.y = -20;

                const dx = targetMousePos.current.x - this.x;
                const dy = targetMousePos.current.y - this.y;

                // Fast distance check without sqrt if too far to save CPU
                if (Math.abs(dx) < 300 && Math.abs(dy) < 300) {
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 300;
                    if (distance < maxDistance && targetMousePos.current.x !== -1000) {
                        const force = (maxDistance - distance) / maxDistance;
                        const directionX = dx / distance;
                        const directionY = dy / distance;

                        // Repel with fluid-like smooth motion
                        this.x -= directionX * force * 1.5;
                        this.y -= directionY * force * 1.5;

                        this.opacity = Math.min(this.baseOpacity + 0.5 * force, 0.9);
                    } else {
                        if (this.opacity > this.baseOpacity) this.opacity -= 0.01;
                    }
                } else {
                    if (this.opacity > this.baseOpacity) this.opacity -= 0.01;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.globalAlpha = this.opacity;
                if (this.isLarge) {
                    ctx.drawImage(largeGraphic.canvas, this.x - largeGraphic.offset, this.y - largeGraphic.offset);
                } else {
                    ctx.drawImage(smallGraphic.canvas, this.x - smallGraphic.offset, this.y - smallGraphic.offset);
                }
            }
        }

        let particles: Particle[] = [];
        const init = () => {
            particles = [];
            // Cap to ensure high performance
            let count = Math.floor((width * height) / 15000);
            if (count > 350) count = 350;
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(width, height));
            }
        };

        let animationFrameId: number;

        const animate = () => {
            // Clear with transparent fade for motion blur without obscuring background
            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "source-over"; // switch back to normal

            // Lerp mouse pos for smooth light tracking
            currentMousePos.current.x += (targetMousePos.current.x - currentMousePos.current.x) * 0.05;
            currentMousePos.current.y += (targetMousePos.current.y - currentMousePos.current.y) * 0.05;

            const cx = currentMousePos.current.x;
            const cy = currentMousePos.current.y;

            // Draw interactive glowing spotlight only if on screen
            if (cx !== -1000 && cy !== -1000) {
                // Determine if spotlight intersects with current screen viewport
                const viewportTop = window.scrollY;
                const viewportBottom = window.scrollY + window.innerHeight;
                if (cy + 600 > viewportTop && cy - 600 < viewportBottom) {
                    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 600);
                    grad.addColorStop(0, "rgba(197, 168, 128, 0.06)");
                    grad.addColorStop(0.3, "rgba(56, 189, 248, 0.02)");
                    grad.addColorStop(1, "rgba(5, 11, 20, 0)");

                    ctx.save();
                    ctx.globalCompositeOperation = "screen"; // Overlay light beautifully
                    ctx.fillStyle = grad;
                    // Only fill rect that covers the spotlight to save fill rate
                    ctx.fillRect(cx - 600, cy - 600, 1200, 1200);
                    ctx.restore();
                }
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw(ctx);
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full z-0 pointer-events-none"
            style={{
                height: '100%',
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 2s ease-in-out"
            }}
        />
    );
}
