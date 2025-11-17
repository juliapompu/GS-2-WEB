import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from 'react';

export default function Header({}) {
  // Inicializa o tema a partir do localStorage ou padrão 'light'
  const [theme, setTheme] = useState(() => {
    // Verifica se há tema salvo no localStorage
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        // Aplica o tema imediatamente
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return storedTheme;
      }
    }
    return 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Aplica ou remove a classe 'dark' no elemento html
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Salva no localStorage
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Garante que o tema está aplicado ao carregar
    const storedTheme = localStorage.getItem('theme') || 'light';
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [])
  
  return (
    <header className="top-0 z-10 bg-[#032354] dark:bg-[#072d69]/60 shadow-lg backdrop-blur-sm p-4 grid grid-cols-1">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-600 text-indigo-400"></h1>
        <img
          className="w-30 h-30 mr-2"
          src=".\src\assets\logo-humantech.png"
          alt="Logo da empresa HumanTech"
        />
        <h1 className="text-gray text-2xl font-mono font-normal text-gray-50">HumanTech</h1>
        <p className="text-gray text-2xl font-mono font-normal text-gray-50">Tecnologia que prioriza as pessoas</p>

        <button onClick={toggleTheme}
        className="rounded-full p-2 shadow-md shadow-indigo-400 text-gray-50 
        hover:text-indigo-400 transition-all ease-in-out cursor-pointer">{theme === 'dark' ? <Moon/> : <Sun/>}
        </button>
      </div>
    </header>
  );
}
