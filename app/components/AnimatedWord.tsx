'use client';

import AnimatedLetter from './AnimatedLetter';

interface AnimatedWordProps {
  children: string;
  /** Base delay before the word starts animating (ms) */
  delay?: number;
  inView?: boolean;
  sweepColor?: string;
  finalColor?: string;
}

export default function AnimatedWord({
  children,
  delay = 0,
  inView = false,
  sweepColor,
  finalColor,
}: AnimatedWordProps) {
  return (
    <span className="inline-block">
      {children.split('').map((letter, i) => (
        <AnimatedLetter
          key={i}
          delay={delay + i * 50}
          inView={inView}
          sweepColor={sweepColor}
          finalColor={finalColor}
        >
          {letter}
        </AnimatedLetter>
      ))}
    </span>
  );
}
