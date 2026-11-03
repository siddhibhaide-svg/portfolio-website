import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import { SITE } from '@/lib/site';

export type SocialKey = 'github' | 'linkedin' | 'email';

interface SocialItem {
  key: SocialKey;
  label: string;
  href: string;
  icon: LucideIcon;
}

const SOCIALS: SocialItem[] = [
  { key: 'github', label: 'GitHub', href: SITE.github, icon: Github },
  { key: 'linkedin', label: 'LinkedIn', href: SITE.linkedin, icon: Linkedin },
  { key: 'email', label: 'Email', href: `mailto:${SITE.email}`, icon: Mail },
];

interface SocialLinksProps {
  variant: 'pill' | 'icon';
  keys?: SocialKey[];
}

export default function SocialLinks({ variant, keys }: SocialLinksProps) {
  const items = keys ? SOCIALS.filter((item) => keys.includes(item.key)) : SOCIALS;

  return (
    <ul className="flex flex-wrap gap-4">
      {items.map((social) => {
        const Icon = social.icon;
        const isExternal = social.key !== 'email';
        const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

        if (variant === 'icon') {
          return (
            <li key={social.key}>
              <a
                href={social.href}
                aria-label={social.label}
                {...linkProps}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:glow-brand"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            </li>
          );
        }

        return (
          <li key={social.key}>
            <a
              href={social.href}
              {...linkProps}
              className="group flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:glow-brand"
            >
              <Icon className="h-5 w-5 text-brand transition-transform duration-300 group-hover:scale-110" aria-hidden />
              {social.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
