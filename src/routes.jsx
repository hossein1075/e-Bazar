import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./pages/Shop";
import CheckOut from "./pages/checkOut";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import ProductPage from "./ProductPage/ProductPage";

let routes = [
    {path: '/', element: <Home/>},
    {path: '/product/:productID', element: <ProductPage/>},
    {path: '/shop', element: <Shop/>},
    {path: '/about', element: <About/>},
    {path: '/productDetail', element: <ProductDetail/>},
    {path: '/checkout', element: <CheckOut/>},
    {path: '/blogList', element: <BlogList/>},
    {path: '/blogDetail', element: <BlogDetail/>},
]

export default routes