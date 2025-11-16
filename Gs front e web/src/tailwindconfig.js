/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.jsx",
    "./App.css",
    "./components/perfilcard.jsx",
    "./components/perfilmodal.jsx",
    "./data/perfis.json",
    "./src/pages/*.jsx",
    "./src/components/*.jsx"

    
  ],
  
  darkModearkMode: "class", 
  theme: {
    extend: {},
  },
  plugins: [],
}
