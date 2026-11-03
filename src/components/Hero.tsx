import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import TypingText from '@/components/TypingText';
import ProfileCard from '@/components/ProfileCard';
import { SITE } from '@/lib/site';

const INTRO_TEXT = 'AI/ML Student & Web Developer';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="min-w-0 animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-rose" aria-hidden />
            Open to opportunities
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">Siddhi</span>
          </h1>

          <p className="mt-6 min-h-[2rem] whitespace-nowrap font-mono text-base text-brand sm:text-xl">
            <TypingText text={INTRO_TEXT} />
          </p>

          <p className="mt-6 max-w-xl text-muted">
            I build clean, thoughtful web experiences and pick up new tools quickly, turning fundamentals
            into polished, real-world work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-gradient group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:glow-rose"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={SITE.resumePath}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-brand hover:text-brand hover:glow-brand"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
              Download Resume
            </a>
          </div>
        </div>

        <ProfileCard />
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-muted transition-colors hover:text-brand"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
