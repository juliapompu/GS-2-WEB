import "tailwindcss";

export default function Darkmode() {
  return (
    function darkmode(){
      const [theme, setTheme] = useState("light");
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dakr' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
      
    }
  )
}
