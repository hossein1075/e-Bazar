import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import CheckOut from "./pages/checkOut";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
let routes = [
    {path: '/', element: <Home/>},
    {path: '/shop', element: <Shop/>},
    {path: '/about', element: <About/>},
    {path: '/productDetail', element: <ProductDetail/>},
    {path: '/checkout', element: <CheckOut/>},
    {path: '/blogList', element: <BlogList/>},
    {path: '/blogDetail', element: <BlogDetail/>},
]

export default routes