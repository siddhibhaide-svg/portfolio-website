import { ArrowUpRight, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import SocialLinks from '@/components/SocialLinks';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/site';

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build"
          accent="something together."
          description="Have an opportunity, a question, or an idea to discuss? Reach out and I will get back to you."
          align="center"
        />
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
        <Reveal className="h-full">
          <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:glow-brand">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand/40 text-brand">
              <Mail className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-ink">Email</h3>
            <p className="mt-2 break-all text-muted">{SITE.email}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand transition-colors hover:text-rose"
            >
              Send me an email
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </article>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:glow-brand">
            <h3 className="text-xl font-semibold text-ink">GitHub &amp; LinkedIn</h3>
            <p className="mt-2 text-muted">Follow my code and my professional journey.</p>
            <div className="mt-auto pt-8">
              <SocialLinks variant="pill" keys={['github', 'linkedin']} />
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={200} className="mx-auto mt-6 max-w-4xl">
        <ContactForm />
      </Reveal>
    </Section>
  );
}
