import { Brain, Globe, Zap, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface Highlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

const HIGHLIGHTS: Highlight[] = [
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
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="01 / About"
            title="Curious by nature, methodical in practice"
            description="I am a computer science student who enjoys turning complex problems into simple, elegant solutions."
          />
          <div className="mt-6 space-y-5 leading-relaxed text-muted">
            <p>
              I am a second-year B.Tech student in Computer Science and Engineering (AI &amp; ML) at
              Bharati Vidyapeeth (Deemed to be University), building a strong foundation in data
              structures, object-oriented programming, and machine learning.
            </p>
            <p>
              What drives me is the web. I care about the details that make a website feel right:
              clear structure, smooth interactions, and code that the next person can understand.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {HIGHLIGHTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="group flex gap-5 rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:glow-brand">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/40 text-brand transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
