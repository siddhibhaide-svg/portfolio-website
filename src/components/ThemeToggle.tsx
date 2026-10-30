import { Moon, Sun } from 'lucide-react';
import type { Theme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-rose hover:text-rose hover:glow-rose active:scale-95"
    >
      <span key={theme} className="animate-fade-up">
        {isDark ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
      </span>
    </button>
  );
}
