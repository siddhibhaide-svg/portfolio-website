export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  key: 'linkedin' | 'github' | 'email';
  label: string;
  href: string;
}

export const SITE = {
  name: 'Siddhi',
  socials: [
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/siddhi-bhaide-716432376?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    { key: 'github', label: 'GitHub', href: 'https://github.com/siddhibhaide-svg' },
    { key: 'email', label: 'Email', href: 'mailto:siddhibhaide@gmail.com' },
  ] satisfies SocialLink[],
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
