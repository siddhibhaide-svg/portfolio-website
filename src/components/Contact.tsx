import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import SocialLinks from '@/components/SocialLinks';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Contact"
            title="Let's build something together"
            description="Have an opportunity, a question, or an idea to discuss? Send me a message and I will get back to you as soon as I can."
          />
          <div className="mt-10">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">Find me online</p>
            <SocialLinks variant="pill" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
