import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import formulario from "../routes/formulario";



export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/formulário",
        element:<Formulario/>
    },
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {index:true, element:<ConteudoPrincipal/>},
            {path:'sobre', element:<Sobre/>}
        ]
    },
    {
        path:"/Contato",
        element:<Contato/>
    },
    {
        path:"/Cursos",
        element:<Cursos/>
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