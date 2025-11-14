import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useDarkMode from "../components/Darkmode";

export default function Layout() {

 const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-100 transition-colors duration-300"> 
        <Header 
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
