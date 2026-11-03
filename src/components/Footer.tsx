import { ArrowUp } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-lg font-bold tracking-tight text-ink">
            {SITE.name}
            <span className="text-rose">.</span>
          </p>
          <p className="mt-2 text-sm text-muted">AI/ML Student &amp; Web Developer</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sm text-muted transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks variant="icon" />
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-muted sm:flex-row sm:px-8">
          <p>&copy; {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:text-brand"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
