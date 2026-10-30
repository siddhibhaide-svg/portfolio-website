import { Braces, Coffee, Cpu, FileCode, Palette, Terminal, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

interface Skill {
  name: string;
  icon: LucideIcon;
}

const SKILLS: Skill[] = [
  { name: 'Python', icon: Terminal },
  { name: 'Java', icon: Coffee },
  { name: 'C', icon: Cpu },
  { name: 'HTML5', icon: FileCode },
  { name: 'CSS3', icon: Palette },
  { name: 'JavaScript', icon: Braces },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Skills"
            title="The languages and tools I build with"
            description="From the logic of Python, Java, and C to the structure and style of the modern web."
          />
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-4">
          {SKILLS.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 80}>
              <div
                tabIndex={0}
                className="group inline-flex cursor-default items-center gap-3 rounded-full border border-line bg-canvas px-6 py-3.5 transition-all duration-300 hover:scale-110 hover:border-rose hover:glow-rose focus-visible:scale-110 focus-visible:border-rose focus-visible:glow-rose focus-visible:outline-none"
              >
                <skill.icon
                  className="h-5 w-5 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:text-rose group-focus-visible:text-rose"
                  aria-hidden
                />
                <span className="text-sm font-medium text-ink transition-colors group-hover:text-rose group-focus-visible:text-rose">
                  {skill.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
