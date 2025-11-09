import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

let routes = [
    {path: '/', element: <Home/>},
    {path: '/shop', element: <Shop/>},
    {path: '/about', element: <About/>},
]

export default routes