import { Link } from 'react-router-dom';

export default function Relatos(){
    const relatos = [
        {
            id: 1,
            autor: "Maria Silva",
            cargo: "Desenvolvedora Full Stack",
            empresa: "TechCorp",
            conteudo: "A HumanTech me ajudou a encontrar uma oportunidade incrível que realmente valoriza o equilíbrio entre vida pessoal e profissional. A plataforma é intuitiva e o processo foi muito transparente.",
            data: "15 de Janeiro, 2024"
        },
        {
            id: 2,
            autor: "João Santos",
            cargo: "Engenheiro de Dados",
            empresa: "DataSolutions",
            conteudo: "Como profissional de tecnologia, sempre busquei uma plataforma que entendesse que habilidades técnicas são importantes, mas o NextPath é essencial. A HumanTech conseguiu isso perfeitamente.",
            data: "8 de Fevereiro, 2024"
        },
        {
            id: 3,
            autor: "Ana Costa",
            cargo: "Product Manager",
            empresa: "Inovatec",
            conteudo: "O processo de criação de perfil na HumanTech é muito completo. Pude destacar não apenas minhas habilidades técnicas, mas também minha experiência e valores. Recomendo a todos!",
            data: "22 de Fevereiro, 2024"
        },
        {
            id: 4,
            autor: "Dalmo Silva",
            cargo: "DevOps Engineer",
            empresa: "CloudTech",
            conteudo: "Encontrei minha posição atual através da HumanTech. O que mais me impressionou foi o compromisso da plataforma com a diversidade e inclusão. É um ambiente onde todos se sentem acolhidos.",
            data: "5 de Março, 2024"
        }
    ];

    return(
        <main className="container mx-auto p-4 pt-8">
            <div className="max-w-6xl mx-auto">
                <h1 className=" text-center text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                    Relatos de Profissionais
                </h1>
                
                <p className="text-center text-lg font-semibold text-gray-800 dark:text-gray-400 mb-12  mx-auto">
                    Conheça as experiências de profissionais que encontraram oportunidades através da HumanTech
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatos.map((relato) => (
                        <div 
                            key={relato.id}
                            className="bg-gray-200 dark:bg-[#0a182e] rounded-lg p-6"
                        >
                            <div className="mb-4">
                                <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
                                    "{relato.conteudo}"
                                </p>
                            </div>
                            
                            <div className="pt-4">
                                <p className="font-bold text-gray-900 dark:text-gray-100">
                                    {relato.autor}
                                </p>
                                <p className="text-md text-semibold text-gray-700 dark:text-gray-400">
                                    {relato.cargo} - {relato.empresa}
                                </p>
                                <p className="text-sm text-smibold text-gray-700 dark:text-gray-500 mt-2">
                                    {relato.data}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xl text-semibold text-gray-800 dark:text-gray-400 mb-4">
                        Quer compartilhar sua experiência?
                    </p>
                    <Link 
                        to="/Contatos" 
                        className="bg-[#032354] hover:bg-[#072d69]/90 text-white font-semibold py-3 px-6 rounded-lg duration-200"
                    >
                        Entre em Contato
                    </Link>
                </div>
            </div>
        </main>
    )
}