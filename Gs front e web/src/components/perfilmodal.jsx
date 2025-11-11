import React from 'react';

const PerfilModal = ({ perfil, onClose }) => {
  if (!perfil) return null;

  // Função dummy para botões de ação
  const handleAction = (action) => {
    alert(`${action} para ${perfil.nome} disparada! (Funcionalidade simulada)`);
  };

  // ... (Tailwind Modal JSX para o overlay e o conteúdo) ...

  return (
    // Overlay (background escuro)
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4"
      onClick={onClose} // Fecha o modal ao clicar fora
    >
      {/* Conteúdo do Modal */}
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no conteúdo
      >
        <div className="p-6 md:p-8">
          
          {/* Cabeçalho do Perfil no Modal */}
          <div className="flex items-start justify-between border-b pb-4 mb-4 border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <img
                src={perfil.foto}
                alt={`Foto de ${perfil.nome}`}
                className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{perfil.nome}</h3>
                <p className="text-lg text-indigo-600 dark:text-indigo-400">{perfil.cargo}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{perfil.localizacao}</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-3xl font-light leading-none"
            >
              &times;
            </button>
          </div>

          {/* Corpo do Modal com Detalhes (Usar Grid/Flex para responsividade) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Coluna Principal: Resumo, Experiências, Projetos */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{perfil.resumo}</h4>

              {/* Experiências */}
              <section>
                <h5 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">Experiência Profissional</h5>
                {perfil.experiencias.map((exp, index) => (
                  <div key={index} className="mb-3 border-l-2 border-indigo-300 dark:border-indigo-600 pl-3">
                    <p className="font-semibold text-gray-900 dark:text-white">{exp.cargo} na {exp.empresa}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.inicio} - {exp.fim}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{exp.descricao}</p>
                  </div>
                ))}
              </section>

              {/* Projetos */}
              <section>
                <h5 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">Portfólio & Projetos</h5>
                {perfil.projetos.map((proj, index) => (
                  <div key={index} className="mb-3">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-500 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-500">
                      {proj.titulo}
                    </a>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{proj.descricao}</p>
                  </div>
                ))}
              </section>
            </div>

            {/* Coluna Lateral: Skills, Formação, etc. */}
            <div className="space-y-6">
              
              {/* Habilidades Técnicas */}
              <section>
                <h5 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">Hard Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {perfil.habilidadesTecnicas.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">{skill}</span>
                  ))}
                </div>
              </section>

              {/* Soft Skills */}
              <section>
                <h5 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">Soft Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {perfil.softSkills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full">{skill}</span>
                  ))}
                </div>
              </section>

              {/* Formação Acadêmica */}
              <section>
                <h5 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">Formação</h5>
                {perfil.formacao.map((item, index) => (
                  <p key={index} className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                    <span className="font-medium">{item.curso}</span><br />
                    {item.instituicao} ({item.ano})
                  </p>
                ))}
              </section>

              {/* Idiomas e Certificações */}
              {/* Você deve adicionar as seções para 'certificacoes' e 'idiomas' aqui, seguindo o padrão. */}
            </div>
          </div>
          
          {/* BOTÕES DE AÇÃO */}
          <div className="flex justify-end space-x-4 mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => handleAction('Recomendar')}
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
            >
              Recomendar Profissional
            </button>
            <button
              onClick={() => handleAction('Mensagem')}
              className="px-6 py-2 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition duration-150"
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilModal;