import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE, type SectionId } from '@/lib/site';
import { useActiveSection } from '@/hooks/useActiveSection';

const SECTION_IDS: readonly SectionId[] = NAV_LINKS.map((link) => link.id);

const LINK_BASE =
  'relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-rose after:transition-all';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

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
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={closeMenu}
          className="font-mono text-lg font-bold tracking-tight text-ink transition-opacity hover:opacity-80"
        >
          {SITE.name}
          <span className="text-rose">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex lg:gap-9">
          <ul className="flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`${LINK_BASE} ${
                      isActive
                        ? 'text-ink after:w-full'
                        : 'text-muted after:w-0 hover:text-ink hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="btn-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:glow-rose"
          >
            Let&apos;s Connect
          </a>
        </div>

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
        <div id="mobile-menu" className="animate-fade-up border-t border-line bg-canvas px-5 py-4 md:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  aria-current={activeId === link.id ? 'location' : undefined}
                  className={`block rounded-lg px-3 py-3 text-base transition-colors hover:bg-surface hover:text-brand ${
                    activeId === link.id ? 'text-brand' : 'text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn-gradient mt-3 block rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Let&apos;s Connect
          </a>
        </div>
      )}
    </header>
  );
}
