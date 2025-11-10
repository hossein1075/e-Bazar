import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";

let routes = [
    {path: '/', element: <Home/>},
    {path: '/shop', element: <Shop/>},
    {path: '/about', element: <About/>},
    {path: '/productDetail', element: <ProductDetail/>},
]

export default routes