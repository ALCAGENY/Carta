import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Inicio from "./React/App";
import { Flores } from "./React/Flores";

const router =createBrowserRouter([
    {
        path:'/',
        element: <Inicio/>
    },
            {
        path:'/Flores',
        element: <Flores />
    }
]);

function App(){


return(
    <>
    <RouterProvider router={router} />
    </>
);
}

export default App;