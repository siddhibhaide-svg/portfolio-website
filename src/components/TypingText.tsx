import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
}

export default function TypingText({ text, speed = 55 }: TypingTextProps) {
  const [count, setCount] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? text.length
      : 0,
  );

  useEffect(() => {
    if (count >= text.length) return;
    const timer = window.setTimeout(() => setCount((current) => current + 1), speed);
    return () => window.clearTimeout(timer);
  }, [count, text, speed]);

  return (
    <span aria-label={text} className="text-glow">
      <span aria-hidden>{text.slice(0, count)}</span>
      <span className="typing-caret" aria-hidden />
    </span>
  );
}
