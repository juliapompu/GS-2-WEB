export default function Footer({ }) {
  return (
    <footer className="flex-grow top-0 z-10 bg-[#032354]  dark:bg-[#072d69]/60 shadow-lg backdrop-blur-sm p-4">
      <div className="flex flex-col md:flex-row md:items-start md:gap-12">
        {/* Coluna esquerda: Título e descrição */}
        <div className="flex-1">
          <h2 className="text-gray text-2xl font-mono font-normal text-gray-50">Humantech</h2>
          <p className="text-gray text-1xl font-mono font-bold text-gray-50">Presendao pelo seu futuro com tecnologias que priorizam as pessoas!</p>
        </div>

        {/* Coluna direita: Contatos */}
        <div className="flex-1 mt-6 md:flex-row ">
          <h3 className="text-gray text-2xl font-mono font-normal text-gray-50 mb-3">
            Contato:
          </h3>
          <p className="text-gray text-1xl font-mono  text-gray-50">Telefone: (11) 5555-5555</p>
          <p className="text-gray text-1xl font-mono  text-gray-50">Email: humantechContato@gmail.com</p>
          <p className="text-gray text-1xl font-mono  text-gray-50">Instagram: @human_tech_oficial</p>
          <p className="text-gray text-1xl font-mono  text-gray-50">Whatsapp: (11) 99999-9999</p>
          <p className="text-gray text-1xl font-mono  text-gray-50">Facebook: humantech_oficial</p>
          <p className="text-gray text-1xl font-mono  text-gray-50">LinkedIn: Huamntech</p>
        </div>
      </div>
    </footer>
  );
}
