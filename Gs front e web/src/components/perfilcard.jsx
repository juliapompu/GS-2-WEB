const PerfilCard = ({ perfil, onClick }) => {
  return (
    <div
      onClick={() => onClick(perfil)}
      className="bg-[#f2f2f2] dark:bg-[#182c4dff] dark:border-gray-900 border border-gray-200 rounded-lg shadow-xl p-6 transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer "
     >
      <div className="flex space-x-4  ">
        <img
          src={perfil.foto || 'https://via.placeholder.com/64?text=' + perfil.nome.charAt(0)}
          alt={`Foto de ${perfil.nome}`}
          className="w-20 h-20 rounded object-cover border-4 border-blue-700"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{perfil.nome}</h3>
          <p className='text-xl text-gray-900 font-medium dark:text-gray-100'>{perfil.idade}</p>
          <p className="text-normal text-blue-700 font-medium dark:text-blue-300">{perfil.cargo}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-900 text-md mb-3 line-clamp-2  dark:text-gray-50">{perfil.resumo}</p>
        <div className="flex flex-wrap gap-4">
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
      <p className="text-right text-sm mt-4 text-gray-900">
        {perfil.localizacao}
      </p>
    </div>
  );
};

export default PerfilCard;