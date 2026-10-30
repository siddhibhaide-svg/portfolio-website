import { SITE } from '@/lib/site';
import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="font-mono text-lg font-bold tracking-tight text-ink">
          {SITE.name}
          <span className="text-rose">.</span>
        </p>
        <SocialLinks variant="icon" />
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. Built with care.
        </p>
      </div>
    </footer>
  );
}
