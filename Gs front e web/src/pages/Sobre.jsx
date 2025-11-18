export default function Sobre(){
    return(
        <main className="container mx-auto p-4 pt-8">
            <div className="max-w-4xl mx-auto rounded-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Sobre Nós</h1>
                <br></br>
                <div className="space-y-6 p-8 bg-gray-200 dark:bg-[#0a182e] rounded-xl text-gray-700 dark:text-gray-300">
                    <section>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Nossa Missão</h2>
                        <p className="text-lg font-normal text-gray-700 dark:text-gray-50">
                            A HumanTech é uma plataforma dedicada a conectar profissionais de tecnologia com oportunidades 
                            que valorizam não apenas as habilidades técnicas, mas também o potencial humano de cada indivíduo.
                        </p>
                    </section>
                </div>

                <br></br>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6 p-8 bg-gray-200 dark:bg-[#0a182e] rounded-xl text-gray-700 dark:text-gray-300">
                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3">O Que Fazemos</h2>
                            <p className="text-lg font-normal text-gray-700 dark:text-gray-50">
                                Oferecemos uma plataforma moderna onde profissionais podem criar seus perfis, destacar suas 
                                habilidades técnicas e compartilhar suas experiências. Nossa missão é facilitar conexões 
                                significativas no mundo da tecnologia.
                            </p>
                        </section>
                    </div>

                    <div className="space-y-6 p-8 bg-gray-200 dark:bg-[#0a182e] rounded-xl text-gray-700 dark:text-gray-300">
                        <section>
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Nossos Valores</h2>
                            <ul className="text-lg font-normal text-gray-700 dark:text-gray-50">
                                <li> - Transparência e autenticidade</li>
                                <li> - Valorização do potencial humano</li>
                                <li> - Inovação tecnológica responsável</li>
                                <li> - Diversidade e inclusão</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}