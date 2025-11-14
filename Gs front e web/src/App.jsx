import { useState, useMemo } from 'react';
import PerfilCard from './components/perfilcard.jsx';
import PerfilModal from './components/perfilmodal.jsx'; 
import perfis from './data/perfis.json';
import './App.css';


function App() {
  const [selectedPerfil, setSelectedPerfil] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('Todos');

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
      <main className="container bg-gray-300 mx-auto p-4 pt-8">
        <h2 className="text-2xl font-semibold text-black-800  mb-6">
          Explore Profissionais
        </h2>

        {/* CONTROLES DE FILTRO E BUSCA */}
        <div className="flex flex-col sm:flex-row gap-2 mb-8 bg-white p-4 rounded-lg shadow-md">
          {/* BUSCA */}
          <input
            type="text"
            placeholder="Buscar por nome, cargo, cidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-3 border border-gray-600 rounded-lg bg-blue-100 text-black-800"
          />

          {/* FILTRO POR ÁREA */}
          <select
            value={filterArea}
            onChange={(e) => setFilterArea(e.target.value)}
            className="p-3 border border-gray-600 rounded-lg bg-blue-900  houver:bg-gray-500 text-white appearance-none"
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
            <p className="col-span-full text-center text-xl text-black-100">
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