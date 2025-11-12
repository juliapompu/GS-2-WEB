/** @type {import('tailwindcss').Config} */
export default {
  // Configura os arquivos que o Tailwind deve escanear para classes
  content: [
    "./index.html",
    "./App.jsx",
    "./App.css",
    "./components/perfilcard.jsx",
    "./components/perfilmodal.jsx",
    "./data/perfis.json",
    
  ],
  
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
