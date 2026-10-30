import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import { SITE, type SocialLink } from '@/lib/site';

const ICONS: Record<SocialLink['key'], LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  email: Mail,
};

interface SocialLinksProps {
  variant: 'pill' | 'icon';
}

export default function SocialLinks({ variant }: SocialLinksProps) {
  return (
    <ul className="flex flex-wrap gap-4">
      {SITE.socials.map((social) => {
        const Icon = ICONS[social.key];
        const isEmail = social.key === 'email';

        if (variant === 'icon') {
          return (
            <li key={social.key}>
              <a
                href={social.href}
                aria-label={social.label}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
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
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
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
