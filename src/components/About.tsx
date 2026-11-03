import { Brain, Globe, Zap, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';

interface Trait {
  icon: LucideIcon;
  title: string;
  text: string;
}

const TRAITS: Trait[] = [
  {
    icon: Brain,
    title: 'Problem solver',
    text: 'I break big problems into small, testable steps and keep refining until the solution is clean.',
  },
  {
    icon: Zap,
    title: 'Quick learner',
    text: 'New language, framework, or tool? I read the docs, build something small, and get productive fast.',
  },
  {
    icon: Globe,
    title: 'Web enthusiast',
    text: 'I love how the web connects people. Fast, accessible, and beautiful interfaces are what I enjoy building most.',
  },
];

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About Me"
          title="Curious by nature,"
          accent="methodical in practice."
          description="I turn complex problems into simple, elegant solutions, and I keep learning along the way."
        />
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {TRAITS.map((trait, index) => (
          <Reveal key={trait.title} delay={index * 120} className="h-full">
            <article className="group h-full rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:glow-brand">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand/40 text-brand transition-transform duration-300 group-hover:scale-110">
                <trait.icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{trait.title}</h3>
              <p className="mt-3 text-muted">{trait.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
