'use client';

import { useState, useEffect } from 'react';

interface AnimatedLetterProps {
  children: string;
  delay?: number;
  inView?: boolean;
  /** Flash colour during the sweep - defaults to brand accent */
  sweepColor?: string;
  /** Final settled colour - defaults to brand text-primary */
  finalColor?: string;
}

export default function AnimatedLetter({
  children,
  delay = 0,
  inView = false,
  sweepColor = '#0a84ff',   // --brand-accent
  finalColor = '#0a0e1a',   // --text-primary
}: AnimatedLetterProps) {
  const [phase, setPhase] = useState<'initial' | 'sweep' | 'final'>('initial');

  useEffect(() => {
    if (!inView) {
      setPhase('initial');
      return;
    }
    const t1 = setTimeout(() => setPhase('sweep'), delay);
    const t2 = setTimeout(() => setPhase('final'), delay + 360);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [delay, inView]);

  const color =
    phase === 'initial' ? '#c8c8cc' :
    phase === 'sweep'   ? sweepColor :
                          finalColor;

  return (
    <span
      className="inline-block"
      style={{ color, transition: 'color 0.28s ease-in-out' }}
    >
      {children}
    </span>
  );
}
