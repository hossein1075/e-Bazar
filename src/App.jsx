import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import SideBar from './components/sideBar/SideBar'
import { ProductsContext } from './Contexts/ProductsContext'
import Shop from './pages/Shop'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
function App() {
  const [allProducts, setAllProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isShowSide, setIsShowSide] = useState(false)
  const route = useRoutes(routes)


  useEffect(() => {
    let saveCart = localStorage.getItem("cart")
    if(saveCart) {
      setCart(JSON.parse(saveCart))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  

  const addToCart = (product)=> {
  setCart(prev => {
    let exist = prev.find(item => item.id === product.id)

    if(exist) {
     return prev.map(item => item.id === product.id ? {...item, count: item.count + 1} : item)
    } else {
      return [...prev, {...product, count : 1}]
    }
  })
    console.log('add shod', product);
   setIsShowSide(true) 
  }

  const removeCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  console.log("Removed item with id:", id)
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
          removeCart
        }}
      >
       {route}
        {isShowSide && (
         <div onClick={() => setIsShowSide(false)} className='fixed inset-0 z-[200] bg-zinc-800/20 h-full'></div> 
        )}
        <SideBar />
      </ProductsContext.Provider>
    </>
  )
}

export default App
