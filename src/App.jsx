import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import SideBar from './components/sideBar/SideBar'
import { ProductsContext } from './Contexts/ProductsContext'
import Shop from './pages/Shop'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
function App() {
  const [allProducts, setAllProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isShowSide, setIsShowSide] = useState(false)
  const route = useRoutes(routes)



  useEffect(() => {
    let saveCart = localStorage.getItem("cart")
    if (saveCart) {
      setCart(JSON.parse(saveCart))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])




  const addToCart = (product) => {

    let exist = cart.find(item => item.id === product.id)

    if (exist) {
      setCart(prev => prev.map(item => item.id === product.id ? { ...item, count: item.count + 1 } : item))
      toast.info("Product count increased!");
    } else {
      setCart(prev => [...prev, { ...product, count: 1 }])
      toast.success("Product added to cart!");
    }

    console.log('add shod', product);
    setIsShowSide(true)
  }

  const removeCart = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to remove this product from cart?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.isConfirmed) {
        setCart(prev => prev.filter(item => item.id !== id))
        console.log("Removed item with id:", id)
        Swal.fire({
          icon: 'success',
          title: 'Removed!',
          text: 'Product removed from cart.',
          timer: 1500,
          showConfirmButton: true,
          confirmButtonText: 'Close',
         
        })
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Cancelled',
          text: 'Product was not removed.',
          timer: 1500,
          showConfirmButton: true,
          confirmButtonText: 'Close',
         
        })
      }
    })
  }

  const increaseCount = (id) => {
    setCart(prev => (
      prev.map(item => (
        item.id === id ? { ...item, count: item.count + 1 } : item
      ))
    ))
  }
  const decreaseCount = (id) => {
    setCart(prev => (
      prev.map(item => (
        item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      ))
    ))
  }

  return (
    <>
      <ProductsContext.Provider
        value={{
          allProducts,
          setAllProducts,
          cart,
          setCart,
          isShowSide,
          setIsShowSide,
          addToCart,
          removeCart,
          increaseCount,
          decreaseCount
        }}
      >
        <>
          <ToastContainer position='bottom-left' autoClose={2000} closeOnClick={true} pauseOnFocusLoss={false}  toastClassName="custom-toast"/>
          {route}
          {isShowSide && (
            <div onClick={() => setIsShowSide(false)} className='fixed inset-0 z-[200] bg-zinc-800/20 h-full'></div>
          )}
          <SideBar />
        </>
      </ProductsContext.Provider>
    </>
  )
}

export default App
