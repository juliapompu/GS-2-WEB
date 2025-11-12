import React from 'react';
import App from '../App';

const perfilcard = ({ perfil, onClick }) => {
  return (
    // Usa a classe 'dark:' para estilos específicos do Dark Mode
    <div
      onClick={() => onClick(perfil)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center space-x-4">
        {/* Foto do perfil */}
        <img
          src={perfil.foto}
          alt={`Foto de ${perfil.nome}`}
          className="w-16 h-16 rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400"
        />
        <div>
          {/* Nome e Cargo */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{perfil.nome}</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{perfil.cargo}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{perfil.resumo}</p>
        
        {/* Principais Skills */}
        <div className="flex flex-wrap gap-2">
          {perfil.habilidadesTecnicas.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <p className="text-right text-xs mt-4 text-gray-500 dark:text-gray-400">
        {perfil.localizacao}
      </p>
    </div>
  );
};

export default perfilcard;