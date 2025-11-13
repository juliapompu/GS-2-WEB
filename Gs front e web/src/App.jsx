import React, { useState, useEffect, useMemo } from 'react';
import darkmode from './hook/darkmode';
import PerfilCard from './components/perfilcard.jsx';
import PerfilModal from './components/perfilmodal.jsx'; 
import perfis from './data/perfis.json';
import './App.css';
import {Link} from 'react-router-dom';





// Ícones simples para o Dark Mode
const SunIcon = () => (
  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"></path></svg>
);
const MoonIcon = () => (
  <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
);


function App() {
  const [isDarkMode, toggleDarkMode] = darkmode();
  const [selectedPerfil, setSelectedPerfil] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('Todos');

  // Obtém todas as áreas únicas para o filtro
  const uniqueAreas = useMemo(() => {
    const areas = perfis.map(p => p.area);
    return ['Todos', ...new Set(areas)];
  }, []);

  // Lógica de Busca e Filtro
  const filteredPerfisArray = useMemo(() => {
    let list = perfis;

    // Filtro por Área
    if (filterArea !== 'Todos') {
      list = list.filter(p => p.area === filterArea);
    }

    // Busca por Nome, Cargo, Cidade ou Habilidade Técnica
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      list = list.filter(p =>
        p.nome.toLowerCase().includes(lowerCaseSearch) ||
        p.cargo.toLowerCase().includes(lowerCaseSearch) ||
        p.localizacao.toLowerCase().includes(lowerCaseSearch) ||
        p.habilidadesTecnicas.some(skill => skill.toLowerCase().includes(lowerCaseSearch))
      );
    }
    return list;
  }, [filterArea, searchTerm]);

  return (
    // Container principal
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300"> 
      {/* HEADER com Título e Toggle Dark Mode */}
      <header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400"></h1>
      {/* <header className="header">
        <div className="container"> */}
          <img className='logo' src="./assets/logo-humantech.png" alt='Logo da empresa HumanTech'/>
          <h1>
            HumanTech
          </h1>
          <p>tecnologia que prioriza as pessoas</p>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/Sobre'>Sobre</Link>
            <Link to='/formulario'>Formulario</Link>
            <Link to='/Contato'>Contato</Link>
            <Link to='/Cursos'>Cursos</Link>
          
          </nav>
          
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="Alternar Dark Mode">
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </header>

      <main className="container mx-auto p-4 pt-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Explore Profissionais
        </h2>

        {/* CONTROLES DE FILTRO E BUSCA */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          {/* BUSCA */}
          <input
            type="text"
            placeholder="Buscar por nome, cargo, cidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
          />

          {/* FILTRO POR ÁREA */}
          <select
            value={filterArea}
            onChange={(e) => setFilterArea(e.target.value)}
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white appearance-none"
          >
            {uniqueAreas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        {/* LISTAGEM DE CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPerfisArray.length > 0 ? (
            filteredPerfisArray.map((perfil) => (
              <PerfilCard key={perfil.id} perfil={perfil} onClick={setSelectedPerfil}/>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-500 dark:text-gray-400">
              Nenhum profissional encontrado.
            </p>
          )}
        </section>
      </main>

      {/* MODAL */}
      {selectedPerfil && (
        <PerfilModal 
          perfil={selectedPerfil} 
          onClose={() => setSelectedPerfil(null)} 
        />
      )}
    </div>
  );
}

export default App;