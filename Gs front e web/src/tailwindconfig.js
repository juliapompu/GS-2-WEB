/** @type {import('tailwindcss').Config} */
export default {
  // Configura os arquivos que o Tailwind deve escanear para classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}