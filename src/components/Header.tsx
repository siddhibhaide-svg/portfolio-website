import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const isSolid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        isSolid ? 'border-line bg-canvas/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={closeMenu}
          className="font-mono text-lg font-bold tracking-tight text-ink transition-opacity hover:opacity-80"
        >
          {SITE.name}
          <span className="text-rose">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-rose after:transition-all hover:text-ink hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {menuOpen && (
        <ul id="mobile-menu" className="animate-fade-up border-t border-line bg-canvas px-5 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-base text-ink transition-colors hover:bg-surface hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
