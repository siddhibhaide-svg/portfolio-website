import { LayoutDashboard, ShoppingBag } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard, { type Project } from '@/components/ProjectCard';

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Productivity Dashboard',
    title: 'EduPulse: Study Companion & Tracking Hub',
    description:
      'A study dashboard with a Pomodoro timer, exam countdowns, streak tracker, revision and topic trackers, and study-time charts.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://edu-pulse-gamma.vercel.app',
    githubUrl: 'https://github.com/siddhibhaide-svg/EduPulse',
    icon: LayoutDashboard,
  },
  {
    number: '02',
    category: 'Web Application',
    title: 'FoodFusion: Food Ordering Website',
    description: 'A food ordering website with customer ordering and an admin dashboard.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    liveUrl: 'https://siddhibhaide-svg.github.io/foodfusion/',
    githubUrl: 'https://github.com/siddhibhaide-svg',
    icon: ShoppingBag,
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that bring"
          accent="ideas to life."
          description="Two projects built from idea to a live, working product."
        />
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.number} delay={index * 150} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
