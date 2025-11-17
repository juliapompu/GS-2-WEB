import { useState, useMemo, useEffect} from 'react';
import PerfilCard from './components/perfilcard.jsx';
import PerfilModal from './components/perfilmodal.jsx'; 
import perfis from './data/perfis.json';
import "./components/Header.jsx";
import './App.css';


function App() {
  const [selectedPerfil, setSelectedPerfil] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('Todos');
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


  const uniqueAreas = useMemo(() => {
    const areas = perfis.map(p => p.area);
    return ['Todos', ...new Set(areas)];
  }, []);

  const filteredPerfisArray = useMemo(() => {
    let list = perfis;
    if (filterArea !== 'Todos') {
      list = list.filter(p => p.area === filterArea);
    }
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
    <> 
      <main className="container bg-gray-100 dark:bg-[#14243d]  mx-auto p-4 pt-8">
        <br></br>
        <h2 className="text-3xl font-semibold text-black-800 dark:text-gray-50  mb-6">
          Explore Profissionais
        </h2>

        {/* CONTROLES DE FILTRO E BUSCA */}
        <div className="flex flex-col sm:flex-row gap-2 mb-8 bg-white 0 p-4 rounded-lg shadow-md  dark:bg-[#0a182e]">
          {/* BUSCA */}
          <input
            type="text"
            placeholder="Buscar por nome, cargo, cidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-3 border border-gray-400  rounded-lg bg-blue-100 text-black-800 dark:bg-gray-400/70 dark:text-white"
          />

          {/* FILTRO POR ÁREA */}
          <select
            value={filterArea}
            onChange={(e) => setFilterArea(e.target.value)}
            className="p-3 border border-gray-700 rounded-lg bg-blue-900 text-white appearance-none  dark:bg-gray-300/80 dark:text-gray-900 "
          >
            {uniqueAreas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        {/* LISTAGEM DE CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6  ">
          {filteredPerfisArray.length > 0 ? (
            filteredPerfisArray.map((perfil) => (
              <PerfilCard key={perfil.id} perfil={perfil} onClick={setSelectedPerfil}/>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-black-100 dark:text-gray-50 ">
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
    </>
  );
}

export default App;


