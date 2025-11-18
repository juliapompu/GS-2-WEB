

import { useState } from 'react';

export default function Contatos(){
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        setFormData({
            nome: '',
            email: '',
            assunto: '',
            mensagem: ''
        });
    };

    return(
        <main className="container mx-auto p-4 pt-8">
            <div className="bg-gray-200 dark:bg-[#0a182e] rounded-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Entre em Contato</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="nome" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-300/80 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder="Nome"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-300/80 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="assunto" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Assunto
                        </label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-300/80 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder="Assunto da mensagem"
                        />
                    </div>

                    <div>
                        <label htmlFor="mensagem" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Mensagem
                        </label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full p-3 rounded-lg bg-gray-300/80 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder="Sua mensagem aqui..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="text-center bg-[#032354] hover:bg-[#072d69]/90 text-gray-50 font-semibold py-3 px-6 rounded-lg"
                    >
                        Enviar Mensagem
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Outras Formas de Contato</h2>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><strong>E-mail:</strong>humantechContato@gmail.com</p>
                        <p><strong>Telefone:</strong> (11) 5555-5555</p>
                        <p><strong>Horário de Atendimento:</strong> Segunda a Sexta, 9h às 18h</p>
                    </div>
                </div>
            </div>
        </main>
    )
}