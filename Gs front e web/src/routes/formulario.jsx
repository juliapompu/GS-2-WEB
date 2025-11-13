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
        path:"/Sobre",
        element:<Sobre/>
    }
])

// path indica o caminho que o https via seguir "/sobre"
// element indica qual componente sera renderizado, mas a importação do componente é obrigatoria