import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  );
}
