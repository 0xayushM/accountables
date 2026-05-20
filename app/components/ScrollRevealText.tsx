'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  /** Not used in animation maths - kept for API compatibility. Optional. */
  containerRef?: React.RefObject<HTMLDivElement | null>;
  /** Colour that sweeps through - defaults to brand accent */
  sweepColor?: string;
  /** Final settled colour - defaults to brand text-primary */
  finalColor?: string;
  /** Colour before the sweep reaches a char - defaults to muted gray */
  initialColor?: string;
}

export default function ScrollRevealText({
  text,
  className = '',
  sweepColor  = '#0a84ff',   // --brand-accent
  finalColor  = '#0a0e1a',   // --text-primary
  initialColor = '#c8c8cc',
}: ScrollRevealTextProps) {
  const [progress, setProgress] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const textRect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Outside viewport - reset
      if (textRect.top > windowHeight * 0.88 || textRect.bottom < windowHeight * 0.12) {
        setProgress(0);
        return;
      }

      // Sweeps from entering at 88% → centre at 45%
      const enterPoint  = windowHeight * 0.88;
      const centerPoint = windowHeight * 0.45;
      const p = Math.max(0, Math.min(1, (enterPoint - textRect.top) / (enterPoint - centerPoint)));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chars     = text.split('');
  const total     = chars.length;
  // sweepPos: progress 0→0.5 sweeps red across all, 0.5→1 turns to final
  const sweepPos  = progress * total * 2;

  return (
    <div ref={textRef} className={className}>
      {chars.map((char, i) => {
        const color =
          i < sweepPos - 8 ? finalColor :
          i < sweepPos     ? sweepColor :
                             initialColor;

        return (
          <span key={i} style={{ color, transition: 'color 0.12s ease-in-out' }}>
            {char}
          </span>
        );
      })}
    </div>
  );
}
