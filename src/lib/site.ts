export const SITE = {
  name: 'Siddhi',
  fullName: 'Siddhi Bhaide',
  email: 'siddhibhaide@gmail.com',
  github: 'https://github.com/siddhibhaide-svg',
  linkedin:
    'https://www.linkedin.com/in/siddhi-bhaide-716432376?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

export const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
] as const;

export type SectionId = (typeof NAV_LINKS)[number]['id'];
