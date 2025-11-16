import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return [isDarkMode, () => setIsDarkMode(prev => !prev)];

   function toggleDarkMode() {
    const htmlEl = document.documentElement;
    if (htmlEl.classList.contains('dark')) {
      htmlEl.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      htmlEl.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
