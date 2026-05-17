'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealBlockProps {
  children: React.ReactNode;
  className?: string;
  /** Extra delay on top of the base transition (ms) */
  delay?: number;
  /** How far the element travels upward before revealing (px) */
  distance?: number;
  /** IntersectionObserver threshold — 0.08 is fine for tall blocks */
  threshold?: number;
}

/**
 * Wraps any children in a div that slides up + fades in once it enters the
 * viewport. Preserves all child CSS (accent, gradients, pills, etc.) because
 * the animation is on the wrapper, not the text itself.
 */
export function RevealBlock({
  children,
  className = '',
  delay = 0,
  distance = 28,
  threshold = 0.1,
}: RevealBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : `translateY(${distance}px)`,
        transition: `opacity 0.75s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms, transform 0.75s cubic-bezier(0.2,0.8,0.2,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
