interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">{eyebrow}</p>
      <h2 className="mt-4 text-[2.75rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[3.5rem]">
        {title}
        <br />
        <span className="text-gradient">{accent}</span>
      </h2>
      {description && <p className="mt-5 text-muted">{description}</p>}
    </div>
  );
}
