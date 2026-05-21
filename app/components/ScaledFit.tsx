'use client';

import { useEffect, useRef, useState } from 'react';

interface ScaledFitProps {
  children: React.ReactNode;
  /** Natural (unscaled) width of the inner content in px */
  naturalWidth: number;
  /** Natural (unscaled) height of the inner content in px */
  naturalHeight: number;
  /** Don't scale up beyond 1 (true) or allow stretching to fit (false) */
  capAtOne?: boolean;
  className?: string;
}

/**
 * Renders children at a fixed natural size, then proportionally scales them
 * down (using transform: scale) so the whole layout fits the available width.
 * Use for content that should keep its intrinsic proportions on every screen
 * — e.g. a dashboard mockup that would otherwise break or overflow on mobile.
 */
export function ScaledFit({
  children,
  naturalWidth,
  naturalHeight,
  capAtOne = true,
  className = '',
}: ScaledFitProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const update = () => {
      const w = el.offsetWidth;
      if (!w) return;
      const raw = w / naturalWidth;
      setScale(capAtOne ? Math.min(1, raw) : raw);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [naturalWidth, capAtOne]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ width: '100%', height: naturalHeight * scale }}
    >
      <div
        style={{
          width: naturalWidth,
          height: naturalHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}
