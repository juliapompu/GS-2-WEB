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

// path indica o caminho que o https via seguir "/sobre"
// element indica qual componente sera renderizado, mas a importação do componente é obrigatoria


// //NÃO ENTENDI:
// export const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<RootLayout/>,
//         children:[
//             {index:true, element:<ConteudoPrincipal/>},
//             {path:'sobre', element:<Sobre/>}
//         ]
//     }
// ]);