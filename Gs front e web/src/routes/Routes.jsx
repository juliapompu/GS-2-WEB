import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import App from "../App";
import Sobre from "../pages/Sobre";

export const router = createBrowserRouter([
   
    {
        path:'/',
        element:<Layout/>,
        children:[
            {index:true, element:<App/>},
            {path:'sobre', element:<Sobre/>}
        ]
    },
])