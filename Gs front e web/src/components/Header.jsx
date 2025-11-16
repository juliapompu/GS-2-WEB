import { Link } from "react-router-dom";
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
    document.documentElement.classList.toggle('dark', storedTheme === 'dakr');
  })
  return (
    <header className="top-0 z-10 bg-[#032354]  shadow-lg backdrop-blur-sm p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-600 text-indigo-400"></h1>
        <img
          className="w-48 h-50 mr-2"
          src="src/assets/Logo-HumanTech.png"
          alt="Logo da empresa HumanTech"
        />
        <h1 className="text-gray text-2xl font-mono font-normal text-gray-50">HumanTech</h1>
        <p className="text-gray text-lg font-mono font-normal text-gray-50">tecnologia que prioriza as pessoas</p>
        <nav>
          <Link to="/" className="p-3 text-xl  font-mono text-gray text-gray-50">Home</Link>
          <Link to="/Sobre" className="p-3 text-xl  font-mono text-gray text-gray-50">Sobre</Link>
        </nav>
        
        <button onClick={toggleTheme}
        className=" rounded-full p-2 shadow-md shadow-purple-400  texte-gray-600 
        houver:text-purple-400 transition-all ease-in-out cursor-pointer">{theme == 'light' ? <Moon/> : <Sun/>}
        </button>


      </div>
    </header>
  );
}
