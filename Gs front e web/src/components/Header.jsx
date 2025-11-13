import { Link } from "react-router-dom";

export default function Header({ toggleDarkMode, isDarkMode }) {
  const SunIcon = () => (
    <svg
      className="w-6 h-6 text-yellow-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
      ></path>
    </svg>
  );
  const MoonIcon = () => (
    <svg
      className="w-6 h-6 text-gray-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      ></path>
    </svg>
  );
  return (
    <header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400"></h1>
        <img
          className="w-48 h-58"
          src="src/assets/Logo-HumanTech.png"
          alt="Logo da empresa HumanTech"
        />
        <h1 className="text-gray text-2xl font-mono font-normal text-gray-50">HumanTech</h1>
        <p className="text-gray text-lg font-mono font-normal text-gray-50">tecnologia que prioriza as pessoas</p>
        <nav>
          <Link to="/" className="p-3 text-lg  font-mono text-gray text-gray-50">Home</Link>
          <Link to="/Sobre" className="p-3 text-lg  font-mono text-gray text-gray-50">Sobre</Link>
          <Link to="/formulario" className="p-3 text-lg  font-mono text-gray text-gray-50">Formulario</Link>
          <Link to="/Contato" className="p-3 text-lg  font-mono text-gray text-gray-50">Contato</Link>
          <Link to="/Cursos" className="p-3 text-lg font-mono text-gray text-gray-50">Cursos</Link>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-label="Alternar Dark Mode"
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
}
