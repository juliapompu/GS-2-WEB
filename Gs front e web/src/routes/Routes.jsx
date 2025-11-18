import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import App from "../App";
import Sobre from "../pages/Sobre";
import Relatos from "../pages/Relatos";
import Contatos from '../pages/Contatos';

export const router = createBrowserRouter([
   
    {
        path:'/',
        element:<Layout/>,
        children:[
            {index:true, element:<App/>},
            {path:'Sobre', element:<Sobre/>},
            {path:'Contatos', element:<Contatos/>},
            {path:'Relatos', element:<Relatos/>}
        ]
    }
])