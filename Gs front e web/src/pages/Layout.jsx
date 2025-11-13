import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import darkmode from '../hook/darkmode';

export default function Layout() {

 const [isDarkMode, toggleDarkMode] = darkmode();

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300"> 
        <Header 
        toogleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}/>
        <Outlet/>
    </div>

  )
}
