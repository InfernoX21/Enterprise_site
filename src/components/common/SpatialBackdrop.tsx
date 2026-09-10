import React, { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; vx: number; vy: number; radius: number; phase: number };

/** A deliberately sparse, low-cost field that gives every route a shared spatial context. */
export const SpatialBackdrop: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const isCompact = window.matchMedia('(max-width: 640px)').matches;
    const particles: Particle[] = Array.from({ length: isCompact ? 18 : 34 }, (_, index) => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.000055,
      vy: (Math.random() - 0.5) * 0.000055,
      radius: Math.random() > 0.82 ? 1.15 : 0.65,
      phase: index * 0.9,
    }));
    let frame = 0;
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const render = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        particle.x = (particle.x + particle.vx + 1) % 1;
        particle.y = (particle.y + particle.vy + 1) % 1;
        const alpha = 0.12 + Math.sin(frame * 0.012 + particle.phase) * 0.055;
        const x = particle.x * width;
        const y = particle.y * height;
        context.beginPath();
        context.arc(x, y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(235, 239, 245, ${alpha})`;
        context.fill();
        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const ox = other.x * width;
          const oy = other.y * height;
          const distance = Math.hypot(x - ox, y - oy);
          if (distance < 105) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(ox, oy);
            context.strokeStyle = `rgba(210, 220, 232, ${0.025 * (1 - distance / 105)})`;
            context.lineWidth = 0.5;
            context.stroke();
          }
        }
      });
      animationFrame = requestAnimationFrame(render);
    };
    resize();
    animationFrame = requestAnimationFrame(render);
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animationFrame); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="spatial-particle-field" aria-hidden="true" />;
};
