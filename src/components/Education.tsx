import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const COURSEWORK = [
  'Data Structures',
  'AI/ML Fundamentals',
  'Object-Oriented Programming',
  'Database Management Systems',
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="03 / Education"
            title="Building my academic foundation"
            description="My degree path and the core coursework shaping how I think about software and intelligent systems."
          />
        </Reveal>

        <ol className="relative mt-16 max-w-3xl border-l-2 border-brand/70 pl-8 sm:pl-12">
          <li className="relative">
            <span
              className="glow-brand absolute -left-[43px] top-1 h-5 w-5 rounded-full border-4 border-canvas bg-brand sm:-left-[59px]"
              aria-hidden
            />
            <Reveal>
              <p className="font-mono text-sm text-brand">Present</p>
              <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">
                B.Tech in Computer Science and Engineering (AI &amp; ML)
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">
                Bharati Vidyapeeth (Deemed to be University) &middot; Second Year Student
              </p>

              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">Relevant coursework</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {COURSEWORK.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink transition-all duration-300 hover:border-brand hover:text-brand hover:glow-brand"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
