import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

/**
 * Hook to manage theme state and persistence.
 * Handles localStorage and system preference detection.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Check localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) return savedTheme;

    // 2. Check System Preference
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    // 3. Default to Dark
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
