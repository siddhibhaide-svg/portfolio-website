interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
