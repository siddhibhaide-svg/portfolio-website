import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">{children}</div>
    </section>
  );
}
