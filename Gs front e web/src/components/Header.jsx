import "tailwindcss";
import { Moon, Sun } from "lucide-react";
import { useState,useEffect} from 'react';




export default function Header({}) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light' ;
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  })
  
  return (
    <header className="top-0 z-10 bg-[#032354] dark:bg-[#072d69]/60 shadow-lg backdrop-blur-sm p-4 grid grid-cols-1">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-600 text-indigo-400"></h1>
        <img
          className="w-48 h-50 mr-2"
          src=".\src\assets\logo-humantech.png"
          alt="Logo da empresa HumanTech"
        />
        <h1 className="text-gray text-2xl font-mono font-normal text-gray-50">HumanTech</h1>
        <p className="text-gray text-2xl font-mono font-normal text-gray-50">Tecnologia que prioriza as pessoas</p>

        <button onClick={toggleTheme}
        className=" rounded-full p-2 shadow-md shadow-indigo-400  text-gray-50 
        houver:text-indigo-400 transition-all ease-in-out cursor-pointer">{theme === 'dark' ? <Moon/> : <Sun/>}
        </button>
      </div>
    </header>
  );
}
