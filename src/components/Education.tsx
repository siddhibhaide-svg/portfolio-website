import { Award, GraduationCap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

interface EducationEntry {
  period: string;
  level: string;
  title: string;
  institution?: string;
  detail?: string;
  current?: boolean;
  score: string;
  scoreLabel: string;
  note?: string;
}

const ENTRIES: EducationEntry[] = [
  {
    period: '2025-2029',
    level: 'Undergraduate',
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Bharati Vidyapeeth (Deemed to be University)',
    detail: 'Minor: German',
    current: true,
    score: '9.2',
    scoreLabel: '/ 10 First-year CGPA',
    note: 'CGPA is based on first-year academic performance.',
  },
  {
    period: '2024-25',
    level: 'Class XII',
    title: 'Higher Secondary Certificate',
    score: '69%',
    scoreLabel: 'Percentage',
  },
  {
    period: '2022-23',
    level: 'Class X',
    title: 'Secondary School Certificate',
    score: '82%',
    scoreLabel: 'Percentage',
  },
];

export default function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="The academic path"
          accent="behind my work."
          description="From secondary school to my current undergraduate degree."
        />
      </Reveal>

      <ol className="relative mt-16 border-l-2 border-brand/70 pl-8 sm:pl-12">
        {ENTRIES.map((entry, index) => (
          <li key={entry.title} className="relative pb-10 last:pb-0">
            <span
              className="glow-brand absolute -left-[43px] top-8 h-5 w-5 rounded-full border-4 border-canvas bg-brand sm:-left-[59px]"
              aria-hidden
            />
            <Reveal delay={index * 150}>
              <article className="grid gap-6 rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-brand hover:glow-brand sm:p-8 md:grid-cols-[180px_1fr_auto] md:items-center">
                <div>
                  <p className="font-mono text-sm text-brand">{entry.period}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {entry.level}
                  </p>
                </div>

                <div className="min-w-0">
                  {entry.current && (
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose/60 px-3 py-1 text-xs font-medium text-rose">
                      <GraduationCap className="h-3.5 w-3.5" aria-hidden />
                      Currently Pursuing
                    </span>
                  )}
                  <h3 className="text-xl font-semibold leading-snug text-ink sm:text-2xl">{entry.title}</h3>
                  {entry.institution && <p className="mt-2 text-muted">{entry.institution}</p>}
                  {entry.detail && <p className="mt-1 text-sm text-muted">{entry.detail}</p>}
                </div>

                <div className="md:text-right">
                  <p className="flex items-baseline gap-2 font-mono text-4xl font-bold text-ink md:justify-end sm:text-5xl">
                    {entry.score}
                    {entry.current && <Award className="h-5 w-5 self-center text-brand" aria-hidden />}
                  </p>
                  <p className="mt-2 text-sm text-muted">{entry.scoreLabel}</p>
                  {entry.note && <p className="mt-2 max-w-xs text-xs text-muted md:ml-auto">{entry.note}</p>}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
