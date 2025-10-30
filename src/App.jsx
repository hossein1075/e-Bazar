import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import SideBar from './components/sideBar/SideBar'
import { ProductsContext } from './Contexts/ProductsContext'
function App() {
  const [allProducts, setAllProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isShowSide, setIsShowSide] = useState(false)

  const addToCart = (product)=> {
    setCart(prev => [...prev, product])
    setIsShowSide(true)
   console.log('Added to cart:', product)
    
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
          addToCart
        }}
      >
        <Home />
        
        <SideBar />
        {/* <div className='fixed inset-0 z-[200] bg-zinc-800/20 h-full'></div> */}
      </ProductsContext.Provider>
    </>
  )
}

export default App
