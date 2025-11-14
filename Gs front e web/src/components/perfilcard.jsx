const PerfilCard = ({ perfil, onClick }) => {
  return (
    <div
      onClick={() => onClick(perfil)}
      className="bg-gray-700 rounded-lg shadow-xl p-6 transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <div className="flex space-x-4 ">
        <img
          src={perfil.foto || 'https://via.placeholder.com/64?text=' + perfil.nome.charAt(0)}
          alt={`Foto de ${perfil.nome}`}
          className="w-20 h-20 rounded object-cover border-4 border-blue-700"
        />
        <div>
          <h3 className="text-xl font-bold text-white">{perfil.nome}</h3>
          <p className='text-xl text-gray-50 font-medium'>{perfil.idade}</p>
          <p className="text-normal text-blue-400 font-medium">{perfil.cargo}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-white text-md mb-3 line-clamp-2">{perfil.resumo}</p>
        <div className="flex flex-wrap gap-2">
          {perfil.habilidadesTecnicas.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-900 text-blue-400 text-sm font-semibold rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <p className="text-right text-sm mt-4 text-white">
        {perfil.localizacao}
      </p>
    </div>
  );
};

export default PerfilCard;