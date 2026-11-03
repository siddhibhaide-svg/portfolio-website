import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

interface SkillGroup {
  number: string;
  title: string;
  description: string;
  items: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    number: '01',
    title: 'Languages',
    description: 'The languages I use to write logic and solve problems.',
    items: ['Python', 'Java', 'C'],
  },
  {
    number: '02',
    title: 'Web',
    description: 'The building blocks of the interfaces I design and ship.',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '03',
    title: 'Tools',
    description: 'The workflow tools I use to build, track, and deploy.',
    items: ['Git', 'GitHub', 'Vercel', 'Bolt.new'],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="border-y border-line bg-surface/40">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="A focused toolkit for"
          accent="building things well."
          description="Languages for the logic, web tech for the interface, and tools for the workflow."
        />
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal key={group.number} delay={index * 120} className="h-full">
            <article className="h-full rounded-2xl border border-line bg-canvas p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:glow-brand">
              <p className="font-mono text-sm text-brand">{group.number}</p>
              <h3 className="mt-3 text-2xl font-bold text-ink">{group.title}</h3>
              <p className="mt-3 text-muted">{group.description}</p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    tabIndex={0}
                    className="cursor-default rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:scale-110 hover:border-rose hover:text-rose hover:glow-rose focus-visible:scale-110 focus-visible:border-rose focus-visible:text-rose focus-visible:outline-none focus-visible:glow-rose"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
