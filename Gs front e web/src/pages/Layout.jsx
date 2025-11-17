import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Layout() {



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#14243d] transition-colors duration-300"> 
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
