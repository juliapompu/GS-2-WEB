import {Link} from 'react-router-dom';
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from 'react';


export default function Header({}) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
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
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
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
          className="w-45 h-30 mr-2"
          src=".\src\assets\logo-humantech.png"
          alt="Logo da empresa HumanTech"
        />
        <h1 className="text-gray text-2xl font-mono font-normal text-gray-50">HumanTech</h1>
        <p className="text-gray text-2xl font-mono font-normal text-gray-50">Tecnologia que prioriza as pessoas</p>
        <nav>
          <Link to="/" className='p-3 text-xl  font-mono text-gray text-gray-50'>Home</Link>
          <Link to="/Sobre" className='p-3 text-xl  font-mono text-gray text-gray-50'>Sobre</Link>
          <Link to="/Contatos" className='p-3 text-xl  font-mono text-gray text-gray-50'>Contatos</Link>
          <Link to="/Relatos" className='p-3 text-xl  font-mono text-gray text-gray-50'>Relatos</Link>

        </nav>
        <button onClick={toggleTheme}
        className="rounded-full p-2 shadow-md shadow-indigo-400 text-gray-50 
        hover:text-indigo-400 transition-all ease-in-out cursor-pointer">{theme === 'light' ? <Moon/> : <Sun/>}
        </button>
      </div>
    </header>
  );
}
