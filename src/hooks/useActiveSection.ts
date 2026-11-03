import { useEffect, useState } from 'react';

export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= marker) current = id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return activeId;
}
