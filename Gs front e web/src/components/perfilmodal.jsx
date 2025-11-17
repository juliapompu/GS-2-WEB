import React from 'react';

const PerfilModal = ({ perfil, onClose }) => {
  if (!perfil) return null;

  const handleAction = (action) => {
    alert(`${action} para ${perfil.nome} disparada!!`);
  };
  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Conteúdo do Modal */}
      <div 
        className="bg-gray-200 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300  
        dark:bg-[#0a182e]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          
          {/* Cabeçalho do Perfil no Modal */}
          <div className="flex items-start justify-between border-b pb-4 mb-4 border-indigo-500 dark:border-indigo-400">
            <div className="flex items-center space-x-4">
              <img
                src={perfil.foto}
                alt={`Foto de ${perfil.nome}`}
                className="w-20 h-20 rounded object-cover border-4 border-blue-700  dark:border-indigo-400"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800  dark:text-gray-50">{perfil.nome}</h3>
                <p className='text-xl text-gray-900 font-medium dark:text-gray-50'>{perfil.idade}</p>
                <p className="text-xl text-blue-700 font-medium dark:text-blue-400">{perfil.cargo}</p>
                <p className="text-md text-gray-600 dark:text-gray-50">{perfil.localizacao}</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-700 text-3xl font-light leading-none  dark:text-gray-50"
            >
              &times;
            </button>
          </div>

          {/* Corpo do Modal com Detalhes */}
          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">  
            {/* ou 2xl:grid-cols-3 gap-6 ou até 8 */}
            
            {/* Coluna Principal*/}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xl font-semibold text-gray-800  dark:text-gray-50">{perfil.resumo}</h4>

              {/* Experiências */}
              <section>
                <h5 className="text-lg font-bold text-indigo-600 mb-2  dark:text-blue-300">Experiência Profissional</h5>
                {perfil.experiencias.map((exp, index) => (
                  <div key={index} className="mb-3 border-l-2 border-indigo-300 pl-3 dark:border-blue-300">
                    <p className="text-md font-semibold text-gray-900  dark:text-gray-50">{exp.cargo} na {exp.empresa}</p>
                    <p className="text-sm text-gray-800  dark:text-gray-100">{exp.inicio} - {exp.fim}</p>
                    <p className="text-sm text-gray-800  dark:text-gray-100">{exp.descricao}</p> {/*mt-1*/}
                  </div>
                ))}
              </section>

              {/* Projetos */}
              <section>
                <h5 className="text-xl font-bold text-indigo-600 mb-2  dark:text-blue-300">Portfólio & Projetos</h5>
                {perfil.projetos.map((proj, index) => (
                  <div key={index} className="mb-3">
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-indigo-600 hover:text-indigo-800 
                    dark:text-blue-400 dark:hover:text-indigo-500 ">
                      {proj.titulo}
                    </a>
                    <p className="text-md text-gray-700 dark:text-gray-100">{proj.descricao}</p>
                  </div>
                ))}
              </section>
            </div>

            {/* Coluna Lateral: Skills, Formação, etc. */}
            <div className="space-y-6">
              
              {/* Habilidades Técnicas */}
              <section>
                <h5 className="text-lg font-bold text-indigo-600 dark:text-blue-300 mb-2">Hard Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {perfil.habilidadesTecnicas.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-[#6567db] text-gray-100 
                     text-xs rounded-full  dark:bg-blue-900 dark:text-blue-200">{skill}</span>
                  ))}
                </div>
              </section>

              {/* Soft Skills */}
              <section>
                <h5 className="text-lg font-bold text-indigo-600 mb-2 
                dark:text-blue-300">Soft Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {perfil.softSkills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-green-300 text-green-900 text-xs rounded-full  
                    dark:bg-green-900  dark:text-green-300 ">{skill}</span>
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
            </div>
          </div>
          <div className=' pb-4 mb-4 border-indigo-500'></div>
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
              className="px-6 py-2 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700  dark:bg-[#f2f2f2]/10 transition duration-150"
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